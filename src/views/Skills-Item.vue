<template>
    <h3>
        {{name}}
    </h3>
</template>

<script>
export default {
    computed: {
        name() {
            return this.$route.params.item;
        }
    }
}
</script>
