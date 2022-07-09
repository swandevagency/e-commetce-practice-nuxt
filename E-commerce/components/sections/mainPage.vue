<script>
import Categories from '../nested-section/categories.vue'
    export default {
    name: 'IndexPage',
    components: {
        HeroSlider: () => import ("../nested-section/heroSlider.vue"),
        SubHero:() => import ("../nested-section/subHeroSection.vue"),
        HotOffers:() => import ("@/components/sections/hotOffers.vue"),
        Banner:() => import ("@/components/nested-section/banner.vue"),
        Categories:() => import ("../nested-section/categories.vue"),
        DigiSuggestions: () => import ("../nested-section/digiSuggestions.vue"),
        DigitalCategory: () => import ("../nested-section/digitalCategory.vue")

    },  
  }
</script>
<template>
    <div>
        <HeroSlider />
        <div class="main-container">

            <SubHero />

            <HotOffers />

            <banner />

            <div class="category-banner-wrapper">
                <div class="first-category-banner-items">
                    <img src="../../static/category-banner/1.gif"/>
                </div>
                <div class="first-category-banner-items">
                    <img src="../../static/category-banner/2.jpg"/>
                </div>
                <div class="first-category-banner-items">
                    <img src="../../static/category-banner/3.jpg"/>
                </div>
                <div class="first-category-banner-items">
                    <img src="../../static/category-banner/4.jpg"/>
                </div>
            </div>

            <Categories />

            <div class="category-banner-wrapper topMargin80">
                <div class="second-category-banner-items">
                    <img src="../../static/category-banner/5.jpg"/>
                </div>
                <div class="second-category-banner-items">
                    <img src="../../static/category-banner/6.jpg"/>
                </div>
            </div>

            <DigiSuggestions />

            <div class="category-banner-wrapper topMargin30">
                <div class="second-category-banner-items">
                    <img src="../../static/category-banner/7.jpg"/>
                </div>
                <div class="second-category-banner-items">
                    <img src="../../static/category-banner/8.jpg"/>
                </div>
            </div>

            <DigitalCategory />
            
        </div>
    </div>    
</template>
<style lang="scss">
    .main-container{
        margin: 0px 96px;
        padding: 0px 16px;
    }

    .category-banner-wrapper{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        width: 100%;
        margin-top: 25px;
    }

    .first-category-banner-items{
        width:24%;
        margin-top: 0px;
        img{
            width:100%;
            border-radius: 16px;
            object-fit: cover;
        }
    }

    .topMargin80{
        margin-top: 80px;
    }

    .second-category-banner-items{
        width:calc(49% + 4px);
        margin-top: 0px;
        img{
            width:100%;
            border-radius: 16px;
            object-fit: cover;
        }
    }

    .topMargin30{
        margin-top:30px
    }


</style>