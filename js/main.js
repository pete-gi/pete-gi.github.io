import loadMediaStyles from './loadMediaStyles.js';
import customElementObserver from './customElementsObserver.js';

let elements = [{
    target: document.getElementsByTagName('site-nav')[0],
    file: './js/custom-elements/SiteNav.js'
}, {
    target: document.getElementsByTagName('site-header')[0],
    file: './js/custom-elements/SiteHeader.js'
}, {
    target: document.getElementsByTagName('site-footer')[0],
    file: './js/custom-elements/SiteFooter.js'
}];
customElementObserver(elements);

let links = {
    768: false,
    996: false,
    1280: false,
    1650: false,
}
loadMediaStyles(links);