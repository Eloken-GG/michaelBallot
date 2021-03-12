import { Controller } from 'stimulus';

import Plyr from 'plyr';


export default class extends Controller {

    connect() {
        this.element.addEventListener('swup:connect', this._onConnect);
    }

    disconnect() {
        // You should always remove listeners when the controller is disconnected to avoid side-effects
        this.element.removeEventListener('swup:connect', this._onConnect);
    }

    _onConnect(event) {
        // Swup has just been intialized and you can access details from the event
        console.log(event.detail.swup); // Swup instance
        console.log(event.detail.options); // Options used to initialize Swup
        document.addEventListener('swup:contentReplaced', (event) => {
            window.scrollTo(0, 0);



            // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
            let player;
            player = new Plyr('#player');

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

        });

    }
}