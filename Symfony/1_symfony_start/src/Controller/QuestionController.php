<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Question;
use Doctrine\ORM\EntityManagerInterface;

class QuestionController extends AbstractController
{
	/**
	 * @Route("/", name="app_home")
	 */	
	public function homepage()
	{
		return new Response('Hello World');
	}

	/**
	 * @Route("/questions/{slug}")
	 */
	public function show($slug, EntityManagerInterface $entityManager)
	{
		$repository = $entityManager->getRepository(Question::class);
		$question = $repository->findOneBy(['slug' => $slug]);
		dd($question);

		$answers = [
			'Hello', 'Bla', 'Foo'
		];

		return $this->render('questions/show.html.twig', [
			'question' => 'Random question',
			'answers' => $answers,
		]);
	} 

	/**
	 * @Route("/q/new")
	 */
	public function new(EntityManagerInterface $entityManager)
	{
		$question = new Question();
		$question
			->setName('Bla')
			->setSlug('bla' . rand(0, 1000))
			->setQuestion('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris ')
			->setAskedAt(new \DateTime(sprintf('-%d days', rand(1, 100))));

		$entityManager->persist($question);
		$entityManager->flush();

		return new Response('Time for something new');
	}
}