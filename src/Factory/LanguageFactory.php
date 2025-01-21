<?php

namespace App\Factory;

use App\Entity\Language;
use Zenstruck\Foundry\Persistence\PersistentProxyObjectFactory;

/**
 * @extends PersistentProxyObjectFactory<Language>
 */
final class LanguageFactory extends PersistentProxyObjectFactory
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

    public static function class(): string
    {
        return Language::class;
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#model-factories
     *
     * @todo add your default values here
     *
     * @return array<string, mixed>
     */
    protected function defaults(): array // |callable
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
    protected function initialize(): static
    {
        return $this
            // ->afterInstantiate(function(Language $language): void {})
        ;
    }
}
