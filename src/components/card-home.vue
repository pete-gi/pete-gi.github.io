<template>
    <div class="card">
        <div class="card-img">
            <home-icon />
        </div>
        <div class="card-content p-t p-b">
            <div class="container">
                <p>
                    <b>{{t[lang]['home']['name']}}</b>
                    <br>Piotr Golczyk
                </p>
                <p>
                    <b>{{t[lang]['home']['birth']}}</b>
                    <br>1991/11/14
                </p>
                <p>
                    <b>{{t[lang]['home']['place']}}</b>
                    <br>Gdansk
                </p>
                <p>
                    <b>{{t[lang]['home']['job']}}</b>
                    <br>Web developer
                </p>
                <p>
                    <b>
                        <a class="super" :href="`/pdf/${lang === 'pl' ? 'CV-2018-PL' : 'Resume-EN-2018'}.pdf`" target="_blank">
                            {{t[lang]['home']['cv']}}!
                        </a>
                    </b>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import homeIcon from './icons/home';
export default {
    components: {
        homeIcon
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
