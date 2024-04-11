<?php

declare(strict_types=1);

namespace App\Form;

use App\Entity\LocationCountry;
use App\Entity\User;
use App\Entity\UserType;
use App\Service\DateTimeService;
use App\Service\UploaderHelper;
use Doctrine\ORM\EntityManager;
use Ramsey\Uuid\Doctrine\UuidOrderedTimeGenerator;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\OptionsResolver\OptionsResolver;

final class SettingsProfileType extends AbstractType
{
    /** @param array<mixed> $uploadRules */
    public function __construct(
        private readonly EntityManager $entityManager,
        protected RequestStack $request,
        private readonly UploaderHelper $uploaderHelper,
        private readonly array $uploadRules
    ) {
    }

    #[\Override]
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {// Cognitive complexity for "App\Form\SettingsProfileType::buildForm()" is 12, keep it under 8
        /** @var Request $req */
        $req = $this->request->getCurrentRequest();
        $dateFormatFromLocale = DateTimeService::getDateFormatFromLocale($req->getLocale());
        $builder
            ->add('first_name', TextType::class, [
                'label' => 'app.user.form.label.first_name',
            ])
            ->add('last_name', TextType::class, [
                'label' => 'app.user.form.label.last_name',
            ])
            ->add('bio', TextareaType::class, [
                'label' => 'app.user.form.label.bio',
                'attr' => [
                    'rows' => 5,
                ],
                'required' => false,
            ])
            ->add('birthday', DateType::class, [
                'label' => 'app.user.form.label.birthday',
                'required' => false,
                'widget' => 'single_text',
                'html5' => false,
                'format' => $dateFormatFromLocale,
                'attr' => [
                    'autocomplete' => 'off',
                ],
            ])
            ->add('tmp_url_avatar',
                FileType::class, [
                    'label' => 'app.user.form.label.url_picture',
                    'mapped' => false,
                    'required' => false,
                    'attr' => [
                        'accept' => '.jpg,.jpeg,.png,.gif',
                    ],
                ]
            )
            ->add('delete_url_avatar', CheckboxType::class, [
                'label' => 'app.user.form.label.delete_url_avatar',
                'mapped' => false,
                'required' => false,
            ])
            ->add('email', EmailType::class, [
                'label' => 'app.user.form.label.email',
            ])
            ->add('phone_number', TextType::class, [
                'label' => 'app.user.form.label.phone_number',
            ])
            ->add('phone_number_country_id', TextType::class, [
                'mapped' => false,
                'required' => false,
            ])
            ->add('user_type_id', ChoiceType::class, [
                'label' => 'app.user.form.label.user_type',
                'choices' => $this->getUserTypesChoices(),
                'placeholder' => 'app.form.label.choose',
                'mapped' => false,
                'required' => false,
            ])
            /*
             * The FormEvents::SUBMIT event is dispatched right before the Form::submit()
             * method transforms back the normalized data to the model and view data.
             * See more: https://symfony.com/doc/current/form/events.html
             */
            ->addEventListener(FormEvents::SUBMIT, function (FormEvent $event) {
                /** @var User $user */
                $user = $event->getData();
                $form = $event->getForm();

                // Update phone number country.
                $phone_number_country_id = $form->get('phone_number_country_id')->getData();

                if (0 < $phone_number_country_id) {
                    /** @var LocationCountry $country */
                    $country = $this->entityManager->getRepository(LocationCountry::class)
                        ->find($phone_number_country_id);

                    $user->setPhoneNumberCountry($country);
                }

                if (null === $user->getPhoneNumber()) {
                    $user->setPhoneNumberCountry(null);
                }

                // Update URL avatar.
                /** @var UploadedFile $tmp_url_avatar */
                $tmp_url_avatar = $form->get('tmp_url_avatar')->getData();

                if ($tmp_url_avatar instanceof UploadedFile) {
                    /** @var string[] $upload */ // ** @var string[]|null $upload */
                    $upload = $this->uploaderHelper->uploadImageToCDN($tmp_url_avatar, [
                        'addParentPath' => 'user',
                        'uniqueName' => true,
                        'heightReducing' => $this->uploadRules['limitHeightAvatarUser'],
                    ]);

                    $user->setUrlPicture($upload['url']);
                }

                // Delete URL avatar.
                if (null !== $form->get('delete_url_avatar')->getData()) {
                    $user->setUrlPicture(null);
                }

                // Update user type.
                $user_type_id = $form->get('user_type_id')->getData();

                if (null !== $user_type_id) {
                    /** @var UserType $userType */
                    $userType = $this->entityManager->getRepository(UserType::class)
                        ->find($user_type_id);

                    $user->setType($userType);
                } else {
                    $user->setType(null);
                }
            })
            /*
             * Prepare to set data correctly from unmapped databases columns before load form.
             * This method should be loaded on edit form or if exist an error on form.
             *
             * The FormEvents::POST_SET_DATA event is dispatched at the end of the Form::setData() method.
             * This event is mostly here for reading data after having pre-populated the form.
             * See more: https://symfony.com/doc/current/form/events.html
             */
            ->addEventListener(FormEvents::POST_SET_DATA, static function (FormEvent $event) {
                /** @var User $user */
                $user = $event->getData();
                $form = $event->getForm();
                if (!$user instanceof User) {
                    return;
                }

                // It's only possibility to set unmapped values by edit form (by existing user entity values is a edit form).
                // Set user type on form.
                // if (null !== $user->getId() && $user->getType() instanceof UserType) {
                if ($user->getId() instanceof UuidOrderedTimeGenerator && $user->getType() instanceof UserType) {
                    $form->get('user_type_id')->setData($user->getType()->getId());
                }
            })
        ;
    }

    #[\Override]
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }

    /**
     * Returns types of user for a dropdown (ChoiceType).
     *
     * @return array<mixed>
     */
    private function getUserTypesChoices(): array
    {
        /** @var Request $req */
        $req = $this->request->getCurrentRequest();
        $locale = $req->getLocale(); // ** @var string[][] $types */
        $types = $this->entityManager->getRepository(UserType::class)
            ->findAllByLocale($locale);

        $choices = [];
        /** @var string[][] $types */ // ** @var string[] $type */
        foreach ($types as $type) {
            $choices[$type['text']] = $type['id'];
        }

        return $choices;
    }
}
