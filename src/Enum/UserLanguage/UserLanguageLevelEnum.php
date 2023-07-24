<?php

namespace App\Enum\UserLanguage;

enum UserLanguageLevelEnum: string {
    case Beginner = 'beginner';
    case Elementary = 'elementary';
    case Conversational = 'conversational';
    case Intermediate = 'intermediate';
    case Advanced = 'advanced';
}