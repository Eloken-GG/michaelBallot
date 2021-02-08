<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SeminarController extends AbstractController
{
    // Display the seminar page.
    #[Route('/seminaire', name: 'seminaire')]
    public function index(): Response
    {
        return $this->render('seminar/index.html.twig');
    }
}
