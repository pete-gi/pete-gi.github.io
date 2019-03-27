export default class SiteHeader extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement('template');
        fetch('./js/custom-elements/SiteHeader.html').then(res => res.text().then(res => {
            this.template.innerHTML = res;
            let template = this.template.content.cloneNode(true);
            this.attachShadow({
                mode: 'open'
            }).appendChild(template);
        }));
    }
}
customElements.define('site-header', SiteHeader);