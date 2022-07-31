<template>
    <div>
            <div class="electronic-devices-wrapper">
                <HeroSlider
                    :path1="xo.path1"
                    :path2="xo.path2"
                    :path3="xo.path3"
                    :path4="xo.path4"
                    :path5="xo.path5"
                />

                <HotOffers />
                    <nuxtLink to="/electronic-devices/samsung">
                        <h1>
                            arsam
                        </h1>
                    </nuxtLink>
                    <nuxtChild />
                <Categories categories-title="خرید بر اساس دسته‌بندی" />

                <div class="electronic-devices-banners-section">
                    <a class="electronic-devices-banner">
                        <img src="../static/electronic-devices-page-banners/1.jpg" />
                    </a>
                    <a class="electronic-devices-banner">
                        <img src="../static/electronic-devices-page-banners/2.jpg" />
                    </a>
                    <a class="electronic-devices-banner">
                        <img src="../static/electronic-devices-page-banners/3.jpg" />
                    </a>
                    <a class="electronic-devices-banner">
                        <img src="../static/electronic-devices-page-banners/4.jpg" />
                    </a>
                </div>

                <DigiSuggestions suggestion-title="دسته‌بندی‌های پیشنهادی"/>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            xo: {
                path1: require('@/static/electronic-devices-page-hero-slider/1.jpg'),
                path2: require('@/static/electronic-devices-page-hero-slider/2.jpg'),
                path3: require('@/static/electronic-devices-page-hero-slider/3.jpg'),
                path4: require('@/static/electronic-devices-page-hero-slider/4.jpg'),
                path5: require('@/static/electronic-devices-page-hero-slider/5.jpg'),
            }
        }
    },
    components: {
        HeroSlider: () => import ("@/components/homeComponents/heroSlider.vue"),
        HotOffers:() => import ("@/components/homeComponents/hotOffers.vue"),
        Categories:() => import ("@/components/homeComponents/categories.vue"),
        DigiSuggestions: () => import ("@/components/homeComponents/digiSuggestions.vue"),
        
    },    
}
</script>

<style lang="scss">
    .hot-offers-section{
        background: linear-gradient(to top,#5c51bf,#6763d9);
    }
    .electronic-devices-wrapper{
        margin-top: 50px;
        padding: 0px 120px;
    }

    .hero-section{
        border-radius: 16px;
    }

    .hot-offers-section{
        
        margin: 20px 0px 25px;
    }

    .electronic-devices-banners-section{
        display: grid;
        grid-template-columns: repeat(2,minmax(0,1fr));
        gap: 16px;
        margin: 60px 0px 20px;
    }

    .electronic-devices-banner{
        flex-basis: 49%;

        img{
            border-radius: 16px;
            width: 100%;
            height: 100%;
        }
    }



    @media only screen and (max-width: 992px){
        .electronic-devices-wrapper {
            margin-top: 0px;
            padding: 0px 0px;
        }
    }
</style>