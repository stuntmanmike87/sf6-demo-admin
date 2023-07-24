<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Doctrine\UuidOrderedTimeGenerator;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Index(columns: ["username"], name: "idx_username")]
#[ORM\Index(columns: ["first_name"], name: "idx_first_name")]
#[ORM\Index(columns: ["last_name"], name: "idx_last_name")]
#[ORM\Index(columns: ["email"], name: "idx_email")]
#[ORM\Index(columns: ["active"], name: "idx_active")]
#[ORM\Index(columns: ["lat"], name: "idx_lat")]
#[ORM\Index(columns: ["lng"], name: "idx_lng")]
#[ORM\Index(columns: ["google_id"], name: "idx_google_id")]
#[ORM\Index(columns: ["facebook_id"], name: "idx_facebook_id")]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue(strategy: "CUSTOM")]
    #[ORM\Column(unique: true)]
    #[ORM\CustomIdGenerator(class: UuidOrderedTimeGenerator::class)]
    protected UuidOrderedTimeGenerator|string|null $id = null;

    #[ORM\Column(length: 100, unique: true)]
    private ?string $username = null;

    #[ORM\Column]
    private array $roles = [];

    #[ORM\Column(length: 255)]
    private ?string $password = null;

    #[ORM\Column]
    private ?bool $verified = false;

    #[ORM\Column(length: 255)]
    private ?string $firstName = null;

    #[ORM\Column(length: 255)]
    private ?string $lastName = null;

    #[ORM\Column(length: 255)]
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
    private ?string $address = null;

    #[ORM\Column(length: 10, nullable: true)]
    private ?string $streetNumber = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $complement = null;

    #[ORM\Column(length: 20, nullable: true)]
    private ?string $postalCode = null;

    #[ORM\ManyToOne(inversedBy: 'users')]
    private ?LocationNeighborhood $neighborhood = null;

    #[ORM\ManyToOne(inversedBy: 'users')]
    private ?LocationCity $city = null;

    #[ORM\ManyToOne(inversedBy: 'users')]
    private ?LocationState $state = null;

    #[ORM\ManyToOne(inversedBy: 'users')]
    private ?LocationCountry $country = null;

    #[ORM\Column(length: 30, nullable: true)]
    private ?string $lat = null;

    #[ORM\Column(length: 30, nullable: true)]
    private ?string $lng = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $formattedAddress = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $bio = null;

    #[ORM\Column(length: 150, nullable: true)]
    private ?string $facebookId = null;

    #[ORM\Column(length: 150, nullable: true)]
    private ?string $googleId = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $googleAccessToken = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $updatedAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $deletedAt = null;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: AccountVerification::class)]
    private Collection $accountVerifications;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: ResetUserPassword::class)]
    private Collection $resetUserPasswords;

    #[ORM\ManyToOne(inversedBy: 'users')]
    private ?UserType $type = null;

    /**
     * This variable is only used with a combination to ACL service.
     */
    private ?array $acl = null;

    #[ORM\ManyToOne]
    private ?LocationCountry $phoneNumberCountry = null;

    public function __construct()
    {
        $this->accountVerifications = new ArrayCollection();
        $this->resetUserPasswords = new ArrayCollection();
    }

    public function getId(): ?string
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

    public function getFacebookId(): ?string
    {
        return $this->facebookId;
    }

    public function setFacebookId(?string $facebookId): self
    {
        $this->facebookId = $facebookId;

        return $this;
    }

    public function getGoogleId(): ?string
    {
        return $this->googleId;
    }

    public function setGoogleId(?string $googleId): self
    {
        $this->googleId = $googleId;

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
        if ($this->accountVerifications->removeElement($accountVerification)) {
            // set the owning side to null (unless already changed)
            if ($accountVerification->getUser() === $this) {
                $accountVerification->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ResetUserPassword>
     */
    public function getResetUserPasswords(): Collection
    {
        return $this->resetUserPasswords;
    }

    public function addResetUserPassword(ResetUserPassword $resetUserPassword): self
    {
        if (!$this->resetUserPasswords->contains($resetUserPassword)) {
            $this->resetUserPasswords->add($resetUserPassword);
            $resetUserPassword->setUser($this);
        }

        return $this;
    }

    public function removeResetUserPassword(ResetUserPassword $resetUserPassword): self
    {
        if ($this->resetUserPasswords->removeElement($resetUserPassword)) {
            // set the owning side to null (unless already changed)
            if ($resetUserPassword->getUser() === $this) {
                $resetUserPassword->setUser(null);
            }
        }

        return $this;
    }


    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
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
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
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
     */
    public function getAcl(): array
    {
        return $this->acl;
    }

    /**
     * This method is only used with a combination to ACL service.
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
