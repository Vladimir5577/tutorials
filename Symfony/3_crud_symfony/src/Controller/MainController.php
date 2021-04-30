<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Worker;
use Symfony\Component\HttpFoundation\Request;

class MainController extends AbstractController
{
    /**
     * @Route("/main", name="main")
     */
    public function index(): Response
    {
        return $this->render('main/index.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

    /**
     * @Route("/", name="home")
     */
    public function home(): Response
    {
        $workers = $this->getDoctrine()
            ->getRepository(Worker::class)
            ->findAll();

        // dd($workers);

    	return $this->render('crud/index.html.twig', ['workers' => $workers]);
    }

    /**
     * @Route("/add_worker", name="add_worker", methods="POST")
     */
    public function add_worker(Request $request): Response
    {
        // dd($request->request->get('name'));

        $entityManager = $this->getDoctrine()->getManager();

        $worker = new Worker();
        $worker->setName($request->request->get('name'));
        $worker->setCountry($request->request->get('country'));
        $worker->setDescription($request->request->get('description'));

        $entityManager->persist($worker);
        $entityManager->flush();

        
        return $this->redirect('/');
    }

    /**
     * @Route("/delete/{id}", name="delete")
     */
    public function delete($id): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $worker = $entityManager->getRepository(Worker::class)->find($id);

        $entityManager->remove($worker);
        $entityManager->flush();

        return $this->redirect('/');
    }

    /**
     * @Route("/edit/{id}", name="edit")
     */
    public function edit($id)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $worker = $entityManager->getRepository(Worker::class)->find($id);

        // dd($worker);

        return $this->render('crud/edit.html.twig', ['worker' => $worker]);
    }

    /**
     * @Route("/update", name="update", methods="POST")
     */
    public function update(Request $request)
    {
        $id = $request->request->get('id');

        $entityManager = $this->getDoctrine()->getManager();
        $worker = $entityManager->getRepository(Worker::class)->find($id);

        // dd($worker);

        $worker->setName($request->request->get('name'));
        $worker->setCountry($request->request->get('country'));
        $worker->setDescription($request->request->get('description'));

        $entityManager->persist($worker);
        $entityManager->flush();

        return $this->redirect('/');
    }

}
