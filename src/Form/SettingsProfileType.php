<?php

namespace App\Form;

use App\Entity\LocationCountry;
use App\Entity\User;
use App\Service\DateTimeService;
use App\Service\UploaderHelper;
use Doctrine\ORM\EntityManager;
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
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SettingsProfileType extends AbstractType
{
    public function __construct(
        private readonly EntityManager $entityManager,
        protected RequestStack $request,
        private readonly UploaderHelper $uploaderHelper,
        private readonly array $uploadRules
    ) { }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
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
                    'rows' => 5
                ],
                'required' => false
            ])
            ->add('birthday', DateType::class, [
                'label' => 'app.user.form.label.birthday',
                'required' => false,
                'widget' => 'single_text',
                'html5' => false,
                'format' => (new DateTimeService())->getDateFormatFromLocale($this->request->getCurrentRequest()->getLocale()),
                'attr' => [
                    'autocomplete' => 'off'
                ]
            ])
            ->add('tmp_url_avatar',
                FileType::class, [
                    'label' => 'app.user.form.label.url_picture',
                    'mapped' => false,
                    'required' => false,
                    'attr' => [
                        'accept' => '.jpg,.jpeg,.png,.gif'
                    ]
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
            /**
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

                if (!$user->getPhoneNumber()) {
                    $user->setPhoneNumberCountry(null);
                }

                // Update URL avatar.
                $tmp_url_avatar = $form->get('tmp_url_avatar')->getData();

                if ($tmp_url_avatar) {
                    $upload = $this->uploaderHelper->uploadImageToCDN($tmp_url_avatar, [
                        'addParentPath' => 'user',
                        'uniqueName' => true,
                        'heightReducing' => $this->uploadRules['limitHeightAvatarUser']
                    ]);

                    $user->setUrlPicture($upload['url']);
                }

                // Delete URL avatar.
                if ($form->get('delete_url_avatar')->getData()) {
                    $user->setUrlPicture(null);
                }

                // Update user type.
                $user_type_id = $form->get('user_type_id')->getData();

                if ($user_type_id) {
                    /** @var \App\Entity\UserType $userType */
                    $userType = $this->entityManager->getRepository(\App\Entity\UserType::class)
                        ->find($user_type_id);

                    $user->setType($userType);
                } else {
                    $user->setType(null);
                }
            })
            /**
             * Prepare to set data correctly from unmapped databases columns before load form.
             * This method should be loaded on edit form or if exist an error on form.
             *
             * The FormEvents::POST_SET_DATA event is dispatched at the end of the Form::setData() method.
             * This event is mostly here for reading data after having pre-populated the form.
             * See more: https://symfony.com/doc/current/form/events.html
             */
            ->addEventListener(FormEvents::POST_SET_DATA, function (FormEvent $event) {
                /** @var User $user */
                $user = $event->getData();
                $form = $event->getForm();

                if (empty($user)) {
                    return;
                }

                // It's only possibility to set unmapped values by edit form (by existing user entity values is a edit form).
                if ($user->getId()) {
                    // Set user type on form.
                    if ($user->getType()) {
                        $form->get('user_type_id')->setData($user->getType()->getId());
                    }
                }
            })
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }

    /**
     * Returns types of user for a dropdown (ChoiceType).
     */
    private function getUserTypesChoices(): array
    {
        $locale = $this->request->getCurrentRequest()->getLocale();
        $types = $this->entityManager->getRepository(\App\Entity\UserType::class)
            ->findAllByLocale($locale);

        $choices = [];
        foreach ($types as $type) {
            $choices[$type['text']] = $type['id'];
        }

        return $choices;
    }
}
