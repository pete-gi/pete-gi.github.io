<template>
    <div id="app" class="app" :class="routeClass">
        <App-header></App-header>
        <App-nav></App-nav>
        <App-aside></App-aside>
        <transition name="fade">
            <router-view/>
        </transition>
        <footer class="app-footer">
            <p>
                Copyright &copy; 2018 by Piotr Golczyk.
            </p>
        </footer>
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
    computed: {
        routeClass() {
            return `route-${this.$route.name}`;
        }
    }
};
</script>

<style lang="scss">
.app {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 64px 80px 256px 1fr auto;
    overflow: hidden;
    @media (min-width: 920px) {
        grid-template-columns: 80px 256px 1fr;
        grid-template-rows: 64px 1fr auto;
        height: 100vh;
    }
    &.route-skills {
        grid-template-rows: 64px 80px 0px 1fr auto;
    }
}
</style>
