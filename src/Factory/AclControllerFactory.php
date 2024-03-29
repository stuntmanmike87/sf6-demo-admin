<?php

namespace App\Factory;

use App\Entity\AclController;
use App\Repository\AclControllerRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<AclController>
 *
 * @method        AclController|Proxy                     create(array|callable $attributes = [])
 * @method static AclController|Proxy                     createOne(array $attributes = [])
 * @method static AclController|Proxy                     find(object|array|mixed $criteria)
 * @method static AclController|Proxy                     findOrCreate(array $attributes)
 * @method static AclController|Proxy                     first(string $sortedField = 'id')
 * @method static AclController|Proxy                     last(string $sortedField = 'id')
 * @method static AclController|Proxy                     random(array $attributes = [])
 * @method static AclController|Proxy                     randomOrCreate(array $attributes = [])
 * @method static AclControllerRepository|RepositoryProxy repository()
 * @method static AclController[]|Proxy[]                 all()
 * @method static AclController[]|Proxy[]                 createMany(int $number, array|callable $attributes = [])
 * @method static AclController[]|Proxy[]                 createSequence(iterable|callable $sequence)
 * @method static AclController[]|Proxy[]                 findBy(array $attributes)
 * @method static AclController[]|Proxy[]                 randomRange(int $min, int $max, array $attributes = [])
 * @method static AclController[]|Proxy[]                 randomSet(int $number, array $attributes = [])
 *
 * @phpstan-method        Proxy<AclController> create(array|callable $attributes = [])
 * @phpstan-method static Proxy<AclController> createOne(array $attributes = [])
 * @phpstan-method static Proxy<AclController> find(object|array|mixed $criteria)
 * @phpstan-method static Proxy<AclController> findOrCreate(array $attributes)
 * @phpstan-method static Proxy<AclController> first(string $sortedField = 'id')
 * @phpstan-method static Proxy<AclController> last(string $sortedField = 'id')
 * @phpstan-method static Proxy<AclController> random(array $attributes = [])
 * @phpstan-method static Proxy<AclController> randomOrCreate(array $attributes = [])
 * @phpstan-method static RepositoryProxy<AclController> repository()
 * @phpstan-method static list<Proxy<AclController>> all()
 * @phpstan-method static list<Proxy<AclController>> createMany(int $number, array|callable $attributes = [])
 * @phpstan-method static list<Proxy<AclController>> createSequence(iterable|callable $sequence)
 * @phpstan-method static list<Proxy<AclController>> findBy(array $attributes)
 * @phpstan-method static list<Proxy<AclController>> randomRange(int $min, int $max, array $attributes = [])
 * @phpstan-method static list<Proxy<AclController>> randomSet(int $number, array $attributes = [])
 */
final class AclControllerFactory extends ModelFactory
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
            'name' => self::faker()->text(255),
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    #[\Override]
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(AclController $aclController): void {})
        ;
    }

    #[\Override]
    protected static function getClass(): string
    {
        return AclController::class;
    }
}
