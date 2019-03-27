export default class SiteFooter extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement('template');
        fetch('./js/custom-elements/SiteFooter.html').then(res => res.text().then(res => {
            this.template.innerHTML = res;
            let template = this.template.content.cloneNode(true);
            this.attachShadow({
                mode: 'open'
            }).appendChild(template);
        }));
    }
}
customElements.define('site-footer', SiteFooter);