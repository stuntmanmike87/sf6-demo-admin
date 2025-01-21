<?php

declare(strict_types=1);

namespace App\Utils;

use Nette\Utils\Strings;

use function Symfony\Component\String\u;

final class StringHelper
{
    /**
     * Convert to camelcase.
     */
    public static function dashesToCamelCase(mixed $string, string $between = '-', bool $capitalizeFirstCharacter = false): string
    {
        /** @var array<string>|string $string */ /** @var string $s */
        $s = str_replace($between, ' ', $string);
        $str = str_replace(' ', '', ucwords($s));

        if (!$capitalizeFirstCharacter) {
            $str[0] = strtolower($str[0]);
        }

        return $str;
    }

    /**
     * Convert a string camel case to dash.
     */
    public static function camelCaseToDashed(mixed $string): string
    {
        /** @var (callable(): mixed)|string $string */ /** @var string $s */
        $s = Strings::replace('/([a-zA-Z])(?=[A-Z])/', '$1-', $string);

        return strtolower($s);
    }

    /**
     * Transforms the search string into an array of search terms.
     *
     * @return array<mixed>
     */
    public static function extractSearchTerms(string $searchQuery): array
    {
        $searchQuery = u($searchQuery)->replaceMatches('/[[:space:]]+/', ' ')->trim();
        $terms = array_unique($searchQuery->split(' '));

        // Ignore the search terms that are too short
        return array_filter($terms, static fn ($term) => 2 <= $term->length());
    }

    /**
     * Returns boolean if the URL is from YouTube.
     */
    public static function isYouTube(?string $url = null): bool
    {
        if (null === $url || '' === $url) {
            return false;
        }

        $yt_rx = '/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/';
        $has_match_youtube = preg_match($yt_rx, $url, $yt_matches);
        return (bool) $has_match_youtube;
    }
}
