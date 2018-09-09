<template>
    <aside class="app-aside">
        <card-home :class="{'is-active': route === 'home'}" />
        <card-about :class="{'is-active': route === 'about'}" />
        <card-skills :class="{'is-active': route === 'skills' || route === 'skills-item'}" />
        <card-portfolio :class="{'is-active': route === 'portfolio' || route === 'portfolio-item'}" />
        <card-experience :class="{'is-active': route === 'experience'}" />
    </aside>
</template>

<script>
import cardHome from './card-home';
import cardAbout from './card-about';
import cardSkills from './card-skills';
import cardPortfolio from './card-portfolio';
import cardExperience from './card-experience';
export default {
    components: {
        cardHome,
        cardAbout,
        cardSkills,
        cardPortfolio,
        cardExperience
    },
    computed: {
        route() {
            return this.$route.name;
        }
    }
};
</script>

<style lang="scss">
.app-aside {
    grid-column: 2/3;
    grid-row: 2/3;
    background-color: var(--color-secondary);
    color: #fff;
    position: relative;
    z-index: 0;
    max-height: calc(100vh - 64px);
}
</style>
