<template>  
    <div>
        <HeaderPage />
        
        <GoodsPart />

        <GoodsSection />

        <FooterPage />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderPage: () => import("@/components/sections/headerPage.vue"),
            GoodsPart: () => import("@/components/goods-pages/goodsTemplate.vue"),
            // GoodsSection: () => import("@/components/goods-pages/goodsSections.vue"),
            FooterPage: () => import("@/components/sections/footerPage.vue"),   
        }
    }
</script>

<style lang="scss">

</style>