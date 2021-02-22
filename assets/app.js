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


// import Plyr
import Plyr from 'plyr';

// import Scroll Reveal
import ScrollReveal from 'scrollreveal';

document.addEventListener('DOMContentLoaded', () => {
    // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
    const player = new Plyr('#player');
    console.log('DOM fully loaded and parsed');

    // Expose
    window.player = player;

    // Bind event listener
    function on(selector, type, callback) {
        document.querySelector(selector).addEventListener(type, callback, false);
        console.log('1');
    }

    // Pause
    on('.js-pause', 'click', () => {
        player.pause();
        console.log('2');
    });

    // Pause 2
    on('.js-pause2', 'click', () => {
        player.pause();
        console.log('3');
    });

    // Play
    on('.js-play', 'click', () => {
        player.play();
        console.log('4');
    });

    // Animation of headline, tagline and punchline
    ScrollReveal().reveal('.headline');
    ScrollReveal().reveal('.tagline', { delay: 500 });
    ScrollReveal().reveal('.punchline', { delay: 2000 });
    ScrollReveal().reveal('.highline', { delay: 1000 });
});


// Start the Stimulus application
import './bootstrap';




