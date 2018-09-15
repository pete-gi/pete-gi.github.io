<template>
    <div class="card">
        <div class="card-img">
            <experience-icon />
        </div>
        <div class="card-content p-t p-b">
            <div class="container">
                <p>
                    <b>{{t[lang]['experience']['over4years'][0]}}</b>
                    <br>{{t[lang]['experience']['over4years'][1]}}
                </p>
                <p>
                    <b>{{t[lang]['experience']['over800websites'][0]}}</b>
                    <br>{{t[lang]['experience']['over800websites'][1]}}
                </p>
                <p>
                    <b>{{t[lang]['experience']['oneDev'][0]}}</b>
                    <br>{{t[lang]['experience']['oneDev'][1]}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import experienceIcon from './icons/experience';
export default {
    components: {
        experienceIcon
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
