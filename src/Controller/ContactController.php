<?php

namespace App\Controller;

use App\Form\ContactForm;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mailer\MailerInterface;

class ContactController extends AbstractController
{
    /**
     * @Route("/contact", name="contact")
     * @param Request $request
     * @param MailerInterface $mailer
     * @return RedirectResponse|Response
     * @throws TransportExceptionInterface
     */
    public function index(Request $request, MailerInterface $mailer): RedirectResponse|Response
    {
        $form = $this->createForm(ContactForm::class);

        $form->handleRequest($request);


        if($form->isSubmitted() && $form->isValid()) {

            $contactFormData = $form->getData();

            $message = (new Email())
                ->from($contactFormData['email'])
                ->to('your@mail.com')
                ->subject('Un mail provenant de votre site web')
                ->html( '<div>
                                <div>
                                    <div>
                                        <div>
                                            <h1>Nouveau message du site Web !</h1>
                                            <p> De : ' . $contactFormData['fullName'] . '</p>
                                        </div>
                        
                                        <div>
                                            <p>
                                                ' . $contactFormData['email'] . '<br><br>
                                                ' . $contactFormData['tel'] . '<br><br>
                                                ' . $contactFormData['message'] . '
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>');

            $mailer->send($message);

            return $this->redirectToRoute('contact');
        }

        return $this->render('contact/index.html.twig', [
            'our_form' => $form->createView()
        ]);
    }

}