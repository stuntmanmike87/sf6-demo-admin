<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
        '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
        '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
        '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
        '/_profiler/xdebug' => [[['_route' => '_profiler_xdebug', '_controller' => 'web_profiler.controller.profiler::xdebugAction'], null, null, null, false, false, null]],
        '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/(en|de|pt)/(?'
                    .'|a(?'
                        .'|dmin/settings/(?'
                            .'|security(*:51)'
                            .'|profile(*:65)'
                            .'|address(*:79)'
                        .')'
                        .'|pi/location/(?'
                            .'|c(?'
                                .'|ities(*:111)'
                                .'|ountry(?'
                                    .'|(*:128)'
                                    .'|/search(*:143)'
                                .')'
                            .')'
                            .'|states(*:159)'
                        .')'
                    .')'
                    .'|user(?'
                        .'|s(*:177)'
                        .'|/(?'
                            .'|([^/]++)/edit(*:202)'
                            .'|add(*:213)'
                        .')'
                    .')'
                    .'|log(?'
                        .'|in(*:231)'
                        .'|out(*:242)'
                    .')'
                .')'
                .'|/_(?'
                    .'|error/(\\d+)(?:\\.([^/]++))?(*:283)'
                    .'|wdt/([^/]++)(*:303)'
                    .'|profiler/([^/]++)(?'
                        .'|/(?'
                            .'|search/results(*:349)'
                            .'|router(*:363)'
                            .'|exception(?'
                                .'|(*:383)'
                                .'|\\.css(*:396)'
                            .')'
                        .')'
                        .'|(*:406)'
                    .')'
                .')'
                .'|/media/cache/resolve/(?'
                    .'|([A-z0-9_-]*)/rc/([^/]++)/(.+)(*:470)'
                    .'|([A-z0-9_-]*)/(.+)(*:496)'
                .')'
                .'|/(en|de|pt)?(*:517)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        51 => [[['_route' => 'admin_settings_security', '_controller' => 'App\\Controller\\Admin\\SettingsController::security', '_locale' => 'en'], ['_locale'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        65 => [[['_route' => 'admin_settings_profile', '_controller' => 'App\\Controller\\Admin\\SettingsController::profile', '_locale' => 'en'], ['_locale'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        79 => [[['_route' => 'admin_settings_address', '_controller' => 'App\\Controller\\Admin\\SettingsController::address', '_locale' => 'en'], ['_locale'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        111 => [[['_route' => 'api_location_city_list', '_controller' => 'App\\Controller\\Api\\LocationCityController::listAction', '_locale' => 'en'], ['_locale'], ['GET' => 0], null, false, false, null]],
        128 => [[['_route' => 'api_location_country_get', '_controller' => 'App\\Controller\\Api\\LocationCountryController::getAction', '_locale' => 'en'], ['_locale'], ['POST' => 0], null, false, false, null]],
        143 => [[['_route' => 'api_location_country_search', '_controller' => 'App\\Controller\\Api\\LocationCountryController::searchAction', '_locale' => 'en'], ['_locale'], ['POST' => 0], null, false, false, null]],
        159 => [[['_route' => 'api_location_state_list', '_controller' => 'App\\Controller\\Api\\LocationStateController::listAction', '_locale' => 'en'], ['_locale'], ['GET' => 0], null, false, false, null]],
        177 => [[['_route' => 'admin_user_index', '_controller' => 'App\\Controller\\Admin\\UserController::index', '_locale' => 'en'], ['_locale'], ['GET' => 0], null, false, false, null]],
        202 => [[['_route' => 'admin_user_edit', '_controller' => 'App\\Controller\\Admin\\UserController::edit', '_locale' => 'en'], ['_locale', 'id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        213 => [[['_route' => 'admin_user_add', '_controller' => 'App\\Controller\\Admin\\UserController::add', '_locale' => 'en'], ['_locale'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        231 => [[['_route' => 'security_login', '_controller' => 'App\\Controller\\SecurityController::login', '_locale' => 'en'], ['_locale'], null, null, false, false, null]],
        242 => [[['_route' => 'security_logout', '_controller' => 'App\\Controller\\SecurityController::logout', '_locale' => 'en'], ['_locale'], null, null, false, false, null]],
        283 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        303 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
        349 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
        363 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
        383 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception_panel::body'], ['token'], null, null, false, false, null]],
        396 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception_panel::stylesheet'], ['token'], null, null, false, false, null]],
        406 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
        470 => [[['_route' => 'liip_imagine_filter_runtime', '_controller' => 'Liip\\ImagineBundle\\Controller\\ImagineController::filterRuntimeAction'], ['filter', 'hash', 'path'], ['GET' => 0], null, false, true, null]],
        496 => [[['_route' => 'liip_imagine_filter', '_controller' => 'Liip\\ImagineBundle\\Controller\\ImagineController::filterAction'], ['filter', 'path'], ['GET' => 0], null, false, true, null]],
        517 => [
            [['_route' => 'login', 'template' => 'security/login.html.twig', '_locale' => 'en', '_controller' => 'App\\Controller\\SecurityController::login'], ['_locale'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
