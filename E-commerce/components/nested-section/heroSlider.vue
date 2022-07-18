<template>
    <div class="hero-section-wrapper">
        
        <div class="hero-section" id="hero-slider">
  
            <div class="hero-image" v-on="sliderInterval()">
                <a>
                    <img src="../../static/Slider-Images/1.jpg" />
                </a>
            </div>
            <div class="hero-image">
                <a>
                    <img src="../../static/Slider-Images/2.jpg" />
                </a>
            </div>
            <div class="hero-image">
                <a>
                    <img src="../../static/Slider-Images/3.jpg" />
                </a>
            </div>
            <div class="hero-image" id="slider-image-4">
                <a>
                    <img src="../../static/Slider-Images/4.jpg" />
                </a>
            </div>
            <div class="hero-image">
                <a>
                    <img src="../../static/Slider-Images/5.jpg" />
                </a>
            </div>
            <div class="hero-image">
                <a>
                    <img src="../../static/Slider-Images/6.jpg" />
                </a>
            </div>
            <div class="hero-image">
                <a>
                    <img src="../../static/Slider-Images/7.jpg" />
                </a>
            </div>
        </div>
        <div @click="sliderOnScrollLeft">
            <LeftControlHero /> 
        </div>
        <div @click="sliderOnScrollRight">
            <RightControlHero /> 
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                heroSlider:[],
            }
        },
        components:{
            LeftControlHero: () => import('../buttons/leftControlCarousel.vue'),
            RightControlHero: () => import('../buttons/rightControlCarousel.vue'),
        },

        methods: {
            sliderOnScrollLeft() {
                gsap.to('.hero-image', {x: '+= 100%', ease: 'none' })

            },
            sliderOnScrollRight() {
                gsap.to('.hero-image', {x: '-= 100%', ease: 'none'})
            },
            sliderInterval(){
                // setInterval(this.sliderOnScrollLeft, 2000); 
            },
        },
    }
</script>


<style lang="scss">
    .hero-section-wrapper {

        position: relative;
    }

    .hero-section{
        width: 100%;
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        overflow-y: hidden;

    }

    .hero-section::-webkit-scrollbar{
        display:none;
    }

    .hero-image{
        width: 100%;
        height: 400px;

        img{
            height: 100%;
        }
    }

    .slider-button{
        display: none;
    }

    // .left-control-carousel{
    //     background: #000;
    // }
</style>