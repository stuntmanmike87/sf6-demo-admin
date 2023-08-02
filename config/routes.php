<?php

declare(strict_types=1);

use Symfony\Component\Routing\Loader\Configurator\RoutingConfigurator;

return static function (RoutingConfigurator $routingConfigurator): void {
    $routingConfigurator->add('login', '/{_locale}')
        ->controller('App\Controller\SecurityController::login')
        ->defaults([
        'template' => 'security/login.html.twig',
        '_locale' => '%locale%',
    ])
        ->requirements([
        '_locale' => '%app_locales%',
    ]);
};
