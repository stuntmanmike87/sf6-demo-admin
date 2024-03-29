<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\LanguageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LanguageRepository::class)]
#[ORM\Index(columns: ['translate_key'], name: 'idx_translate_key')]
#[ORM\Index(columns: ['locale'], name: 'idx_locale')]
#[ORM\Index(columns: ['app'], name: 'idx_app')]
#[ORM\Index(columns: ['user'], name: 'idx_user')]
/** @final */
class Language
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null; // private string $name;

    #[ORM\Column(length: 10)]
    private ?string $locale = null; // private string $locale;

    #[ORM\Column(length: 10)]
    private ?string $identifier = null; // private string $identifier;

    #[ORM\Column(length: 255)]
    private ?string $translateKey = null; // private string $translateKey;

    #[ORM\Column]
    private ?bool $app = false; // private bool $app = false;

    #[ORM\Column]
    private ?bool $user = false; // private bool $user = false;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\Column]
    private ?bool $active = true; // private bool $active = true;

    /** @var Collection<int, Translation> $translations */
    #[ORM\OneToMany(mappedBy: 'language', targetEntity: Translation::class)]
    private Collection $translations;

    public function __construct()
    {
        $this->translations = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getLocale(): ?string
    {
        return $this->locale;
    }

    public function setLocale(string $locale): self
    {
        $this->locale = $locale;

        return $this;
    }

    public function getIdentifier(): ?string
    {
        return $this->identifier;
    }

    public function setIdentifier(string $identifier): self
    {
        $this->identifier = $identifier;

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

    public function isApp(): ?bool
    {
        return $this->app;
    }

    public function setApp(bool $app): self
    {
        $this->app = $app;

        return $this;
    }

    public function isUser(): ?bool
    {
        return $this->user;
    }

    public function setUser(bool $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(bool $active): self
    {
        $this->active = $active;

        return $this;
    }

    /**
     * @return Collection<int, Translation>
     */
    public function getTranslations(): Collection
    {
        return $this->translations;
    }

    public function addTranslation(Translation $translation): self
    {
        if (!$this->translations->contains($translation)) {
            $this->translations->add($translation);
            $translation->setLanguage($this);
        }

        return $this;
    }

    public function removeTranslation(Translation $translation): self
    {
        // set the owning side to null (unless already changed)
        if ($this->translations->removeElement($translation) && $translation->getLanguage() === $this) {
            $translation->setLanguage(null);
        }

        return $this;
    }
}
