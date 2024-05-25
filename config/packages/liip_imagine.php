<?php

declare(strict_types=1);

use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function (ContainerConfigurator $containerConfigurator): void {
    $containerConfigurator->extension('liip_imagine', [
        'driver' => 'gd',
        'twig' => [
            'mode' => 'lazy',
        ],
        'filter_sets' => [
            '800x800' => [
                'quality' => 80,
                'filters' => [
                    'thumbnail' => [
                        'size' => [
                            800,
                            800,
                        ],
                        'mode' => 'outbound',
                        'allow_upscale' => true,
                    ],
                ],
            ],
            '400x400' => [
                'quality' => 80,
                'filters' => [
                    'thumbnail' => [
                        'size' => [
                            400,
                            400,
                        ],
                        'mode' => 'outbound',
                        'allow_upscale' => true,
                    ],
                ],
            ],
            '360x260' => [
                'quality' => 100,
                'filters' => [
                    'thumbnail' => [
                        'size' => [
                            360,
                            260,
                        ],
                        'mode' => 'outbound',
                        'allow_upscale' => true,
                    ],
                ],
            ],
            '320x320' => [
                'quality' => 80,
                'filters' => [
                    'thumbnail' => [
                        'size' => [
                            320,
                            320,
                        ],
                        'mode' => 'outbound',
                        'allow_upscale' => true,
                    ],
                ],
            ],
            '300x300' => [
                'quality' => 80,
                'filters' => [
                    'thumbnail' => [
                        'size' => [
                            300,
                            300,
                        ],
                        'mode' => 'outbound',
                        'allow_upscale' => true,
                    ],
                ],
            ],
            '100x100' => [
                'quality' => 80,
                'filters' => [
                    'thumbnail' => [
                        'size' => [
                            100,
                            100,
                        ],
                        'mode' => 'outbound',
                        'allow_upscale' => true,
                    ],
                ],
            ],
            '90x90' => [
                'quality' => 80,
                'filters' => [
                    'thumbnail' => [
                        'size' => [
                            90,
                            90,
                        ],
                        'mode' => 'outbound',
                        'allow_upscale' => true,
                    ],
                ],
            ],
        ],
    ]);
};
