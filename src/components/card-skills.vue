<template>
    <div class="card">
        <div class="card-img">
            <skills-icon />
        </div>
        <div class="card-content card-content-flex" data-simplebar>
            <router-link class="card-tile" v-for="(s, i) in skill_list" :key="i" :to="`/skills/${s.link}`" :title="s.title">
                <svg viewBox="0 0 128 128">
                    <svg-icon :skill="s.title" />
                </svg>
            </router-link>
        </div>
    </div>
</template>

<script>
import skillsIcon from './icons/skills';
import svgIcon from './svg-icon'
export default {
    components: {
        skillsIcon,
        svgIcon
    },
    computed: {
        skill_list() {
            return this.$store.state.skills.list;
        }
    }
};
</script>
