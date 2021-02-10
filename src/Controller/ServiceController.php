<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ServiceController extends AbstractController
{
    // Display the list of services.
    #[Route('/services', name: 'service')]
    public function index(): Response
    {
        return $this->render('service/index.html.twig');
    }

    // Display the silver service.
    #[Route('/services/silver', name: 'silver')]
    public function silver(): Response
    {
        return $this->render('service/silver.html.twig');
    }

    // Display the gold service.
    #[Route('/services/gold', name: 'gold')]
    public function gold(): Response
    {
        return $this->render('service/gold.html.twig');
    }

    // Display the platinium service.
    #[Route('/services/platinium', name: 'platinium')]
    public function platinium(): Response
    {
        return $this->render('service/platinium.html.twig');
    }

    // Display the diamond service.
    #[Route('/services/diamond', name: 'diamond')]
    public function diamond(): Response
    {
        return $this->render('service/diamond.html.twig');
    }
}
