<?php

namespace App\Form;

use App\Entity\User;
use App\Form\Helper\LocationHelper;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class SettingsAddressType extends AbstractType
{
    public function __construct(
        protected RequestStack $request,
        private readonly LocationHelper $location,
        private readonly TokenStorageInterface $tokenStorage
    ) { }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        /** @var User $user */
        $user = $this->tokenStorage->getToken()->getUser();
        $formType = Request::METHOD_POST == $this->request->getCurrentRequest()->getMethod() ? 'settings_address': 'user';

        $builder
            ->add('address', TextType::class, [
                'label' => 'app.form.label.address',
                'required' => false,
                'attr' => [
                    'class' => 'js-address-info-address',
                    'autocomplete' => 'none'
                ],
            ])
            ->add('street_number', TextType::class, [
                'label' => 'app.form.label.street_number',
                'required' => false,
                'attr' => [
                    'class' => 'js-address-info-street-number',
                    'autocomplete' => 'none'
                ],
            ])
            ->add('complement', TextType::class, [
                'label' => 'app.form.label.complement',
                'required' => false,
                'attr' => [
                    'class' => 'js-address-info-complement',
                    'autocomplete' => 'none'
                ],
            ])
            ->add('postal_code', TextType::class, [
                'label' => 'app.form.label.postal_code',
                'required' => false,
                'attr' => [
                    'class' => 'form-control js-address-info-postal-code',
                    'autocomplete' => 'none'
                ],
            ])
            ->add('lat', HiddenType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'js-address-info-lat'
                ],
            ])
            ->add('lng', HiddenType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'js-address-info-lng'
                ],
            ])
            ->add('formatted_address', HiddenType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'js-address-info-formatted-address'
                ],
            ])
            ->add('location_country_id', TextType::class, [
                'label' => 'app.form.label.country',
                'mapped' => false,
                'attr' => [
                    'class' => 'js-address-info-country',
                ],
                'required' => false,
            ])
            ->add('state', ChoiceType::class, [
                'label' => 'app.form.label.state',
                'placeholder' => 'app.form.label.choose',
                'mapped' => false,
                'attr' => [
                    'class' => 'js-address-info-state'
                ],
                'choices' => $this->location->getStates($formType, $user),
                'required' => false,
            ])
            ->add('city', ChoiceType::class, [
                'label' => 'app.form.label.city',
                'placeholder' => 'app.form.label.choose',
                'mapped' => false,
                'attr' => [
                    'class' => 'js-address-info-city'
                ],
                'choices' => $this->location->getCities($formType, $user),
                'required' => false,
            ])
            ->add('neighborhood', TextType::class, [
                'label' => 'app.form.label.neighborhood',
                'mapped' => false,
                'required' => false,
                'attr' => [
                    'class' => 'js-address-info-neighborhood',
                    'autocomplete' => 'none'
                    // 'readonly' => 'readonly'
                ]
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

                // Update all location's fields from property.
                $this->location->setLocationBeforeSubmit($form, $user);
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
                    // Set all location fields correctly before load form.
                    $this->location->setLocationBeforeLoadForm($form, $user);
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
}
