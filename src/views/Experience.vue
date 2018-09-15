<template>
    <main class="app-main">
        <section class="section p-t p-b">
            <div class="container">
                <h2 class="page-title">
                    {{t[lang]['nav']['experience']}}
                </h2>
            </div>
        </section>
        <section class="section p-t p-b">
            <div class="container">
                <div class="content-box">
                    <div data-simplebar>
                        <div class="panel">
                            <h3>Internet Media Polska</h3>
                            <h4>Web developer</h4>
                            <h5>06/2014 - 2018</h5>
                            <ul>
                                <li>
                                    {{t[lang]['experience']['im'][0]}}
                                </li>
                                <li>
                                    {{t[lang]['experience']['im'][1]}}
                                </li>
                                <li>
                                    {{t[lang]['experience']['im'][2]}}
                                </li>
                            </ul>
                        </div>
                        <div class="panel">
                            <h3>Software Developer Academy</h3>
                            <h4>{{t[lang]['experience']['instructor']}}</h4>
                            <h5>08/2018</h5>
                            <ul>
                                <li v-html="t[lang]['experience']['sda'][0]">
                                </li>
                            </ul>
                        </div>
                        <div class="panel">
                            <h3>{{t[lang]['experience']['tu']}}</h3>
                            <h4>{{t[lang]['experience']['inz']}}</h4>
                            <h5>2010 - 2014</h5>
                            <ul>
                                <li v-html="t[lang]['experience']['pk'][0]">
                                </li>
                                <li>
                                    {{t[lang]['experience']['pk'][1]}}
                                </li>
                            </ul>
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
    }
};
</script>
