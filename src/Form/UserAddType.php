<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;

class UserAddType extends UserType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('plainPassword', RepeatedType::class, [
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
        ;

        $param = Request::METHOD_POST == $this->request->getCurrentRequest()->getMethod() ? 'user_add': 'user';

        $this->addBuildForm($builder, $param);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'constraints' => [
                new UniqueEntity(
                    'username',
                    'app.user.form.error.unique.username'
                ),
            ],
        ]);
    }
}
