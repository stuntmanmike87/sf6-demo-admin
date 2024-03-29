<?php

namespace App\Factory;

use App\Entity\LocationNeighborhood;
use App\Repository\LocationNeighborhoodRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<LocationNeighborhood>
 *
 * @method        LocationNeighborhood|Proxy                     create(array|callable $attributes = [])
 * @method static LocationNeighborhood|Proxy                     createOne(array $attributes = [])
 * @method static LocationNeighborhood|Proxy                     find(object|array|mixed $criteria)
 * @method static LocationNeighborhood|Proxy                     findOrCreate(array $attributes)
 * @method static LocationNeighborhood|Proxy                     first(string $sortedField = 'id')
 * @method static LocationNeighborhood|Proxy                     last(string $sortedField = 'id')
 * @method static LocationNeighborhood|Proxy                     random(array $attributes = [])
 * @method static LocationNeighborhood|Proxy                     randomOrCreate(array $attributes = [])
 * @method static LocationNeighborhoodRepository|RepositoryProxy repository()
 * @method static LocationNeighborhood[]|Proxy[]                 all()
 * @method static LocationNeighborhood[]|Proxy[]                 createMany(int $number, array|callable $attributes = [])
 * @method static LocationNeighborhood[]|Proxy[]                 createSequence(iterable|callable $sequence)
 * @method static LocationNeighborhood[]|Proxy[]                 findBy(array $attributes)
 * @method static LocationNeighborhood[]|Proxy[]                 randomRange(int $min, int $max, array $attributes = [])
 * @method static LocationNeighborhood[]|Proxy[]                 randomSet(int $number, array $attributes = [])
 *
 * @phpstan-method        Proxy<LocationNeighborhood> create(array|callable $attributes = [])
 * @phpstan-method static Proxy<LocationNeighborhood> createOne(array $attributes = [])
 * @phpstan-method static Proxy<LocationNeighborhood> find(object|array|mixed $criteria)
 * @phpstan-method static Proxy<LocationNeighborhood> findOrCreate(array $attributes)
 * @phpstan-method static Proxy<LocationNeighborhood> first(string $sortedField = 'id')
 * @phpstan-method static Proxy<LocationNeighborhood> last(string $sortedField = 'id')
 * @phpstan-method static Proxy<LocationNeighborhood> random(array $attributes = [])
 * @phpstan-method static Proxy<LocationNeighborhood> randomOrCreate(array $attributes = [])
 * @phpstan-method static RepositoryProxy<LocationNeighborhood> repository()
 * @phpstan-method static list<Proxy<LocationNeighborhood>> all()
 * @phpstan-method static list<Proxy<LocationNeighborhood>> createMany(int $number, array|callable $attributes = [])
 * @phpstan-method static list<Proxy<LocationNeighborhood>> createSequence(iterable|callable $sequence)
 * @phpstan-method static list<Proxy<LocationNeighborhood>> findBy(array $attributes)
 * @phpstan-method static list<Proxy<LocationNeighborhood>> randomRange(int $min, int $max, array $attributes = [])
 * @phpstan-method static list<Proxy<LocationNeighborhood>> randomSet(int $number, array $attributes = [])
 */
final class LocationNeighborhoodFactory extends ModelFactory
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
            'city' => LocationCityFactory::new(),
            'name' => self::faker()->text(255),
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
            // ->afterInstantiate(function(LocationNeighborhood $locationNeighborhood): void {})
        ;
    }

    #[\Override]
    protected static function getClass(): string
    {
        return LocationNeighborhood::class;
    }
}
