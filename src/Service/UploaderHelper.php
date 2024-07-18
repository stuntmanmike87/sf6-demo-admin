<?php

declare(strict_types=1);

namespace App\Service;

use Cocur\Slugify\Slugify;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\File\UploadedFile;

final readonly class UploaderHelper
{
    /**
     * UploaderHelper constructor.
     */
    // ** @param array<mixed> $cdn */
    public function __construct(
        private string $projectDir,
        private Filesystem $filesystem,
        private string $baseUrl
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

    private function generateFileName(string $file, ?string $desiredFileName = null, bool $nameAddUniqid = false): string
    {
        if (null === $desiredFileName || '' === $desiredFileName) {
            $originalFilename = pathinfo($file, PATHINFO_FILENAME);
            $desiredFileName = $originalFilename;
        }

        if ($nameAddUniqid) {
            $desiredFileName = $desiredFileName.'-'.uniqid();
        }

        $slugify = new Slugify();

        return $slugify->slugify($desiredFileName).'.'.pathinfo($file, PATHINFO_EXTENSION);
    }
}
