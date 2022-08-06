<template>
    <h1>
        Cameron Stemmet
    </h1>
<li v-for="product in products">
    <span>
    {{product.name}}
    </span>
    <span>
    {{product.price}}
    </span>
</li>
</template>

<script>
export default {
computed: {
    products(){
        return this.$store.state.products
    }
}
}
</script>

<style scoped>
h1 {
    -webkit-text-stroke: 1px #000;
    -webkit-text-fill-color:#fff;
}
</style>