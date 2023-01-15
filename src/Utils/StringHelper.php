<?php
namespace App\Utils;

use function Symfony\Component\String\u;

class StringHelper
{
    /**
     * Convert to camelcase.
     */
    public static function dashesToCamelCase($string, $between = "-", $capitalizeFirstCharacter = false): string
    {
        $str = str_replace(' ', '', ucwords(str_replace($between, ' ', (string) $string)));

        if (!$capitalizeFirstCharacter) {
            $str[0] = strtolower($str[0]);
        }

        return $str;
    }

    /**
     * Convert a string camel case to dash.
     */
    public static function camelCaseToDashed($string): string
    {
        return strtolower(preg_replace('/([a-zA-Z])(?=[A-Z])/', '$1-', $string));
    }

    /**
     * Transforms the search string into an array of search terms.
     */
    public static function extractSearchTerms(string $searchQuery): array
    {
        $searchQuery = u($searchQuery)->replaceMatches('/[[:space:]]+/', ' ')->trim();
        $terms = array_unique($searchQuery->split(' '));

        // Ignore the search terms that are too short
        return array_filter($terms, fn($term) => 2 <= $term->length());
    }

    /**
     * Returns boolean if the URL is from YouTube.
     *
     *
     */
    public static function isYouTube(string $url = null): bool
    {
        if (empty($url)){
            return false;
        }

        $yt_rx = '/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/';
        $has_match_youtube = preg_match($yt_rx, $url, $yt_matches);

        if ($has_match_youtube) {
            return true;
        }

        return false;
    }
}
