<template>
    <header class="app-header" @click.stop>
        <div class="container--full">
            <h1 class="title">Piotr Golczyk</h1>
            <button class="lang-toggle" @click="lang_toggle">{{lang.opposite}}</button>
        </div>
    </header>
</template>

<script>
export default {
    computed: {
        lang() {
            return {
                current: this.$store.state.settings.lang_active,
                opposite: this.$store.state.settings.lang_opposite
            }
        }
    },
    methods: {
        lang_toggle() {
            this.$store.commit('settings/lang_toggle');
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
    .title {
        margin: 0 auto 0 0;
    }
}
.lang-toggle {
    margin-left: auto;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0;
    padding: 1rem;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    &:hover, &:focus {
        background-color: var(--color-primary-light);
    }
}
</style>
