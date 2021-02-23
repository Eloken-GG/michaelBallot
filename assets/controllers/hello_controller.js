import {Controller} from 'stimulus';
import Plyr from "plyr";
import ScrollReveal from "scrollreveal";

export default class extends Controller {
    connect() {
        this.element.addEventListener('swup:connect', this._onConnect);
    }

    disconnect() {
        // You should always remove listeners when the controller is disconnected to avoid side-effects
        this.element.removeEventListener('swup:connect', this._onConnect);
    }

    _onConnect(event) {
        document.addEventListener('swup:contentReplaced', (event) => {
            window.scrollTo(0, 0);
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
            ScrollReveal().reveal('.tagline', {delay: 500});
            ScrollReveal().reveal('.punchline', {delay: 2000});
            ScrollReveal().reveal('.highline', {delay: 1000});
        });






    }



}