import Vue from 'vue'
import Vuex from 'vuex'
// import modules
import settings from './store/settings';
import skills from './store/skills';
import lang from './store/lang';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        settings,
        skills,
        lang
    }
})
