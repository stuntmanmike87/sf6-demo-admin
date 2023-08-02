<?php

declare(strict_types=1);

use App\Entity\User;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

return static function (ContainerConfigurator $containerConfigurator): void {
    $containerConfigurator->extension('security', [
        'enable_authenticator_manager' => true,
        'password_hashers' => [
            PasswordAuthenticatedUserInterface::class => 'auto',
        ],
        'providers' => [
            'database_users' => [
                'entity' => [
                    'class' => User::class,
                    'property' => 'username',
                ],
            ],
            'app_user_provider' => [
                'entity' => [
                    'class' => User::class,
                    'property' => 'username',
                ],
            ],
        ],
        'firewalls' => [
            'dev' => [
                'pattern' => '^/(_(profiler|wdt)|css|images|js)/',
                'security' => false,
            ],
            'main' => [
                'lazy' => true,
                'provider' => 'database_users',
                'form_login' => [
                    'check_path' => 'security_login',
                    'login_path' => 'security_login',
                    'default_target_path' => 'admin_user_index',
                ],
                'logout' => [
                    'path' => 'security_logout',
                    'target' => 'security_login',
                ],
            ],
        ],
        'access_control' => [
            [
                'path' => '^/(%app_locales%)/admin',
                'roles' => 'IS_AUTHENTICATED_FULLY',
            ],
            [
                'path' => '^/(%app_locales%)/api',
                'roles' => 'IS_AUTHENTICATED_FULLY',
            ],
        ],
    ]);
    if ($containerConfigurator->env() === 'test') {
        $containerConfigurator->extension('security', [
            'password_hashers' => [
                PasswordAuthenticatedUserInterface::class => [
                    'algorithm' => 'auto',
                    'cost' => 4,
                    'time_cost' => 3,
                    'memory_cost' => 10,
                ],
            ],
        ]);
    }
};
