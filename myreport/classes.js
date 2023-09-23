var classes = [
    {
        "name": "App\\Command\\UserAdminCommand",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "execute",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Symfony\\Component\\Console\\Command\\Command",
            "Doctrine\\ORM\\EntityManagerInterface",
            "Symfony\\Component\\PasswordHasher\\Hasher\\UserPasswordHasherInterface",
            "Symfony\\Component\\Console\\Input\\InputInterface",
            "Symfony\\Component\\Console\\Output\\OutputInterface",
            "Symfony\\Component\\Console\\Style\\SymfonyStyle",
            "App\\Entity\\User"
        ],
        "parents": [
            "Symfony\\Component\\Console\\Command\\Command"
        ],
        "implements": [],
        "lcom": 2,
        "length": 37,
        "vocabulary": 17,
        "volume": 151.24,
        "difficulty": 2.2,
        "effort": 332.72,
        "level": 0.45,
        "bugs": 0.05,
        "time": 18,
        "intelligentContent": 68.74,
        "number_operators": 4,
        "number_operands": 33,
        "number_operators_unique": 2,
        "number_operands_unique": 15,
        "cloc": 1,
        "loc": 27,
        "lloc": 26,
        "mi": 68.42,
        "mIwoC": 53.74,
        "commentWeight": 14.69,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 225,
        "relativeDataComplexity": 0.19,
        "relativeSystemComplexity": 225.19,
        "totalStructuralComplexity": 450,
        "totalDataComplexity": 0.38,
        "totalSystemComplexity": 450.38,
        "package": "App\\Command\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 7,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Controller\\Admin\\AdminController",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController",
            "App\\Utils\\Acl",
            "Symfony\\Contracts\\Translation\\TranslatorInterface",
            "Symfony\\Component\\Security\\Core\\Exception\\AccessDeniedException"
        ],
        "parents": [
            "Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController"
        ],
        "implements": [],
        "lcom": 1,
        "length": 7,
        "vocabulary": 5,
        "volume": 16.25,
        "difficulty": 0.75,
        "effort": 12.19,
        "level": 1.33,
        "bugs": 0.01,
        "time": 1,
        "intelligentContent": 21.67,
        "number_operators": 1,
        "number_operands": 6,
        "number_operators_unique": 1,
        "number_operands_unique": 4,
        "cloc": 6,
        "loc": 16,
        "lloc": 10,
        "mi": 110.07,
        "mIwoC": 69.44,
        "commentWeight": 40.63,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0.67,
        "relativeSystemComplexity": 4.67,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 0.67,
        "totalSystemComplexity": 4.67,
        "package": "App\\Controller\\Admin\\",
        "pageRank": 0.01,
        "afferentCoupling": 2,
        "efferentCoupling": 4,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "App\\Controller\\Admin\\SettingsController",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "security",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "profile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "address",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 9,
        "ccn": 7,
        "ccnMethodMax": 3,
        "externals": [
            "App\\Controller\\Admin\\AdminController",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Symfony\\Component\\HttpFoundation\\Request",
            "Symfony\\Contracts\\Translation\\TranslatorInterface",
            "Doctrine\\ORM\\EntityManagerInterface",
            "DateTime",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Symfony\\Component\\HttpFoundation\\Request",
            "Symfony\\Contracts\\Translation\\TranslatorInterface",
            "Doctrine\\ORM\\EntityManagerInterface",
            "DateTime",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Symfony\\Component\\HttpFoundation\\Request",
            "Symfony\\Contracts\\Translation\\TranslatorInterface",
            "Doctrine\\ORM\\EntityManagerInterface",
            "DateTime"
        ],
        "parents": [
            "App\\Controller\\Admin\\AdminController"
        ],
        "implements": [],
        "lcom": 1,
        "length": 99,
        "vocabulary": 25,
        "volume": 459.74,
        "difficulty": 8,
        "effort": 3677.93,
        "level": 0.13,
        "bugs": 0.15,
        "time": 204,
        "intelligentContent": 57.47,
        "number_operators": 15,
        "number_operands": 84,
        "number_operators_unique": 4,
        "number_operands_unique": 21,
        "cloc": 22,
        "loc": 62,
        "lloc": 40,
        "mi": 85.33,
        "mIwoC": 45.47,
        "commentWeight": 39.87,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 0.46,
        "relativeSystemComplexity": 144.46,
        "totalStructuralComplexity": 432,
        "totalDataComplexity": 1.38,
        "totalSystemComplexity": 433.38,
        "package": "App\\Controller\\Admin\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 6,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Controller\\Admin\\UserController",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "index",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "edit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 7,
        "ccn": 5,
        "ccnMethodMax": 3,
        "externals": [
            "App\\Controller\\Admin\\AdminController",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Symfony\\Component\\HttpFoundation\\Request",
            "App\\Repository\\UserRepository",
            "Doctrine\\ORM\\EntityManagerInterface",
            "App\\Utils\\TranslationHelper",
            "App\\Utils\\TranslationHelper",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Symfony\\Component\\HttpFoundation\\Request",
            "App\\Entity\\User",
            "Symfony\\Contracts\\Translation\\TranslatorInterface",
            "Doctrine\\ORM\\EntityManagerInterface",
            "DateTime",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Symfony\\Component\\HttpFoundation\\Request",
            "Symfony\\Contracts\\Translation\\TranslatorInterface",
            "Doctrine\\ORM\\EntityManagerInterface",
            "App\\Entity\\User",
            "DateTime"
        ],
        "parents": [
            "App\\Controller\\Admin\\AdminController"
        ],
        "implements": [],
        "lcom": 1,
        "length": 127,
        "vocabulary": 38,
        "volume": 666.49,
        "difficulty": 6.24,
        "effort": 4155.74,
        "level": 0.16,
        "bugs": 0.22,
        "time": 231,
        "intelligentContent": 106.89,
        "number_operators": 21,
        "number_operands": 106,
        "number_operators_unique": 4,
        "number_operands_unique": 34,
        "cloc": 7,
        "loc": 50,
        "lloc": 43,
        "mi": 71.31,
        "mIwoC": 43.92,
        "commentWeight": 27.39,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 441,
        "relativeDataComplexity": 0.38,
        "relativeSystemComplexity": 441.38,
        "totalStructuralComplexity": 1323,
        "totalDataComplexity": 1.14,
        "totalSystemComplexity": 1324.14,
        "package": "App\\Controller\\Admin\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 9,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Controller\\Api\\LocationCityController",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "list",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 6,
        "ccn": 5,
        "ccnMethodMax": 5,
        "externals": [
            "Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController",
            "Doctrine\\ORM\\EntityManagerInterface",
            "Symfony\\Component\\Security\\Core\\Authentication\\Token\\Storage\\TokenStorageInterface",
            "Symfony\\Contracts\\Translation\\TranslatorInterface",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Symfony\\Component\\HttpFoundation\\Request",
            "Symfony\\Component\\Security\\Core\\Exception\\InvalidCsrfTokenException",
            "Symfony\\Component\\HttpFoundation\\JsonResponse",
            "Symfony\\Component\\Serializer\\Serializer"
        ],
        "parents": [
            "Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController"
        ],
        "implements": [],
        "lcom": 2,
        "length": 77,
        "vocabulary": 30,
        "volume": 377.83,
        "difficulty": 7,
        "effort": 2644.81,
        "level": 0.14,
        "bugs": 0.13,
        "time": 147,
        "intelligentContent": 53.98,
        "number_operators": 21,
        "number_operands": 56,
        "number_operators_unique": 6,
        "number_operands_unique": 24,
        "cloc": 10,
        "loc": 44,
        "lloc": 34,
        "mi": 81.53,
        "mIwoC": 47.87,
        "commentWeight": 33.66,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 0.4,
        "relativeSystemComplexity": 81.4,
        "totalStructuralComplexity": 162,
        "totalDataComplexity": 0.8,
        "totalSystemComplexity": 162.8,
        "package": "App\\Controller\\Api\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 9,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Controller\\Api\\LocationCountryController",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "search",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 12,
        "ccn": 10,
        "ccnMethodMax": 6,
        "externals": [
            "Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController",
            "Doctrine\\ORM\\EntityManagerInterface",
            "Symfony\\Component\\Security\\Core\\Authentication\\Token\\Storage\\TokenStorageInterface",
            "Symfony\\Contracts\\Translation\\TranslatorInterface",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Symfony\\Component\\HttpFoundation\\Request",
            "Symfony\\Component\\Security\\Core\\Exception\\InvalidCsrfTokenException",
            "Symfony\\Component\\HttpFoundation\\JsonResponse",
            "Symfony\\Component\\Serializer\\Normalizer\\ObjectNormalizer",
            "Symfony\\Component\\Serializer\\Serializer",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Symfony\\Component\\HttpFoundation\\Request",
            "Symfony\\Component\\Security\\Core\\Exception\\InvalidCsrfTokenException",
            "Symfony\\Component\\HttpFoundation\\JsonResponse",
            "Symfony\\Component\\Serializer\\Serializer"
        ],
        "parents": [
            "Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController"
        ],
        "implements": [],
        "lcom": 2,
        "length": 170,
        "vocabulary": 43,
        "volume": 922.47,
        "difficulty": 12.25,
        "effort": 11300.2,
        "level": 0.08,
        "bugs": 0.31,
        "time": 628,
        "intelligentContent": 75.3,
        "number_operators": 44,
        "number_operands": 126,
        "number_operators_unique": 7,
        "number_operands_unique": 36,
        "cloc": 30,
        "loc": 94,
        "lloc": 67,
        "mi": 76.44,
        "mIwoC": 38.06,
        "commentWeight": 38.38,
        "kanDefect": 0.8,
        "relativeStructuralComplexity": 100,
        "relativeDataComplexity": 0.52,
        "relativeSystemComplexity": 100.52,
        "totalStructuralComplexity": 300,
        "totalDataComplexity": 1.55,
        "totalSystemComplexity": 301.55,
        "package": "App\\Controller\\Api\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 10,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Controller\\Api\\LocationStateController",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "list",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 6,
        "ccn": 5,
        "ccnMethodMax": 5,
        "externals": [
            "Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController",
            "Doctrine\\ORM\\EntityManagerInterface",
            "Symfony\\Component\\Security\\Core\\Authentication\\Token\\Storage\\TokenStorageInterface",
            "Symfony\\Contracts\\Translation\\TranslatorInterface",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Symfony\\Component\\HttpFoundation\\Request",
            "Symfony\\Component\\Security\\Core\\Exception\\InvalidCsrfTokenException",
            "Symfony\\Component\\HttpFoundation\\JsonResponse",
            "Symfony\\Component\\Serializer\\Serializer"
        ],
        "parents": [
            "Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController"
        ],
        "implements": [],
        "lcom": 2,
        "length": 77,
        "vocabulary": 30,
        "volume": 377.83,
        "difficulty": 7,
        "effort": 2644.81,
        "level": 0.14,
        "bugs": 0.13,
        "time": 147,
        "intelligentContent": 53.98,
        "number_operators": 21,
        "number_operands": 56,
        "number_operators_unique": 6,
        "number_operands_unique": 24,
        "cloc": 10,
        "loc": 44,
        "lloc": 34,
        "mi": 81.53,
        "mIwoC": 47.87,
        "commentWeight": 33.66,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 0.4,
        "relativeSystemComplexity": 81.4,
        "totalStructuralComplexity": 162,
        "totalDataComplexity": 0.8,
        "totalSystemComplexity": 162.8,
        "package": "App\\Controller\\Api\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 9,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Controller\\SecurityController",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "login",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "logout",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Symfony\\Bundle\\SecurityBundle\\Security",
            "Symfony\\Component\\Security\\Http\\Authentication\\AuthenticationUtils",
            "Exception"
        ],
        "parents": [
            "Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController"
        ],
        "implements": [],
        "lcom": 2,
        "length": 20,
        "vocabulary": 15,
        "volume": 78.14,
        "difficulty": 1.31,
        "effort": 102.18,
        "level": 0.76,
        "bugs": 0.03,
        "time": 6,
        "intelligentContent": 59.75,
        "number_operators": 3,
        "number_operands": 17,
        "number_operators_unique": 2,
        "number_operands_unique": 13,
        "cloc": 5,
        "loc": 23,
        "lloc": 18,
        "mi": 92.15,
        "mIwoC": 59.09,
        "commentWeight": 33.06,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 25.5,
        "totalStructuralComplexity": 50,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 51,
        "package": "App\\Controller\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 5,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\DataFixtures\\AppFixtures",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "load",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Doctrine\\Bundle\\FixturesBundle\\Fixture",
            "Symfony\\Component\\PasswordHasher\\Hasher\\UserPasswordHasherInterface",
            "Doctrine\\Persistence\\ObjectManager"
        ],
        "parents": [
            "Doctrine\\Bundle\\FixturesBundle\\Fixture"
        ],
        "implements": [],
        "lcom": 2,
        "length": 3,
        "vocabulary": 2,
        "volume": 3,
        "difficulty": 0,
        "effort": 0,
        "level": 1.33,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 4,
        "number_operators": 0,
        "number_operands": 3,
        "number_operators_unique": 0,
        "number_operands_unique": 2,
        "cloc": 18,
        "loc": 29,
        "lloc": 11,
        "mi": 120.77,
        "mIwoC": 73.81,
        "commentWeight": 46.96,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 3,
        "package": "App\\DataFixtures\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\DataFixtures\\UserFixtures",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "load",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Doctrine\\Bundle\\FixturesBundle\\Fixture",
            "Symfony\\Component\\PasswordHasher\\Hasher\\UserPasswordHasherInterface",
            "Doctrine\\Persistence\\ObjectManager",
            "App\\Entity\\User",
            "Faker\\Factory",
            "App\\Entity\\User"
        ],
        "parents": [
            "Doctrine\\Bundle\\FixturesBundle\\Fixture"
        ],
        "implements": [],
        "lcom": 2,
        "length": 36,
        "vocabulary": 16,
        "volume": 144,
        "difficulty": 3.46,
        "effort": 498.46,
        "level": 0.29,
        "bugs": 0.05,
        "time": 28,
        "intelligentContent": 41.6,
        "number_operators": 6,
        "number_operands": 30,
        "number_operators_unique": 3,
        "number_operands_unique": 13,
        "cloc": 2,
        "loc": 25,
        "lloc": 23,
        "mi": 76.13,
        "mIwoC": 54.91,
        "commentWeight": 21.21,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 0.13,
        "relativeSystemComplexity": 49.13,
        "totalStructuralComplexity": 98,
        "totalDataComplexity": 0.25,
        "totalSystemComplexity": 98.25,
        "package": "App\\DataFixtures\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 5,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Entity\\AccountVerification",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUser",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setUser",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getToken",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setToken",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getVerifiedAt",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setVerifiedAt",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCreatedAt",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCreatedAt",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValidAt",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setValidAt",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 11,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 6,
        "nbMethodsSetters": 5,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "DateTimeInterface"
        ],
        "parents": [],
        "implements": [],
        "lcom": 0,
        "length": 50,
        "vocabulary": 15,
        "volume": 195.34,
        "difficulty": 2.62,
        "effort": 510.9,
        "level": 0.38,
        "bugs": 0.07,
        "time": 28,
        "intelligentContent": 74.69,
        "number_operators": 16,
        "number_operands": 34,
        "number_operators_unique": 2,
        "number_operands_unique": 13,
        "cloc": 16,
        "loc": 75,
        "lloc": 59,
        "mi": 78,
        "mIwoC": 45.2,
        "commentWeight": 32.8,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 11.45,
        "relativeSystemComplexity": 11.45,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 126,
        "totalSystemComplexity": 126,
        "package": "App\\Entity\\",
        "pageRank": 0.06,
        "afferentCoupling": 2,
        "efferentCoupling": 1,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "App\\Entity\\AclAction",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setName",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getController",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setController",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPermissions",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addPermission",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removePermission",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 4,
        "nbMethodsSetters": 2,
        "wmc": 6,
        "ccn": 4,
        "ccnMethodMax": 3,
        "externals": [
            "Doctrine\\Common\\Collections\\ArrayCollection",
            "Doctrine\\Common\\Collections\\Collection",
            "App\\Entity\\AclPermission",
            "App\\Entity\\AclPermission"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 46,
        "vocabulary": 12,
        "volume": 164.91,
        "difficulty": 11.07,
        "effort": 1825.77,
        "level": 0.09,
        "bugs": 0.05,
        "time": 101,
        "intelligentContent": 14.89,
        "number_operators": 15,
        "number_operands": 31,
        "number_operators_unique": 5,
        "number_operands_unique": 7,
        "cloc": 15,
        "loc": 68,
        "lloc": 53,
        "mi": 79.58,
        "mIwoC": 46.32,
        "commentWeight": 33.25,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.41,
        "relativeSystemComplexity": 26.41,
        "totalStructuralComplexity": 225,
        "totalDataComplexity": 12.67,
        "totalSystemComplexity": 237.67,
        "package": "App\\Entity\\",
        "pageRank": 0.02,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    },
    {
        "name": "App\\Entity\\AclController",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setName",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPrefix",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPrefix",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getActions",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addAction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeAction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 4,
        "nbMethodsSetters": 2,
        "wmc": 6,
        "ccn": 4,
        "ccnMethodMax": 3,
        "externals": [
            "Doctrine\\Common\\Collections\\ArrayCollection",
            "Doctrine\\Common\\Collections\\Collection",
            "App\\Entity\\AclAction",
            "App\\Entity\\AclAction"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 46,
        "vocabulary": 12,
        "volume": 164.91,
        "difficulty": 11.07,
        "effort": 1825.77,
        "level": 0.09,
        "bugs": 0.05,
        "time": 101,
        "intelligentContent": 14.89,
        "number_operators": 15,
        "number_operands": 31,
        "number_operators_unique": 5,
        "number_operands_unique": 7,
        "cloc": 13,
        "loc": 66,
        "lloc": 53,
        "mi": 78.06,
        "mIwoC": 46.32,
        "commentWeight": 31.73,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.41,
        "relativeSystemComplexity": 26.41,
        "totalStructuralComplexity": 225,
        "totalDataComplexity": 12.67,
        "totalSystemComplexity": 237.67,
        "package": "App\\Entity\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "App\\Entity\\AclPermission",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAction",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setAction",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUserGroups",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addUserGroup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeUserGroup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUserGroup",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setUserGroup",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 4,
        "nbMethodsSetters": 2,
        "wmc": 6,
        "ccn": 4,
        "ccnMethodMax": 3,
        "externals": [
            "Doctrine\\Common\\Collections\\ArrayCollection",
            "Doctrine\\Common\\Collections\\Collection",
            "App\\Entity\\AclUserGroup",
            "App\\Entity\\AclUserGroup"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 46,
        "vocabulary": 10,
        "volume": 152.81,
        "difficulty": 15.5,
        "effort": 2368.53,
        "level": 0.06,
        "bugs": 0.05,
        "time": 132,
        "intelligentContent": 9.86,
        "number_operators": 15,
        "number_operands": 31,
        "number_operators_unique": 5,
        "number_operands_unique": 5,
        "cloc": 16,
        "loc": 69,
        "lloc": 53,
        "mi": 80.49,
        "mIwoC": 46.56,
        "commentWeight": 33.94,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.41,
        "relativeSystemComplexity": 26.41,
        "totalStructuralComplexity": 225,
        "totalDataComplexity": 12.67,
        "totalSystemComplexity": 237.67,
        "package": "App\\Entity\\",
        "pageRank": 0.08,
        "afferentCoupling": 3,
        "efferentCoupling": 3,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "App\\Entity\\AclUserGroup",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isActive",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setActive",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPermission",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPermission",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isAdm",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setAdm",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPermissions",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addPermission",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removePermission",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUsers",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addUser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeUser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTranslateKey",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTranslateKey",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 16,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 7,
        "nbMethodsSetters": 4,
        "wmc": 11,
        "ccn": 7,
        "ccnMethodMax": 3,
        "externals": [
            "Doctrine\\Common\\Collections\\ArrayCollection",
            "Doctrine\\Common\\Collections\\ArrayCollection",
            "Doctrine\\Common\\Collections\\Collection",
            "App\\Entity\\AclPermission",
            "App\\Entity\\AclPermission",
            "Doctrine\\Common\\Collections\\Collection",
            "App\\Entity\\User",
            "App\\Entity\\User"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 88,
        "vocabulary": 14,
        "volume": 335.05,
        "difficulty": 16.39,
        "effort": 5491.05,
        "level": 0.06,
        "bugs": 0.11,
        "time": 305,
        "intelligentContent": 20.44,
        "number_operators": 29,
        "number_operands": 59,
        "number_operators_unique": 5,
        "number_operands_unique": 9,
        "cloc": 25,
        "loc": 119,
        "lloc": 94,
        "mi": 70.93,
        "mIwoC": 38.34,
        "commentWeight": 32.59,
        "kanDefect": 0.43,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 2.58,
        "relativeSystemComplexity": 27.58,
        "totalStructuralComplexity": 400,
        "totalDataComplexity": 41.33,
        "totalSystemComplexity": 441.33,
        "package": "App\\Entity\\",
        "pageRank": 0.1,
        "afferentCoupling": 2,
        "efferentCoupling": 4,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "App\\Entity\\Language",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setName",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLocale",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLocale",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getIdentifier",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setIdentifier",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTranslateKey",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTranslateKey",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isApp",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setApp",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isUser",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setUser",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCreatedAt",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCreatedAt",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isActive",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setActive",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTranslations",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addTranslation",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeTranslation",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 21,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 10,
        "nbMethodsSetters": 8,
        "wmc": 6,
        "ccn": 4,
        "ccnMethodMax": 3,
        "externals": [
            "Doctrine\\Common\\Collections\\ArrayCollection",
            "Doctrine\\Common\\Collections\\Collection",
            "App\\Entity\\Translation",
            "App\\Entity\\Translation"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 104,
        "vocabulary": 23,
        "volume": 470.45,
        "difficulty": 9.86,
        "effort": 4639.16,
        "level": 0.1,
        "bugs": 0.16,
        "time": 258,
        "intelligentContent": 47.71,
        "number_operators": 33,
        "number_operands": 71,
        "number_operators_unique": 5,
        "number_operands_unique": 18,
        "cloc": 29,
        "loc": 142,
        "lloc": 113,
        "mi": 68.18,
        "mIwoC": 35.96,
        "commentWeight": 32.21,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 3.41,
        "relativeSystemComplexity": 28.41,
        "totalStructuralComplexity": 525,
        "totalDataComplexity": 71.67,
        "totalSystemComplexity": 596.67,
        "package": "App\\Entity\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "App\\Entity\\LocationCity",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setName",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSlug",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSlug",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getState",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setState",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNeighborhoods",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addNeighborhood",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeNeighborhood",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUsers",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addUser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeUser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 14,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 6,
        "nbMethodsSetters": 3,
        "wmc": 11,
        "ccn": 7,
        "ccnMethodMax": 3,
        "externals": [
            "Doctrine\\Common\\Collections\\ArrayCollection",
            "Doctrine\\Common\\Collections\\ArrayCollection",
            "Doctrine\\Common\\Collections\\Collection",
            "App\\Entity\\LocationNeighborhood",
            "App\\Entity\\LocationNeighborhood",
            "Doctrine\\Common\\Collections\\Collection",
            "App\\Entity\\User",
            "App\\Entity\\User"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 85,
        "vocabulary": 16,
        "volume": 340,
        "difficulty": 13.41,
        "effort": 4559.09,
        "level": 0.07,
        "bugs": 0.11,
        "time": 253,
        "intelligentContent": 25.36,
        "number_operators": 26,
        "number_operands": 59,
        "number_operators_unique": 5,
        "number_operands_unique": 11,
        "cloc": 25,
        "loc": 109,
        "lloc": 84,
        "mi": 73.14,
        "mIwoC": 39.36,
        "commentWeight": 33.79,
        "kanDefect": 0.43,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 2.25,
        "relativeSystemComplexity": 27.25,
        "totalStructuralComplexity": 350,
        "totalDataComplexity": 31.5,
        "totalSystemComplexity": 381.5,
        "package": "App\\Entity\\",
        "pageRank": 0.02,
        "afferentCoupling": 2,
        "efferentCoupling": 4,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "App\\Entity\\LocationCountry",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setName",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSlug",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSlug",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAlpha3",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setAlpha3",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNative",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setNative",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAlpha2",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setAlpha2",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCallingCode",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCallingCode",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getStates",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addState",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeState",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUsers",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addUser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeUser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 20,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 9,
        "nbMethodsSetters": 6,
        "wmc": 11,
        "ccn": 7,
        "ccnMethodMax": 3,
        "externals": [
            "Doctrine\\Common\\Collections\\ArrayCollection",
            "Doctrine\\Common\\Collections\\ArrayCollection",
            "Doctrine\\Common\\Collections\\Collection",
            "App\\Entity\\LocationState",
            "App\\Entity\\LocationState",
            "Doctrine\\Common\\Collections\\Collection",
            "App\\Entity\\User",
            "App\\Entity\\User"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 112,
        "vocabulary": 21,
        "volume": 491.94,
        "difficulty": 12.03,
        "effort": 5918.65,
        "level": 0.08,
        "bugs": 0.16,
        "time": 329,
        "intelligentContent": 40.89,
        "number_operators": 35,
        "number_operands": 77,
        "number_operators_unique": 5,
        "number_operands_unique": 16,
        "cloc": 28,
        "loc": 142,
        "lloc": 114,
        "mi": 67.09,
        "mIwoC": 35.34,
        "commentWeight": 31.75,
        "kanDefect": 0.43,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 3.25,
        "relativeSystemComplexity": 28.25,
        "totalStructuralComplexity": 500,
        "totalDataComplexity": 65,
        "totalSystemComplexity": 565,
        "package": "App\\Entity\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 4,
        "instability": 0.8,
        "violations": {}
    },
    {
        "name": "App\\Entity\\LocationNeighborhood",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setName",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSlug",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSlug",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCity",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCity",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUsers",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addUser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeUser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 11,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 5,
        "nbMethodsSetters": 3,
        "wmc": 6,
        "ccn": 4,
        "ccnMethodMax": 3,
        "externals": [
            "Doctrine\\Common\\Collections\\ArrayCollection",
            "Doctrine\\Common\\Collections\\Collection",
            "App\\Entity\\User",
            "App\\Entity\\User"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 59,
        "vocabulary": 15,
        "volume": 230.51,
        "difficulty": 10.25,
        "effort": 2362.69,
        "level": 0.1,
        "bugs": 0.08,
        "time": 131,
        "intelligentContent": 22.49,
        "number_operators": 18,
        "number_operands": 41,
        "number_operators_unique": 5,
        "number_operands_unique": 10,
        "cloc": 19,
        "loc": 82,
        "lloc": 63,
        "mi": 77.59,
        "mIwoC": 43.67,
        "commentWeight": 33.93,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.74,
        "relativeSystemComplexity": 26.74,
        "totalStructuralComplexity": 275,
        "totalDataComplexity": 19.17,
        "totalSystemComplexity": 294.17,
        "package": "App\\Entity\\",
        "pageRank": 0.02,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    },
    {
        "name": "App\\Entity\\LocationState",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setName",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSlug",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSlug",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCode",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCode",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCountry",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCountry",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCities",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addCity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeCity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUsers",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addUser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeUser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 16,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 7,
        "nbMethodsSetters": 4,
        "wmc": 11,
        "ccn": 7,
        "ccnMethodMax": 3,
        "externals": [
            "Doctrine\\Common\\Collections\\ArrayCollection",
            "Doctrine\\Common\\Collections\\ArrayCollection",
            "Doctrine\\Common\\Collections\\Collection",
            "App\\Entity\\LocationCity",
            "App\\Entity\\LocationCity",
            "Doctrine\\Common\\Collections\\Collection",
            "App\\Entity\\User",
            "App\\Entity\\User"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 94,
        "vocabulary": 18,
        "volume": 391.97,
        "difficulty": 12.5,
        "effort": 4899.66,
        "level": 0.08,
        "bugs": 0.13,
        "time": 272,
        "intelligentContent": 31.36,
        "number_operators": 29,
        "number_operands": 65,
        "number_operators_unique": 5,
        "number_operands_unique": 13,
        "cloc": 26,
        "loc": 120,
        "lloc": 94,
        "mi": 70.87,
        "mIwoC": 37.86,
        "commentWeight": 33.01,
        "kanDefect": 0.43,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 2.58,
        "relativeSystemComplexity": 27.58,
        "totalStructuralComplexity": 400,
        "totalDataComplexity": 41.33,
        "totalSystemComplexity": 441.33,
        "package": "App\\Entity\\",
        "pageRank": 0.02,
        "afferentCoupling": 2,
        "efferentCoupling": 4,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "App\\Entity\\ResetUserPassword",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUser",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setUser",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getToken",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setToken",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getResetAt",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setResetAt",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCreatedAt",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCreatedAt",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValidAt",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setValidAt",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 11,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 6,
        "nbMethodsSetters": 5,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "DateTimeInterface"
        ],
        "parents": [],
        "implements": [],
        "lcom": 0,
        "length": 50,
        "vocabulary": 15,
        "volume": 195.34,
        "difficulty": 2.62,
        "effort": 510.9,
        "level": 0.38,
        "bugs": 0.07,
        "time": 28,
        "intelligentContent": 74.69,
        "number_operators": 16,
        "number_operands": 34,
        "number_operators_unique": 2,
        "number_operands_unique": 13,
        "cloc": 17,
        "loc": 78,
        "lloc": 61,
        "mi": 77.97,
        "mIwoC": 44.88,
        "commentWeight": 33.09,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 11.45,
        "relativeSystemComplexity": 11.45,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 126,
        "totalSystemComplexity": 126,
        "package": "App\\Entity\\",
        "pageRank": 0.06,
        "afferentCoupling": 2,
        "efferentCoupling": 1,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "App\\Entity\\Translation",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getText",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setText",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSlug",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSlug",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTranslateKey",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTranslateKey",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLanguage",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLanguage",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 5,
        "nbMethodsSetters": 4,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 0,
        "length": 42,
        "vocabulary": 12,
        "volume": 150.57,
        "difficulty": 2.9,
        "effort": 436.65,
        "level": 0.34,
        "bugs": 0.05,
        "time": 24,
        "intelligentContent": 51.92,
        "number_operators": 13,
        "number_operands": 29,
        "number_operators_unique": 2,
        "number_operands_unique": 10,
        "cloc": 15,
        "loc": 64,
        "lloc": 49,
        "mi": 81.83,
        "mIwoC": 47.75,
        "commentWeight": 34.08,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 9.44,
        "relativeSystemComplexity": 9.44,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 85,
        "totalSystemComplexity": 85,
        "package": "App\\Entity\\",
        "pageRank": 0.02,
        "afferentCoupling": 2,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "App\\Entity\\User",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUsername",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setUsername",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isVerified",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setVerified",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFirstName",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFirstName",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLastName",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLastName",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEmail",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setEmail",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPhoneNumber",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPhoneNumber",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBirthday",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setBirthday",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUrlPicture",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setUrlPicture",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isShowPicture",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setShowPicture",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isActive",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setActive",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUserGroup",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setUserGroup",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLastAccessAt",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLastAccessAt",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAddress",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setAddress",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getStreetNumber",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setStreetNumber",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getComplement",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setComplement",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPostalCode",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPostalCode",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNeighborhood",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setNeighborhood",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCity",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCity",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getState",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setState",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCountry",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCountry",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLat",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLat",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLng",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLng",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFormattedAddress",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFormattedAddress",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBio",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setBio",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFacebookId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFacebookId",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getGoogleId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setGoogleId",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getGoogleAccessToken",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setGoogleAccessToken",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCreatedAt",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCreatedAt",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUpdatedAt",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setUpdatedAt",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDeletedAt",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDeletedAt",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAccountVerifications",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addAccountVerification",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeAccountVerification",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getResetUserPasswords",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addResetUserPassword",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeResetUserPassword",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUserIdentifier",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRoles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRoles",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPassword",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPassword",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "eraseCredentials",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getType",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setType",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAcl",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setAcl",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPhoneNumberCountry",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPhoneNumberCountry",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 80,
        "nbMethods": 7,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 38,
        "nbMethodsSetters": 35,
        "wmc": 13,
        "ccn": 7,
        "ccnMethodMax": 3,
        "externals": [
            "Symfony\\Component\\Security\\Core\\User\\UserInterface",
            "Symfony\\Component\\Security\\Core\\User\\PasswordAuthenticatedUserInterface",
            "Doctrine\\Common\\Collections\\ArrayCollection",
            "Doctrine\\Common\\Collections\\ArrayCollection",
            "Doctrine\\Common\\Collections\\Collection",
            "App\\Entity\\AccountVerification",
            "App\\Entity\\AccountVerification",
            "Doctrine\\Common\\Collections\\Collection",
            "App\\Entity\\ResetUserPassword",
            "App\\Entity\\ResetUserPassword"
        ],
        "parents": [],
        "implements": [
            "Symfony\\Component\\Security\\Core\\User\\UserInterface",
            "Symfony\\Component\\Security\\Core\\User\\PasswordAuthenticatedUserInterface"
        ],
        "lcom": 2,
        "length": 382,
        "vocabulary": 67,
        "volume": 2317.25,
        "difficulty": 10.36,
        "effort": 24013.4,
        "level": 0.1,
        "bugs": 0.77,
        "time": 1334,
        "intelligentContent": 223.61,
        "number_operators": 125,
        "number_operands": 257,
        "number_operators_unique": 5,
        "number_operands_unique": 62,
        "cloc": 107,
        "loc": 520,
        "lloc": 414,
        "mi": 50.73,
        "mIwoC": 18.41,
        "commentWeight": 32.32,
        "kanDefect": 0.43,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 13.08,
        "relativeSystemComplexity": 38.08,
        "totalStructuralComplexity": 2000,
        "totalDataComplexity": 1046.5,
        "totalSystemComplexity": 3046.5,
        "package": "App\\Entity\\",
        "pageRank": 0.12,
        "afferentCoupling": 10,
        "efferentCoupling": 6,
        "instability": 0.38,
        "violations": {}
    },
    {
        "name": "App\\Entity\\UserLanguage",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUser",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setUser",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLanguage",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLanguage",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCategory",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCategory",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLevel",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLevel",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCreatedAt",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCreatedAt",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 11,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 6,
        "nbMethodsSetters": 5,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 0,
        "length": 48,
        "vocabulary": 11,
        "volume": 166.05,
        "difficulty": 3.56,
        "effort": 590.41,
        "level": 0.28,
        "bugs": 0.06,
        "time": 33,
        "intelligentContent": 46.7,
        "number_operators": 16,
        "number_operands": 32,
        "number_operators_unique": 2,
        "number_operands_unique": 9,
        "cloc": 17,
        "loc": 76,
        "lloc": 59,
        "mi": 79.13,
        "mIwoC": 45.69,
        "commentWeight": 33.44,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 11.45,
        "relativeSystemComplexity": 11.45,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 126,
        "totalSystemComplexity": 126,
        "package": "App\\Entity\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "App\\Entity\\UserType",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTranslateKey",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTranslateKey",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUsers",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addUser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeUser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 3,
        "nbMethodsSetters": 1,
        "wmc": 6,
        "ccn": 4,
        "ccnMethodMax": 3,
        "externals": [
            "Doctrine\\Common\\Collections\\ArrayCollection",
            "Doctrine\\Common\\Collections\\Collection",
            "App\\Entity\\User",
            "App\\Entity\\User"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 39,
        "vocabulary": 12,
        "volume": 139.81,
        "difficulty": 9.64,
        "effort": 1348.2,
        "level": 0.1,
        "bugs": 0.05,
        "time": 75,
        "intelligentContent": 14.5,
        "number_operators": 12,
        "number_operands": 27,
        "number_operators_unique": 5,
        "number_operands_unique": 7,
        "cloc": 13,
        "loc": 56,
        "lloc": 43,
        "mi": 82.76,
        "mIwoC": 48.81,
        "commentWeight": 33.95,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.07,
        "relativeSystemComplexity": 26.07,
        "totalStructuralComplexity": 175,
        "totalDataComplexity": 7.5,
        "totalSystemComplexity": 182.5,
        "package": "App\\Entity\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "App\\Factory\\AccountVerificationFactory",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaults",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Zenstruck\\Foundry\\ModelFactory",
            "App\\Factory\\UserFactory"
        ],
        "parents": [
            "Zenstruck\\Foundry\\ModelFactory"
        ],
        "implements": [],
        "lcom": 4,
        "length": 8,
        "vocabulary": 6,
        "volume": 20.68,
        "difficulty": 0.5,
        "effort": 10.34,
        "level": 2,
        "bugs": 0.01,
        "time": 1,
        "intelligentContent": 41.36,
        "number_operators": 3,
        "number_operands": 5,
        "number_operators_unique": 1,
        "number_operands_unique": 5,
        "cloc": 48,
        "loc": 68,
        "lloc": 20,
        "mi": 110.47,
        "mIwoC": 62.27,
        "commentWeight": 48.2,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 25.5,
        "totalStructuralComplexity": 100,
        "totalDataComplexity": 2,
        "totalSystemComplexity": 102,
        "package": "App\\Factory\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Factory\\AclActionFactory",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaults",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Zenstruck\\Foundry\\ModelFactory",
            "App\\Factory\\AclControllerFactory"
        ],
        "parents": [
            "Zenstruck\\Foundry\\ModelFactory"
        ],
        "implements": [],
        "lcom": 4,
        "length": 7,
        "vocabulary": 5,
        "volume": 16.25,
        "difficulty": 0.5,
        "effort": 8.13,
        "level": 2,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 32.51,
        "number_operators": 3,
        "number_operands": 4,
        "number_operators_unique": 1,
        "number_operands_unique": 4,
        "cloc": 48,
        "loc": 68,
        "lloc": 20,
        "mi": 111.21,
        "mIwoC": 63.01,
        "commentWeight": 48.2,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.6,
        "relativeSystemComplexity": 16.6,
        "totalStructuralComplexity": 64,
        "totalDataComplexity": 2.4,
        "totalSystemComplexity": 66.4,
        "package": "App\\Factory\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "App\\Factory\\AclControllerFactory",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaults",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Zenstruck\\Foundry\\ModelFactory"
        ],
        "parents": [
            "Zenstruck\\Foundry\\ModelFactory"
        ],
        "implements": [],
        "lcom": 4,
        "length": 6,
        "vocabulary": 4,
        "volume": 12,
        "difficulty": 0.5,
        "effort": 6,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 24,
        "number_operators": 3,
        "number_operands": 3,
        "number_operators_unique": 1,
        "number_operands_unique": 3,
        "cloc": 48,
        "loc": 68,
        "lloc": 20,
        "mi": 112.13,
        "mIwoC": 63.93,
        "commentWeight": 48.2,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.75,
        "relativeSystemComplexity": 9.75,
        "totalStructuralComplexity": 36,
        "totalDataComplexity": 3,
        "totalSystemComplexity": 39,
        "package": "App\\Factory\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "App\\Factory\\AclPermissionFactory",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaults",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Zenstruck\\Foundry\\ModelFactory",
            "App\\Factory\\AclActionFactory",
            "App\\Factory\\AclUserGroupFactory"
        ],
        "parents": [
            "Zenstruck\\Foundry\\ModelFactory"
        ],
        "implements": [],
        "lcom": 4,
        "length": 6,
        "vocabulary": 4,
        "volume": 12,
        "difficulty": 0.5,
        "effort": 6,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 24,
        "number_operators": 3,
        "number_operands": 3,
        "number_operators_unique": 1,
        "number_operands_unique": 3,
        "cloc": 48,
        "loc": 68,
        "lloc": 20,
        "mi": 112.13,
        "mIwoC": 63.93,
        "commentWeight": 48.2,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.75,
        "relativeSystemComplexity": 9.75,
        "totalStructuralComplexity": 36,
        "totalDataComplexity": 3,
        "totalSystemComplexity": 39,
        "package": "App\\Factory\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Factory\\AclUserGroupFactory",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaults",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Zenstruck\\Foundry\\ModelFactory"
        ],
        "parents": [
            "Zenstruck\\Foundry\\ModelFactory"
        ],
        "implements": [],
        "lcom": 4,
        "length": 8,
        "vocabulary": 6,
        "volume": 20.68,
        "difficulty": 0.5,
        "effort": 10.34,
        "level": 2,
        "bugs": 0.01,
        "time": 1,
        "intelligentContent": 41.36,
        "number_operators": 3,
        "number_operands": 5,
        "number_operators_unique": 1,
        "number_operands_unique": 5,
        "cloc": 48,
        "loc": 68,
        "lloc": 20,
        "mi": 110.47,
        "mIwoC": 62.27,
        "commentWeight": 48.2,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.6,
        "relativeSystemComplexity": 16.6,
        "totalStructuralComplexity": 64,
        "totalDataComplexity": 2.4,
        "totalSystemComplexity": 66.4,
        "package": "App\\Factory\\",
        "pageRank": 0.03,
        "afferentCoupling": 2,
        "efferentCoupling": 1,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "App\\Factory\\LanguageFactory",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaults",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Zenstruck\\Foundry\\ModelFactory"
        ],
        "parents": [
            "Zenstruck\\Foundry\\ModelFactory"
        ],
        "implements": [],
        "lcom": 4,
        "length": 15,
        "vocabulary": 11,
        "volume": 51.89,
        "difficulty": 0.6,
        "effort": 31.13,
        "level": 1.67,
        "bugs": 0.02,
        "time": 2,
        "intelligentContent": 86.49,
        "number_operators": 3,
        "number_operands": 12,
        "number_operators_unique": 1,
        "number_operands_unique": 10,
        "cloc": 48,
        "loc": 68,
        "lloc": 20,
        "mi": 107.67,
        "mIwoC": 59.48,
        "commentWeight": 48.2,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.6,
        "relativeSystemComplexity": 16.6,
        "totalStructuralComplexity": 64,
        "totalDataComplexity": 2.4,
        "totalSystemComplexity": 66.4,
        "package": "App\\Factory\\",
        "pageRank": 0.01,
        "afferentCoupling": 2,
        "efferentCoupling": 1,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "App\\Factory\\LocationCityFactory",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaults",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Zenstruck\\Foundry\\ModelFactory",
            "App\\Factory\\LocationStateFactory"
        ],
        "parents": [
            "Zenstruck\\Foundry\\ModelFactory"
        ],
        "implements": [],
        "lcom": 4,
        "length": 9,
        "vocabulary": 6,
        "volume": 23.26,
        "difficulty": 0.6,
        "effort": 13.96,
        "level": 1.67,
        "bugs": 0.01,
        "time": 1,
        "intelligentContent": 38.77,
        "number_operators": 3,
        "number_operands": 6,
        "number_operators_unique": 1,
        "number_operands_unique": 5,
        "cloc": 48,
        "loc": 68,
        "lloc": 20,
        "mi": 110.11,
        "mIwoC": 61.92,
        "commentWeight": 48.2,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.6,
        "relativeSystemComplexity": 16.6,
        "totalStructuralComplexity": 64,
        "totalDataComplexity": 2.4,
        "totalSystemComplexity": 66.4,
        "package": "App\\Factory\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "App\\Factory\\LocationCountryFactory",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaults",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Zenstruck\\Foundry\\ModelFactory"
        ],
        "parents": [
            "Zenstruck\\Foundry\\ModelFactory"
        ],
        "implements": [],
        "lcom": 4,
        "length": 12,
        "vocabulary": 8,
        "volume": 36,
        "difficulty": 0.64,
        "effort": 23.14,
        "level": 1.56,
        "bugs": 0.01,
        "time": 1,
        "intelligentContent": 56,
        "number_operators": 3,
        "number_operands": 9,
        "number_operators_unique": 1,
        "number_operands_unique": 7,
        "cloc": 48,
        "loc": 68,
        "lloc": 20,
        "mi": 108.79,
        "mIwoC": 60.59,
        "commentWeight": 48.2,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.75,
        "relativeSystemComplexity": 9.75,
        "totalStructuralComplexity": 36,
        "totalDataComplexity": 3,
        "totalSystemComplexity": 39,
        "package": "App\\Factory\\",
        "pageRank": 0.02,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "App\\Factory\\LocationNeighborhoodFactory",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaults",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Zenstruck\\Foundry\\ModelFactory",
            "App\\Factory\\LocationCityFactory"
        ],
        "parents": [
            "Zenstruck\\Foundry\\ModelFactory"
        ],
        "implements": [],
        "lcom": 4,
        "length": 9,
        "vocabulary": 6,
        "volume": 23.26,
        "difficulty": 0.6,
        "effort": 13.96,
        "level": 1.67,
        "bugs": 0.01,
        "time": 1,
        "intelligentContent": 38.77,
        "number_operators": 3,
        "number_operands": 6,
        "number_operators_unique": 1,
        "number_operands_unique": 5,
        "cloc": 48,
        "loc": 68,
        "lloc": 20,
        "mi": 110.11,
        "mIwoC": 61.92,
        "commentWeight": 48.2,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.6,
        "relativeSystemComplexity": 16.6,
        "totalStructuralComplexity": 64,
        "totalDataComplexity": 2.4,
        "totalSystemComplexity": 66.4,
        "package": "App\\Factory\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Factory\\LocationStateFactory",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaults",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Zenstruck\\Foundry\\ModelFactory",
            "App\\Factory\\LocationCountryFactory"
        ],
        "parents": [
            "Zenstruck\\Foundry\\ModelFactory"
        ],
        "implements": [],
        "lcom": 4,
        "length": 9,
        "vocabulary": 6,
        "volume": 23.26,
        "difficulty": 0.6,
        "effort": 13.96,
        "level": 1.67,
        "bugs": 0.01,
        "time": 1,
        "intelligentContent": 38.77,
        "number_operators": 3,
        "number_operands": 6,
        "number_operators_unique": 1,
        "number_operands_unique": 5,
        "cloc": 48,
        "loc": 68,
        "lloc": 20,
        "mi": 110.11,
        "mIwoC": 61.92,
        "commentWeight": 48.2,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.6,
        "relativeSystemComplexity": 16.6,
        "totalStructuralComplexity": 64,
        "totalDataComplexity": 2.4,
        "totalSystemComplexity": 66.4,
        "package": "App\\Factory\\",
        "pageRank": 0.02,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "App\\Factory\\ResetUserPasswordFactory",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaults",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Zenstruck\\Foundry\\ModelFactory",
            "App\\Factory\\UserFactory"
        ],
        "parents": [
            "Zenstruck\\Foundry\\ModelFactory"
        ],
        "implements": [],
        "lcom": 4,
        "length": 8,
        "vocabulary": 6,
        "volume": 20.68,
        "difficulty": 0.5,
        "effort": 10.34,
        "level": 2,
        "bugs": 0.01,
        "time": 1,
        "intelligentContent": 41.36,
        "number_operators": 3,
        "number_operands": 5,
        "number_operators_unique": 1,
        "number_operands_unique": 5,
        "cloc": 48,
        "loc": 68,
        "lloc": 20,
        "mi": 110.47,
        "mIwoC": 62.27,
        "commentWeight": 48.2,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 25.5,
        "totalStructuralComplexity": 100,
        "totalDataComplexity": 2,
        "totalSystemComplexity": 102,
        "package": "App\\Factory\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Factory\\TranslationFactory",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaults",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Zenstruck\\Foundry\\ModelFactory",
            "App\\Factory\\LanguageFactory"
        ],
        "parents": [
            "Zenstruck\\Foundry\\ModelFactory"
        ],
        "implements": [],
        "lcom": 4,
        "length": 11,
        "vocabulary": 7,
        "volume": 30.88,
        "difficulty": 0.67,
        "effort": 20.59,
        "level": 1.5,
        "bugs": 0.01,
        "time": 1,
        "intelligentContent": 46.32,
        "number_operators": 3,
        "number_operands": 8,
        "number_operators_unique": 1,
        "number_operands_unique": 6,
        "cloc": 48,
        "loc": 68,
        "lloc": 20,
        "mi": 109.25,
        "mIwoC": 61.05,
        "commentWeight": 48.2,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.6,
        "relativeSystemComplexity": 16.6,
        "totalStructuralComplexity": 64,
        "totalDataComplexity": 2.4,
        "totalSystemComplexity": 66.4,
        "package": "App\\Factory\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Factory\\UserFactory",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaults",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Zenstruck\\Foundry\\ModelFactory",
            "App\\Factory\\AclUserGroupFactory"
        ],
        "parents": [
            "Zenstruck\\Foundry\\ModelFactory"
        ],
        "implements": [],
        "lcom": 4,
        "length": 19,
        "vocabulary": 14,
        "volume": 72.34,
        "difficulty": 0.62,
        "effort": 44.52,
        "level": 1.63,
        "bugs": 0.02,
        "time": 2,
        "intelligentContent": 117.55,
        "number_operators": 3,
        "number_operands": 16,
        "number_operators_unique": 1,
        "number_operands_unique": 13,
        "cloc": 48,
        "loc": 68,
        "lloc": 20,
        "mi": 106.66,
        "mIwoC": 58.47,
        "commentWeight": 48.2,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 25.5,
        "totalStructuralComplexity": 100,
        "totalDataComplexity": 2,
        "totalSystemComplexity": 102,
        "package": "App\\Factory\\",
        "pageRank": 0.02,
        "afferentCoupling": 3,
        "efferentCoupling": 2,
        "instability": 0.4,
        "violations": {}
    },
    {
        "name": "App\\Factory\\UserLanguageFactory",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaults",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Zenstruck\\Foundry\\ModelFactory",
            "App\\Factory\\LanguageFactory",
            "App\\Factory\\UserFactory"
        ],
        "parents": [
            "Zenstruck\\Foundry\\ModelFactory"
        ],
        "implements": [],
        "lcom": 4,
        "length": 10,
        "vocabulary": 7,
        "volume": 28.07,
        "difficulty": 0.58,
        "effort": 16.38,
        "level": 1.71,
        "bugs": 0.01,
        "time": 1,
        "intelligentContent": 48.13,
        "number_operators": 3,
        "number_operands": 7,
        "number_operators_unique": 1,
        "number_operands_unique": 6,
        "cloc": 48,
        "loc": 68,
        "lloc": 20,
        "mi": 109.54,
        "mIwoC": 61.34,
        "commentWeight": 48.2,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 25.5,
        "totalStructuralComplexity": 100,
        "totalDataComplexity": 2,
        "totalSystemComplexity": 102,
        "package": "App\\Factory\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Factory\\UserTypeFactory",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaults",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Zenstruck\\Foundry\\ModelFactory"
        ],
        "parents": [
            "Zenstruck\\Foundry\\ModelFactory"
        ],
        "implements": [],
        "lcom": 4,
        "length": 6,
        "vocabulary": 4,
        "volume": 12,
        "difficulty": 0.5,
        "effort": 6,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 24,
        "number_operators": 3,
        "number_operands": 3,
        "number_operators_unique": 1,
        "number_operands_unique": 3,
        "cloc": 48,
        "loc": 68,
        "lloc": 20,
        "mi": 112.13,
        "mIwoC": 63.93,
        "commentWeight": 48.2,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.75,
        "relativeSystemComplexity": 9.75,
        "totalStructuralComplexity": 36,
        "totalDataComplexity": 3,
        "totalSystemComplexity": 39,
        "package": "App\\Factory\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Form\\Helper\\LocationHelper",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getStates",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCities",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLocationBeforeSubmit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLocationBeforeLoadForm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "requestMethodIsPOST",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 31,
        "ccn": 26,
        "ccnMethodMax": 10,
        "externals": [
            "Doctrine\\ORM\\EntityManager",
            "Symfony\\Component\\HttpFoundation\\RequestStack",
            "App\\Utils\\StringHelper",
            "App\\Utils\\StringHelper",
            "Symfony\\Component\\Form\\FormInterface",
            "Symfony\\Component\\Form\\FormInterface"
        ],
        "parents": [],
        "implements": [],
        "lcom": 3,
        "length": 246,
        "vocabulary": 33,
        "volume": 1240.92,
        "difficulty": 18.11,
        "effort": 22474.46,
        "level": 0.06,
        "bugs": 0.41,
        "time": 1249,
        "intelligentContent": 68.52,
        "number_operators": 83,
        "number_operands": 163,
        "number_operators_unique": 6,
        "number_operands_unique": 27,
        "cloc": 51,
        "loc": 177,
        "lloc": 127,
        "mi": 65.9,
        "mIwoC": 28.95,
        "commentWeight": 36.95,
        "kanDefect": 1.94,
        "relativeStructuralComplexity": 441,
        "relativeDataComplexity": 0.58,
        "relativeSystemComplexity": 441.58,
        "totalStructuralComplexity": 2646,
        "totalDataComplexity": 3.45,
        "totalSystemComplexity": 2649.45,
        "package": "App\\Form\\Helper\\",
        "pageRank": 0.01,
        "afferentCoupling": 2,
        "efferentCoupling": 4,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "App\\Form\\SettingsAddressType",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "buildForm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "configureOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 6,
        "ccn": 4,
        "ccnMethodMax": 4,
        "externals": [
            "Symfony\\Component\\Form\\AbstractType",
            "Symfony\\Component\\HttpFoundation\\RequestStack",
            "App\\Form\\Helper\\LocationHelper",
            "Symfony\\Component\\Security\\Core\\Authentication\\Token\\Storage\\TokenStorageInterface",
            "Symfony\\Component\\Form\\FormBuilderInterface",
            "Symfony\\Component\\OptionsResolver\\OptionsResolver"
        ],
        "parents": [
            "Symfony\\Component\\Form\\AbstractType"
        ],
        "implements": [],
        "lcom": 3,
        "length": 147,
        "vocabulary": 60,
        "volume": 868.31,
        "difficulty": 6.09,
        "effort": 5288.82,
        "level": 0.16,
        "bugs": 0.29,
        "time": 294,
        "intelligentContent": 142.56,
        "number_operators": 13,
        "number_operands": 134,
        "number_operators_unique": 5,
        "number_operands_unique": 55,
        "cloc": 8,
        "loc": 40,
        "lloc": 33,
        "mi": 77.7,
        "mIwoC": 45.76,
        "commentWeight": 31.94,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 196,
        "relativeDataComplexity": 0.2,
        "relativeSystemComplexity": 196.2,
        "totalStructuralComplexity": 588,
        "totalDataComplexity": 0.6,
        "totalSystemComplexity": 588.6,
        "package": "App\\Form\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 6,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Form\\SettingsProfileType",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "buildForm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "configureOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUserTypesChoices",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 13,
        "ccn": 10,
        "ccnMethodMax": 9,
        "externals": [
            "Symfony\\Component\\Form\\AbstractType",
            "Doctrine\\ORM\\EntityManager",
            "Symfony\\Component\\HttpFoundation\\RequestStack",
            "App\\Service\\UploaderHelper",
            "Symfony\\Component\\Form\\FormBuilderInterface",
            "App\\Service\\DateTimeService",
            "Symfony\\Component\\OptionsResolver\\OptionsResolver"
        ],
        "parents": [
            "Symfony\\Component\\Form\\AbstractType"
        ],
        "implements": [],
        "lcom": 3,
        "length": 172,
        "vocabulary": 70,
        "volume": 1054.24,
        "difficulty": 7.83,
        "effort": 8258.19,
        "level": 0.13,
        "bugs": 0.35,
        "time": 459,
        "intelligentContent": 134.58,
        "number_operators": 31,
        "number_operands": 141,
        "number_operators_unique": 7,
        "number_operands_unique": 63,
        "cloc": 26,
        "loc": 95,
        "lloc": 72,
        "mi": 73.2,
        "mIwoC": 36.97,
        "commentWeight": 36.23,
        "kanDefect": 0.87,
        "relativeStructuralComplexity": 441,
        "relativeDataComplexity": 0.17,
        "relativeSystemComplexity": 441.17,
        "totalStructuralComplexity": 1764,
        "totalDataComplexity": 0.68,
        "totalSystemComplexity": 1764.68,
        "package": "App\\Form\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 7,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Form\\SettingsSecurityType",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "buildForm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "configureOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUserGroupsChoices",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 9,
        "ccn": 6,
        "ccnMethodMax": 5,
        "externals": [
            "Symfony\\Component\\Form\\AbstractType",
            "Doctrine\\ORM\\EntityManager",
            "Symfony\\Component\\HttpFoundation\\RequestStack",
            "Symfony\\Component\\PasswordHasher\\Hasher\\UserPasswordHasherInterface",
            "Symfony\\Component\\Form\\FormBuilderInterface",
            "Symfony\\Component\\Validator\\Constraints\\Length",
            "Symfony\\Component\\OptionsResolver\\OptionsResolver"
        ],
        "parents": [
            "Symfony\\Component\\Form\\AbstractType"
        ],
        "implements": [],
        "lcom": 3,
        "length": 109,
        "vocabulary": 45,
        "volume": 598.61,
        "difficulty": 4.24,
        "effort": 2540.45,
        "level": 0.24,
        "bugs": 0.2,
        "time": 141,
        "intelligentContent": 141.05,
        "number_operators": 22,
        "number_operands": 87,
        "number_operators_unique": 4,
        "number_operands_unique": 41,
        "cloc": 18,
        "loc": 66,
        "lloc": 50,
        "mi": 78.87,
        "mIwoC": 42.69,
        "commentWeight": 36.18,
        "kanDefect": 0.66,
        "relativeStructuralComplexity": 324,
        "relativeDataComplexity": 0.18,
        "relativeSystemComplexity": 324.18,
        "totalStructuralComplexity": 1296,
        "totalDataComplexity": 0.74,
        "totalSystemComplexity": 1296.74,
        "package": "App\\Form\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 7,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Form\\UserAddType",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "buildForm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "configureOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "App\\Form\\UserType",
            "Symfony\\Component\\Form\\FormBuilderInterface",
            "Symfony\\Component\\Validator\\Constraints\\Length",
            "Symfony\\Component\\OptionsResolver\\OptionsResolver",
            "Symfony\\Bridge\\Doctrine\\Validator\\Constraints\\UniqueEntity"
        ],
        "parents": [
            "App\\Form\\UserType"
        ],
        "implements": [],
        "lcom": 2,
        "length": 37,
        "vocabulary": 28,
        "volume": 177.87,
        "difficulty": 1.31,
        "effort": 232.6,
        "level": 0.76,
        "bugs": 0.06,
        "time": 13,
        "intelligentContent": 136.02,
        "number_operators": 3,
        "number_operands": 34,
        "number_operators_unique": 2,
        "number_operands_unique": 26,
        "cloc": 1,
        "loc": 16,
        "lloc": 15,
        "mi": 77.2,
        "mIwoC": 58.32,
        "commentWeight": 18.88,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.25,
        "relativeSystemComplexity": 25.25,
        "totalStructuralComplexity": 50,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 50.5,
        "package": "App\\Form\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 5,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Form\\UserEditType",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "buildForm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "configureOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "App\\Form\\UserType",
            "Symfony\\Component\\Form\\FormBuilderInterface",
            "Symfony\\Component\\Validator\\Constraints\\Length",
            "Symfony\\Component\\OptionsResolver\\OptionsResolver",
            "Symfony\\Bridge\\Doctrine\\Validator\\Constraints\\UniqueEntity"
        ],
        "parents": [
            "App\\Form\\UserType"
        ],
        "implements": [],
        "lcom": 2,
        "length": 41,
        "vocabulary": 32,
        "volume": 205,
        "difficulty": 1.27,
        "effort": 259.67,
        "level": 0.79,
        "bugs": 0.07,
        "time": 14,
        "intelligentContent": 161.84,
        "number_operators": 3,
        "number_operands": 38,
        "number_operators_unique": 2,
        "number_operands_unique": 30,
        "cloc": 1,
        "loc": 16,
        "lloc": 15,
        "mi": 76.77,
        "mIwoC": 57.89,
        "commentWeight": 18.88,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.25,
        "relativeSystemComplexity": 25.25,
        "totalStructuralComplexity": 50,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 50.5,
        "package": "App\\Form\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 5,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Form\\UserType",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addBuildForm",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUserGroupsChoices",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUserTypesChoices",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 16,
        "ccn": 13,
        "ccnMethodMax": 11,
        "externals": [
            "Symfony\\Component\\Form\\AbstractType",
            "Doctrine\\ORM\\EntityManager",
            "Symfony\\Component\\HttpFoundation\\RequestStack",
            "App\\Form\\Helper\\LocationHelper",
            "App\\Service\\UploaderHelper",
            "Symfony\\Component\\PasswordHasher\\Hasher\\UserPasswordHasherInterface",
            "Symfony\\Component\\Form\\FormBuilderInterface",
            "Symfony\\Component\\Form\\FormBuilderInterface",
            "App\\Service\\DateTimeService"
        ],
        "parents": [
            "Symfony\\Component\\Form\\AbstractType"
        ],
        "implements": [],
        "lcom": 2,
        "length": 345,
        "vocabulary": 112,
        "volume": 2348.54,
        "difficulty": 8.46,
        "effort": 19873.94,
        "level": 0.12,
        "bugs": 0.78,
        "time": 1104,
        "intelligentContent": 277.53,
        "number_operators": 46,
        "number_operands": 299,
        "number_operators_unique": 6,
        "number_operands_unique": 106,
        "cloc": 44,
        "loc": 129,
        "lloc": 90,
        "mi": 71.33,
        "mIwoC": 32.02,
        "commentWeight": 39.31,
        "kanDefect": 1.31,
        "relativeStructuralComplexity": 841,
        "relativeDataComplexity": 0.2,
        "relativeSystemComplexity": 841.2,
        "totalStructuralComplexity": 3364,
        "totalDataComplexity": 0.8,
        "totalSystemComplexity": 3364.8,
        "package": "App\\Form\\",
        "pageRank": 0.01,
        "afferentCoupling": 2,
        "efferentCoupling": 8,
        "instability": 0.8,
        "violations": {}
    },
    {
        "name": "App\\Kernel",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Symfony\\Component\\HttpKernel\\Kernel"
        ],
        "parents": [
            "Symfony\\Component\\HttpKernel\\Kernel"
        ],
        "implements": [],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 0,
        "loc": 5,
        "lloc": 5,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "App\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\AccountVerificationRepository",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository",
            "Doctrine\\Persistence\\ManagerRegistry",
            "App\\Entity\\AccountVerification",
            "App\\Entity\\AccountVerification"
        ],
        "parents": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository"
        ],
        "implements": [],
        "lcom": 2,
        "length": 16,
        "vocabulary": 5,
        "volume": 37.15,
        "difficulty": 1.75,
        "effort": 65.01,
        "level": 0.57,
        "bugs": 0.01,
        "time": 4,
        "intelligentContent": 21.23,
        "number_operators": 2,
        "number_operands": 14,
        "number_operators_unique": 1,
        "number_operands_unique": 4,
        "cloc": 32,
        "loc": 53,
        "lloc": 22,
        "mi": 105.99,
        "mIwoC": 59.32,
        "commentWeight": 46.67,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.28,
        "relativeSystemComplexity": 25.28,
        "totalStructuralComplexity": 75,
        "totalDataComplexity": 0.83,
        "totalSystemComplexity": 75.83,
        "package": "App\\Repository\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\AclActionRepository",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository",
            "Doctrine\\Persistence\\ManagerRegistry",
            "App\\Entity\\AclAction",
            "App\\Entity\\AclAction"
        ],
        "parents": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository"
        ],
        "implements": [],
        "lcom": 2,
        "length": 16,
        "vocabulary": 5,
        "volume": 37.15,
        "difficulty": 1.75,
        "effort": 65.01,
        "level": 0.57,
        "bugs": 0.01,
        "time": 4,
        "intelligentContent": 21.23,
        "number_operators": 2,
        "number_operands": 14,
        "number_operators_unique": 1,
        "number_operands_unique": 4,
        "cloc": 32,
        "loc": 53,
        "lloc": 22,
        "mi": 105.99,
        "mIwoC": 59.32,
        "commentWeight": 46.67,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.28,
        "relativeSystemComplexity": 25.28,
        "totalStructuralComplexity": 75,
        "totalDataComplexity": 0.83,
        "totalSystemComplexity": 75.83,
        "package": "App\\Repository\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\AclControllerRepository",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository",
            "Doctrine\\Persistence\\ManagerRegistry",
            "App\\Entity\\AclController",
            "App\\Entity\\AclController"
        ],
        "parents": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository"
        ],
        "implements": [],
        "lcom": 2,
        "length": 16,
        "vocabulary": 5,
        "volume": 37.15,
        "difficulty": 1.75,
        "effort": 65.01,
        "level": 0.57,
        "bugs": 0.01,
        "time": 4,
        "intelligentContent": 21.23,
        "number_operators": 2,
        "number_operands": 14,
        "number_operators_unique": 1,
        "number_operands_unique": 4,
        "cloc": 32,
        "loc": 53,
        "lloc": 22,
        "mi": 105.99,
        "mIwoC": 59.32,
        "commentWeight": 46.67,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.28,
        "relativeSystemComplexity": 25.28,
        "totalStructuralComplexity": 75,
        "totalDataComplexity": 0.83,
        "totalSystemComplexity": 75.83,
        "package": "App\\Repository\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\AclPermissionRepository",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "findRoles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 6,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository",
            "Doctrine\\Persistence\\ManagerRegistry",
            "App\\Entity\\AclPermission",
            "App\\Entity\\AclPermission"
        ],
        "parents": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository"
        ],
        "implements": [],
        "lcom": 3,
        "length": 35,
        "vocabulary": 19,
        "volume": 148.68,
        "difficulty": 2.91,
        "effort": 432.09,
        "level": 0.34,
        "bugs": 0.05,
        "time": 24,
        "intelligentContent": 51.16,
        "number_operators": 4,
        "number_operands": 31,
        "number_operators_unique": 3,
        "number_operands_unique": 16,
        "cloc": 15,
        "loc": 46,
        "lloc": 32,
        "mi": 90.24,
        "mIwoC": 51.55,
        "commentWeight": 38.68,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 0.19,
        "relativeSystemComplexity": 144.19,
        "totalStructuralComplexity": 576,
        "totalDataComplexity": 0.77,
        "totalSystemComplexity": 576.77,
        "package": "App\\Repository\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\AclUserGroupRepository",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "findAllByLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 8,
        "ccn": 5,
        "ccnMethodMax": 3,
        "externals": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository",
            "Doctrine\\Persistence\\ManagerRegistry",
            "App\\Entity\\AclUserGroup",
            "App\\Entity\\AclUserGroup"
        ],
        "parents": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository"
        ],
        "implements": [],
        "lcom": 3,
        "length": 40,
        "vocabulary": 20,
        "volume": 172.88,
        "difficulty": 5.33,
        "effort": 922.01,
        "level": 0.19,
        "bugs": 0.06,
        "time": 51,
        "intelligentContent": 32.41,
        "number_operators": 8,
        "number_operands": 32,
        "number_operators_unique": 5,
        "number_operands_unique": 15,
        "cloc": 15,
        "loc": 46,
        "lloc": 33,
        "mi": 89.22,
        "mIwoC": 50.53,
        "commentWeight": 38.68,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 0.19,
        "relativeSystemComplexity": 144.19,
        "totalStructuralComplexity": 576,
        "totalDataComplexity": 0.77,
        "totalSystemComplexity": 576.77,
        "package": "App\\Repository\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\LanguageRepository",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository",
            "Doctrine\\Persistence\\ManagerRegistry",
            "App\\Entity\\Language",
            "App\\Entity\\Language"
        ],
        "parents": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository"
        ],
        "implements": [],
        "lcom": 2,
        "length": 16,
        "vocabulary": 5,
        "volume": 37.15,
        "difficulty": 1.75,
        "effort": 65.01,
        "level": 0.57,
        "bugs": 0.01,
        "time": 4,
        "intelligentContent": 21.23,
        "number_operators": 2,
        "number_operands": 14,
        "number_operators_unique": 1,
        "number_operands_unique": 4,
        "cloc": 32,
        "loc": 53,
        "lloc": 22,
        "mi": 105.99,
        "mIwoC": 59.32,
        "commentWeight": 46.67,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.28,
        "relativeSystemComplexity": 25.28,
        "totalStructuralComplexity": 75,
        "totalDataComplexity": 0.83,
        "totalSystemComplexity": 75.83,
        "package": "App\\Repository\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\LocationCityRepository",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listAllByState",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 7,
        "ccn": 4,
        "ccnMethodMax": 2,
        "externals": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository",
            "Doctrine\\Persistence\\ManagerRegistry",
            "App\\Entity\\LocationCity",
            "App\\Entity\\LocationCity"
        ],
        "parents": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository"
        ],
        "implements": [],
        "lcom": 3,
        "length": 32,
        "vocabulary": 15,
        "volume": 125.02,
        "difficulty": 4.73,
        "effort": 591.01,
        "level": 0.21,
        "bugs": 0.04,
        "time": 33,
        "intelligentContent": 26.45,
        "number_operators": 6,
        "number_operands": 26,
        "number_operators_unique": 4,
        "number_operands_unique": 11,
        "cloc": 14,
        "loc": 45,
        "lloc": 32,
        "mi": 89.97,
        "mIwoC": 51.95,
        "commentWeight": 38.03,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 121,
        "relativeDataComplexity": 0.21,
        "relativeSystemComplexity": 121.21,
        "totalStructuralComplexity": 484,
        "totalDataComplexity": 0.83,
        "totalSystemComplexity": 484.83,
        "package": "App\\Repository\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\LocationCountryRepository",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "search",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "findAllCallingCodes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 7,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository",
            "Doctrine\\Persistence\\ManagerRegistry",
            "App\\Entity\\LocationCountry",
            "App\\Entity\\LocationCountry"
        ],
        "parents": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository"
        ],
        "implements": [],
        "lcom": 3,
        "length": 38,
        "vocabulary": 17,
        "volume": 155.32,
        "difficulty": 3.43,
        "effort": 532.54,
        "level": 0.29,
        "bugs": 0.05,
        "time": 30,
        "intelligentContent": 45.3,
        "number_operators": 6,
        "number_operands": 32,
        "number_operators_unique": 3,
        "number_operands_unique": 14,
        "cloc": 21,
        "loc": 56,
        "lloc": 39,
        "mi": 90.18,
        "mIwoC": 49.55,
        "commentWeight": 40.63,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 169,
        "relativeDataComplexity": 0.23,
        "relativeSystemComplexity": 169.23,
        "totalStructuralComplexity": 845,
        "totalDataComplexity": 1.14,
        "totalSystemComplexity": 846.14,
        "package": "App\\Repository\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\LocationNeighborhoodRepository",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "findAdd",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 12,
        "ccn": 9,
        "ccnMethodMax": 7,
        "externals": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository",
            "Doctrine\\Persistence\\ManagerRegistry",
            "App\\Entity\\LocationNeighborhood",
            "App\\Entity\\LocationNeighborhood",
            "Gedmo\\Sluggable\\Util\\Urlizer",
            "App\\Entity\\LocationNeighborhood"
        ],
        "parents": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository"
        ],
        "implements": [],
        "lcom": 2,
        "length": 78,
        "vocabulary": 19,
        "volume": 331.34,
        "difficulty": 10.71,
        "effort": 3550.05,
        "level": 0.09,
        "bugs": 0.11,
        "time": 197,
        "intelligentContent": 30.92,
        "number_operators": 18,
        "number_operands": 60,
        "number_operators_unique": 5,
        "number_operands_unique": 14,
        "cloc": 16,
        "loc": 67,
        "lloc": 51,
        "mi": 78.23,
        "mIwoC": 43.89,
        "commentWeight": 34.34,
        "kanDefect": 0.64,
        "relativeStructuralComplexity": 256,
        "relativeDataComplexity": 0.26,
        "relativeSystemComplexity": 256.26,
        "totalStructuralComplexity": 1024,
        "totalDataComplexity": 1.06,
        "totalSystemComplexity": 1025.06,
        "package": "App\\Repository\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\LocationStateRepository",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listAllByCountry",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 7,
        "ccn": 4,
        "ccnMethodMax": 2,
        "externals": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository",
            "Doctrine\\Persistence\\ManagerRegistry",
            "App\\Entity\\LocationState",
            "App\\Entity\\LocationState"
        ],
        "parents": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository"
        ],
        "implements": [],
        "lcom": 3,
        "length": 32,
        "vocabulary": 15,
        "volume": 125.02,
        "difficulty": 4.73,
        "effort": 591.01,
        "level": 0.21,
        "bugs": 0.04,
        "time": 33,
        "intelligentContent": 26.45,
        "number_operators": 6,
        "number_operands": 26,
        "number_operators_unique": 4,
        "number_operands_unique": 11,
        "cloc": 14,
        "loc": 46,
        "lloc": 33,
        "mi": 89.37,
        "mIwoC": 51.65,
        "commentWeight": 37.72,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 121,
        "relativeDataComplexity": 0.21,
        "relativeSystemComplexity": 121.21,
        "totalStructuralComplexity": 484,
        "totalDataComplexity": 0.83,
        "totalSystemComplexity": 484.83,
        "package": "App\\Repository\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\ResetUserPasswordRepository",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository",
            "Doctrine\\Persistence\\ManagerRegistry",
            "App\\Entity\\ResetUserPassword",
            "App\\Entity\\ResetUserPassword"
        ],
        "parents": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository"
        ],
        "implements": [],
        "lcom": 2,
        "length": 16,
        "vocabulary": 5,
        "volume": 37.15,
        "difficulty": 1.75,
        "effort": 65.01,
        "level": 0.57,
        "bugs": 0.01,
        "time": 4,
        "intelligentContent": 21.23,
        "number_operators": 2,
        "number_operands": 14,
        "number_operators_unique": 1,
        "number_operands_unique": 4,
        "cloc": 32,
        "loc": 53,
        "lloc": 22,
        "mi": 105.99,
        "mIwoC": 59.32,
        "commentWeight": 46.67,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.28,
        "relativeSystemComplexity": 25.28,
        "totalStructuralComplexity": 75,
        "totalDataComplexity": 0.83,
        "totalSystemComplexity": 75.83,
        "package": "App\\Repository\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\TranslationRepository",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository",
            "Doctrine\\Persistence\\ManagerRegistry",
            "App\\Entity\\Translation",
            "App\\Entity\\Translation"
        ],
        "parents": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository"
        ],
        "implements": [],
        "lcom": 2,
        "length": 16,
        "vocabulary": 5,
        "volume": 37.15,
        "difficulty": 1.75,
        "effort": 65.01,
        "level": 0.57,
        "bugs": 0.01,
        "time": 4,
        "intelligentContent": 21.23,
        "number_operators": 2,
        "number_operands": 14,
        "number_operators_unique": 1,
        "number_operands_unique": 4,
        "cloc": 8,
        "loc": 30,
        "lloc": 22,
        "mi": 95.19,
        "mIwoC": 59.32,
        "commentWeight": 35.87,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.28,
        "relativeSystemComplexity": 25.28,
        "totalStructuralComplexity": 75,
        "totalDataComplexity": 0.83,
        "totalSystemComplexity": 75.83,
        "package": "App\\Repository\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\UserLanguageRepository",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository",
            "Doctrine\\Persistence\\ManagerRegistry",
            "App\\Entity\\UserLanguage",
            "App\\Entity\\UserLanguage"
        ],
        "parents": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository"
        ],
        "implements": [],
        "lcom": 2,
        "length": 16,
        "vocabulary": 5,
        "volume": 37.15,
        "difficulty": 1.75,
        "effort": 65.01,
        "level": 0.57,
        "bugs": 0.01,
        "time": 4,
        "intelligentContent": 21.23,
        "number_operators": 2,
        "number_operands": 14,
        "number_operators_unique": 1,
        "number_operands_unique": 4,
        "cloc": 32,
        "loc": 53,
        "lloc": 22,
        "mi": 105.99,
        "mIwoC": 59.32,
        "commentWeight": 46.67,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.28,
        "relativeSystemComplexity": 25.28,
        "totalStructuralComplexity": 75,
        "totalDataComplexity": 0.83,
        "totalSystemComplexity": 75.83,
        "package": "App\\Repository\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\UserRepository",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "upgradePassword",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "findLatest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 13,
        "ccn": 9,
        "ccnMethodMax": 6,
        "externals": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository",
            "Symfony\\Component\\Security\\Core\\User\\PasswordUpgraderInterface",
            "Doctrine\\Persistence\\ManagerRegistry",
            "Knp\\Component\\Pager\\PaginatorInterface",
            "App\\Entity\\User",
            "App\\Entity\\User",
            "Symfony\\Component\\Security\\Core\\User\\PasswordAuthenticatedUserInterface",
            "Symfony\\Component\\Security\\Core\\Exception\\UnsupportedUserException",
            "Knp\\Component\\Pager\\Pagination\\PaginationInterface",
            "App\\Utils\\StringHelper"
        ],
        "parents": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository"
        ],
        "implements": [
            "Symfony\\Component\\Security\\Core\\User\\PasswordUpgraderInterface"
        ],
        "lcom": 3,
        "length": 101,
        "vocabulary": 35,
        "volume": 518.06,
        "difficulty": 8.38,
        "effort": 4340.97,
        "level": 0.12,
        "bugs": 0.17,
        "time": 241,
        "intelligentContent": 61.83,
        "number_operators": 20,
        "number_operands": 81,
        "number_operators_unique": 6,
        "number_operands_unique": 29,
        "cloc": 21,
        "loc": 78,
        "lloc": 58,
        "mi": 77.32,
        "mIwoC": 41.32,
        "commentWeight": 36,
        "kanDefect": 0.73,
        "relativeStructuralComplexity": 441,
        "relativeDataComplexity": 0.13,
        "relativeSystemComplexity": 441.13,
        "totalStructuralComplexity": 2205,
        "totalDataComplexity": 0.64,
        "totalSystemComplexity": 2205.64,
        "package": "App\\Repository\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 9,
        "instability": 0.9,
        "violations": {}
    },
    {
        "name": "App\\Repository\\UserTypeRepository",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "findAllByLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 8,
        "ccn": 5,
        "ccnMethodMax": 3,
        "externals": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository",
            "Doctrine\\Persistence\\ManagerRegistry",
            "App\\Entity\\UserType",
            "App\\Entity\\UserType"
        ],
        "parents": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository"
        ],
        "implements": [],
        "lcom": 3,
        "length": 40,
        "vocabulary": 20,
        "volume": 172.88,
        "difficulty": 5.33,
        "effort": 922.01,
        "level": 0.19,
        "bugs": 0.06,
        "time": 51,
        "intelligentContent": 32.41,
        "number_operators": 8,
        "number_operands": 32,
        "number_operators_unique": 5,
        "number_operands_unique": 15,
        "cloc": 14,
        "loc": 45,
        "lloc": 33,
        "mi": 88.56,
        "mIwoC": 50.53,
        "commentWeight": 38.03,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 0.19,
        "relativeSystemComplexity": 144.19,
        "totalStructuralComplexity": 576,
        "totalDataComplexity": 0.77,
        "totalSystemComplexity": 576.77,
        "package": "App\\Repository\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Service\\DateTimeService",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "getDateFormatFromLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "IntlDateFormatter"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 6,
        "vocabulary": 4,
        "volume": 12,
        "difficulty": 2,
        "effort": 24,
        "level": 0.5,
        "bugs": 0,
        "time": 1,
        "intelligentContent": 6,
        "number_operators": 2,
        "number_operands": 4,
        "number_operators_unique": 2,
        "number_operands_unique": 2,
        "cloc": 9,
        "loc": 18,
        "lloc": 9,
        "mi": 115.95,
        "mIwoC": 71.49,
        "commentWeight": 44.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 2,
        "package": "App\\Service\\",
        "pageRank": 0.01,
        "afferentCoupling": 2,
        "efferentCoupling": 1,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "App\\Service\\GeoIP2Service",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCountryIsoCodeOfUser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Symfony\\Component\\HttpFoundation\\RequestStack",
            "GeoIp2\\Database\\Reader"
        ],
        "parents": [],
        "implements": [],
        "lcom": 2,
        "length": 24,
        "vocabulary": 13,
        "volume": 88.81,
        "difficulty": 2.4,
        "effort": 213.15,
        "level": 0.42,
        "bugs": 0.03,
        "time": 12,
        "intelligentContent": 37,
        "number_operators": 8,
        "number_operands": 16,
        "number_operators_unique": 3,
        "number_operands_unique": 10,
        "cloc": 12,
        "loc": 32,
        "lloc": 20,
        "mi": 98.34,
        "mIwoC": 57.71,
        "commentWeight": 40.63,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.75,
        "relativeSystemComplexity": 9.75,
        "totalStructuralComplexity": 18,
        "totalDataComplexity": 1.5,
        "totalSystemComplexity": 19.5,
        "package": "App\\Service\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Service\\UploaderHelper",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "uploadMedia",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deleteFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "saveFile",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "uploadImageToCDN",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClientCDN",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "generateFileName",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUrlFromCDN",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "moveToCDN",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeFromCDN",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 10,
        "nbMethods": 10,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 30,
        "ccn": 21,
        "ccnMethodMax": 6,
        "externals": [
            "Symfony\\Component\\Filesystem\\Filesystem",
            "Symfony\\Contracts\\Translation\\TranslatorInterface",
            "Symfony\\Component\\HttpFoundation\\File\\UploadedFile",
            "Symfony\\Component\\HttpFoundation\\File\\UploadedFile",
            "Symfony\\Component\\HttpFoundation\\File\\UploadedFile",
            "Gumlet\\ImageResize",
            "Aws\\S3\\S3Client",
            "Aws\\S3\\S3Client",
            "Gedmo\\Sluggable\\Util\\Urlizer",
            "Aws\\Result",
            "Gumlet\\ImageResize",
            "Symfony\\Component\\HttpFoundation\\File\\Exception\\FileException"
        ],
        "parents": [],
        "implements": [],
        "lcom": 2,
        "length": 390,
        "vocabulary": 71,
        "volume": 2398.4,
        "difficulty": 23.77,
        "effort": 57011.18,
        "level": 0.04,
        "bugs": 0.8,
        "time": 3167,
        "intelligentContent": 100.9,
        "number_operators": 100,
        "number_operands": 290,
        "number_operators_unique": 10,
        "number_operands_unique": 61,
        "cloc": 51,
        "loc": 171,
        "lloc": 120,
        "mi": 65.59,
        "mIwoC": 28.15,
        "commentWeight": 37.43,
        "kanDefect": 0.57,
        "relativeStructuralComplexity": 256,
        "relativeDataComplexity": 0.61,
        "relativeSystemComplexity": 256.61,
        "totalStructuralComplexity": 2560,
        "totalDataComplexity": 6.06,
        "totalSystemComplexity": 2566.06,
        "package": "App\\Service\\",
        "pageRank": 0.01,
        "afferentCoupling": 2,
        "efferentCoupling": 8,
        "instability": 0.8,
        "violations": {}
    },
    {
        "name": "App\\Twig\\Extension\\AclExtension",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "getFilters",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFunctions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Twig\\Extension\\AbstractExtension",
            "Twig\\TwigFunction"
        ],
        "parents": [
            "Twig\\Extension\\AbstractExtension"
        ],
        "implements": [],
        "lcom": 2,
        "length": 4,
        "vocabulary": 3,
        "volume": 6.34,
        "difficulty": 0.5,
        "effort": 3.17,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 12.68,
        "number_operators": 2,
        "number_operands": 2,
        "number_operators_unique": 1,
        "number_operands_unique": 2,
        "cloc": 0,
        "loc": 12,
        "lloc": 12,
        "mi": 70.71,
        "mIwoC": 70.71,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 4,
        "totalSystemComplexity": 4,
        "package": "App\\Twig\\Extension\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Twig\\Extension\\LanguageExtension",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "getFilters",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFunctions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Twig\\Extension\\AbstractExtension",
            "Twig\\TwigFilter"
        ],
        "parents": [
            "Twig\\Extension\\AbstractExtension"
        ],
        "implements": [],
        "lcom": 2,
        "length": 4,
        "vocabulary": 3,
        "volume": 6.34,
        "difficulty": 0.5,
        "effort": 3.17,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 12.68,
        "number_operators": 2,
        "number_operands": 2,
        "number_operators_unique": 1,
        "number_operands_unique": 2,
        "cloc": 0,
        "loc": 12,
        "lloc": 12,
        "mi": 70.71,
        "mIwoC": 70.71,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 4,
        "totalSystemComplexity": 4,
        "package": "App\\Twig\\Extension\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Twig\\Extension\\WebsiteExtension",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "getFilters",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFunctions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Twig\\Extension\\AbstractExtension",
            "Twig\\TwigFilter",
            "Twig\\TwigFunction",
            "Twig\\TwigFunction",
            "Twig\\TwigFunction",
            "Twig\\TwigFunction",
            "Twig\\TwigFunction"
        ],
        "parents": [
            "Twig\\Extension\\AbstractExtension"
        ],
        "implements": [],
        "lcom": 2,
        "length": 14,
        "vocabulary": 13,
        "volume": 51.81,
        "difficulty": 0.5,
        "effort": 25.9,
        "level": 2,
        "bugs": 0.02,
        "time": 1,
        "intelligentContent": 103.61,
        "number_operators": 2,
        "number_operands": 12,
        "number_operators_unique": 1,
        "number_operands_unique": 12,
        "cloc": 0,
        "loc": 12,
        "lloc": 12,
        "mi": 64.32,
        "mIwoC": 64.32,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 4,
        "totalSystemComplexity": 4,
        "package": "App\\Twig\\Extension\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Twig\\Runtime\\AclExtensionRuntime",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isAccessible",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 6,
        "ccn": 5,
        "ccnMethodMax": 5,
        "externals": [
            "Twig\\Extension\\RuntimeExtensionInterface",
            "Symfony\\Component\\Security\\Core\\Authentication\\Token\\Storage\\TokenStorageInterface"
        ],
        "parents": [],
        "implements": [
            "Twig\\Extension\\RuntimeExtensionInterface"
        ],
        "lcom": 2,
        "length": 31,
        "vocabulary": 14,
        "volume": 118.03,
        "difficulty": 5.83,
        "effort": 688.5,
        "level": 0.17,
        "bugs": 0.04,
        "time": 38,
        "intelligentContent": 20.23,
        "number_operators": 10,
        "number_operands": 21,
        "number_operators_unique": 5,
        "number_operands_unique": 9,
        "cloc": 8,
        "loc": 22,
        "lloc": 14,
        "mi": 100.02,
        "mIwoC": 59.82,
        "commentWeight": 40.21,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.75,
        "relativeSystemComplexity": 9.75,
        "totalStructuralComplexity": 18,
        "totalDataComplexity": 1.5,
        "totalSystemComplexity": 19.5,
        "package": "App\\Twig\\Runtime\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Twig\\Runtime\\LanguageExtensionRuntime",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFlagIconByLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [
            "Twig\\Extension\\RuntimeExtensionInterface"
        ],
        "parents": [],
        "implements": [
            "Twig\\Extension\\RuntimeExtensionInterface"
        ],
        "lcom": 2,
        "length": 10,
        "vocabulary": 4,
        "volume": 20,
        "difficulty": 6,
        "effort": 120,
        "level": 0.17,
        "bugs": 0.01,
        "time": 7,
        "intelligentContent": 3.33,
        "number_operators": 6,
        "number_operands": 4,
        "number_operators_unique": 3,
        "number_operands_unique": 1,
        "cloc": 5,
        "loc": 21,
        "lloc": 16,
        "mi": 98.52,
        "mIwoC": 64.22,
        "commentWeight": 34.3,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 3.5,
        "relativeSystemComplexity": 3.5,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 7,
        "totalSystemComplexity": 7,
        "package": "App\\Twig\\Runtime\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Twig\\Runtime\\WebsiteExtensionRuntime",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getImage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getHtmlToggle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLocales",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "displayClass",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTextByTranslateKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCountryCallingCodes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 20,
        "ccn": 14,
        "ccnMethodMax": 6,
        "externals": [
            "Twig\\Extension\\RuntimeExtensionInterface",
            "Symfony\\Contracts\\Translation\\TranslatorInterface",
            "App\\Utils\\Acl",
            "Doctrine\\ORM\\EntityManagerInterface"
        ],
        "parents": [],
        "implements": [
            "Twig\\Extension\\RuntimeExtensionInterface"
        ],
        "lcom": 4,
        "length": 148,
        "vocabulary": 52,
        "volume": 843.67,
        "difficulty": 9.73,
        "effort": 8211.02,
        "level": 0.1,
        "bugs": 0.28,
        "time": 456,
        "intelligentContent": 86.68,
        "number_operators": 55,
        "number_operands": 93,
        "number_operators_unique": 9,
        "number_operands_unique": 43,
        "cloc": 31,
        "loc": 103,
        "lloc": 73,
        "mi": 74.54,
        "mIwoC": 36.98,
        "commentWeight": 37.56,
        "kanDefect": 1.17,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 2.31,
        "relativeSystemComplexity": 27.31,
        "totalStructuralComplexity": 175,
        "totalDataComplexity": 16.17,
        "totalSystemComplexity": 191.17,
        "package": "App\\Twig\\Runtime\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Utils\\Acl",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadRoles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isAuthorized",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRoles",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getControllerName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getActionName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 14,
        "ccn": 10,
        "ccnMethodMax": 9,
        "externals": [
            "Symfony\\Component\\HttpFoundation\\RequestStack",
            "Doctrine\\ORM\\EntityManagerInterface",
            "Symfony\\Component\\Security\\Core\\Authentication\\Token\\Storage\\TokenStorageInterface",
            "Symfony\\Contracts\\Translation\\TranslatorInterface",
            "Symfony\\Bundle\\SecurityBundle\\Security",
            "Symfony\\Component\\Security\\Core\\Exception\\AccessDeniedException",
            "Nette\\Utils\\Strings",
            "App\\Utils\\StringHelper",
            "Nette\\Utils\\Strings",
            "App\\Utils\\StringHelper"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 134,
        "vocabulary": 36,
        "volume": 692.77,
        "difficulty": 9.3,
        "effort": 6442.76,
        "level": 0.11,
        "bugs": 0.23,
        "time": 358,
        "intelligentContent": 74.49,
        "number_operators": 41,
        "number_operands": 93,
        "number_operators_unique": 6,
        "number_operands_unique": 30,
        "cloc": 49,
        "loc": 117,
        "lloc": 70,
        "mi": 80.66,
        "mIwoC": 38.52,
        "commentWeight": 42.14,
        "kanDefect": 0.66,
        "relativeStructuralComplexity": 225,
        "relativeDataComplexity": 0.56,
        "relativeSystemComplexity": 225.56,
        "totalStructuralComplexity": 1350,
        "totalDataComplexity": 3.38,
        "totalSystemComplexity": 1353.38,
        "package": "App\\Utils\\",
        "pageRank": 0.01,
        "afferentCoupling": 2,
        "efferentCoupling": 8,
        "instability": 0.8,
        "violations": {}
    },
    {
        "name": "App\\Utils\\StringHelper",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "dashesToCamelCase",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "camelCaseToDashed",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extractSearchTerms",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isYouTube",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 7,
        "ccn": 4,
        "ccnMethodMax": 3,
        "externals": [
            "Nette\\Utils\\Strings",
            "Nette\\Utils\\Strings"
        ],
        "parents": [],
        "implements": [],
        "lcom": 4,
        "length": 69,
        "vocabulary": 28,
        "volume": 331.71,
        "difficulty": 6.68,
        "effort": 2216.41,
        "level": 0.15,
        "bugs": 0.11,
        "time": 123,
        "intelligentContent": 49.64,
        "number_operators": 20,
        "number_operands": 49,
        "number_operators_unique": 6,
        "number_operands_unique": 22,
        "cloc": 22,
        "loc": 56,
        "lloc": 34,
        "mi": 89.68,
        "mIwoC": 48.4,
        "commentWeight": 41.27,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.08,
        "relativeSystemComplexity": 26.08,
        "totalStructuralComplexity": 100,
        "totalDataComplexity": 4.33,
        "totalSystemComplexity": 104.33,
        "package": "App\\Utils\\",
        "pageRank": 0.02,
        "afferentCoupling": 3,
        "efferentCoupling": 1,
        "instability": 0.25,
        "violations": {}
    },
    {
        "name": "App\\Utils\\TranslationHelper",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "convertTranslateKeyAsKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "camelCaseToDashed",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extractSearchTerms",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isYouTube",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 9,
        "ccn": 6,
        "ccnMethodMax": 4,
        "externals": [
            "Nette\\Utils\\Strings",
            "Nette\\Utils\\Strings"
        ],
        "parents": [],
        "implements": [],
        "lcom": 4,
        "length": 67,
        "vocabulary": 28,
        "volume": 322.09,
        "difficulty": 6.14,
        "effort": 1976.48,
        "level": 0.16,
        "bugs": 0.11,
        "time": 110,
        "intelligentContent": 52.49,
        "number_operators": 22,
        "number_operands": 45,
        "number_operators_unique": 6,
        "number_operands_unique": 22,
        "cloc": 25,
        "loc": 61,
        "lloc": 36,
        "mi": 89.53,
        "mIwoC": 47.68,
        "commentWeight": 41.85,
        "kanDefect": 0.52,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 26,
        "totalStructuralComplexity": 100,
        "totalDataComplexity": 4,
        "totalSystemComplexity": 104,
        "package": "App\\Utils\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    }
]