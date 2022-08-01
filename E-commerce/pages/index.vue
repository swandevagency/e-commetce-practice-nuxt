<template>
    <div>
        <HeroSlider 
            :paths="yo"
        />
        
        <div class="main-container">

            <SubHero />

            <HotOffers />

            <banner />

            <CategoryBanner />

            <Categories categories-title="دسته‌بندی‌های دیجی‌کالا"/>

            <DiscountBanner 
                :bannerPath1="xo.bannerPath1"
                :bannerPath2="xo.bannerPath2"
            />

            <DigiSuggestions suggestion-title="پیشنهاد دیجی‌کالا" />

            <DiscountBanner 
                :bannerPath1="xo.bannerPath3"
                :bannerPath2="xo.bannerPath4"
            />

            <DigitalCategory />

            <SpecialServices />

            <DigiClubBanner />

            <BlogSections />
            
        </div>
<!-- todo : header and footer must be handled in layouts -->
    </div>    
</template>

<script>
    export default {
        data() {
            return{
                yo:[
                    {path: require('@/static/Slider-Images/1.jpg')},
                    {path: require('@/static/Slider-Images/2.jpg')},
                    {path: require('@/static/Slider-Images/3.jpg')},
                    {path: require('@/static/Slider-Images/4.jpg')},
                    {path: require('@/static/Slider-Images/5.jpg')},
                    {path: require('@/static/Slider-Images/6.jpg')},
                    {path: require('@/static/Slider-Images/7.jpg')}, 
                ],
                xo:{
                    bannerPath1: require('@/static/category-banner/5.jpg'),
                    bannerPath2: require('@/static/category-banner/6.jpg'),
                    bannerPath3: require('@/static/category-banner/7.jpg'),
                    bannerPath4: require('@/static/category-banner/8.jpg'),
                    
                }
            }
        },
        
        name: 'IndexPage',
        components: {
            HeroSlider: () => import ("../components/homeComponents/heroSlider.vue"),
            SubHero:() => import ("../components/homeComponents/subHeroSection.vue"),
            HotOffers:() => import ("../components/homeComponents/hotOffers.vue"),
            Banner:() => import ("../components/homeComponents/banner.vue"),
            Categories:() => import ("../components/homeComponents/categories.vue"),
            DigiSuggestions: () => import ("../components/homeComponents/digiSuggestions.vue"),
            DigitalCategory: () => import ("../components/homeComponents/digitalCategory.vue"),
            SpecialServices:() => import ("../components/homeComponents/specialServices.vue"),
            DigiClubBanner: () => import ("../components/homeComponents/digiClubBanner.vue"),
            BlogSections:() => import ("../components/homeComponents/blog.vue"),
            DiscountBanner:() => import ("../components/homeComponents/discountBanners.vue"),
            CategoryBanner:() => import ("../components/homeComponents/categoryBanner.vue")

        }, 
    }
</script>

<style lang="scss">
    .main-container{
        margin: 0px 96px;
        padding: 0px 16px;
    }

    @media only screen and (max-width: 992px){
        .first-category-banner-items{
            flex-basis: 49%;
        }

        .main-container{
            margin: 0px 0px;
        }
    }

</style>