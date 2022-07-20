<template>  
    <div>
        <HeaderPage />
        
        <GoodsPart />

        <FooterPage />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderPage: () => import("@/components/sections/headerPage.vue"),
            GoodsPart: () => import("@/components/goods-pages/goodsTemplate.vue"),
            FooterPage: () => import("@/components/sections/footerPage.vue"),   
        }
    }
</script>

<style lang="scss">

</style>