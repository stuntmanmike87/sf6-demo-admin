<?php

namespace App\Factory;

use App\Entity\Language;
use App\Repository\LanguageRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<Language>
 *
 * @method        Language|Proxy                     create(array|callable $attributes = [])
 * @method static Language|Proxy                     createOne(array $attributes = [])
 * @method static Language|Proxy                     find(object|array|mixed $criteria)
 * @method static Language|Proxy                     findOrCreate(array $attributes)
 * @method static Language|Proxy                     first(string $sortedField = 'id')
 * @method static Language|Proxy                     last(string $sortedField = 'id')
 * @method static Language|Proxy                     random(array $attributes = [])
 * @method static Language|Proxy                     randomOrCreate(array $attributes = [])
 * @method static LanguageRepository|RepositoryProxy repository()
 * @method static Language[]|Proxy[]                 all()
 * @method static Language[]|Proxy[]                 createMany(int $number, array|callable $attributes = [])
 * @method static Language[]|Proxy[]                 createSequence(iterable|callable $sequence)
 * @method static Language[]|Proxy[]                 findBy(array $attributes)
 * @method static Language[]|Proxy[]                 randomRange(int $min, int $max, array $attributes = [])
 * @method static Language[]|Proxy[]                 randomSet(int $number, array $attributes = [])
 *
 * @phpstan-method        Proxy<Language> create(array|callable $attributes = [])
 * @phpstan-method static Proxy<Language> createOne(array $attributes = [])
 * @phpstan-method static Proxy<Language> find(object|array|mixed $criteria)
 * @phpstan-method static Proxy<Language> findOrCreate(array $attributes)
 * @phpstan-method static Proxy<Language> first(string $sortedField = 'id')
 * @phpstan-method static Proxy<Language> last(string $sortedField = 'id')
 * @phpstan-method static Proxy<Language> random(array $attributes = [])
 * @phpstan-method static Proxy<Language> randomOrCreate(array $attributes = [])
 * @phpstan-method static RepositoryProxy<Language> repository()
 * @phpstan-method static list<Proxy<Language>> all()
 * @phpstan-method static list<Proxy<Language>> createMany(int $number, array|callable $attributes = [])
 * @phpstan-method static list<Proxy<Language>> createSequence(iterable|callable $sequence)
 * @phpstan-method static list<Proxy<Language>> findBy(array $attributes)
 * @phpstan-method static list<Proxy<Language>> randomRange(int $min, int $max, array $attributes = [])
 * @phpstan-method static list<Proxy<Language>> randomSet(int $number, array $attributes = [])
 */
final class LanguageFactory extends ModelFactory
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
            'active' => self::faker()->boolean(),
            'app' => self::faker()->boolean(),
            'identifier' => self::faker()->text(10),
            'locale' => self::faker()->text(10),
            'name' => self::faker()->text(255),
            'translateKey' => self::faker()->text(255),
            'user' => self::faker()->boolean(),
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(Language $language): void {})
        ;
    }

    protected static function getClass(): string
    {
        return Language::class;
    }
}
