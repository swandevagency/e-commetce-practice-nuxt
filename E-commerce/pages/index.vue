<template>
    <div>
        <HeroSlider 
            :path1="yo.path1"
            :path2="yo.path2"
            :path3="yo.path3"
            :path4="yo.path4"
            :path5="yo.path5"
            :path6="yo.path6"
            :path7="yo.path7"
        />
        
        <div class="main-container">

            <SubHero />

            <HotOffers />

            <banner />

            <!-- <div class="category-banner-wrapper">
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
 -->
            <Categories categories-title="دسته‌بندی‌های دیجی‌کالا"/>
<!-- 
            <div class="category-banner-wrapper topMargin80">
                <transition appear @before-enter="beforeEnterRight" @enter="enterRight">
                    <div class="second-category-banner-items">
                        <img src="../../static/category-banner/5.jpg"/>
                    </div>
                </transition>    
                <transition appear @before-enter="beforeEnterLeft" @enter="enterLeft"> 
                    <div class="second-category-banner-items">
                        <img src="../../static/category-banner/6.jpg"/>
                    </div>
                </transition>
            </div> -->

            <DigiSuggestions suggestion-title="پیشنهاد دیجی‌کالا" />

            <!-- <div class="category-banner-wrapper topMargin30">
                <transition appear @before-enter="beforeEnterRight" @enter="enterRight">
                    <div class="second-category-banner-items">
                        <img src="../../static/category-banner/7.jpg"/>
                    </div>
                </transition>
                <transition appear @before-enter="beforeEnterLeft" @enter="enterLeft">
                    <div class="second-category-banner-items">
                        <img src="../../static/category-banner/8.jpg"/>
                    </div>
                </transition>
            </div> -->

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
                yo:{
                    path1: require('@/static/Slider-Images/1.jpg'),
                    path2: require('@/static/Slider-Images/2.jpg'),
                    path3: require('@/static/Slider-Images/3.jpg'),
                    path4: require('@/static/Slider-Images/4.jpg'),
                    path5: require('@/static/Slider-Images/5.jpg'),
                    path6: require('@/static/Slider-Images/6.jpg'),
                    path7: require('@/static/Slider-Images/7.jpg'), 
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
            BlogSections:() => import ("../components/homeComponents/blog.vue")

        },
        methods: {
            beforeEnterRight: (el) => {
                el.style.transform = 'translateX(1000px)'
            },
            enterRight(el){
                gsap.to(el , {duration: 3 , x : 0 , ease: 'bounce.out' , stagger : 0.1});
            },

            beforeEnterLeft: (el) => {
                el.style.transform = 'translateX(-1000px)'
            },
            enterLeft(el){
                gsap.to(el , {duration: 3 , x : 0 , ease: 'bounce.out' , stagger : 0.1});
            },
        }  
    }
</script>

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
        overflow: hidden;
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


    @media only screen and (max-width: 992px){
        .category-banner-wrapper{
            flex-wrap: wrap;
            row-gap: 10px;
        }

        .first-category-banner-items{
            flex-basis: 49%;
        }

        .main-container{
            margin: 0px 0px;
        }
    }

</style>