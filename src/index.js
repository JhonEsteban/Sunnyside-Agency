import toggleMenuMobile from './js/toggleMenuMobile.js';
import closeMenuMobile from './js/closeMenuMobile.js';

const hamburgerButton = document.getElementById('hamburgerButton');

hamburgerButton.addEventListener('click', toggleMenuMobile);
window.addEventListener('click', closeMenuMobile);
