<?php

declare(strict_types=1);

namespace App\Twig\Runtime;

use App\Entity\LocationCountry;
use App\Utils\Acl;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Extension\RuntimeExtensionInterface;

final class WebsiteExtensionRuntime implements RuntimeExtensionInterface
{
    public function __construct(private readonly string $thumbnailUrl, private readonly string $locales, private readonly TranslatorInterface $translator, private readonly Acl $acl, private readonly EntityManagerInterface $entityManager)
    {
    }

    /** @param array<mixed>|null $thumb */
    public function getImage(?string $src, ?array $thumb = []): string
    {
        if ($src === null) {
            if (isset($thumb['w']) && isset($thumb['h'])) {
                return $this->thumbnailUrl . '?src=https://dummyimage.com/' . $thumb['w'] .'x'. $thumb['h'] . '/ffffff/bbb.gif&text=Sem imagem';
            }

            return $this->thumbnailUrl . '?src=https://dummyimage.com/800x800/ffffff/bbb.gif&text=Sem imagem';
        }

        $params = [];

        if ($thumb !== null) {
            foreach ($thumb as $parameter => $value) {
                $params[] = $parameter . '=' . $value;
            }
        }

        $params[] = "src=".$src;

        return $this->thumbnailUrl. '?'. implode('&', $params);
    }

    /**
     * Returns HTML with correct toggle icon.
     *
     *
     */
    public function getHtmlToggle(?bool $active = false): string
    {
        $toggle = 'fa-toggle-off';

        if ((bool) $active) {
            $toggle = 'fa-toggle-on text-success';
        }

        return '<i class="fa ' . $toggle . '" aria-hidden="true"></i>';
    }

    /**
     * Takes the list of codes of the locales (languages) enabled in the
     * application and returns an array with the name of each locale written
     * in its own language (e.g. English, Français, Español, etc.).
     */
    /** @return array<mixed> */
    public function getLocales(): array
    {
        $localeCodes = explode('|', /* (string)  */$this->locales);
        sort($localeCodes);

        $locales = [];

        foreach ($localeCodes as $localeCode) {
            $translateKey = $this->translator->trans('language.translate_key.name', [], null, $localeCode);

            $locales[] = [
                'code' => $localeCode,
                'name' => $this->translator->trans($translateKey)
            ];
        }

        return $locales;
    }

    /**
     * Returns the class name if the controller and action match.
     */
    public function displayClass(string $className, string $controller, ?string $action = null): string
    {
        $_controller = $this->acl->getControllerName();
        $_action = $this->acl->getActionName();

        if ($action !== null) {
            if ($controller == $_controller && $action == $_action) {
                return $className;
            }

            return '';
        }

        if ($controller == $_controller) {
            return $className;
        }

        return '';
    }

    /**
     * Returns a string with the correct text by translate key.
     * Originally this method was created to receive an array generated from TranslationHelper::convertTranslateKeyAsKey().
     *
     * @param array<mixed> $translations
     * @param string|null $translateKey
     */
    public function getTextByTranslateKey(array $translations, ?string $translateKey): mixed//?mixed//?string
    {
        if ($translateKey === null) {
            return null;
        }

        return $translations[$translateKey] ?? $translateKey;
    }

    /**
     * Returns an array with all calling codes from each country.
     *
     * @return array<mixed>
     */
    public function getCountryCallingCodes(): array
    {
        return $this->entityManager->getRepository(LocationCountry::class)
            ->findAllCallingCodes();
    }
}
