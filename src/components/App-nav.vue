<template>
    <nav class="app-nav" @click.stop>
        <ul class="nav" :class="{'is-active': nav_on}">
            <router-link class="nav-item" tag="li" to="/">
                <a>
                    <home-icon /> {{t[lang]['nav']['home']}}
                </a>
            </router-link>
            <router-link class="nav-item" tag="li" to="/about">
                <a>
                    <about-icon /> {{t[lang]['nav']['about']}}
                </a>
            </router-link>
            <router-link class="nav-item" tag="li" to="/skills">
                <a>
                    <skills-icon /> {{t[lang]['nav']['skills']}}
                </a>
            </router-link>
            <router-link class="nav-item" tag="li" to="/portfolio">
                <a>
                    <portfolio-icon /> {{t[lang]['nav']['portfolio']}}
                </a>
            </router-link>
            <router-link class="nav-item" tag="li" to="/experience">
                <a>
                    <experience-icon /> {{t[lang]['nav']['experience']}}
                </a>
            </router-link>
        </ul>
    </nav>
</template>

<script>
import homeIcon from './icons/home';
import aboutIcon from './icons/about';
import skillsIcon from './icons/skills';
import portfolioIcon from './icons/portfolio';
import experienceIcon from './icons/experience';
export default {
    components: {
        homeIcon,
        aboutIcon,
        skillsIcon,
        portfolioIcon,
        experienceIcon
    },
    computed: {
        nav_on() {
            return this.$store.state.settings.nav_on;
        },
        t() {
            return this.$store.state.lang;
        },
        lang() {
            return this.$store.state.settings.lang_active;
        }
    },
    mounted() {}
};
</script>

<style lang="scss">
.app-nav {
    grid-column: 1/2;
    grid-row: 2/3;
    background-color: var(--color-primary);
    color: #fff;
    position: relative;
    z-index: 1;
    overflow-x: auto;
    overflow-y: hidden;
    @media (min-width: 920px) {
        grid-column: 1/2;
        grid-row: 2/6;
        overflow-x: hidden;
    }
}
.nav {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    @media (min-width: 920px) {
        flex-direction: column;
    }
}
.nav-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    &:not(:last-of-type) {
        border-bottom: 1px solid var(--color-primary-light);
    }
    @media (min-width: 920px) {
        flex-direction: column;
    }
    a {
        width: 80px;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 0.5rem;
        color: #fff;
        background-color: var(--color-primary);
        font-size: 1.1rem;
        text-align: center;
        transition: background-color 0.2s;
        @media (min-width: 920px) {
            width: 100%;
        }
        svg {
            width: 32px;
            height: 32px;
            margin-bottom: 0.5rem;
            transform: rotateZ(5deg);
            transition: transform 0.3s;
            fill: #fff;
        }
        &:hover,
        &:focus {
            background-color: var(--color-primary-light);
            svg {
                transform: rotateZ(0deg);
            }
        }
    }
    &.is-active {
        a {
            background-color: var(--color-primary-light);
            svg {
                transform: rotateZ(0deg);
            }
        }
    }
}
</style>
