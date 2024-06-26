<?php

declare(strict_types=1);

namespace App\Service;

use GeoIp2\Database\Reader;
use GeoIp2\Exception\AddressNotFoundException;
use MaxMind\Db\Reader\InvalidDatabaseException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

final readonly class GeoIP2Service
{
    public function __construct(private RequestStack $requestStack, private string $projectDir)
    {
    }

    /**
     * Returns a string with the country code (AT => Austria, BR => Brazil...) according user visitor.
     *
     * @throws InvalidDatabaseException
     */
    public function getCountryIsoCodeOfUser(): ?string
    {
        $GeoLiteDatabasePath = sprintf('%s/private/geolite2-city/GeoLite2-City.mmdb', $this->projectDir);

        $reader = new Reader($GeoLiteDatabasePath);

        try {
            // if you are in the production environment you can retrieve the
            // user's IP with $request->getClientIp()
            // Note that in a development environment 127.0.0.1 will
            // throw the AddressNotFoundException
            // In this example, use a fixed IP address in Minnesota
            /** @var Request $request */
            $request = $this->requestStack->getCurrentRequest();
            $ip = $request->getClientIp();
            $record = $reader->city((string) $ip);

            return $record->country->isoCode;
        } catch (AddressNotFoundException) {
            // Couldn't retrieve geo information from the given IP
            return null;
        }
    }
}
