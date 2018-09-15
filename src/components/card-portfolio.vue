<template>
    <div class="card">
        <div class="card-img">
            <portfolio-icon />
        </div>
        <div class="card-content p-t p-b">
            <div class="container">
                <ul>
                    <li v-for="(l, i) in t[lang]['portfolioCard']" :key="i">
                        {{l}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import portfolioIcon from './icons/portfolio';
export default {
    components: {
        portfolioIcon
    },
    computed: {
        t() {
            return this.$store.state.lang;
        },
        lang() {
            return this.$store.state.settings.lang_active;
        }
    }
};
</script>
