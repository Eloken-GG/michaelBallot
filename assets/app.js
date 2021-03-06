/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import 'swiper/swiper-bundle.min.css'

// Import theme
import './controllers/js/theme'

// Start the Stimulus application
import './bootstrap';

import Plyr from "plyr";

// This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
let player = new Plyr('#player');

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
// Pause 2
on('.js-pause2', 'click', () => {
    player.pause();
});
// Play
on('.js-play', 'click', () => {
    player.play();
});