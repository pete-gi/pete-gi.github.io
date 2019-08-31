import './styles/index.scss';

const ACTIVE_CLASS = 'is-active';
const CONTENT_CHANGE_NAME = 'fade';
const CONTENT_CHANGE_DURATION = 500;

let site = document.getElementById('site');
let mainContent = document.getElementById('main');
let nav = document.getElementById('nav');
let navOverlay = document.getElementById('nav-overlay');
let navMenu = document.getElementById('nav-menu');
let navToggle = document.getElementById('nav-toggle');
let links = document.querySelectorAll('.js-link');

let pages = getPages();
let currentPage = getCurrentPage();
loadCurrentPage();

// NAV TOGGLE
navToggle.addEventListener('click', () => toggleNav(true));
site.addEventListener('click', () => toggleNav(false));
nav.addEventListener('click', e => {
    e.stopPropagation();
});

function toggleNav(toggle = true) {
    if (toggle) {
        event.preventDefault();
        navOverlay.classList.toggle(ACTIVE_CLASS);
        navMenu.classList.toggle(ACTIVE_CLASS);
    } else {
        navOverlay.classList.remove(ACTIVE_CLASS);
        navMenu.classList.remove(ACTIVE_CLASS);
    }
}

// PAGES LINKS
function getPages() {
    let pages = [];
    links.forEach(link => {
        let href = link.href;
        let page = href.split('#')[1];
        let pageInfo = new Object();
        pageInfo = {
            hash: `#${page}`,
            page: page,
            url: `/pages/${page}.html`
        };
        pages[page] = pageInfo;
    });
    return pages;
}

// LINKS EVENTS
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        let hash = link.href;
        let page = hash.split('#')[1];
        currentPage = pages[page];
        // TRIGGER CLICK ON SITE TO HIDE NAV ON MOBILE
        site.dispatchEvent(new Event('click'));
        if (location.hash.split('#')[1] !== page) {
            loadCurrentPage();
        }
    });
});

// CURRENT PAGE
function getCurrentPage() {
    let defaultPage = {
        hash: '#o-mnie',
        page: 'o-mnie',
        url: '/pages/o-mnie.html'
    };
    if (location.hash) {
        let hash = location.hash;
        let page = hash.split('#')[1];
        return pages[page];
    } else {
        return defaultPage;
    }
}

// LOAD PAGE
function loadCurrentPage() {
    location.hash = currentPage.hash;
    if (currentPage.html) {
        modifyHTML(currentPage.html);
    } else {
        loadHTML()
            .then(response => {
                currentPage.html = response;
                modifyHTML(currentPage.html);
            })
            .catch(error => {
                console.error(error);
            });
    }
}

// LOAD PAGE HTML
function loadHTML() {
    return new Promise((resolve, reject) => {
        fetch(currentPage.url)
            .then(response => response.text())
            .then(response => {
                let html = response;
                resolve(html);
            })
            .catch(error => {
                reject(error);
            });
    });
}

// REPLACE PAGE CONTENT
function modifyHTML(html) {

    // GET FIRST CHILD
    let child = mainContent.children[0];

    // CREATE SECOND CHILD
    let content = document.createElement('div');
    content.id = 'content';
    content.classList = 'c';
    content.setAttribute('data-page', currentPage.page);

    child.classList.add(`${CONTENT_CHANGE_NAME}-out-start`);
    content.classList.add(`${CONTENT_CHANGE_NAME}-in-start`);

    content.innerHTML = html;

    // APPEND SECOND CHILD
    mainContent.append(content);

    // ANIMATE
    contentTransition(child, content);
}

function contentTransition(from, to) {
    setTimeout(() => {
        from.classList.remove(`${CONTENT_CHANGE_NAME}-out-start`);
        from.classList.add(`${CONTENT_CHANGE_NAME}-out`);
        to.classList.remove(`${CONTENT_CHANGE_NAME}-in-start`);
        to.classList.add(`${CONTENT_CHANGE_NAME}-in`);
    }, 0);
    setTimeout(() => {
        from.classList.remove(`${CONTENT_CHANGE_NAME}-out`);
        to.classList.remove(`${CONTENT_CHANGE_NAME}-in`);
        mainContent.removeChild(from);
    }, CONTENT_CHANGE_DURATION);
}