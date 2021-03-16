<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LegalController extends AbstractController
{
    // Display the mention page.
    #[Route('/mentions-legales', name: 'mention')]
    public function mention()
    {
        return $this->render('legal/mention.html.twig');
    }
}
