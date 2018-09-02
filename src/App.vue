<template>
    <div id="app" class="app" @click="nav_toggle">
        <App-header></App-header>
        <App-nav></App-nav>
        <App-aside></App-aside>
        <transition name="fade">
            <router-view/>
        </transition>
    </div>
</template>

<script>
import AppNav from './components/App-nav';
import AppAside from './components/App-aside';
import AppHeader from './components/App-header';
export default {
    components: {
        AppNav,
        AppAside,
        AppHeader
    },
    methods: {
        nav_toggle() {
            this.$store.commit('settings/nav_toggle', false);
        }
    }
};
</script>

<style lang="scss">
.app {
    display: grid;
    grid-template-columns: 80px 256px 1fr;
    grid-template-rows: 64px 1fr;
    height: 100vh;
    overflow: hidden;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
