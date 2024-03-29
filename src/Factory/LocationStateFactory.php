<?php

namespace App\Factory;

use App\Entity\LocationState;
use App\Repository\LocationStateRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<LocationState>
 *
 * @method        LocationState|Proxy                     create(array|callable $attributes = [])
 * @method static LocationState|Proxy                     createOne(array $attributes = [])
 * @method static LocationState|Proxy                     find(object|array|mixed $criteria)
 * @method static LocationState|Proxy                     findOrCreate(array $attributes)
 * @method static LocationState|Proxy                     first(string $sortedField = 'id')
 * @method static LocationState|Proxy                     last(string $sortedField = 'id')
 * @method static LocationState|Proxy                     random(array $attributes = [])
 * @method static LocationState|Proxy                     randomOrCreate(array $attributes = [])
 * @method static LocationStateRepository|RepositoryProxy repository()
 * @method static LocationState[]|Proxy[]                 all()
 * @method static LocationState[]|Proxy[]                 createMany(int $number, array|callable $attributes = [])
 * @method static LocationState[]|Proxy[]                 createSequence(iterable|callable $sequence)
 * @method static LocationState[]|Proxy[]                 findBy(array $attributes)
 * @method static LocationState[]|Proxy[]                 randomRange(int $min, int $max, array $attributes = [])
 * @method static LocationState[]|Proxy[]                 randomSet(int $number, array $attributes = [])
 *
 * @phpstan-method        Proxy<LocationState> create(array|callable $attributes = [])
 * @phpstan-method static Proxy<LocationState> createOne(array $attributes = [])
 * @phpstan-method static Proxy<LocationState> find(object|array|mixed $criteria)
 * @phpstan-method static Proxy<LocationState> findOrCreate(array $attributes)
 * @phpstan-method static Proxy<LocationState> first(string $sortedField = 'id')
 * @phpstan-method static Proxy<LocationState> last(string $sortedField = 'id')
 * @phpstan-method static Proxy<LocationState> random(array $attributes = [])
 * @phpstan-method static Proxy<LocationState> randomOrCreate(array $attributes = [])
 * @phpstan-method static RepositoryProxy<LocationState> repository()
 * @phpstan-method static list<Proxy<LocationState>> all()
 * @phpstan-method static list<Proxy<LocationState>> createMany(int $number, array|callable $attributes = [])
 * @phpstan-method static list<Proxy<LocationState>> createSequence(iterable|callable $sequence)
 * @phpstan-method static list<Proxy<LocationState>> findBy(array $attributes)
 * @phpstan-method static list<Proxy<LocationState>> randomRange(int $min, int $max, array $attributes = [])
 * @phpstan-method static list<Proxy<LocationState>> randomSet(int $number, array $attributes = [])
 */
final class LocationStateFactory extends ModelFactory
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
            'country' => LocationCountryFactory::new(),
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
            // ->afterInstantiate(function(LocationState $locationState): void {})
        ;
    }

    #[\Override]
    protected static function getClass(): string
    {
        return LocationState::class;
    }
}
