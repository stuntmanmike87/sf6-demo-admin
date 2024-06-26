<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Types\UuidType;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Uid\Uuid;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Index(columns: ['username'], name: 'idx_username')]
#[ORM\Index(columns: ['first_name'], name: 'idx_first_name')]
#[ORM\Index(columns: ['last_name'], name: 'idx_last_name')]
#[ORM\Index(columns: ['email'], name: 'idx_email')]
#[ORM\Index(columns: ['active'], name: 'idx_active')]
#[ORM\Index(columns: ['lat'], name: 'idx_lat')]
#[ORM\Index(columns: ['lng'], name: 'idx_lng')]
#[UniqueEntity(fields: ['username'], message: 'There is already an account with this username')]
#[UniqueEntity(fields: ['email'], message: 'There is already an account with this email')]
/** @final */
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    // final public const ROLE_USER = 'ROLE_USER';

    // final public const ROLE_ADMIN = 'ROLE_ADMIN';

    #[ORM\Id]
    #[ORM\GeneratedValue(strategy: 'CUSTOM')]
    #[ORM\Column(type: UuidType::NAME, unique: true)]
    #[ORM\CustomIdGenerator(class: 'doctrine.uuid_generator')]
    private ?Uuid $id = null;

    #[ORM\Column(length: 100, unique: true)]
    #[Assert\NotBlank]
    private ?string $username = null;

    /** @var array<string> $roles */ // string[]
    #[ORM\Column]
    private array $roles = [];

    #[ORM\Column(length: 255)]
    private ?string $password = null;

    #[ORM\Column]
    private ?bool $verified = false;

    #[ORM\Column(length: 255)]
    private ?string $firstName = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    private ?string $lastName = null;

    #[ORM\Column(length: 255)]
    #[Assert\Email()]
    private ?string $email = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $phoneNumber = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $birthday = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $urlPicture = null;

    #[ORM\Column]
    private ?bool $showPicture = false;

    #[ORM\Column]
    private ?bool $active = true;

    #[ORM\ManyToOne(inversedBy: 'users')]
    #[ORM\JoinColumn(nullable: false)]
    private ?AclUserGroup $userGroup = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $lastAccessAt = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Assert\NotBlank]
    private ?string $address = null;

    #[ORM\Column(length: 10, nullable: true)]
    private ?string $streetNumber = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $complement = null;

    #[ORM\Column(length: 20, nullable: true)]
    #[Assert\NotBlank]
    private ?string $postalCode = null;

    #[ORM\ManyToOne(inversedBy: 'users')]
    private ?LocationNeighborhood $neighborhood = null;

    #[ORM\ManyToOne(inversedBy: 'users')]
    #[Assert\NotBlank]
    private ?LocationCity $city = null;

    #[ORM\ManyToOne(inversedBy: 'users')]
    #[Assert\NotBlank]
    private ?LocationState $state = null;

    #[ORM\ManyToOne(inversedBy: 'users')]
    #[Assert\NotBlank]
    private ?LocationCountry $country = null;

    #[ORM\Column(length: 30, nullable: true)]
    private ?string $lat = null;

    #[ORM\Column(length: 30, nullable: true)]
    private ?string $lng = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $formattedAddress = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $bio = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $googleAccessToken = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $updatedAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $deletedAt = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $is_verified = false;

    #[ORM\Column(type: Types::STRING, length: 100, nullable: true)]
    private ?string $resetToken = null;

    /** @var Collection<int, AccountVerification> $accountVerifications */
    #[ORM\OneToMany(mappedBy: 'user', targetEntity: AccountVerification::class)]
    private Collection $accountVerifications;

    #[ORM\ManyToOne(inversedBy: 'users')]
    private ?UserType $type = null;

    /**
     * This variable is only used with a combination to ACL service.
     */
    /** @var array<string> */
    private ?array $acl = null;

    #[ORM\ManyToOne]
    private ?LocationCountry $phoneNumberCountry = null;

    public function __construct()
    {
        $this->accountVerifications = new ArrayCollection();
    }

    public function getId(): ?Uuid
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    public function isVerified(): ?bool
    {
        return $this->verified;
    }

    public function setVerified(bool $verified): self
    {
        $this->verified = $verified;

        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPhoneNumber(): ?string
    {
        return $this->phoneNumber;
    }

    public function setPhoneNumber(?string $phoneNumber): self
    {
        $this->phoneNumber = $phoneNumber;

        return $this;
    }

    public function getBirthday(): ?\DateTimeInterface
    {
        return $this->birthday;
    }

    public function setBirthday(?\DateTimeInterface $birthday): self
    {
        $this->birthday = $birthday;

        return $this;
    }

    public function getUrlPicture(): ?string
    {
        return $this->urlPicture;
    }

    public function setUrlPicture(?string $urlPicture): self
    {
        $this->urlPicture = $urlPicture;

        return $this;
    }

    public function isShowPicture(): ?bool
    {
        return $this->showPicture;
    }

    public function setShowPicture(bool $showPicture): self
    {
        $this->showPicture = $showPicture;

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

    public function getUserGroup(): ?AclUserGroup
    {
        return $this->userGroup;
    }

    public function setUserGroup(?AclUserGroup $userGroup): self
    {
        $this->userGroup = $userGroup;

        return $this;
    }

    public function getLastAccessAt(): ?\DateTimeInterface
    {
        return $this->lastAccessAt;
    }

    public function setLastAccessAt(?\DateTimeInterface $lastAccessAt): self
    {
        $this->lastAccessAt = $lastAccessAt;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(?string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getStreetNumber(): ?string
    {
        return $this->streetNumber;
    }

    public function setStreetNumber(?string $streetNumber): self
    {
        $this->streetNumber = $streetNumber;

        return $this;
    }

    public function getComplement(): ?string
    {
        return $this->complement;
    }

    public function setComplement(?string $complement): self
    {
        $this->complement = $complement;

        return $this;
    }

    public function getPostalCode(): ?string
    {
        return $this->postalCode;
    }

    public function setPostalCode(?string $postalCode): self
    {
        $this->postalCode = $postalCode;

        return $this;
    }

    public function getNeighborhood(): ?LocationNeighborhood
    {
        return $this->neighborhood;
    }

    public function setNeighborhood(?LocationNeighborhood $neighborhood): self
    {
        $this->neighborhood = $neighborhood;

        return $this;
    }

    public function getCity(): ?LocationCity
    {
        return $this->city;
    }

    public function setCity(?LocationCity $city): self
    {
        $this->city = $city;

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

    public function getCountry(): ?LocationCountry
    {
        return $this->country;
    }

    public function setCountry(?LocationCountry $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getLat(): ?string
    {
        return $this->lat;
    }

    public function setLat(?string $lat): self
    {
        $this->lat = $lat;

        return $this;
    }

    public function getLng(): ?string
    {
        return $this->lng;
    }

    public function setLng(?string $lng): self
    {
        $this->lng = $lng;

        return $this;
    }

    public function getFormattedAddress(): ?string
    {
        return $this->formattedAddress;
    }

    public function setFormattedAddress(?string $formattedAddress): self
    {
        $this->formattedAddress = $formattedAddress;

        return $this;
    }

    public function getBio(): ?string
    {
        return $this->bio;
    }

    public function setBio(?string $bio): self
    {
        $this->bio = $bio;

        return $this;
    }

    public function getGoogleAccessToken(): ?string
    {
        return $this->googleAccessToken;
    }

    public function setGoogleAccessToken(?string $googleAccessToken): self
    {
        $this->googleAccessToken = $googleAccessToken;

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

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getDeletedAt(): ?\DateTimeInterface
    {
        return $this->deletedAt;
    }

    public function setDeletedAt(?\DateTimeInterface $deletedAt): self
    {
        $this->deletedAt = $deletedAt;

        return $this;
    }

    /**
     * @return Collection<int, AccountVerification>
     */
    public function getAccountVerifications(): Collection
    {
        return $this->accountVerifications;
    }

    public function addAccountVerification(AccountVerification $accountVerification): self
    {
        if (!$this->accountVerifications->contains($accountVerification)) {
            $this->accountVerifications->add($accountVerification);
            $accountVerification->setUser($this);
        }

        return $this;
    }

    public function removeAccountVerification(AccountVerification $accountVerification): self
    {
        // set the owning side to null (unless already changed)
        if ($this->accountVerifications->removeElement($accountVerification) && $accountVerification->getUser() === $this) {
            $accountVerification->setUser(null);
        }

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    #[\Override]
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    #[\Override]
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    /** @param array<string> $roles */
    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    #[\Override]
    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    #[\Override]
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getIsVerified(): ?bool
    {
        return $this->is_verified;
    }

    public function setIsVerified(bool $is_verified): self
    {
        $this->is_verified = $is_verified;

        return $this;
    }

    public function getResetToken(): ?string
    {
        return $this->resetToken;
    }

    public function setResetToken(?string $resetToken): self
    {
        $this->resetToken = $resetToken;

        return $this;
    }

    public function getType(): ?UserType
    {
        return $this->type;
    }

    public function setType(?UserType $type): self
    {
        $this->type = $type;

        return $this;
    }

    /**
     * This method is only used with a combination to ACL service.
     *
     * @return array<string>|null
     */
    public function getAcl(): ?array
    {
        return $this->acl;
    }

    /**
     * This method is only used with a combination to ACL service.
     *
     * @param array<string> $acl
     */
    public function setAcl(?array $acl): self
    {
        $this->acl = $acl;

        return $this;
    }

    public function getPhoneNumberCountry(): ?LocationCountry
    {
        return $this->phoneNumberCountry;
    }

    public function setPhoneNumberCountry(?LocationCountry $phoneNumberCountry): self
    {
        $this->phoneNumberCountry = $phoneNumberCountry;

        return $this;
    }
}
