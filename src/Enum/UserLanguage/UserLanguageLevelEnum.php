<?php

declare(strict_types=1);

namespace App\Enum\UserLanguage;

enum UserLanguageLevelEnum: string {
    case Beginner = 'beginner';
    case Elementary = 'elementary';
    case Conversational = 'conversational';
    case Intermediate = 'intermediate';
    case Advanced = 'advanced';
}