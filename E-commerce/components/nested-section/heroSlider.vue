<template>
    <div class="hero-section-wrapper" @mouseenter="heroButtonOn" @mouseleave="heroButtonOff">
        
        <div class="hero-section" id="hero-slider">
  
            <div class="hero-image" v-on="sliderInterval()">
                <a>
                    <img :src="(`${path1}`)" />
                </a>
            </div>
            <div class="hero-image">
                <a>
                    <img :src="(`${path2}`)" />
                </a>
            </div>
            <div class="hero-image">
                <a>
                    <img :src="(`${path3}`)" />
                </a>
            </div>
            <div class="hero-image">
                <a>
                    <img :src="(`${path4}`)" />
                </a>
            </div>
            <div class="hero-image">
                <a>
                    <img :src="(`${path5}`)" />
                </a>
            </div>
            <div class="hero-image">
                <a>
                    <img :src="(`${path6}`)" />
                </a>
            </div>
            <div class="hero-image">
                <a>
                    <img :src="(`${path7}`)" />
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
        props: [
            'path1',
            'path2',
            'path3',
            'path4',
            'path5',
            'path6',
            'path7',
        ],
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
                let tl = gsap.timeline({delay: 1});
                    tl.to(".hero-image", {x: '+100%', duration:1});                    
                    
            },  
            sliderOnScrollRight() {
                let tl = gsap.timeline({delay: 0.5});
                    tl.to(".hero-image", {x: '0', duration:1});
                
            },

            sliderInterval(){
                setInterval(this.sliderOnScrollLeft); 
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