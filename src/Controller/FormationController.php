<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FormationController extends AbstractController
{
    // Display the list of formation.
    #[Route('/formations', name: 'formations')]
    public function index(): Response
    {
        return $this->render('formation/index.html.twig');
    }

    // Display the formation page "Construire sa maison".
    #[Route('/formations/construire-sa-maison', name: 'maison')]
    public function maison(): Response
    {
        return $this->render('formation/maison.html.twig');
    }

    // Display the formation page "Réussir son dossier bancaire".
    #[Route('/formations/reussir-son-dossier-bancaire', name: 'dossier')]
    public function dossier(): Response
    {
        return $this->render('formation/dossier.html.twig');
    }

    // Display the formation page "La double construction".
    #[Route('/formations/la-double-construction', name: 'double')]
    public function double(): Response
    {
        return $this->render('formation/double.html.twig');
    }

    // Display the formation page "Trouver le bon bien".
    #[Route('/formations/trouver-le-bon-bien', name: 'bon')]
    public function bon(): Response
    {
        return $this->render('formation/bon.html.twig');
    }

    // Display the formation page "Trouver le bon bien".
    #[Route('/formations/investir-dans-un-immeuble', name: 'immeuble')]
    public function immeuble(): Response
    {
        return $this->render('formation/immeuble.html.twig');
    }

    // Display the formation page "Pack de 5 formations".
    #[Route('/formations/devenir-rentier-immobillier', name: 'pack')]
    public function pack(): Response
    {
        return $this->render('formation/pack.html.twig');
    }
}
