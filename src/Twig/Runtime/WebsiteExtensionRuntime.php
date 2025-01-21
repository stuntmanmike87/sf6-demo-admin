<?php

declare(strict_types=1);

namespace App\Twig\Runtime;

use App\Entity\LocationCountry;
use App\Utils\Acl;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Extension\RuntimeExtensionInterface;

final readonly class WebsiteExtensionRuntime implements RuntimeExtensionInterface
{
    public function __construct(
        private string $thumbnailUrl,
        private string $locales,
        private TranslatorInterface $translator,
        private Acl $acl,
        private EntityManagerInterface $entityManager,
    ) {
    }

    /** @param array<string>|null $thumb */
    public function getImage(?string $src, ?array $thumb = []): string
    {
        if (null === $src) {
            if (isset($thumb['w']) && isset($thumb['h'])) {
                return $this->thumbnailUrl.'?src=https://dummyimage.com/'.$thumb['w'].'x'.$thumb['h'].'/ffffff/bbb.gif&text=Sem imagem';
            }

            return $this->thumbnailUrl.'?src=https://dummyimage.com/800x800/ffffff/bbb.gif&text=Sem imagem';
        }

        $params = [];

        if (null !== $thumb) {
            foreach ($thumb as $parameter => $value) {
                $params[] = (string) $parameter.'='.$value;
            }
        }

        $params[] = 'src='.$src;

        return $this->thumbnailUrl.'?'.implode('&', $params);
    }

    /**
     * Returns HTML with correct toggle icon.
     */
    public function getHtmlToggle(?bool $active = false): string
    {
        $toggle = 'fa-toggle-off';

        if ((bool) $active) {
            $toggle = 'fa-toggle-on text-success';
        }

        return '<i class="fa '.$toggle.'" aria-hidden="true"></i>';
    }

    /**
     * Takes the list of codes of the locales (languages) enabled in the
     * application and returns an array with the name of each locale written
     * in its own language (e.g. English, Français, Español, etc.).
     */
    /** @return array<mixed> */
    public function getLocales(): array
    {
        $localeCodes = explode('|', $this->locales);
        sort($localeCodes);

        $locales = [];

        foreach ($localeCodes as $localeCode) {
            $translateKey = $this->translator->trans('language.translate_key.name', [], null, $localeCode);

            $locales[] = [
                'code' => $localeCode,
                'name' => $this->translator->trans($translateKey),
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

        if (null !== $action) {
            if ($controller === $_controller && $action === $_action) {
                return $className;
            }

            return '';
        }

        if ($controller === $_controller) {
            return $className;
        }

        return '';
    }

    /**
     * Returns a string with the correct text by translate key.
     * Originally this method was created to receive an array
     * generated from TranslationHelper::convertTranslateKeyAsKey().
     *
     * @param array<mixed> $translations
     */
    public function getTextByTranslateKey(array $translations, ?string $translateKey): mixed// ?mixed//?string
    {
        if (null === $translateKey) {
            return null;
        }

        return $translations[$translateKey] ?? $translateKey;
    }

    // /**
    //  * Returns an array with all calling codes from each country.
    //  *
    //  * @return array<mixed>
    //  */
    public function getCountryCallingCodes(): mixed// array
    {
        $locationCountryRepository = $this->entityManager->getRepository(LocationCountry::class);

        return $locationCountryRepository->findAllCallingCodes();
    }
}
