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
        DigitalCategory: () => import ("../nested-section/digitalCategory.vue"),
        SpecialServices:() => import ("../nested-section/specialServices.vue"),
        DigiClubBanner: () => import ("../nested-section/digiClubBanner.vue"),

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

            <SpecialServices />

            <DigiClubBanner />

            <div class="blog-section">
                <div class="blog-header">
                    <h6>خواندنی ها</h6>
                    <a>مطالب بیشتر در دیجی‌کالا مگ</a>
                </div>
                <div class="blog-items">
                    <div class="blog-items-content">
                        <img src="../../static/blog/1.jpg"/>
                        <p>تصاویر احتمالی گلکسی بادز ۲ پرو به بیرون درز کرد</p> 
                    </div>

                    <div class="blog-items-content">
                        <img src="../../static/blog/2.jpg"/>
                        <p>قابلیت Expert RAW سامسونگ دو ویژگی جدید و جذاب دریافت می‌کند</p> 
                    </div>

                    <div class="blog-items-content">
                        <img src="../../static/blog/3.jpg"/>
                        <p>۱۰ لپ تاپ محبوب در دیجی‌ کالا (۱۹ تیر ۱۴۰۱)</p> 
                    </div>

                    <div class="blog-items-content">
                        <img src="../../static/blog/4.jpg"/>
                        <p>نقد و بررسی کلاسیک گوشی ردمی نوت ۱۱ پرو پلاس</p> 
                    </div>
                </div>
            </div>
            
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

    .blog-section{
        display: flex;
        flex-direction: column;
        padding: 16px 0px;
        margin-top: 30px;
    }

    .blog-header{
        flex-basis: 10%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 15px;

        h6{
            font-size: 1.2em;
        }

        a{
            font-size: 1.1em;
            color: #19bfd3;
        }
    }

    .blog-items{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }

    .blog-items-content{
        display: flex;
        flex-direction: column;
        flex-basis: 24%;
        border-radius: 16px;
        border: 1px solid #e0e0e2;
        img{
            width: 100%;
            border-radius: 16px 16px 0px 0px;
            margin-top: -1px;
            object-fit:cover;
        }

        p{
            padding: 15px;
            font-size: 0.8em;
            color: #0c0c0c;
            font-weight: 100;
        }
    }

</style>