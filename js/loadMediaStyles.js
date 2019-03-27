export default function loadMediaStyles(links) {
    window.addEventListener('resize', loadAppropiateStyle);
    window.addEventListener('load', loadAppropiateStyle);

    function importStyle(href) {
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }

    function loadAppropiateStyle() {
        let href = '';
        for (let l in links) {
            if (window.innerWidth >= l) {
                if (!links[l]) {
                    href = `__m${l}.css`;
                    links[l] = true;
                    importStyle(`./css/${href}`);
                }
            }
        }
    }
}