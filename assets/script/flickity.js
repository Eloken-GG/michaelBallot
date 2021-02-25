// Import Flickity
import Flickity from 'flickity';

const flkty = new Flickity( '.carousel', {
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