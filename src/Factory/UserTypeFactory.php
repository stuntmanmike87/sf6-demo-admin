<?php

namespace App\Factory;

use App\Entity\UserType;
use App\Repository\UserTypeRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<UserType>
 *
 * @method        UserType|Proxy                     create(array|callable $attributes = [])
 * @method static UserType|Proxy                     createOne(array $attributes = [])
 * @method static UserType|Proxy                     find(object|array|mixed $criteria)
 * @method static UserType|Proxy                     findOrCreate(array $attributes)
 * @method static UserType|Proxy                     first(string $sortedField = 'id')
 * @method static UserType|Proxy                     last(string $sortedField = 'id')
 * @method static UserType|Proxy                     random(array $attributes = [])
 * @method static UserType|Proxy                     randomOrCreate(array $attributes = [])
 * @method static UserTypeRepository|RepositoryProxy repository()
 * @method static UserType[]|Proxy[]                 all()
 * @method static UserType[]|Proxy[]                 createMany(int $number, array|callable $attributes = [])
 * @method static UserType[]|Proxy[]                 createSequence(iterable|callable $sequence)
 * @method static UserType[]|Proxy[]                 findBy(array $attributes)
 * @method static UserType[]|Proxy[]                 randomRange(int $min, int $max, array $attributes = [])
 * @method static UserType[]|Proxy[]                 randomSet(int $number, array $attributes = [])
 *
 * @phpstan-method        Proxy<UserType> create(array|callable $attributes = [])
 * @phpstan-method static Proxy<UserType> createOne(array $attributes = [])
 * @phpstan-method static Proxy<UserType> find(object|array|mixed $criteria)
 * @phpstan-method static Proxy<UserType> findOrCreate(array $attributes)
 * @phpstan-method static Proxy<UserType> first(string $sortedField = 'id')
 * @phpstan-method static Proxy<UserType> last(string $sortedField = 'id')
 * @phpstan-method static Proxy<UserType> random(array $attributes = [])
 * @phpstan-method static Proxy<UserType> randomOrCreate(array $attributes = [])
 * @phpstan-method static RepositoryProxy<UserType> repository()
 * @phpstan-method static list<Proxy<UserType>> all()
 * @phpstan-method static list<Proxy<UserType>> createMany(int $number, array|callable $attributes = [])
 * @phpstan-method static list<Proxy<UserType>> createSequence(iterable|callable $sequence)
 * @phpstan-method static list<Proxy<UserType>> findBy(array $attributes)
 * @phpstan-method static list<Proxy<UserType>> randomRange(int $min, int $max, array $attributes = [])
 * @phpstan-method static list<Proxy<UserType>> randomSet(int $number, array $attributes = [])
 */
final class UserTypeFactory extends ModelFactory
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
            'translateKey' => self::faker()->text(255),
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    #[\Override]
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(UserType $userType): void {})
        ;
    }

    #[\Override]
    protected static function getClass(): string
    {
        return UserType::class;
    }
}
