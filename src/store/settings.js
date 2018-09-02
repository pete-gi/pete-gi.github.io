const settings = {
    namespaced: true,
    state: {
        lang_active: 'pl',
        lang_list: [
            'pl', 'en'
        ],
        nav_on: false
    },
    mutations: {
        nav_toggle(state, value) {
            state.nav_on = value;
        },
        lang_toggle(state, value) {
            state.lang_active = value;
        }
    },
    actions: {

    }
};

export default settings;