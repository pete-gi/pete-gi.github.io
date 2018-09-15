<template>
    <main class="app-main">
        <section class="section p-t p-b">
            <div class="container">
                <h2 class="page-title">
                    {{t[lang]['nav']['about']}}
                </h2>
            </div>
        </section>
        <section class="section p-t p-b">
            <div class="container">
                <div class="content-box">
                    <div data-simplebar>
                        <p v-for="(p, i) in t[lang]['about']" :key="i">
                            {{p}}
                        </p>
                    </div>
                </div>
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
