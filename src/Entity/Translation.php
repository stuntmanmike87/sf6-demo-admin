<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\TranslationRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TranslationRepository::class)]
#[ORM\Index(columns: ['translate_key'], name: 'idx_translate_key')]
#[ORM\Index(columns: ['slug'], name: 'idx_slug')]
/** @final */
class Translation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $text = null; // private string $text;

    #[ORM\Column(length: 255)]
    private ?string $slug = null; // private string $slug;

    #[ORM\Column(length: 255)]
    private ?string $translateKey = null; // private string $translateKey;

    #[ORM\ManyToOne(inversedBy: 'translations')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Language $language = null; // private Language $language;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(string $text): self
    {
        $this->text = $text;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getTranslateKey(): ?string
    {
        return $this->translateKey;
    }

    public function setTranslateKey(string $translateKey): self
    {
        $this->translateKey = $translateKey;

        return $this;
    }

    public function getLanguage(): ?Language
    {
        return $this->language;
    }

    public function setLanguage(?Language $language): self
    {
        $this->language = $language;

        return $this;
    }
}
