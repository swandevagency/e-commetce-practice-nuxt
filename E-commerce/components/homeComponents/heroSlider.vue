<template>
    <div>
        <div class="hero-section-wrapper">
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
    </div>
</template>

<script>
    export default {
        data(){
            return{
              count: 0  
            }
        },
        props: ['paths'],
        components:{
            LeftControlHero: () => import('../buttons/leftSliderButton.vue'),
            RightControlHero: () => import('../buttons/rightSliderButton.vue'),
        },
        mounted() {
            this.sliderOnScrollLeft()
            setInterval(() => this.sliderOnScrollLeft(), 4000)
        },
        methods: {
            sliderOnScrollLeft() {
                this.count++;
                let tl = gsap.timeline({});
                if(this.count > 6){
                    tl.to(".hero-image", {x: 0 , duration:0.5, delay:1}); 
                    this.count = 0;   
                } else {
                    tl.to(".hero-image", {x: '+=100%' , duration:0.5, delay:1});    
                }
            },  
            sliderOnScrollRight() {
                this.count--;
                let tl = gsap.timeline({});
                if(this.count < 0){
                    tl.to(".hero-image", {x: '+=600%' , duration:0.5, delay:1}); // in this line, on the x section put (the number of slide * 100)
                    this.count = 6;   
                } else {
                    tl.to(".hero-image", {x: '-=100%' , duration:0.5, delay:1});    
                }        
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


    @media only screen and (max-width: 992px){
        .hero-image {
            height: 268px;
        }

        .hero-section{
            border-radius: 0px;
        }
    }
</style>