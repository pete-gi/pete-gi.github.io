<template>
    <nav class="app-nav" @click.stop>
        <ul class="nav" :class="{'is-active': nav_on}">
            <router-link class="nav-item" tag="li" to="/">
                <a>
                    <home-icon />
                    Home
                </a>
            </router-link>
            <router-link class="nav-item" tag="li" to="/about">
                <a>
                    <about-icon />
                    About
                </a>
            </router-link>
            <router-link class="nav-item" tag="li" to="/skills">
                <a>
                    <skills-icon />
                    Skills
                </a>
            </router-link>
            <router-link class="nav-item" tag="li" to="/portfolio">
                <a>
                    <portfolio-icon />
                    Portfolio
                </a>
            </router-link>
            <router-link class="nav-item" tag="li" to="/experience">
                <a>
                    <experience-icon />
                    Experience
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
        }
    },
    mounted() {
        
    }
};
</script>

<style lang="scss">
.app-nav {
    grid-column: 1/2;
    grid-row: 2/3;
    background-color: var(--color-primary);
    color: #fff;
    position: relative;;
    z-index: 1;
}
.nav {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
}
.nav-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:not(:last-of-type) {
        border-bottom: 1px solid var(--color-primary-light);
    }
    a {
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 0.5rem;
        color: #fff;
        background-color: var(--color-primary);
        text-align: center;
        transition: background-color 0.2s;
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
