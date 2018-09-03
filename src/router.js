import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    linkExactActiveClass: 'is-active',
    linkActiveClass: 'is-parent-active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }, {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }, {
            path: '/skills',
            name: 'skills',
            component: () => import(/* webpackChunkName: "skills" */ './views/Skills.vue'),
            children: [
                {
                    path: '/skills/:item',
                    name: 'skills-item',
                    component: () => import(/* webpackChunkName: "skills" */ './views/Skills-Item.vue')
                }
            ]
        }, {
            path: '/portfolio',
            name: 'portfolio',
            component: () => import(/* webpackChunkName: "portfolio" */ './views/Portfolio.vue')
        }, {
            path: '/contact',
            name: 'contact',
            component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
        }
    ]
})
