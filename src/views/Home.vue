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
                <div class="home-content">
                    <h3>pete-gi</h3>
                    <div class="home-img" v-for="(img, i) in imgs" :key="i">
                        <img :src="getImgPath(img)" :style="`animation-delay: ${i*3}s`" alt="">
                    </div>
                    <div class="home-img" v-for="(img, i) in imgs" :key="'i'+i">
                        <img :src="getImgPath(img)" :style="`animation-delay: ${(i*3)+6}s`" alt="">
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
        },
        imgs() {
            let list = [];
            this.t[this.lang]['portfolio'].forEach(p => {
                list.push(p.img);
            });
            return list;
        }
    },
    methods: {
        getImgPath(src) {
            return '/portfolio/' + src + '.jpg';
        }
    }
};
</script>
