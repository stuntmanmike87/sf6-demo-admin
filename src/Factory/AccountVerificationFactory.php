<?php

namespace App\Factory;

use Override;
use App\Entity\AccountVerification;
use App\Repository\AccountVerificationRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<AccountVerification>
 *
 * @method        AccountVerification|Proxy                     create(array|callable $attributes = [])
 * @method static AccountVerification|Proxy                     createOne(array $attributes = [])
 * @method static AccountVerification|Proxy                     find(object|array|mixed $criteria)
 * @method static AccountVerification|Proxy                     findOrCreate(array $attributes)
 * @method static AccountVerification|Proxy                     first(string $sortedField = 'id')
 * @method static AccountVerification|Proxy                     last(string $sortedField = 'id')
 * @method static AccountVerification|Proxy                     random(array $attributes = [])
 * @method static AccountVerification|Proxy                     randomOrCreate(array $attributes = [])
 * @method static AccountVerificationRepository|RepositoryProxy repository()
 * @method static AccountVerification[]|Proxy[]                 all()
 * @method static AccountVerification[]|Proxy[]                 createMany(int $number, array|callable $attributes = [])
 * @method static AccountVerification[]|Proxy[]                 createSequence(iterable|callable $sequence)
 * @method static AccountVerification[]|Proxy[]                 findBy(array $attributes)
 * @method static AccountVerification[]|Proxy[]                 randomRange(int $min, int $max, array $attributes = [])
 * @method static AccountVerification[]|Proxy[]                 randomSet(int $number, array $attributes = [])
 *
 * @phpstan-method        Proxy<AccountVerification> create(array|callable $attributes = [])
 * @phpstan-method static Proxy<AccountVerification> createOne(array $attributes = [])
 * @phpstan-method static Proxy<AccountVerification> find(object|array|mixed $criteria)
 * @phpstan-method static Proxy<AccountVerification> findOrCreate(array $attributes)
 * @phpstan-method static Proxy<AccountVerification> first(string $sortedField = 'id')
 * @phpstan-method static Proxy<AccountVerification> last(string $sortedField = 'id')
 * @phpstan-method static Proxy<AccountVerification> random(array $attributes = [])
 * @phpstan-method static Proxy<AccountVerification> randomOrCreate(array $attributes = [])
 * @phpstan-method static RepositoryProxy<AccountVerification> repository()
 * @phpstan-method static list<Proxy<AccountVerification>> all()
 * @phpstan-method static list<Proxy<AccountVerification>> createMany(int $number, array|callable $attributes = [])
 * @phpstan-method static list<Proxy<AccountVerification>> createSequence(iterable|callable $sequence)
 * @phpstan-method static list<Proxy<AccountVerification>> findBy(array $attributes)
 * @phpstan-method static list<Proxy<AccountVerification>> randomRange(int $min, int $max, array $attributes = [])
 * @phpstan-method static list<Proxy<AccountVerification>> randomSet(int $number, array $attributes = [])
 */
final class AccountVerificationFactory extends ModelFactory
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
            'token' => self::faker()->text(255),
            'user' => UserFactory::new(),
            'validAt' => self::faker()->dateTime(),
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    #[Override]
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(AccountVerification $accountVerification): void {})
        ;
    }

    #[Override]
    protected static function getClass(): string
    {
        return AccountVerification::class;
    }
}
