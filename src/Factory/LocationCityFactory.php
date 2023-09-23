<?php

namespace App\Factory;

use App\Entity\LocationCity;
use App\Repository\LocationCityRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<LocationCity>
 *
 * @method        LocationCity|Proxy                     create(array|callable $attributes = [])
 * @method static LocationCity|Proxy                     createOne(array $attributes = [])
 * @method static LocationCity|Proxy                     find(object|array|mixed $criteria)
 * @method static LocationCity|Proxy                     findOrCreate(array $attributes)
 * @method static LocationCity|Proxy                     first(string $sortedField = 'id')
 * @method static LocationCity|Proxy                     last(string $sortedField = 'id')
 * @method static LocationCity|Proxy                     random(array $attributes = [])
 * @method static LocationCity|Proxy                     randomOrCreate(array $attributes = [])
 * @method static LocationCityRepository|RepositoryProxy repository()
 * @method static LocationCity[]|Proxy[]                 all()
 * @method static LocationCity[]|Proxy[]                 createMany(int $number, array|callable $attributes = [])
 * @method static LocationCity[]|Proxy[]                 createSequence(iterable|callable $sequence)
 * @method static LocationCity[]|Proxy[]                 findBy(array $attributes)
 * @method static LocationCity[]|Proxy[]                 randomRange(int $min, int $max, array $attributes = [])
 * @method static LocationCity[]|Proxy[]                 randomSet(int $number, array $attributes = [])
 *
 * @phpstan-method        Proxy<LocationCity> create(array|callable $attributes = [])
 * @phpstan-method static Proxy<LocationCity> createOne(array $attributes = [])
 * @phpstan-method static Proxy<LocationCity> find(object|array|mixed $criteria)
 * @phpstan-method static Proxy<LocationCity> findOrCreate(array $attributes)
 * @phpstan-method static Proxy<LocationCity> first(string $sortedField = 'id')
 * @phpstan-method static Proxy<LocationCity> last(string $sortedField = 'id')
 * @phpstan-method static Proxy<LocationCity> random(array $attributes = [])
 * @phpstan-method static Proxy<LocationCity> randomOrCreate(array $attributes = [])
 * @phpstan-method static RepositoryProxy<LocationCity> repository()
 * @phpstan-method static list<Proxy<LocationCity>> all()
 * @phpstan-method static list<Proxy<LocationCity>> createMany(int $number, array|callable $attributes = [])
 * @phpstan-method static list<Proxy<LocationCity>> createSequence(iterable|callable $sequence)
 * @phpstan-method static list<Proxy<LocationCity>> findBy(array $attributes)
 * @phpstan-method static list<Proxy<LocationCity>> randomRange(int $min, int $max, array $attributes = [])
 * @phpstan-method static list<Proxy<LocationCity>> randomSet(int $number, array $attributes = [])
 */
final class LocationCityFactory extends ModelFactory
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
    protected function getDefaults(): array
    {
        return [
            'name' => self::faker()->text(255),
            'slug' => self::faker()->text(255),
            'state' => LocationStateFactory::new(),
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(LocationCity $locationCity): void {})
        ;
    }

    protected static function getClass(): string
    {
        return LocationCity::class;
    }
}
