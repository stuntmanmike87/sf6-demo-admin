<?php

namespace App\Factory;

use Override;
use App\Entity\Translation;
use App\Repository\TranslationRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<Translation>
 *
 * @method        Translation|Proxy                     create(array|callable $attributes = [])
 * @method static Translation|Proxy                     createOne(array $attributes = [])
 * @method static Translation|Proxy                     find(object|array|mixed $criteria)
 * @method static Translation|Proxy                     findOrCreate(array $attributes)
 * @method static Translation|Proxy                     first(string $sortedField = 'id')
 * @method static Translation|Proxy                     last(string $sortedField = 'id')
 * @method static Translation|Proxy                     random(array $attributes = [])
 * @method static Translation|Proxy                     randomOrCreate(array $attributes = [])
 * @method static TranslationRepository|RepositoryProxy repository()
 * @method static Translation[]|Proxy[]                 all()
 * @method static Translation[]|Proxy[]                 createMany(int $number, array|callable $attributes = [])
 * @method static Translation[]|Proxy[]                 createSequence(iterable|callable $sequence)
 * @method static Translation[]|Proxy[]                 findBy(array $attributes)
 * @method static Translation[]|Proxy[]                 randomRange(int $min, int $max, array $attributes = [])
 * @method static Translation[]|Proxy[]                 randomSet(int $number, array $attributes = [])
 *
 * @phpstan-method        Proxy<Translation> create(array|callable $attributes = [])
 * @phpstan-method static Proxy<Translation> createOne(array $attributes = [])
 * @phpstan-method static Proxy<Translation> find(object|array|mixed $criteria)
 * @phpstan-method static Proxy<Translation> findOrCreate(array $attributes)
 * @phpstan-method static Proxy<Translation> first(string $sortedField = 'id')
 * @phpstan-method static Proxy<Translation> last(string $sortedField = 'id')
 * @phpstan-method static Proxy<Translation> random(array $attributes = [])
 * @phpstan-method static Proxy<Translation> randomOrCreate(array $attributes = [])
 * @phpstan-method static RepositoryProxy<Translation> repository()
 * @phpstan-method static list<Proxy<Translation>> all()
 * @phpstan-method static list<Proxy<Translation>> createMany(int $number, array|callable $attributes = [])
 * @phpstan-method static list<Proxy<Translation>> createSequence(iterable|callable $sequence)
 * @phpstan-method static list<Proxy<Translation>> findBy(array $attributes)
 * @phpstan-method static list<Proxy<Translation>> randomRange(int $min, int $max, array $attributes = [])
 * @phpstan-method static list<Proxy<Translation>> randomSet(int $number, array $attributes = [])
 */
final class TranslationFactory extends ModelFactory
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
            'language' => LanguageFactory::new(),
            'slug' => self::faker()->text(255),
            'text' => self::faker()->text(255),
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
            // ->afterInstantiate(function(Translation $translation): void {})
        ;
    }

    #[Override]
    protected static function getClass(): string
    {
        return Translation::class;
    }
}
