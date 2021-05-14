<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use App\Entity\Worker;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class HomeController extends AbstractController
{
    /**
     * @Route("/home", name="home")
     */
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

    /**
     * @Route("/", name="crud")
     */
    public function home(): Response
    {
        $workers = $this->getDoctrine()
            ->getRepository(Worker::class)
            ->findAll();

        return $this->render('crud/main.html.twig', ['workers' => $workers]);
    }

    /**
     * @Route("/add_worker", name="add_worker")
     */
    public function add_worker(Request $request, ValidatorInterface $validator): Response
    {
//        dd($request->request);

        $entityManager = $this->getDoctrine()->getManager();

        $worker = new Worker();
        $worker->setName($request->request->get('name'));
        $worker->setEmail($request->request->get('email'));
        $worker->setCountry($request->request->get('country'));

        // validation
        $errors = $validator->validate($worker);

        if (count($errors) > 0) {
            /*
             * Uses a __toString method on the $errors variable which is a
             * ConstraintViolationList object. This gives us a nice string
             * for debugging.
             */
            $errorsString = (string) $errors;

            return new Response($errorsString);
        }

        $entityManager->persist($worker);
        $entityManager->flush();

        return $this->redirect('/');
    }

    /**
     * @Route("/delete/{id}", name="delete")
     */
    public function delete()
    {
        return $this->redirect('/');
    }

    /**
     * @Route("/edit/{id}", name="edit")
     */
    public function edit()
    {
        return $this->redirect('/');
    }

    /**
     * @Route("/admin/bla", name="bla")
     * // restrict access in annotation
     * //@IsGranted("ROLE_ADMIN")
     */
    public function bla()
    {
        // another way restrict access
//        $this->denyAccessUnlessGranted('ROLE_ADMIN');
        dd('Admin protected route');
    }

    /**
     * @Route("/profile/foo", name="foo")
     */
    public function foo()
    {
        dd('User profile page');
    }
}
