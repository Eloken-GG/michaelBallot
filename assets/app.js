/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';


// import Alpinejs
import 'alpinejs';

// import Scroll Reveal
import ScrollReveal from 'scrollreveal';

    // Animation of headline, tagline and punchline
    ScrollReveal().reveal('.headline');
    ScrollReveal().reveal('.tagline', { delay: 500 });
    ScrollReveal().reveal('.punchline', { delay: 2000 });

// import Plyr
import Plyr from 'plyr';

    document.addEventListener('DOMContentLoaded', () => {
        // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
        const player = new Plyr('#player');

        // Expose
        window.player = player;

        // Bind event listener
        function on(selector, type, callback) {
            document.querySelector(selector).addEventListener(type, callback, false);
        }

        // Pause
        on('.js-pause', 'click', () => {
            player.pause();
        });

        // Play
        on('.js-play', 'click', () => {
            player.play();
        });

    });

// Start the Stimulus application
import './bootstrap';
