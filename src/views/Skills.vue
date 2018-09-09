<template>
    <main class="app-main" :class="{'skill-item': $route.params.item}">
        <section class="section p-t p-b">
            <div class="container">
                <h2 class="page-title">
                    Skills
                </h2>
            </div>
        </section>
        <section class="section p-t p-b">
            <div class="container">
                <div class="content-box">
                    <div data-simplebar>
                        <div class="card-bar" :class="{h: !$route.params.item}" v-for="(s, i) in skill_list" :key="i" :to="`/skills/${s.link}`" :title="s.title">
                            <svg viewBox="0 0 128 128">
                                <svg-icon :skill="s.title" />
                            </svg>
                            {{s.title}}
                        </div>
                        <transition name="fade">
                            <router-view/>
                        </transition>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import svgIcon from '@/components/svg-icon';
export default {
    components: {
        svgIcon
    },
    computed: {
        skill_list() {
            return this.$store.state.skills.list;
        }
    }
};
</script>

