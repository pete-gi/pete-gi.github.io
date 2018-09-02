<template>
    <header class="app-header" @click.stop>
        <div class="container--full">
            <h1 class="title">Piotr Golczyk</h1>
            <button class="nav-toggle hamburger hamburger--collapse" type="button" :class="{'is-active': nav_on}" @click="nav_toggle">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
    </header>
</template>

<script>
export default {
    computed: {
        nav_on() {
            return this.$store.state.settings.nav_on;
        }
    },
    methods: {
        nav_toggle() {
            this.$store.commit('settings/nav_toggle', !this.nav_on);
        }
    }
};
</script>

<style lang="scss">
.app-header {
    grid-column: 1/3;
    grid-row: 1/2;
    background-color: var(--color-primary);
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .nav-toggle {
        .hamburger-inner {
            &,
            &:before,
            &:after {
                background-color: #fff;
            }
        }
        @media (min-width: 768px) {
            display: none;
        }
    }
}
</style>
