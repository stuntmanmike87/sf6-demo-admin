<?php

namespace App\Entity;

use App\Repository\LocationStateRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LocationStateRepository::class)]
#[ORM\Index(columns: ["name"], name: "idx_name")]
#[ORM\Index(columns: ["slug"], name: "idx_slug")]
class LocationState
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $slug = null;

    #[ORM\Column(length: 5, nullable: true)]
    private ?string $code = null;

    #[ORM\ManyToOne(inversedBy: 'states')]
    #[ORM\JoinColumn(nullable: false)]
    private ?LocationCountry $country = null;

    #[ORM\OneToMany(mappedBy: 'state', targetEntity: LocationCity::class)]
    private Collection $cities;

    #[ORM\OneToMany(mappedBy: 'state', targetEntity: User::class)]
    private Collection $users;

    public function __construct()
    {
        $this->cities = new ArrayCollection();
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

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getCountry(): ?LocationCountry
    {
        return $this->country;
    }

    public function setCountry(?LocationCountry $country): self
    {
        $this->country = $country;

        return $this;
    }

    /**
     * @return Collection<int, LocationCity>
     */
    public function getCities(): Collection
    {
        return $this->cities;
    }

    public function addCity(LocationCity $city): self
    {
        if (!$this->cities->contains($city)) {
            $this->cities->add($city);
            $city->setState($this);
        }

        return $this;
    }

    public function removeCity(LocationCity $city): self
    {
        if ($this->cities->removeElement($city)) {
            // set the owning side to null (unless already changed)
            if ($city->getState() === $this) {
                $city->setState(null);
            }
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
            $user->setState($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->removeElement($user)) {
            // set the owning side to null (unless already changed)
            if ($user->getState() === $this) {
                $user->setState(null);
            }
        }

        return $this;
    }
}
