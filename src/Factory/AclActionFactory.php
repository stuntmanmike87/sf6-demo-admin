<?php

namespace App\Factory;

use App\Entity\AclAction;
use App\Repository\AclActionRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<AclAction>
 *
 * @method        AclAction|Proxy                     create(array|callable $attributes = [])
 * @method static AclAction|Proxy                     createOne(array $attributes = [])
 * @method static AclAction|Proxy                     find(object|array|mixed $criteria)
 * @method static AclAction|Proxy                     findOrCreate(array $attributes)
 * @method static AclAction|Proxy                     first(string $sortedField = 'id')
 * @method static AclAction|Proxy                     last(string $sortedField = 'id')
 * @method static AclAction|Proxy                     random(array $attributes = [])
 * @method static AclAction|Proxy                     randomOrCreate(array $attributes = [])
 * @method static AclActionRepository|RepositoryProxy repository()
 * @method static AclAction[]|Proxy[]                 all()
 * @method static AclAction[]|Proxy[]                 createMany(int $number, array|callable $attributes = [])
 * @method static AclAction[]|Proxy[]                 createSequence(iterable|callable $sequence)
 * @method static AclAction[]|Proxy[]                 findBy(array $attributes)
 * @method static AclAction[]|Proxy[]                 randomRange(int $min, int $max, array $attributes = [])
 * @method static AclAction[]|Proxy[]                 randomSet(int $number, array $attributes = [])
 *
 * @phpstan-method        Proxy<AclAction> create(array|callable $attributes = [])
 * @phpstan-method static Proxy<AclAction> createOne(array $attributes = [])
 * @phpstan-method static Proxy<AclAction> find(object|array|mixed $criteria)
 * @phpstan-method static Proxy<AclAction> findOrCreate(array $attributes)
 * @phpstan-method static Proxy<AclAction> first(string $sortedField = 'id')
 * @phpstan-method static Proxy<AclAction> last(string $sortedField = 'id')
 * @phpstan-method static Proxy<AclAction> random(array $attributes = [])
 * @phpstan-method static Proxy<AclAction> randomOrCreate(array $attributes = [])
 * @phpstan-method static RepositoryProxy<AclAction> repository()
 * @phpstan-method static list<Proxy<AclAction>> all()
 * @phpstan-method static list<Proxy<AclAction>> createMany(int $number, array|callable $attributes = [])
 * @phpstan-method static list<Proxy<AclAction>> createSequence(iterable|callable $sequence)
 * @phpstan-method static list<Proxy<AclAction>> findBy(array $attributes)
 * @phpstan-method static list<Proxy<AclAction>> randomRange(int $min, int $max, array $attributes = [])
 * @phpstan-method static list<Proxy<AclAction>> randomSet(int $number, array $attributes = [])
 */
final class AclActionFactory extends ModelFactory
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
            'controller' => AclControllerFactory::new(),
            'name' => self::faker()->text(255),
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(AclAction $aclAction): void {})
        ;
    }

    protected static function getClass(): string
    {
        return AclAction::class;
    }
}
