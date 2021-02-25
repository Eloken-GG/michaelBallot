import {Controller} from 'stimulus';

// import Alpinejs
import 'alpinejs';

import initPlyr from '../script/initPlyr';


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
            initPlyr ()

        });


    }

}