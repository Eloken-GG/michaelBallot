<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SitemapController extends AbstractController
{
    /**
     * @Route("/sitemap.xml", name="sitemap", defaults={"_format"="xml"})
     */
    public function index(Request $request)
    {
        // Nous récupérons le nom d'hôte depuis l'URL
        $hostname = $request->getSchemeAndHttpHost();

        // On initialise un tableau pour lister les URLs
        $urls = [];

        // On ajoute les URLs "statiques"
        $urls[] = ['loc' => $this->generateUrl('homepage')];
        $urls[] = ['loc' => $this->generateUrl('about')];
        $urls[] = ['loc' => $this->generateUrl('coaching')];
        $urls[] = ['loc' => $this->generateUrl('contact')];
        $urls[] = ['loc' => $this->generateUrl('formations')];
        $urls[] = ['loc' => $this->generateUrl('maison')];
        $urls[] = ['loc' => $this->generateUrl('dossier')];
        $urls[] = ['loc' => $this->generateUrl('double')];
        $urls[] = ['loc' => $this->generateUrl('bon')];
        $urls[] = ['loc' => $this->generateUrl('immeuble')];
        $urls[] = ['loc' => $this->generateUrl('pack')];
        $urls[] = ['loc' => $this->generateUrl('seminaire')];
        $urls[] = ['loc' => $this->generateUrl('pack')];
        $urls[] = ['loc' => $this->generateUrl('service')];
        $urls[] = ['loc' => $this->generateUrl('silver')];
        $urls[] = ['loc' => $this->generateUrl('gold')];
        $urls[] = ['loc' => $this->generateUrl('platinium')];
        $urls[] = ['loc' => $this->generateUrl('diamond')];

        // Fabrication de la réponse XML
        $response = new Response(
            $this->renderView('sitemap/index.html.twig', ['urls' => $urls,
                'hostname' => $hostname]),
            200
        );

        // Ajout des entêtes
        $response->headers->set('Content-Type', 'text/xml');

        // On envoie la réponse
        return $response;
    }

    /**
     * @Route("/robot.txt", name="robot", defaults={"_format"="txt"})
     */
    public function robot()
    {
        return $this->render('sitemap/robot.txt');
    }
}