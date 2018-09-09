<template>
    <div class="container">
        <ul class="skill-item-list">
            <li v-for="(li, i) in skill.list" :key="i">
                {{li}}
            </li>
        </ul>
    </div>
</template>

<script>
import svgIcon from '@/components/svg-icon';
export default {
    components: {
        svgIcon
    },
    computed: {
        skill() {
            let route_name = this.$route.params.item;
            console.log(route_name);
            let item = this.$store.state.skills.list.find(
                i => i.link === route_name
            );
            return item;
        }
    }
};
</script>

<style lang="scss">
.skill-item {

}
</style>
