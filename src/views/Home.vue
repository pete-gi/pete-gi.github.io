<template>
    <main class="app-main">
        <section class="section p-t p-b">
            <div class="container">
                <h2 class="page-title">
                    {{t[lang]['nav']['home']}}
                </h2>
            </div>
        </section>
        <section class="section p-t p-b">
            <div class="container">
                <router-view></router-view>
            </div>
        </section>
    </main>
</template>

<script>
export default {
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
