<?php

namespace App\Factory;

use Override;
use App\Entity\UserLanguage;
use App\Repository\UserLanguageRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<UserLanguage>
 *
 * @method        UserLanguage|Proxy                     create(array|callable $attributes = [])
 * @method static UserLanguage|Proxy                     createOne(array $attributes = [])
 * @method static UserLanguage|Proxy                     find(object|array|mixed $criteria)
 * @method static UserLanguage|Proxy                     findOrCreate(array $attributes)
 * @method static UserLanguage|Proxy                     first(string $sortedField = 'id')
 * @method static UserLanguage|Proxy                     last(string $sortedField = 'id')
 * @method static UserLanguage|Proxy                     random(array $attributes = [])
 * @method static UserLanguage|Proxy                     randomOrCreate(array $attributes = [])
 * @method static UserLanguageRepository|RepositoryProxy repository()
 * @method static UserLanguage[]|Proxy[]                 all()
 * @method static UserLanguage[]|Proxy[]                 createMany(int $number, array|callable $attributes = [])
 * @method static UserLanguage[]|Proxy[]                 createSequence(iterable|callable $sequence)
 * @method static UserLanguage[]|Proxy[]                 findBy(array $attributes)
 * @method static UserLanguage[]|Proxy[]                 randomRange(int $min, int $max, array $attributes = [])
 * @method static UserLanguage[]|Proxy[]                 randomSet(int $number, array $attributes = [])
 *
 * @phpstan-method        Proxy<UserLanguage> create(array|callable $attributes = [])
 * @phpstan-method static Proxy<UserLanguage> createOne(array $attributes = [])
 * @phpstan-method static Proxy<UserLanguage> find(object|array|mixed $criteria)
 * @phpstan-method static Proxy<UserLanguage> findOrCreate(array $attributes)
 * @phpstan-method static Proxy<UserLanguage> first(string $sortedField = 'id')
 * @phpstan-method static Proxy<UserLanguage> last(string $sortedField = 'id')
 * @phpstan-method static Proxy<UserLanguage> random(array $attributes = [])
 * @phpstan-method static Proxy<UserLanguage> randomOrCreate(array $attributes = [])
 * @phpstan-method static RepositoryProxy<UserLanguage> repository()
 * @phpstan-method static list<Proxy<UserLanguage>> all()
 * @phpstan-method static list<Proxy<UserLanguage>> createMany(int $number, array|callable $attributes = [])
 * @phpstan-method static list<Proxy<UserLanguage>> createSequence(iterable|callable $sequence)
 * @phpstan-method static list<Proxy<UserLanguage>> findBy(array $attributes)
 * @phpstan-method static list<Proxy<UserLanguage>> randomRange(int $min, int $max, array $attributes = [])
 * @phpstan-method static list<Proxy<UserLanguage>> randomSet(int $number, array $attributes = [])
 */
final class UserLanguageFactory extends ModelFactory
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
            'category' => self::faker()->text(20),
            'language' => LanguageFactory::new(),
            'level' => self::faker()->text(20),
            'user' => UserFactory::new(),
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    #[Override]
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(UserLanguage $userLanguage): void {})
        ;
    }

    #[Override]
    protected static function getClass(): string
    {
        return UserLanguage::class;
    }
}
