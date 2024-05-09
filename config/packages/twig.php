<?php

declare(strict_types=1);

use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function (ContainerConfigurator $containerConfigurator): void {
    $containerConfigurator->extension('twig', [
        'file_name_pattern' => '*.twig',
        'form_themes' => [
            'forms/bootstrap_4_layout.html.twig',
        ],
        'globals' => [
            'base_url' => '%env(BASE_URL)%',
            'googleApiKey' => '%env(GOOGLE_API_KEY)%',
            'app_version' => '%env(APP_VERSION)%',
            'thumbnail_url' => '%env(BASE_URL)%/%env(THUMBNAIL_FILE)%',
            'app_name' => '%env(APP_NAME)%',
        ],
    ]);
    if ($containerConfigurator->env() === 'test') {
        $containerConfigurator->extension('twig', [
            'strict_variables' => true,
        ]);
    }
};
