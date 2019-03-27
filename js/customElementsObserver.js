import { importModule } from "https://uupaa.github.io/dynamic-import-polyfill/importModule.js";

export default function customElementsObserver(elements) {
    let observe = (el) => {
        return new Promise((resolve, reject) => {
            let obs = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        resolve();
                    }
                })
            }, {
                root: document.body,
                rootMargin: '0px',
                threshold: 1.0,
            });
            obs.observe(el);
        });
    }

    elements.forEach(el => {
        observe(el.target).then(() => {
            importModule(el.file);
        });
    });
}