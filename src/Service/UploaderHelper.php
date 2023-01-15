<?php
namespace App\Service;

use Aws\Result;
use Aws\S3\S3Client;
use Gedmo\Sluggable\Util\Urlizer;
use Gumlet\ImageResize;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Contracts\Translation\TranslatorInterface;

class UploaderHelper
{
    /**
     * UploaderHelper constructor.
     */
    public function __construct(
        private readonly string $uploadsMediaPath,
        private readonly string $projectDir,
        private readonly Filesystem $filesystem,
        private readonly string $baseUrl,
        private readonly array $cdn,
        private readonly TranslatorInterface $translator)
    {}

    /**
     * Make upload any file and set in uploads folder.
     *
     * @param UploadedFile $uploadedFile
     * @param array|null $options
     * @return array
     */
    public function uploadMedia(UploadedFile $uploadedFile, ?array $options = []): array
    {
        $addParentPath = array_key_exists('addParentPath', $options) ? $options['addParentPath']: '/';
        $desiredFileName = array_key_exists('desiredFileName', $options) ? $options['desiredFileName']: '';
        $uniqueName = array_key_exists('uniqueName', $options);

        $newFilename = $this->generateFileName($uploadedFile->getClientOriginalName(), $desiredFileName, $uniqueName);

        $tempDestination = $this->projectDir . '/public/' . $addParentPath;
        $file = $this->saveFile($uploadedFile, $tempDestination, $newFilename);

        return [
            'path' => $file['path'],
            'url' => $this->baseUrl . '/' . $addParentPath . $newFilename,
        ];
    }

    /**
     * Delete file.
     *
     * @param string $path
     * @param bool $isPublic
     * @return void
     */
    public function deleteFile(string $path, bool $isPublic = true)
    {
        if ($isPublic) {
            $path = $this->projectDir . '/public/' .$path;
        }

        try {
            $this->filesystem->remove($path);
        } catch (IOExceptionInterface $exception) {
            echo "An error occurred while creating your directory at ".$exception->getPath();
        }
    }

    /**
     * @param UploadedFile $uploadedFile
     * @param string $directory
     * @param string $filename
     * @return string[]
     */
    private function saveFile(UploadedFile $uploadedFile, string $directory, string $filename): array
    {
        $uploadedFile->move(
            $directory,
            $filename
        );

        return [
            'path' => $directory . '/' .  $filename
        ];
    }

    /**
     * Upload a file to CDN.
     *
     * @param UploadedFile $uploadedFile
     * @param array|null $options
     * @return array
     * @throws \Gumlet\ImageResizeException
     */
    public function uploadImageToCDN(UploadedFile $uploadedFile, ?array $options = []): array
    {
        $heightReducing = array_key_exists('heightReducing', $options) ? $options['heightReducing']: 800;
        $addParentPath = array_key_exists('addParentPath', $options) ? $options['addParentPath']: '';
        $desiredFileName = array_key_exists('desiredFileName', $options) ? $options['desiredFileName']: '';
        $uniqueName = array_key_exists('uniqueName', $options);

        $newFilename = $this->generateFileName($uploadedFile->getClientOriginalName(), $desiredFileName, $uniqueName);

        // Save file temporarily.
        $mediaPath = $this->uploadsMediaPath . '/tmp';
        $tempDestination = $this->projectDir . '/public/' . $mediaPath;
        $file = $this->saveFile($uploadedFile, $tempDestination, $newFilename);

        $tempFile = $file['path'];

        // Reducing the height from the image.
        $image = new ImageResize($tempFile);
        $reducing = $image->getSourceHeight() > $heightReducing;

        if ($reducing) {
            $image->resizeToHeight($heightReducing);
            $image->save($tempFile, IMAGETYPE_JPEG);
        }

        $url = '';
        $path = $addParentPath . '/' . date('Y') . '/' . date('m');
        $file = $path . '/' . $newFilename;

        try {
            $client = $this->getClientCDN();

            $result = $client->putObject([
                'Bucket' => $this->cdn['bucket'],
                'Key'    => $file,
                'SourceFile' => $tempFile,
                'ACL' => 'public-read' // or 'private'
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
            'message' => $message
        ];
    }

    private function getClientCDN(): S3Client
    {
        return new S3Client([
            'version' => 'latest',
            'region'  => 'us-east-1',
            'endpoint' => $this->cdn['endpoint'],
            'credentials' => [
                'key'    => $this->cdn['key'],
                'secret' => $this->cdn['secret'],
            ],
        ]);
    }

    /**
     * @param string $file
     * @param string|null $desiredFileName
     * @param bool $nameAddUniqid
     * @return string
     */
    private function generateFileName(string $file, ?string $desiredFileName = null, bool $nameAddUniqid = false): string
    {
        if (empty($desiredFileName)) {
            $originalFilename = pathinfo($file, PATHINFO_FILENAME);
            $desiredFileName = $originalFilename;
        }

        if ($nameAddUniqid) {
            $desiredFileName = $desiredFileName. '-' .uniqid();
        }

        return Urlizer::urlize($desiredFileName).'.'. pathinfo($file, PATHINFO_EXTENSION);
    }

    /**
     * @param Result $result
     * @param string $file
     * @return string
     */
    private function getUrlFromCDN(Result $result, string $file): string
    {
        if (array_key_exists('domain', $this->cdn) && '' != $this->cdn['domain']) {
            return $this->cdn['domain'] . '/' . $file;
        }

        return $result->get('ObjectURL');
    }

    /**
     * @param string $originalFile
     * @param array|null $options
     * @return string|null
     * @throws \Gumlet\ImageResizeException
     */
    public function moveToCDN(string $originalFile, ?array $options = []): ?string
    {
        $heightReducing = array_key_exists('heightReducing', $options) ? $options['heightReducing']: 800;
        $addParentPath = array_key_exists('addParentPath', $options) ? $options['addParentPath']: '';
        $desiredFileName = array_key_exists('desiredFileName', $options) ? $options['desiredFileName']: '';
        $uniqueName = array_key_exists('uniqueName', $options);

        $newFilename = $this->generateFileName($originalFile, $desiredFileName, $uniqueName);

        // Reducing the height from the image.
        $image = new ImageResize($originalFile);
        $reducing = $image->getSourceHeight() > $heightReducing;

        if ($reducing) {
            $image->resizeToHeight($heightReducing);
            $image->save($originalFile, IMAGETYPE_JPEG);
        }

        $url = '';
        $path = $addParentPath . '/' . date('Y') . '/' . date('m');
        $file = $path . '/' . $newFilename;

        try {
            $client = $this->getClientCDN();

            $result = $client->putObject([
                'Bucket' => $this->cdn['bucket'],
                'Key'    => $file,
                'SourceFile' => $originalFile,
                'ACL' => 'public-read' // or 'private'
            ]);

            // Remove the temporarily file.
            unlink($originalFile);

            $url = $this->getUrlFromCDN($result, $file);
        } catch (\Exception) {
            throw new FileException($this->translator->trans('app.error.upload_error'));
        }

        return $url;
    }

    /**
     * Remove file from CDN.
     *
     * @param string $file
     * @return void
     */
    public function removeFromCDN(string $file): void
    {
        try {
            $client = $this->getClientCDN();
            $client->deleteObject([
                'Bucket' => $this->cdn['bucket'],
                'Key'    => str_replace($this->cdn['domain'] . '/', '', $file),
            ]);
        } catch (\Exception) { }
    }
}
