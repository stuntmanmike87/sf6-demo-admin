<?php

namespace App\Factory;

use App\Entity\LocationCountry;
use App\Repository\LocationCountryRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<LocationCountry>
 *
 * @method        LocationCountry|Proxy                     create(array|callable $attributes = [])
 * @method static LocationCountry|Proxy                     createOne(array $attributes = [])
 * @method static LocationCountry|Proxy                     find(object|array|mixed $criteria)
 * @method static LocationCountry|Proxy                     findOrCreate(array $attributes)
 * @method static LocationCountry|Proxy                     first(string $sortedField = 'id')
 * @method static LocationCountry|Proxy                     last(string $sortedField = 'id')
 * @method static LocationCountry|Proxy                     random(array $attributes = [])
 * @method static LocationCountry|Proxy                     randomOrCreate(array $attributes = [])
 * @method static LocationCountryRepository|RepositoryProxy repository()
 * @method static LocationCountry[]|Proxy[]                 all()
 * @method static LocationCountry[]|Proxy[]                 createMany(int $number, array|callable $attributes = [])
 * @method static LocationCountry[]|Proxy[]                 createSequence(iterable|callable $sequence)
 * @method static LocationCountry[]|Proxy[]                 findBy(array $attributes)
 * @method static LocationCountry[]|Proxy[]                 randomRange(int $min, int $max, array $attributes = [])
 * @method static LocationCountry[]|Proxy[]                 randomSet(int $number, array $attributes = [])
 *
 * @phpstan-method        Proxy<LocationCountry> create(array|callable $attributes = [])
 * @phpstan-method static Proxy<LocationCountry> createOne(array $attributes = [])
 * @phpstan-method static Proxy<LocationCountry> find(object|array|mixed $criteria)
 * @phpstan-method static Proxy<LocationCountry> findOrCreate(array $attributes)
 * @phpstan-method static Proxy<LocationCountry> first(string $sortedField = 'id')
 * @phpstan-method static Proxy<LocationCountry> last(string $sortedField = 'id')
 * @phpstan-method static Proxy<LocationCountry> random(array $attributes = [])
 * @phpstan-method static Proxy<LocationCountry> randomOrCreate(array $attributes = [])
 * @phpstan-method static RepositoryProxy<LocationCountry> repository()
 * @phpstan-method static list<Proxy<LocationCountry>> all()
 * @phpstan-method static list<Proxy<LocationCountry>> createMany(int $number, array|callable $attributes = [])
 * @phpstan-method static list<Proxy<LocationCountry>> createSequence(iterable|callable $sequence)
 * @phpstan-method static list<Proxy<LocationCountry>> findBy(array $attributes)
 * @phpstan-method static list<Proxy<LocationCountry>> randomRange(int $min, int $max, array $attributes = [])
 * @phpstan-method static list<Proxy<LocationCountry>> randomSet(int $number, array $attributes = [])
 */
final class LocationCountryFactory extends ModelFactory
{
    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#factories-as-services
     *
     * @todo inject services if required
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#model-factories
     *
     * @todo add your default values here
     */
    #[\Override]
    protected function getDefaults(): array
    {
        return [
            'alpha2' => self::faker()->text(2),
            'name' => self::faker()->text(255),
            'native' => self::faker()->text(255),
            'slug' => self::faker()->text(255),
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    #[\Override]
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(LocationCountry $locationCountry): void {})
        ;
    }

    #[\Override]
    protected static function getClass(): string
    {
        return LocationCountry::class;
    }
}
