<?php

namespace App\Form;

use App\Entity\AclUserGroup;
use App\Entity\User;
use Doctrine\ORM\EntityManager;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Validator\Constraints\Length;

class SettingsSecurityType extends AbstractType
{
    public function __construct(
        private readonly EntityManager $entityManager,
        protected RequestStack $request,
        private readonly UserPasswordHasherInterface $passwordHasher
    ) {}

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('username', TextType::class, [
                'label' => 'app.user.form.label.username',
            ])
            ->add('plainPassword', RepeatedType::class, [
                'required' => false,
                'mapped' => false,
                'type' => PasswordType::class,
                'invalid_message' => 'app.user.form.error.match.password',
                'constraints' => [
                    new Length([
                        'min' => 5,
                        'minMessage' => 'app.user.form.error.min_length.password'
                    ])
                ],
                'first_options' => ['label' => 'app.user.form.label.password'],
                'second_options' => ['label' => 'app.user.form.label.repeat_password'],
            ])
            ->add('acl_user_group_id', ChoiceType::class, [
                'label'     => 'app.user.form.label.group',
                'choices' => $this->getUserGroupsChoices(),
                'placeholder' => 'app.form.label.choose',
                'mapped' => false,
            ])
            ->addEventListener(FormEvents::SUBMIT, function (FormEvent $event) {
                /** @var User $user */
                $user = $event->getData();
                $form = $event->getForm();

                // Update password.
                $plainPassword = $form->get('plainPassword')->getData();

                if ($plainPassword) {
                    $user->setPassword($this->passwordHasher->hashPassword(
                        $user,
                        $plainPassword
                    ));
                }

                // Update user group.
                $acl_user_group_id = $form->get('acl_user_group_id')->getData();

                if ($acl_user_group_id) {
                    /** @var AclUserGroup $userGroup */
                    $userGroup = $this->entityManager->getRepository(AclUserGroup::class)
                        ->find($acl_user_group_id);

                    $user->setUserGroup($userGroup);
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
                    // Set user group on form.
                    $form->get('acl_user_group_id')->setData($user->getUserGroup()->getId());
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
     * Returns user groups for a dropdown (ChoiceType).
     */
    private function getUserGroupsChoices(): array
    {
        $locale = $this->request->getCurrentRequest()->getLocale();
        $types = $this->entityManager->getRepository(AclUserGroup::class)
            ->findAllByLocale($locale, ['client' => 1]);

        $choices = [];
        foreach ($types as $type) {
            $choices[$type['text']] = $type['id'];
        }

        return $choices;
    }
}
