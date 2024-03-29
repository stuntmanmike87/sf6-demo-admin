<?php

declare(strict_types=1);

namespace App\Enum\UserLanguage;

enum UserLanguageCategoryEnum: string
{
    case Native = 'native';
    case Learning = 'learning';
}
