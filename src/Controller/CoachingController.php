<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CoachingController extends AbstractController
{
    // Display the coaching page.
    #[Route('/coaching', name: 'coaching')]
    public function index(): Response
    {
        return $this->render('coaching/index.html.twig');
    }
}
