<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\LocationCountryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LocationCountryRepository::class)]
#[ORM\Index(columns: ["name"], name: "idx_name")]
#[ORM\Index(columns: ["slug"], name: "idx_slug")]
/** @final */
class LocationCountry
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;//private string $name;

    #[ORM\Column(length: 255)]
    private ?string $slug = null;//private string $slug;

    #[ORM\Column(length: 3, nullable: true)]
    private ?string $alpha3 = null;

    #[ORM\Column(length: 255)]
    private ?string $native = null;//private string $native;

    #[ORM\Column(length: 2)]
    private ?string $alpha2 = null;//private string $alpha2;

    #[ORM\Column(length: 20, nullable: true)]
    private ?string $callingCode = null;

    /** @var  Collection<int, LocationState> $states*/
    #[ORM\OneToMany(mappedBy: 'country', targetEntity: LocationState::class)]
    private Collection $states;

    /** @var  Collection<int, User> $users*/
    #[ORM\OneToMany(mappedBy: 'country', targetEntity: User::class)]
    private Collection $users;

    public function __construct()
    {
        $this->states = new ArrayCollection();
        $this->users = new ArrayCollection();
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

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getAlpha3(): ?string
    {
        return $this->alpha3;
    }

    public function setAlpha3(?string $alpha3): self
    {
        $this->alpha3 = $alpha3;

        return $this;
    }

    public function getNative(): ?string
    {
        return $this->native;
    }

    public function setNative(string $native): self
    {
        $this->native = $native;

        return $this;
    }

    public function getAlpha2(): ?string
    {
        return $this->alpha2;
    }

    public function setAlpha2(string $alpha2): self
    {
        $this->alpha2 = $alpha2;

        return $this;
    }

    public function getCallingCode(): ?string
    {
        return $this->callingCode;
    }

    public function setCallingCode(?string $callingCode): self
    {
        $this->callingCode = $callingCode;

        return $this;
    }

    /**
     * @return Collection<int, LocationState>
     */
    public function getStates(): Collection
    {
        return $this->states;
    }

    public function addState(LocationState $state): self
    {
        if (!$this->states->contains($state)) {
            $this->states->add($state);
            $state->setCountry($this);
        }

        return $this;
    }

    public function removeState(LocationState $state): self
    {
        // set the owning side to null (unless already changed)
        if ($this->states->removeElement($state) && $state->getCountry() === $this) {
            $state->setCountry(null);
        }

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users->add($user);
            $user->setCountry($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        // set the owning side to null (unless already changed)
        if ($this->users->removeElement($user) && $user->getCountry() === $this) {
            $user->setCountry(null);
        }

        return $this;
    }
}
