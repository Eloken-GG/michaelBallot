/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

import './controllers'

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';


// Start the Stimulus application
import './bootstrap';


import Flickity from "flickity";

const flkty = new Flickity('.carousel', {
    wrapAround: true,
    autoPlay: 3500,
    pageDots: false,
    arrowShape: {
        x0: 10,
        x1: 60, y1: 50,
        x2: 60, y2: 40,
        x3: 25
    }
});




