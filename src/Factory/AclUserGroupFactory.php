<?php

namespace App\Factory;

use Override;
use App\Entity\AclUserGroup;
use App\Repository\AclUserGroupRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<AclUserGroup>
 *
 * @method        AclUserGroup|Proxy                     create(array|callable $attributes = [])
 * @method static AclUserGroup|Proxy                     createOne(array $attributes = [])
 * @method static AclUserGroup|Proxy                     find(object|array|mixed $criteria)
 * @method static AclUserGroup|Proxy                     findOrCreate(array $attributes)
 * @method static AclUserGroup|Proxy                     first(string $sortedField = 'id')
 * @method static AclUserGroup|Proxy                     last(string $sortedField = 'id')
 * @method static AclUserGroup|Proxy                     random(array $attributes = [])
 * @method static AclUserGroup|Proxy                     randomOrCreate(array $attributes = [])
 * @method static AclUserGroupRepository|RepositoryProxy repository()
 * @method static AclUserGroup[]|Proxy[]                 all()
 * @method static AclUserGroup[]|Proxy[]                 createMany(int $number, array|callable $attributes = [])
 * @method static AclUserGroup[]|Proxy[]                 createSequence(iterable|callable $sequence)
 * @method static AclUserGroup[]|Proxy[]                 findBy(array $attributes)
 * @method static AclUserGroup[]|Proxy[]                 randomRange(int $min, int $max, array $attributes = [])
 * @method static AclUserGroup[]|Proxy[]                 randomSet(int $number, array $attributes = [])
 *
 * @phpstan-method        Proxy<AclUserGroup> create(array|callable $attributes = [])
 * @phpstan-method static Proxy<AclUserGroup> createOne(array $attributes = [])
 * @phpstan-method static Proxy<AclUserGroup> find(object|array|mixed $criteria)
 * @phpstan-method static Proxy<AclUserGroup> findOrCreate(array $attributes)
 * @phpstan-method static Proxy<AclUserGroup> first(string $sortedField = 'id')
 * @phpstan-method static Proxy<AclUserGroup> last(string $sortedField = 'id')
 * @phpstan-method static Proxy<AclUserGroup> random(array $attributes = [])
 * @phpstan-method static Proxy<AclUserGroup> randomOrCreate(array $attributes = [])
 * @phpstan-method static RepositoryProxy<AclUserGroup> repository()
 * @phpstan-method static list<Proxy<AclUserGroup>> all()
 * @phpstan-method static list<Proxy<AclUserGroup>> createMany(int $number, array|callable $attributes = [])
 * @phpstan-method static list<Proxy<AclUserGroup>> createSequence(iterable|callable $sequence)
 * @phpstan-method static list<Proxy<AclUserGroup>> findBy(array $attributes)
 * @phpstan-method static list<Proxy<AclUserGroup>> randomRange(int $min, int $max, array $attributes = [])
 * @phpstan-method static list<Proxy<AclUserGroup>> randomSet(int $number, array $attributes = [])
 */
final class AclUserGroupFactory extends ModelFactory
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
    #[Override]
    protected function getDefaults(): array
    {
        return [
            'active' => self::faker()->boolean(),
            'adm' => self::faker()->boolean(),
            'translateKey' => self::faker()->text(255),
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    #[Override]
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(AclUserGroup $aclUserGroup): void {})
        ;
    }

    #[Override]
    protected static function getClass(): string
    {
        return AclUserGroup::class;
    }
}
