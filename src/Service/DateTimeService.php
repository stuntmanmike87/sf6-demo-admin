<?php
namespace App\Service;

class DateTimeService
{
    /**
     * Returns date format through locale.
     *
     * @param string $locale Locale
     * @return string|null
     */
    public static function getDateFormatFromLocale(string $locale): ?string
    {
        $formatter = new \IntlDateFormatter($locale, \IntlDateFormatter::SHORT, \IntlDateFormatter::NONE);
        if ($formatter === null) {
            return 'Y-m-d';
        }

        return $formatter->getPattern();
    }
}
