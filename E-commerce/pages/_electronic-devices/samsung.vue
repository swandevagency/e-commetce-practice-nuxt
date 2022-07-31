<template>  
    <div>
        
        <GoodsPart />

        <GoodsSection />

    </div>
</template>

<script>
    export default {
        components: {
            GoodsPart: () => import("@/components/goods-pages/goodsTemplate.vue"),
        }
    }
</script>

<style lang="scss">

</style>