<template>
    <main class="app-main">
        <section class="section p-t p-b">
            <div class="container">
                <h2 class="page-title">
                    {{t[lang]['nav']['portfolio']}}
                </h2>
            </div>
        </section>
        <section class="section p-t p-b">
            <div class="container">
                <div class="content-box">
                    <div data-simplebar>
                        <div class="panel panel-horizontal" v-for="(p, i) in t[lang]['portfolio']" :key="i">
                            <img :src="getImgPath(p.img)" alt="">
                            <div class="panel-content">
                                <h3>{{p.name}}</h3>
                                <p>
                                    {{p.desc}}
                                </p>
                                <a class="super" :href="`//${p.img}`" target="_blank">{{p.img}}</a>
                            </div>
                        </div>
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
    },
    methods: {
        getImgPath(src) {
            return '/portfolio/' + src + '.jpg';
        }
    }
};
</script>
