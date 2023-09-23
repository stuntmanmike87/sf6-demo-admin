<?php

namespace App\Factory;

use App\Entity\AclPermission;
use App\Repository\AclPermissionRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<AclPermission>
 *
 * @method        AclPermission|Proxy                     create(array|callable $attributes = [])
 * @method static AclPermission|Proxy                     createOne(array $attributes = [])
 * @method static AclPermission|Proxy                     find(object|array|mixed $criteria)
 * @method static AclPermission|Proxy                     findOrCreate(array $attributes)
 * @method static AclPermission|Proxy                     first(string $sortedField = 'id')
 * @method static AclPermission|Proxy                     last(string $sortedField = 'id')
 * @method static AclPermission|Proxy                     random(array $attributes = [])
 * @method static AclPermission|Proxy                     randomOrCreate(array $attributes = [])
 * @method static AclPermissionRepository|RepositoryProxy repository()
 * @method static AclPermission[]|Proxy[]                 all()
 * @method static AclPermission[]|Proxy[]                 createMany(int $number, array|callable $attributes = [])
 * @method static AclPermission[]|Proxy[]                 createSequence(iterable|callable $sequence)
 * @method static AclPermission[]|Proxy[]                 findBy(array $attributes)
 * @method static AclPermission[]|Proxy[]                 randomRange(int $min, int $max, array $attributes = [])
 * @method static AclPermission[]|Proxy[]                 randomSet(int $number, array $attributes = [])
 *
 * @phpstan-method        Proxy<AclPermission> create(array|callable $attributes = [])
 * @phpstan-method static Proxy<AclPermission> createOne(array $attributes = [])
 * @phpstan-method static Proxy<AclPermission> find(object|array|mixed $criteria)
 * @phpstan-method static Proxy<AclPermission> findOrCreate(array $attributes)
 * @phpstan-method static Proxy<AclPermission> first(string $sortedField = 'id')
 * @phpstan-method static Proxy<AclPermission> last(string $sortedField = 'id')
 * @phpstan-method static Proxy<AclPermission> random(array $attributes = [])
 * @phpstan-method static Proxy<AclPermission> randomOrCreate(array $attributes = [])
 * @phpstan-method static RepositoryProxy<AclPermission> repository()
 * @phpstan-method static list<Proxy<AclPermission>> all()
 * @phpstan-method static list<Proxy<AclPermission>> createMany(int $number, array|callable $attributes = [])
 * @phpstan-method static list<Proxy<AclPermission>> createSequence(iterable|callable $sequence)
 * @phpstan-method static list<Proxy<AclPermission>> findBy(array $attributes)
 * @phpstan-method static list<Proxy<AclPermission>> randomRange(int $min, int $max, array $attributes = [])
 * @phpstan-method static list<Proxy<AclPermission>> randomSet(int $number, array $attributes = [])
 */
final class AclPermissionFactory extends ModelFactory
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
            'action' => AclActionFactory::new(),
            'userGroup' => AclUserGroupFactory::new(),
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(AclPermission $aclPermission): void {})
        ;
    }

    protected static function getClass(): string
    {
        return AclPermission::class;
    }
}
