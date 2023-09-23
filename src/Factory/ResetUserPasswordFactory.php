<?php

namespace App\Factory;

use App\Entity\ResetUserPassword;
use App\Repository\ResetUserPasswordRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<ResetUserPassword>
 *
 * @method        ResetUserPassword|Proxy                     create(array|callable $attributes = [])
 * @method static ResetUserPassword|Proxy                     createOne(array $attributes = [])
 * @method static ResetUserPassword|Proxy                     find(object|array|mixed $criteria)
 * @method static ResetUserPassword|Proxy                     findOrCreate(array $attributes)
 * @method static ResetUserPassword|Proxy                     first(string $sortedField = 'id')
 * @method static ResetUserPassword|Proxy                     last(string $sortedField = 'id')
 * @method static ResetUserPassword|Proxy                     random(array $attributes = [])
 * @method static ResetUserPassword|Proxy                     randomOrCreate(array $attributes = [])
 * @method static ResetUserPasswordRepository|RepositoryProxy repository()
 * @method static ResetUserPassword[]|Proxy[]                 all()
 * @method static ResetUserPassword[]|Proxy[]                 createMany(int $number, array|callable $attributes = [])
 * @method static ResetUserPassword[]|Proxy[]                 createSequence(iterable|callable $sequence)
 * @method static ResetUserPassword[]|Proxy[]                 findBy(array $attributes)
 * @method static ResetUserPassword[]|Proxy[]                 randomRange(int $min, int $max, array $attributes = [])
 * @method static ResetUserPassword[]|Proxy[]                 randomSet(int $number, array $attributes = [])
 *
 * @phpstan-method        Proxy<ResetUserPassword> create(array|callable $attributes = [])
 * @phpstan-method static Proxy<ResetUserPassword> createOne(array $attributes = [])
 * @phpstan-method static Proxy<ResetUserPassword> find(object|array|mixed $criteria)
 * @phpstan-method static Proxy<ResetUserPassword> findOrCreate(array $attributes)
 * @phpstan-method static Proxy<ResetUserPassword> first(string $sortedField = 'id')
 * @phpstan-method static Proxy<ResetUserPassword> last(string $sortedField = 'id')
 * @phpstan-method static Proxy<ResetUserPassword> random(array $attributes = [])
 * @phpstan-method static Proxy<ResetUserPassword> randomOrCreate(array $attributes = [])
 * @phpstan-method static RepositoryProxy<ResetUserPassword> repository()
 * @phpstan-method static list<Proxy<ResetUserPassword>> all()
 * @phpstan-method static list<Proxy<ResetUserPassword>> createMany(int $number, array|callable $attributes = [])
 * @phpstan-method static list<Proxy<ResetUserPassword>> createSequence(iterable|callable $sequence)
 * @phpstan-method static list<Proxy<ResetUserPassword>> findBy(array $attributes)
 * @phpstan-method static list<Proxy<ResetUserPassword>> randomRange(int $min, int $max, array $attributes = [])
 * @phpstan-method static list<Proxy<ResetUserPassword>> randomSet(int $number, array $attributes = [])
 */
final class ResetUserPasswordFactory extends ModelFactory
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
            'token' => self::faker()->text(255),
            'user' => UserFactory::new(),
            'validAt' => self::faker()->dateTime(),
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(ResetUserPassword $resetUserPassword): void {})
        ;
    }

    protected static function getClass(): string
    {
        return ResetUserPassword::class;
    }
}
