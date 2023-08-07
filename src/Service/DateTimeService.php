<?php

declare(strict_types=1);

namespace App\Service;

use IntlDateFormatter;
final class DateTimeService
{
    /**
     * Returns date format through locale.
     *
     * @param string $locale Locale
     * @return string|null
     */
    public static function getDateFormatFromLocale(string $locale): ?string
    {
        $formatter = new IntlDateFormatter($locale, IntlDateFormatter::SHORT, IntlDateFormatter::NONE);
        //if (!$formatter instanceof \IntlDateFormatter) {
        //    return 'Y-m-d';
        //}//Instanceof between IntlDateFormatter and IntlDateFormatter will always evaluate to true.

        return $formatter->getPattern();
    }
}
