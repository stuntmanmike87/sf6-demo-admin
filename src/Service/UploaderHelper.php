<?php

declare(strict_types=1);

namespace App\Service;

use Aws\Result;
use Aws\S3\S3Client;
use Gedmo\Sluggable\Util\Urlizer;
use Gumlet\ImageResize;
use Gumlet\ImageResizeException;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Contracts\Translation\TranslatorInterface;

final readonly class UploaderHelper
{
    /**
     * UploaderHelper constructor.
     */
    /** @param array<mixed> $cdn */
    public function __construct(
        private string $uploadsMediaPath,
        private string $projectDir,
        private Filesystem $filesystem,
        private string $baseUrl,
        private array $cdn,
        private TranslatorInterface $translator
    ) {
    }

    /**
     * Make upload any file and set in uploads folder.
     *
     * @param array<mixed>|null $options
     *
     * @return array<mixed>
     */
    public function uploadMedia(UploadedFile $uploadedFile, ?array $options = []): array
    {
        /** @var array<mixed> $options */
        $addParentPath = array_key_exists('addParentPath', $options) ? $options['addParentPath'] : '/';
        $desiredFileName = array_key_exists('desiredFileName', $options) ? $options['desiredFileName'] : '';
        $uniqueName = array_key_exists('uniqueName', $options);

        $newFilename = $this->generateFileName($uploadedFile->getClientOriginalName(), $desiredFileName, $uniqueName);

        $tempDestination = $this->projectDir.'/public/'.$addParentPath;
        $file = $this->saveFile($uploadedFile, $tempDestination, $newFilename);

        return [
            'path' => $file['path'],
            'url' => $this->baseUrl.'/'.$addParentPath.$newFilename,
        ];
    }

    /**
     * Delete file.
     *
     * @return void
     */
    public function deleteFile(string $path, bool $isPublic = true)
    {
        if ($isPublic) {
            $path = $this->projectDir.'/public/'.$path;
        }

        try {
            $this->filesystem->remove($path);
        } catch (IOExceptionInterface $ioException) {
            echo 'An error occurred while creating your directory at '.$ioException->getPath();
        }
    }

    /**
     * @return string[]
     */
    private function saveFile(UploadedFile $uploadedFile, string $directory, string $filename): array
    {
        $uploadedFile->move(
            $directory,
            $filename
        );

        return [
            'path' => $directory.'/'.$filename,
        ];
    }

    /**
     * Upload a file to CDN.
     *
     * @param array<mixed>|null $options
     *
     * @return array<mixed>
     *
     * @throws ImageResizeException
     */
    public function uploadImageToCDN(UploadedFile $uploadedFile, ?array $options = []): array
    {
        /** @var array<mixed> $options */
        $heightReducing = array_key_exists('heightReducing', $options) ? $options['heightReducing'] : 800;
        $addParentPath = array_key_exists('addParentPath', $options) ? $options['addParentPath'] : '';
        $desiredFileName = array_key_exists('desiredFileName', $options) ? $options['desiredFileName'] : '';
        $uniqueName = array_key_exists('uniqueName', $options);

        $newFilename = $this->generateFileName($uploadedFile->getClientOriginalName(), $desiredFileName, $uniqueName);

        // Save file temporarily.
        $mediaPath = $this->uploadsMediaPath.'/tmp';
        $tempDestination = $this->projectDir.'/public/'.$mediaPath;
        $file = $this->saveFile($uploadedFile, $tempDestination, $newFilename);

        $tempFile = $file['path'];

        // Reducing the height from the image.
        $image = new ImageResize($tempFile);
        $reducing = $image->getSourceHeight() > $heightReducing;

        if ($reducing) {
            $image->resizeToHeight($heightReducing);
            $image->save($tempFile, (string) IMAGETYPE_JPEG);
        }

        $url = '';
        $path = $addParentPath.'/'.date('Y').'/'.date('m');
        $file = $path.'/'.$newFilename;

        try {
            $client = $this->getClientCDN();

            $result = $client->putObject([
                'Bucket' => $this->cdn['bucket'],
                'Key' => $file,
                'SourceFile' => $tempFile,
                'ACL' => 'public-read', // or 'private'
            ]);

            $message = $this->translator->trans('app.success.upload_was_successfully');

            $url = $this->getUrlFromCDN($result, $file);

            // Remove the temporarily file.
            unlink($tempFile);
        } catch (\Exception) {
            $message = $this->translator->trans('app.error.upload_error');
        }

        return [
            'url' => $url,
            'name' => $newFilename,
            'message' => $message,
        ];
    }

    private function getClientCDN(): S3Client
    {
        return new S3Client([
            'version' => 'latest',
            'region' => 'us-east-1',
            'endpoint' => $this->cdn['endpoint'],
            'credentials' => [
                'key' => $this->cdn['key'],
                'secret' => $this->cdn['secret'],
            ],
        ]);
    }

    private function generateFileName(string $file, ?string $desiredFileName = null, bool $nameAddUniqid = false): string
    {
        if (null === $desiredFileName || '' === $desiredFileName) {
            $originalFilename = pathinfo($file, PATHINFO_FILENAME);
            $desiredFileName = $originalFilename;
        }

        if ($nameAddUniqid) {
            $desiredFileName = $desiredFileName.'-'.uniqid();
        }

        return Urlizer::urlize($desiredFileName).'.'.pathinfo($file, PATHINFO_EXTENSION);
    }

    /**
     * @param Result<mixed> $result
     */
    private function getUrlFromCDN(Result $result, string $file): mixed// ?mixed//string
    {
        if (array_key_exists('domain', $this->cdn) && '' != $this->cdn['domain']) {
            return $this->cdn['domain'].'/'.$file;
        }

        return $result->get('ObjectURL');
    }

    /**
     * @param array<mixed>|null $options
     *
     * @throws ImageResizeException
     */
    public function moveToCDN(string $originalFile, ?array $options = []): ?string
    {
        /** @var array<mixed> $options */
        $heightReducing = array_key_exists('heightReducing', $options) ? $options['heightReducing'] : 800;
        $addParentPath = array_key_exists('addParentPath', $options) ? $options['addParentPath'] : '';
        $desiredFileName = array_key_exists('desiredFileName', $options) ? $options['desiredFileName'] : '';
        $uniqueName = array_key_exists('uniqueName', $options);

        $newFilename = $this->generateFileName($originalFile, $desiredFileName, $uniqueName);

        // Reducing the height from the image.
        $image = new ImageResize($originalFile);
        $reducing = $image->getSourceHeight() > $heightReducing;

        if ($reducing) {
            $image->resizeToHeight($heightReducing);
            $image->save($originalFile, (string) IMAGETYPE_JPEG);
        }

        $url = '';
        $path = $addParentPath.'/'.date('Y').'/'.date('m');
        $file = $path.'/'.$newFilename;

        try {
            $client = $this->getClientCDN();

            $result = $client->putObject([
                'Bucket' => $this->cdn['bucket'],
                'Key' => $file,
                'SourceFile' => $originalFile,
                'ACL' => 'public-read', // or 'private'
            ]);

            // Remove the temporarily file.
            unlink($originalFile);

            /** @var ?string $url */
            $url = $this->getUrlFromCDN($result, $file);
        } catch (\Exception) {
            throw new FileException($this->translator->trans('app.error.upload_error'));
        }

        return $url;
    }

    /**
     * Remove file from CDN.
     */
    public function removeFromCDN(string $file): void
    {
        try {
            $client = $this->getClientCDN();
            $client->deleteObject([
                'Bucket' => $this->cdn['bucket'],
                'Key' => str_replace($this->cdn['domain'].'/', '', $file),
            ]);
        } catch (\Exception) {
        }
    }
}
