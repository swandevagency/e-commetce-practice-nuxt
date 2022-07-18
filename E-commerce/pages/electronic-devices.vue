<template>
    <div>
        <HeaderPage />
            <div class="electronic-devices-wrapper">
                <HeroSlider />
                <HotOffers />
                <Categories />
            </div>
        <FooterPage />
    </div>
</template>

<script>
export default {
    components: {
        HeaderPage: () => import("@/components/sections/headerPage.vue"),
        HeroSlider: () => import ("@/components/nested-section/heroSlider.vue"),
        HotOffers:() => import ("@/components/nested-section/hotOffers.vue"),
        Categories:() => import ("@/components/nested-section/categories.vue"),
        
        FooterPage: () => import("@/components/sections/footerPage.vue"),
    },
}
</script>

<style lang="scss">
    .electronic-devices-wrapper{
        margin-top: 50px;
        padding: 0px 120px;
    }

    .hero-section{
        border-radius: 16px;
    }

    .hot-offers-section{
        background: linear-gradient(to top,#5c51bf,#6763d9);
        margin: 20px 0px 25px;
    }
</style>