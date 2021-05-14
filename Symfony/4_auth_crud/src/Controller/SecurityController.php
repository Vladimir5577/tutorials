<?php

namespace App\Controller;

use App\Entity\ApiToken;
use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class SecurityController extends AbstractController
{
    /**
     * @Route("/register", name="register")
     */
    public function register(): Response
    {
        return $this->render('security/register.html.twig');
    }

    /**
     * @Route("/register_user", name="register_user", methods="POST")
     */
    public function register_user(Request $request, UserPasswordEncoderInterface $encoder, UserRepository $userRepository, ValidatorInterface $validator): Response
    {
        $email = $request->get('email');
        $password = $request->get('password');
        $name = $request->get('name');

        $user = $userRepository->findOneBy([
            'email' => $email,
        ]);

        if (!is_null($user)) {
            return $this->json([
                'message' => 'User already exist'
            ], Response::HTTP_CONFLICT);
        }

        $user = new User();

        $user->setName($name);
        $user->setEmail($email);
        // set role to the user
//        $user->setRoles(['ROLE_ADMIN']);

        // encode password
        $encoded = $encoder->encodePassword($user, $password);
        $user->setPassword($encoded);

        // validation
        $errors = $validator->validate($user);
        if (count($errors) > 0) {
            /*
             * Uses a __toString method on the $errors variable which is a
             * ConstraintViolationList object. This gives us a nice string
             * for debugging.
             */
            $errorsString = (string) $errors;

            return new Response($errorsString);
        }

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

        // save token
        $apiToken = new ApiToken($user);
        $apiToken2 = new ApiToken($user);
//dd($apiToken);
        $entityManager->persist($apiToken);
        $entityManager->persist($apiToken2);
        $entityManager->flush();

        return $this->json($user,  Response::HTTP_CREATED);
    }

    /**
     * @Route("/login", name="app_login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // if ($this->getUser()) {
        //     return $this->redirectToRoute('target_path');
        // }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
