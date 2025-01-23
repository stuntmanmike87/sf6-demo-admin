<?php

declare(strict_types=1);

namespace App\Form;

use App\Entity\User;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;

/**
 * @ template UserEdit
 *
 * @ extends UserType<User>
 */
final class UserEditType extends UserType
{
    #[\Override]
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('plainPassword', RepeatedType::class, [
                'mapped' => false,
                'type' => PasswordType::class,
                'invalid_message' => 'app.user.form.error.match.password',
                'constraints' => [
                    new Length([
                        'min' => 5,
                        'minMessage' => 'app.user.form.error.min_length.password',
                    ]),
                ],
                'first_options' => ['label' => 'app.user.form.label.password'],
                'second_options' => ['label' => 'app.user.form.label.repeat_password'],
                'required' => false,
                'attr' => [
                    'autocomplete' => 'none',
                ],
            ])
        ;

        /** @var Request $req */
        $req = $this->request->getCurrentRequest();
        $param = Request::METHOD_POST === $req->getMethod() ? 'user_edit' : 'user';

        $this->addBuildForm($builder, $param);
    }

    #[\Override]
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
