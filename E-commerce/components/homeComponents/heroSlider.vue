<template>
    <div class="hero-section-wrapper" @mouseenter="heroButtonOn" @mouseleave="heroButtonOff">
        
        <div class="hero-section" id="hero-slider" v-if="paths">
            <div class="hero-image" v-for="path in paths" :key="path.id">
                <a>
                    <img :src="path.path">
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
                  
            }
        },
        props: ['paths'],
        components:{
            LeftControlHero: () => import('../buttons/leftSliderButton.vue'),
            RightControlHero: () => import('../buttons/rightSliderButton.vue'),
        },

        methods: {
            heroButtonOn(){
                document.querySelector('.left-control-hero').style.display = 'initial';
                document.querySelector('.right-control-hero').style.display = 'initial';
            },
            heroButtonOff(){
                document.querySelector('.left-control-hero').style.display = 'none';
                document.querySelector('.right-control-hero').style.display = 'none';
            },
            sliderOnScrollLeft() {
                // gsap.to('.hero-image', {x: '+=100%', ease: 'none', duration: 2, delay: 2})
                let tl = gsap.timeline({repeat: 2, repeatDelay: 1});
                    tl.to(".hero1", {x: '100%', duration:2, delay:1});                    
                    tl.to(".hero2", {x: '200%', duration:2, delay:1});                    
                    tl.to(".hero3", {x: '300%', duration:2, delay:1});                    
                    tl.to(".hero4", {x: '400%', duration:2, delay:1});                    
                    tl.to(".hero5", {x: '500%', duration:2, delay:1});                    
                    tl.to(".hero6", {x: '600%', duration:2, delay:1});                    
                    tl.to(".hero7", {x: '700%', duration:2, delay:1});
                                      
                    
            },  
            sliderOnScrollRight() {
                let tl = gsap.timeline({});
                    tl.to(".hero-image", {x: '0', duration:1});
                
            },

            /* sliderInterval(){
                setInterval(this.sliderOnScrollLeft); 
            }, */

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



    @media only screen and (max-width: 992px){
        .hero-image {
            height: 268px;
        }

        .hero-section{
            border-radius: 0px;
        }
    }
</style>