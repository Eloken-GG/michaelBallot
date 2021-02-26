import { Controller } from "stimulus"


import 'alpinejs'

import './js/aos';

import Plyr from 'plyr';




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
    // Pause 2
    on('.js-pause2', 'click', () => {
        player.pause();
    });
    // Play
    on('.js-play', 'click', () => {
        player.play();
    });





export default class extends Controller {
    connect() {

        document.addEventListener('swup:contentReplaced', (event) => {
            window.scrollTo(0, 0);
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