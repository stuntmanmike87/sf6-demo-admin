var classes = [
    {
        "name": "App\\Command\\UserAdminCommand",
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
        "pageRank": 0.01,
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
        "cloc": 5,
        "loc": 15,
        "lloc": 10,
        "mi": 108.43,
        "mIwoC": 69.44,
        "commentWeight": 38.99,
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
        "final": false,
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
        "cloc": 31,
        "loc": 71,
        "lloc": 40,
        "mi": 88.17,
        "mIwoC": 45.47,
        "commentWeight": 42.7,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 0.46,
        "relativeSystemComplexity": 144.46,
        "totalStructuralComplexity": 432,
        "totalDataComplexity": 1.38,
        "totalSystemComplexity": 433.38,
        "package": "App\\Controller\\Admin\\",
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 6,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Controller\\Admin\\UserController",
        "interface": false,
        "abstract": false,
        "final": false,
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
        "length": 115,
        "vocabulary": 34,
        "volume": 585.06,
        "difficulty": 6.53,
        "effort": 3822.38,
        "level": 0.15,
        "bugs": 0.2,
        "time": 212,
        "intelligentContent": 89.55,
        "number_operators": 17,
        "number_operands": 98,
        "number_operators_unique": 4,
        "number_operands_unique": 30,
        "cloc": 3,
        "loc": 42,
        "lloc": 39,
        "mi": 65.36,
        "mIwoC": 45.24,
        "commentWeight": 20.12,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 441,
        "relativeDataComplexity": 0.38,
        "relativeSystemComplexity": 441.38,
        "totalStructuralComplexity": 1323,
        "totalDataComplexity": 1.14,
        "totalSystemComplexity": 1324.14,
        "package": "App\\Controller\\Admin\\",
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 9,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Controller\\Api\\LocationCityController",
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
                "name": "listAction",
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
        "length": 73,
        "vocabulary": 29,
        "volume": 354.63,
        "difficulty": 5.63,
        "effort": 1994.81,
        "level": 0.18,
        "bugs": 0.12,
        "time": 111,
        "intelligentContent": 63.05,
        "number_operators": 19,
        "number_operands": 54,
        "number_operators_unique": 5,
        "number_operands_unique": 24,
        "cloc": 9,
        "loc": 42,
        "lloc": 33,
        "mi": 81.21,
        "mIwoC": 48.35,
        "commentWeight": 32.86,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 0.4,
        "relativeSystemComplexity": 81.4,
        "totalStructuralComplexity": 162,
        "totalDataComplexity": 0.8,
        "totalSystemComplexity": 162.8,
        "package": "App\\Controller\\Api\\",
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 9,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Controller\\Api\\LocationCountryController",
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
                "name": "getAction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "searchAction",
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
        "length": 156,
        "vocabulary": 41,
        "volume": 835.78,
        "difficulty": 10.03,
        "effort": 8381.66,
        "level": 0.1,
        "bugs": 0.28,
        "time": 466,
        "intelligentContent": 83.34,
        "number_operators": 39,
        "number_operands": 117,
        "number_operators_unique": 6,
        "number_operands_unique": 35,
        "cloc": 15,
        "loc": 76,
        "lloc": 61,
        "mi": 71.01,
        "mIwoC": 39.25,
        "commentWeight": 31.76,
        "kanDefect": 0.8,
        "relativeStructuralComplexity": 100,
        "relativeDataComplexity": 0.52,
        "relativeSystemComplexity": 100.52,
        "totalStructuralComplexity": 300,
        "totalDataComplexity": 1.55,
        "totalSystemComplexity": 301.55,
        "package": "App\\Controller\\Api\\",
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 10,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Controller\\Api\\LocationStateController",
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
                "name": "listAction",
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
        "length": 73,
        "vocabulary": 29,
        "volume": 354.63,
        "difficulty": 5.63,
        "effort": 1994.81,
        "level": 0.18,
        "bugs": 0.12,
        "time": 111,
        "intelligentContent": 63.05,
        "number_operators": 19,
        "number_operands": 54,
        "number_operators_unique": 5,
        "number_operands_unique": 24,
        "cloc": 9,
        "loc": 42,
        "lloc": 33,
        "mi": 81.21,
        "mIwoC": 48.35,
        "commentWeight": 32.86,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 0.4,
        "relativeSystemComplexity": 81.4,
        "totalStructuralComplexity": 162,
        "totalDataComplexity": 0.8,
        "totalSystemComplexity": 162.8,
        "package": "App\\Controller\\Api\\",
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 9,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Controller\\SecurityController",
        "interface": false,
        "abstract": false,
        "final": false,
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
            "Symfony\\Component\\HttpFoundation\\Request",
            "Symfony\\Component\\Security\\Core\\Security",
            "Symfony\\Component\\Security\\Http\\Authentication\\AuthenticationUtils",
            "Exception"
        ],
        "parents": [
            "Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController"
        ],
        "implements": [],
        "lcom": 2,
        "length": 21,
        "vocabulary": 16,
        "volume": 84,
        "difficulty": 1.29,
        "effort": 108,
        "level": 0.78,
        "bugs": 0.03,
        "time": 6,
        "intelligentContent": 65.33,
        "number_operators": 3,
        "number_operands": 18,
        "number_operators_unique": 2,
        "number_operands_unique": 14,
        "cloc": 5,
        "loc": 23,
        "lloc": 18,
        "mi": 91.93,
        "mIwoC": 58.87,
        "commentWeight": 33.06,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.58,
        "relativeSystemComplexity": 25.58,
        "totalStructuralComplexity": 50,
        "totalDataComplexity": 1.17,
        "totalSystemComplexity": 51.17,
        "package": "App\\Controller\\",
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 6,
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
        "cloc": 13,
        "loc": 72,
        "lloc": 59,
        "mi": 75.78,
        "mIwoC": 45.2,
        "commentWeight": 30.59,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 11.45,
        "relativeSystemComplexity": 11.45,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 126,
        "totalSystemComplexity": 126,
        "package": "App\\Entity\\",
        "pageRank": 0.07,
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
        "vocabulary": 11,
        "volume": 159.13,
        "difficulty": 8.86,
        "effort": 1409.47,
        "level": 0.11,
        "bugs": 0.05,
        "time": 78,
        "intelligentContent": 17.97,
        "number_operators": 15,
        "number_operands": 31,
        "number_operators_unique": 4,
        "number_operands_unique": 7,
        "cloc": 12,
        "loc": 67,
        "lloc": 55,
        "mi": 76.56,
        "mIwoC": 46.08,
        "commentWeight": 30.48,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.41,
        "relativeSystemComplexity": 26.41,
        "totalStructuralComplexity": 225,
        "totalDataComplexity": 12.67,
        "totalSystemComplexity": 237.67,
        "package": "App\\Entity\\",
        "pageRank": 0.03,
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
        "vocabulary": 11,
        "volume": 159.13,
        "difficulty": 8.86,
        "effort": 1409.47,
        "level": 0.11,
        "bugs": 0.05,
        "time": 78,
        "intelligentContent": 17.97,
        "number_operators": 15,
        "number_operands": 31,
        "number_operators_unique": 4,
        "number_operands_unique": 7,
        "cloc": 11,
        "loc": 66,
        "lloc": 55,
        "mi": 75.64,
        "mIwoC": 46.08,
        "commentWeight": 29.56,
        "kanDefect": 0.36,
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
        "vocabulary": 9,
        "volume": 145.82,
        "difficulty": 12.4,
        "effort": 1808.13,
        "level": 0.08,
        "bugs": 0.05,
        "time": 100,
        "intelligentContent": 11.76,
        "number_operators": 15,
        "number_operands": 31,
        "number_operators_unique": 4,
        "number_operands_unique": 5,
        "cloc": 13,
        "loc": 68,
        "lloc": 55,
        "mi": 77.68,
        "mIwoC": 46.35,
        "commentWeight": 31.34,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.41,
        "relativeSystemComplexity": 26.41,
        "totalStructuralComplexity": 225,
        "totalDataComplexity": 12.67,
        "totalSystemComplexity": 237.67,
        "package": "App\\Entity\\",
        "pageRank": 0.1,
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
        "vocabulary": 13,
        "volume": 325.64,
        "difficulty": 13.11,
        "effort": 4269.49,
        "level": 0.08,
        "bugs": 0.11,
        "time": 237,
        "intelligentContent": 24.84,
        "number_operators": 29,
        "number_operands": 59,
        "number_operators_unique": 4,
        "number_operands_unique": 9,
        "cloc": 18,
        "loc": 116,
        "lloc": 98,
        "mi": 66.68,
        "mIwoC": 38.03,
        "commentWeight": 28.65,
        "kanDefect": 0.57,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 2.58,
        "relativeSystemComplexity": 27.58,
        "totalStructuralComplexity": 400,
        "totalDataComplexity": 41.33,
        "totalSystemComplexity": 441.33,
        "package": "App\\Entity\\",
        "pageRank": 0.12,
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
        "vocabulary": 22,
        "volume": 463.78,
        "difficulty": 7.89,
        "effort": 3658.72,
        "level": 0.13,
        "bugs": 0.15,
        "time": 203,
        "intelligentContent": 58.79,
        "number_operators": 33,
        "number_operands": 71,
        "number_operators_unique": 4,
        "number_operands_unique": 18,
        "cloc": 21,
        "loc": 136,
        "lloc": 115,
        "mi": 64.43,
        "mIwoC": 35.84,
        "commentWeight": 28.59,
        "kanDefect": 0.36,
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
        "vocabulary": 15,
        "volume": 332.09,
        "difficulty": 10.73,
        "effort": 3562.37,
        "level": 0.09,
        "bugs": 0.11,
        "time": 198,
        "intelligentContent": 30.96,
        "number_operators": 26,
        "number_operands": 59,
        "number_operators_unique": 4,
        "number_operands_unique": 11,
        "cloc": 20,
        "loc": 108,
        "lloc": 88,
        "mi": 69.91,
        "mIwoC": 38.99,
        "commentWeight": 30.92,
        "kanDefect": 0.57,
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
        "vocabulary": 20,
        "volume": 484.06,
        "difficulty": 9.63,
        "effort": 4659.04,
        "level": 0.1,
        "bugs": 0.16,
        "time": 259,
        "intelligentContent": 50.29,
        "number_operators": 35,
        "number_operands": 77,
        "number_operators_unique": 4,
        "number_operands_unique": 16,
        "cloc": 22,
        "loc": 140,
        "lloc": 118,
        "mi": 63.87,
        "mIwoC": 35.06,
        "commentWeight": 28.81,
        "kanDefect": 0.57,
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
        "vocabulary": 14,
        "volume": 224.63,
        "difficulty": 8.2,
        "effort": 1842,
        "level": 0.12,
        "bugs": 0.07,
        "time": 102,
        "intelligentContent": 27.39,
        "number_operators": 18,
        "number_operands": 41,
        "number_operators_unique": 4,
        "number_operands_unique": 10,
        "cloc": 15,
        "loc": 80,
        "lloc": 65,
        "mi": 74.53,
        "mIwoC": 43.45,
        "commentWeight": 31.08,
        "kanDefect": 0.36,
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
        "vocabulary": 17,
        "volume": 384.22,
        "difficulty": 10,
        "effort": 3842.22,
        "level": 0.1,
        "bugs": 0.13,
        "time": 213,
        "intelligentContent": 38.42,
        "number_operators": 29,
        "number_operands": 65,
        "number_operators_unique": 4,
        "number_operands_unique": 13,
        "cloc": 21,
        "loc": 119,
        "lloc": 98,
        "mi": 67.82,
        "mIwoC": 37.52,
        "commentWeight": 30.29,
        "kanDefect": 0.57,
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
        "externals": [],
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
        "cloc": 13,
        "loc": 72,
        "lloc": 59,
        "mi": 75.78,
        "mIwoC": 45.2,
        "commentWeight": 30.59,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 11.45,
        "relativeSystemComplexity": 11.45,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 126,
        "totalSystemComplexity": 126,
        "package": "App\\Entity\\",
        "pageRank": 0.07,
        "afferentCoupling": 2,
        "efferentCoupling": 0,
        "instability": 0,
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
        "cloc": 11,
        "loc": 60,
        "lloc": 49,
        "mi": 78.53,
        "mIwoC": 47.75,
        "commentWeight": 30.79,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 9.44,
        "relativeSystemComplexity": 9.44,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 85,
        "totalSystemComplexity": 85,
        "package": "App\\Entity\\",
        "pageRank": 0.03,
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
        "vocabulary": 66,
        "volume": 2308.96,
        "difficulty": 8.29,
        "effort": 19142.01,
        "level": 0.12,
        "bugs": 0.77,
        "time": 1063,
        "intelligentContent": 278.51,
        "number_operators": 125,
        "number_operands": 257,
        "number_operators_unique": 4,
        "number_operands_unique": 62,
        "cloc": 85,
        "loc": 502,
        "lloc": 417,
        "mi": 48.11,
        "mIwoC": 18.35,
        "commentWeight": 29.76,
        "kanDefect": 0.57,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 13.08,
        "relativeSystemComplexity": 38.08,
        "totalStructuralComplexity": 2000,
        "totalDataComplexity": 1046.5,
        "totalSystemComplexity": 3046.5,
        "package": "App\\Entity\\",
        "pageRank": 0.14,
        "afferentCoupling": 9,
        "efferentCoupling": 6,
        "instability": 0.4,
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
        "cloc": 13,
        "loc": 72,
        "lloc": 59,
        "mi": 76.28,
        "mIwoC": 45.69,
        "commentWeight": 30.59,
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
        "vocabulary": 11,
        "volume": 134.92,
        "difficulty": 7.71,
        "effort": 1040.79,
        "level": 0.13,
        "bugs": 0.04,
        "time": 58,
        "intelligentContent": 17.49,
        "number_operators": 12,
        "number_operands": 27,
        "number_operators_unique": 4,
        "number_operands_unique": 7,
        "cloc": 11,
        "loc": 56,
        "lloc": 45,
        "mi": 80.18,
        "mIwoC": 48.48,
        "commentWeight": 31.7,
        "kanDefect": 0.36,
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
        "name": "App\\Form\\Helper\\LocationHelper",
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
        "length": 227,
        "vocabulary": 30,
        "volume": 1113.86,
        "difficulty": 12.08,
        "effort": 13452.05,
        "level": 0.08,
        "bugs": 0.37,
        "time": 747,
        "intelligentContent": 92.23,
        "number_operators": 70,
        "number_operands": 157,
        "number_operators_unique": 4,
        "number_operands_unique": 26,
        "cloc": 40,
        "loc": 167,
        "lloc": 127,
        "mi": 63.66,
        "mIwoC": 29.28,
        "commentWeight": 34.38,
        "kanDefect": 2.08,
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
        "length": 140,
        "vocabulary": 57,
        "volume": 816.6,
        "difficulty": 4.91,
        "effort": 4005.98,
        "level": 0.2,
        "bugs": 0.27,
        "time": 223,
        "intelligentContent": 166.46,
        "number_operators": 10,
        "number_operands": 130,
        "number_operators_unique": 4,
        "number_operands_unique": 53,
        "cloc": 6,
        "loc": 36,
        "lloc": 30,
        "mi": 76.41,
        "mIwoC": 46.85,
        "commentWeight": 29.56,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 196,
        "relativeDataComplexity": 0.2,
        "relativeSystemComplexity": 196.2,
        "totalStructuralComplexity": 588,
        "totalDataComplexity": 0.6,
        "totalSystemComplexity": 588.6,
        "package": "App\\Form\\",
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 6,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Form\\SettingsProfileType",
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
        "length": 162,
        "vocabulary": 66,
        "volume": 979.19,
        "difficulty": 4.42,
        "effort": 4327.4,
        "level": 0.23,
        "bugs": 0.33,
        "time": 240,
        "intelligentContent": 221.57,
        "number_operators": 25,
        "number_operands": 137,
        "number_operators_unique": 4,
        "number_operands_unique": 62,
        "cloc": 13,
        "loc": 75,
        "lloc": 62,
        "mi": 68.67,
        "mIwoC": 38.61,
        "commentWeight": 30.06,
        "kanDefect": 0.94,
        "relativeStructuralComplexity": 441,
        "relativeDataComplexity": 0.17,
        "relativeSystemComplexity": 441.17,
        "totalStructuralComplexity": 1764,
        "totalDataComplexity": 0.68,
        "totalSystemComplexity": 1764.68,
        "package": "App\\Form\\",
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 7,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Form\\SettingsSecurityType",
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
        "length": 102,
        "vocabulary": 44,
        "volume": 556.86,
        "difficulty": 3.11,
        "effort": 1731.71,
        "level": 0.32,
        "bugs": 0.19,
        "time": 96,
        "intelligentContent": 179.07,
        "number_operators": 17,
        "number_operands": 85,
        "number_operators_unique": 3,
        "number_operands_unique": 41,
        "cloc": 10,
        "loc": 56,
        "lloc": 46,
        "mi": 74.14,
        "mIwoC": 43.7,
        "commentWeight": 30.44,
        "kanDefect": 0.66,
        "relativeStructuralComplexity": 324,
        "relativeDataComplexity": 0.18,
        "relativeSystemComplexity": 324.18,
        "totalStructuralComplexity": 1296,
        "totalDataComplexity": 0.74,
        "totalSystemComplexity": 1296.74,
        "package": "App\\Form\\",
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 7,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Form\\UserAddType",
        "interface": false,
        "abstract": false,
        "final": false,
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
        "length": 34,
        "vocabulary": 27,
        "volume": 161.67,
        "difficulty": 1.28,
        "effort": 206.93,
        "level": 0.78,
        "bugs": 0.05,
        "time": 11,
        "intelligentContent": 126.3,
        "number_operators": 2,
        "number_operands": 32,
        "number_operators_unique": 2,
        "number_operands_unique": 25,
        "cloc": 0,
        "loc": 14,
        "lloc": 14,
        "mi": 59.26,
        "mIwoC": 59.26,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.25,
        "relativeSystemComplexity": 25.25,
        "totalStructuralComplexity": 50,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 50.5,
        "package": "App\\Form\\",
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 5,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Form\\UserEditType",
        "interface": false,
        "abstract": false,
        "final": false,
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
        "length": 38,
        "vocabulary": 31,
        "volume": 188.26,
        "difficulty": 1.24,
        "effort": 233.7,
        "level": 0.81,
        "bugs": 0.06,
        "time": 13,
        "intelligentContent": 151.65,
        "number_operators": 2,
        "number_operands": 36,
        "number_operators_unique": 2,
        "number_operands_unique": 29,
        "cloc": 0,
        "loc": 14,
        "lloc": 14,
        "mi": 58.8,
        "mIwoC": 58.8,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.25,
        "relativeSystemComplexity": 25.25,
        "totalStructuralComplexity": 50,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 50.5,
        "package": "App\\Form\\",
        "pageRank": 0.01,
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
            "App\\Service\\DateTimeService"
        ],
        "parents": [
            "Symfony\\Component\\Form\\AbstractType"
        ],
        "implements": [],
        "lcom": 2,
        "length": 329,
        "vocabulary": 110,
        "volume": 2231.07,
        "difficulty": 5.53,
        "effort": 12334.01,
        "level": 0.18,
        "bugs": 0.74,
        "time": 685,
        "intelligentContent": 403.57,
        "number_operators": 36,
        "number_operands": 293,
        "number_operators_unique": 4,
        "number_operands_unique": 106,
        "cloc": 22,
        "loc": 103,
        "lloc": 81,
        "mi": 65.99,
        "mIwoC": 33.17,
        "commentWeight": 32.82,
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
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\AccountVerificationRepository",
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
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\AclActionRepository",
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
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\AclControllerRepository",
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
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\AclPermissionRepository",
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
        "length": 36,
        "vocabulary": 20,
        "volume": 155.59,
        "difficulty": 2.82,
        "effort": 439.31,
        "level": 0.35,
        "bugs": 0.05,
        "time": 24,
        "intelligentContent": 55.1,
        "number_operators": 4,
        "number_operands": 32,
        "number_operators_unique": 3,
        "number_operands_unique": 17,
        "cloc": 15,
        "loc": 47,
        "lloc": 32,
        "mi": 89.8,
        "mIwoC": 51.41,
        "commentWeight": 38.38,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 0.21,
        "relativeSystemComplexity": 144.21,
        "totalStructuralComplexity": 576,
        "totalDataComplexity": 0.85,
        "totalSystemComplexity": 576.85,
        "package": "App\\Repository\\",
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\AclUserGroupRepository",
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
        "wmc": 7,
        "ccn": 4,
        "ccnMethodMax": 2,
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
        "length": 34,
        "vocabulary": 16,
        "volume": 136,
        "difficulty": 3.35,
        "effort": 455.08,
        "level": 0.3,
        "bugs": 0.05,
        "time": 25,
        "intelligentContent": 40.64,
        "number_operators": 5,
        "number_operands": 29,
        "number_operators_unique": 3,
        "number_operands_unique": 13,
        "cloc": 13,
        "loc": 45,
        "lloc": 32,
        "mi": 88.68,
        "mIwoC": 51.69,
        "commentWeight": 36.99,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 0.19,
        "relativeSystemComplexity": 144.19,
        "totalStructuralComplexity": 576,
        "totalDataComplexity": 0.77,
        "totalSystemComplexity": 576.77,
        "package": "App\\Repository\\",
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\LanguageRepository",
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
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\LocationCityRepository",
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
        "length": 30,
        "vocabulary": 13,
        "volume": 111.01,
        "difficulty": 3.75,
        "effort": 416.3,
        "level": 0.27,
        "bugs": 0.04,
        "time": 23,
        "intelligentContent": 29.6,
        "number_operators": 5,
        "number_operands": 25,
        "number_operators_unique": 3,
        "number_operands_unique": 10,
        "cloc": 14,
        "loc": 46,
        "lloc": 32,
        "mi": 90.02,
        "mIwoC": 52.31,
        "commentWeight": 37.72,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 121,
        "relativeDataComplexity": 0.21,
        "relativeSystemComplexity": 121.21,
        "totalStructuralComplexity": 484,
        "totalDataComplexity": 0.83,
        "totalSystemComplexity": 484.83,
        "package": "App\\Repository\\",
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\LocationCountryRepository",
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
        "cloc": 17,
        "loc": 54,
        "lloc": 37,
        "mi": 88.24,
        "mIwoC": 50.04,
        "commentWeight": 38.19,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 169,
        "relativeDataComplexity": 0.23,
        "relativeSystemComplexity": 169.23,
        "totalStructuralComplexity": 845,
        "totalDataComplexity": 1.14,
        "totalSystemComplexity": 846.14,
        "package": "App\\Repository\\",
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\LocationNeighborhoodRepository",
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
        "length": 77,
        "vocabulary": 18,
        "volume": 321.08,
        "difficulty": 8.57,
        "effort": 2752.15,
        "level": 0.12,
        "bugs": 0.11,
        "time": 153,
        "intelligentContent": 37.46,
        "number_operators": 17,
        "number_operands": 60,
        "number_operators_unique": 4,
        "number_operands_unique": 14,
        "cloc": 16,
        "loc": 67,
        "lloc": 51,
        "mi": 78.33,
        "mIwoC": 43.99,
        "commentWeight": 34.34,
        "kanDefect": 0.64,
        "relativeStructuralComplexity": 256,
        "relativeDataComplexity": 0.26,
        "relativeSystemComplexity": 256.26,
        "totalStructuralComplexity": 1024,
        "totalDataComplexity": 1.06,
        "totalSystemComplexity": 1025.06,
        "package": "App\\Repository\\",
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\LocationStateRepository",
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
        "length": 30,
        "vocabulary": 13,
        "volume": 111.01,
        "difficulty": 3.75,
        "effort": 416.3,
        "level": 0.27,
        "bugs": 0.04,
        "time": 23,
        "intelligentContent": 29.6,
        "number_operators": 5,
        "number_operands": 25,
        "number_operators_unique": 3,
        "number_operands_unique": 10,
        "cloc": 14,
        "loc": 47,
        "lloc": 33,
        "mi": 89.43,
        "mIwoC": 52.02,
        "commentWeight": 37.42,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 121,
        "relativeDataComplexity": 0.21,
        "relativeSystemComplexity": 121.21,
        "totalStructuralComplexity": 484,
        "totalDataComplexity": 0.83,
        "totalSystemComplexity": 484.83,
        "package": "App\\Repository\\",
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\ResetUserPasswordRepository",
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
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\TranslationRepository",
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
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\UserLanguageRepository",
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
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\UserRepository",
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
            "Knp\\Bundle\\PaginatorBundle\\Pagination\\SlidingPagination",
            "App\\Utils\\StringHelper"
        ],
        "parents": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository"
        ],
        "implements": [
            "Symfony\\Component\\Security\\Core\\User\\PasswordUpgraderInterface"
        ],
        "lcom": 3,
        "length": 103,
        "vocabulary": 35,
        "volume": 528.32,
        "difficulty": 6.92,
        "effort": 3654.19,
        "level": 0.14,
        "bugs": 0.18,
        "time": 203,
        "intelligentContent": 76.38,
        "number_operators": 20,
        "number_operands": 83,
        "number_operators_unique": 5,
        "number_operands_unique": 30,
        "cloc": 15,
        "loc": 74,
        "lloc": 59,
        "mi": 73.21,
        "mIwoC": 41.09,
        "commentWeight": 32.11,
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
        "wmc": 7,
        "ccn": 4,
        "ccnMethodMax": 2,
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
        "length": 34,
        "vocabulary": 16,
        "volume": 136,
        "difficulty": 3.35,
        "effort": 455.08,
        "level": 0.3,
        "bugs": 0.05,
        "time": 25,
        "intelligentContent": 40.64,
        "number_operators": 5,
        "number_operands": 29,
        "number_operators_unique": 3,
        "number_operands_unique": 13,
        "cloc": 12,
        "loc": 44,
        "lloc": 32,
        "mi": 87.87,
        "mIwoC": 51.69,
        "commentWeight": 36.18,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 0.19,
        "relativeSystemComplexity": 144.19,
        "totalStructuralComplexity": 576,
        "totalDataComplexity": 0.77,
        "totalSystemComplexity": 576.77,
        "package": "App\\Repository\\",
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Service\\DateTimeService",
        "interface": false,
        "abstract": false,
        "final": false,
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
        "wmc": 2,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "IntlDateFormatter"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 11,
        "vocabulary": 7,
        "volume": 30.88,
        "difficulty": 4,
        "effort": 123.52,
        "level": 0.25,
        "bugs": 0.01,
        "time": 7,
        "intelligentContent": 7.72,
        "number_operators": 5,
        "number_operands": 6,
        "number_operators_unique": 4,
        "number_operands_unique": 3,
        "cloc": 6,
        "loc": 18,
        "lloc": 12,
        "mi": 104.75,
        "mIwoC": 65.76,
        "commentWeight": 38.99,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.5,
        "relativeSystemComplexity": 2.5,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 1.5,
        "totalSystemComplexity": 2.5,
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
        "length": 20,
        "vocabulary": 11,
        "volume": 69.19,
        "difficulty": 2.44,
        "effort": 168.65,
        "level": 0.41,
        "bugs": 0.02,
        "time": 9,
        "intelligentContent": 28.39,
        "number_operators": 7,
        "number_operands": 13,
        "number_operators_unique": 3,
        "number_operands_unique": 8,
        "cloc": 11,
        "loc": 30,
        "lloc": 19,
        "mi": 99.27,
        "mIwoC": 58.95,
        "commentWeight": 40.32,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.75,
        "relativeSystemComplexity": 9.75,
        "totalStructuralComplexity": 18,
        "totalDataComplexity": 1.5,
        "totalSystemComplexity": 19.5,
        "package": "App\\Service\\",
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Service\\UploaderHelper",
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
        "wmc": 29,
        "ccn": 20,
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
        "length": 385,
        "vocabulary": 69,
        "volume": 2351.78,
        "difficulty": 18.89,
        "effort": 44413.98,
        "level": 0.05,
        "bugs": 0.78,
        "time": 2467,
        "intelligentContent": 124.53,
        "number_operators": 97,
        "number_operands": 288,
        "number_operators_unique": 8,
        "number_operands_unique": 61,
        "cloc": 59,
        "loc": 179,
        "lloc": 120,
        "mi": 67.18,
        "mIwoC": 28.35,
        "commentWeight": 38.84,
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
        "final": false,
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
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Twig\\Extension\\LanguageExtension",
        "interface": false,
        "abstract": false,
        "final": false,
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
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Twig\\Extension\\WebsiteExtension",
        "interface": false,
        "abstract": false,
        "final": false,
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
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Twig\\Runtime\\AclExtensionRuntime",
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
        "wmc": 5,
        "ccn": 4,
        "ccnMethodMax": 4,
        "externals": [
            "Twig\\Extension\\RuntimeExtensionInterface",
            "Symfony\\Component\\Security\\Core\\Authentication\\Token\\Storage\\TokenStorageInterface"
        ],
        "parents": [],
        "implements": [
            "Twig\\Extension\\RuntimeExtensionInterface"
        ],
        "lcom": 2,
        "length": 20,
        "vocabulary": 10,
        "volume": 66.44,
        "difficulty": 5,
        "effort": 332.19,
        "level": 0.2,
        "bugs": 0.02,
        "time": 18,
        "intelligentContent": 13.29,
        "number_operators": 5,
        "number_operands": 15,
        "number_operators_unique": 4,
        "number_operands_unique": 6,
        "cloc": 5,
        "loc": 17,
        "lloc": 12,
        "mi": 100.4,
        "mIwoC": 63.16,
        "commentWeight": 37.24,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.75,
        "relativeSystemComplexity": 9.75,
        "totalStructuralComplexity": 18,
        "totalDataComplexity": 1.5,
        "totalSystemComplexity": 19.5,
        "package": "App\\Twig\\Runtime\\",
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Twig\\Runtime\\LanguageExtensionRuntime",
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
        "length": 11,
        "vocabulary": 4,
        "volume": 22,
        "difficulty": 6,
        "effort": 132,
        "level": 0.17,
        "bugs": 0.01,
        "time": 7,
        "intelligentContent": 3.67,
        "number_operators": 7,
        "number_operands": 4,
        "number_operators_unique": 3,
        "number_operands_unique": 1,
        "cloc": 6,
        "loc": 24,
        "lloc": 18,
        "mi": 97.79,
        "mIwoC": 62.81,
        "commentWeight": 34.97,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 3.5,
        "relativeSystemComplexity": 3.5,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 7,
        "totalSystemComplexity": 7,
        "package": "App\\Twig\\Runtime\\",
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Twig\\Runtime\\WebsiteExtensionRuntime",
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
        "lcom": 3,
        "length": 143,
        "vocabulary": 48,
        "volume": 798.65,
        "difficulty": 7.85,
        "effort": 6272.32,
        "level": 0.13,
        "bugs": 0.27,
        "time": 348,
        "intelligentContent": 101.69,
        "number_operators": 51,
        "number_operands": 92,
        "number_operators_unique": 7,
        "number_operands_unique": 41,
        "cloc": 29,
        "loc": 100,
        "lloc": 71,
        "mi": 74.45,
        "mIwoC": 37.41,
        "commentWeight": 37.04,
        "kanDefect": 1.17,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 2.31,
        "relativeSystemComplexity": 27.31,
        "totalStructuralComplexity": 175,
        "totalDataComplexity": 16.17,
        "totalSystemComplexity": 191.17,
        "package": "App\\Twig\\Runtime\\",
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Utils\\Acl",
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
        "wmc": 12,
        "ccn": 8,
        "ccnMethodMax": 6,
        "externals": [
            "Symfony\\Component\\HttpFoundation\\RequestStack",
            "Doctrine\\ORM\\EntityManagerInterface",
            "Symfony\\Component\\Security\\Core\\Authentication\\Token\\Storage\\TokenStorageInterface",
            "Symfony\\Contracts\\Translation\\TranslatorInterface",
            "Symfony\\Component\\Security\\Core\\Security",
            "Symfony\\Component\\Security\\Core\\Exception\\AccessDeniedException",
            "App\\Utils\\StringHelper",
            "App\\Utils\\StringHelper"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 98,
        "vocabulary": 30,
        "volume": 480.88,
        "difficulty": 5.46,
        "effort": 2626.32,
        "level": 0.18,
        "bugs": 0.16,
        "time": 146,
        "intelligentContent": 88.05,
        "number_operators": 27,
        "number_operands": 71,
        "number_operators_unique": 4,
        "number_operands_unique": 26,
        "cloc": 26,
        "loc": 88,
        "lloc": 62,
        "mi": 78.35,
        "mIwoC": 41.05,
        "commentWeight": 37.3,
        "kanDefect": 0.66,
        "relativeStructuralComplexity": 196,
        "relativeDataComplexity": 0.6,
        "relativeSystemComplexity": 196.6,
        "totalStructuralComplexity": 1176,
        "totalDataComplexity": 3.6,
        "totalSystemComplexity": 1179.6,
        "package": "App\\Utils\\",
        "pageRank": 0.01,
        "afferentCoupling": 2,
        "efferentCoupling": 7,
        "instability": 0.78,
        "violations": {}
    },
    {
        "name": "App\\Utils\\StringHelper",
        "interface": false,
        "abstract": false,
        "final": false,
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
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 4,
        "length": 58,
        "vocabulary": 25,
        "volume": 269.34,
        "difficulty": 4,
        "effort": 1077.37,
        "level": 0.25,
        "bugs": 0.09,
        "time": 60,
        "intelligentContent": 67.34,
        "number_operators": 16,
        "number_operands": 42,
        "number_operators_unique": 4,
        "number_operands_unique": 21,
        "cloc": 15,
        "loc": 49,
        "lloc": 34,
        "mi": 86.84,
        "mIwoC": 49.04,
        "commentWeight": 37.8,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 1.5,
        "relativeSystemComplexity": 17.5,
        "totalStructuralComplexity": 64,
        "totalDataComplexity": 6,
        "totalSystemComplexity": 70,
        "package": "App\\Utils\\",
        "pageRank": 0.02,
        "afferentCoupling": 3,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "App\\Utils\\TranslationHelper",
        "interface": false,
        "abstract": false,
        "final": false,
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
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 4,
        "length": 56,
        "vocabulary": 24,
        "volume": 256.76,
        "difficulty": 5.13,
        "effort": 1317.57,
        "level": 0.19,
        "bugs": 0.09,
        "time": 73,
        "intelligentContent": 50.03,
        "number_operators": 17,
        "number_operands": 39,
        "number_operators_unique": 5,
        "number_operands_unique": 19,
        "cloc": 18,
        "loc": 55,
        "lloc": 37,
        "mi": 86.85,
        "mIwoC": 48.11,
        "commentWeight": 38.74,
        "kanDefect": 0.59,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 1.4,
        "relativeSystemComplexity": 17.4,
        "totalStructuralComplexity": 64,
        "totalDataComplexity": 5.6,
        "totalSystemComplexity": 69.6,
        "package": "App\\Utils\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    }
]