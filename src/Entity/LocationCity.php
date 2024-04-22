<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\LocationCityRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: LocationCityRepository::class)]
#[ORM\Index(columns: ['name'], name: 'idx_name')]
#[ORM\Index(columns: ['slug'], name: 'idx_slug')]
/** @final */
class LocationCity
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    private ?string $name = null; // private string $name;

    #[ORM\Column(length: 255)]
    private ?string $slug = null; // private string $slug;

    #[ORM\ManyToOne(inversedBy: 'cities')]
    #[ORM\JoinColumn(nullable: false)]
    private ?LocationState $state = null; // private LocationState $state;

    /** @var Collection<int, LocationNeighborhood> $neighborhoods */
    #[ORM\OneToMany(mappedBy: 'city', targetEntity: LocationNeighborhood::class)]
    private Collection $neighborhoods;

    /** @var Collection<int, User> $users */
    #[ORM\OneToMany(mappedBy: 'city', targetEntity: User::class)]
    private Collection $users;

    public function __construct()
    {
        $this->neighborhoods = new ArrayCollection();
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

    public function getState(): ?LocationState
    {
        return $this->state;
    }

    public function setState(?LocationState $state): self
    {
        $this->state = $state;

        return $this;
    }

    /**
     * @return Collection<int, LocationNeighborhood>
     */
    public function getNeighborhoods(): Collection
    {
        return $this->neighborhoods;
    }

    public function addNeighborhood(LocationNeighborhood $neighborhood): self
    {
        if (!$this->neighborhoods->contains($neighborhood)) {
            $this->neighborhoods->add($neighborhood);
            $neighborhood->setCity($this);
        }

        return $this;
    }

    public function removeNeighborhood(LocationNeighborhood $neighborhood): self
    {
        // set the owning side to null (unless already changed)
        if ($this->neighborhoods->removeElement($neighborhood) && $neighborhood->getCity() === $this) {
            $neighborhood->setCity(null);
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
            $user->setCity($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        // set the owning side to null (unless already changed)
        if ($this->users->removeElement($user) && $user->getCity() === $this) {
            $user->setCity(null);
        }

        return $this;
    }
}
