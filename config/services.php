<?php

declare(strict_types=1);

use App\Form\Helper\LocationHelper;
use App\Form\SettingsProfileType;
use App\Form\SettingsSecurityType;
use App\Form\UserAddType;
use App\Form\UserEditType;
use App\Form\UserType;
use Sulu\Twig\Extensions\ComponentExtension;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use function Symfony\Component\DependencyInjection\Loader\Configurator\service;

return static function (ContainerConfigurator $containerConfigurator): void {
    $parameters = $containerConfigurator->parameters();

    $parameters->set('locale', 'en');

    $parameters->set('app_locales', 'en|de|pt');

    $services = $containerConfigurator->services();

    $services->defaults()
        ->autowire()
        ->autoconfigure()
        ->bind('string $baseUrl', '%env(BASE_URL)%')
        ->bind('array $cdn', [
        'bucket' => '%env(DOS_BUCKET)%',
        'endpoint' => '%env(DOS_ENDPOINT)%',
        'key' => '%env(DOS_CREDENTIAL_KEY)%',
        'secret' => '%env(DOS_CREDENTIAL_SECRET)%',
        'domain' => '%env(DOS_DOMAIN)%',
    ])
        ->bind('string $locales', '%app_locales%')
        ->bind('string $thumbnailUrl', '%env(BASE_URL)%/%env(THUMBNAIL_FILE)%')
        ->bind('string $uploadsMediaPath', 'uploads/media')
        ->bind('array $uploadRules', [
        'limitHeightAvatarUser' => '%env(UPLOAD_LIMIT_HEIGHT_USER_AVATAR)%',
        'directoryTmp' => '%env(UPLOAD_DIRECTORY_TMP)%',
    ])
        ->bind('string $projectDir', '%kernel.project_dir%');

    $services->load('App\\', __DIR__ . '/../src/')
        ->exclude([
        __DIR__ . '/../src/DependencyInjection/',
        __DIR__ . '/../src/Entity/',
        __DIR__ . '/../src/Kernel.php',
    ]);

    $services->set(ComponentExtension::class)
        ->tag('twig.extension');

    $services->set(UserAddType::class)
        ->args([
        service('doctrine.orm.default_entity_manager'),
        service('request_stack'),
    ]);

    $services->set(UserEditType::class)
        ->args([
        service('doctrine.orm.default_entity_manager'),
        service('request_stack'),
    ]);

    $services->set(LocationHelper::class)
        ->args([
        service('doctrine.orm.default_entity_manager'),
        service('request_stack'),
    ]);

    $services->set(UserType::class)
        ->args([
        service('doctrine.orm.default_entity_manager'),
        service('request_stack'),
    ]);

    $services->set(SettingsSecurityType::class)
        ->args([
        service('doctrine.orm.default_entity_manager'),
    ]);

    $services->set(SettingsProfileType::class)
        ->args([
        service('doctrine.orm.default_entity_manager'),
    ]);
};
