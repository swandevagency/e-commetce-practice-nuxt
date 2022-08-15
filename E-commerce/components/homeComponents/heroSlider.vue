<template>
    <div>
        <div class="hero-section-wrapper"  @mouseenter="buttonActive()" @mouseleave="buttonDisable()">
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
            <div class="slider-dots" v-on="sliderIndicator()">
                <span id="1"></span>
                <span id="2"></span>
                <span id="3"></span>
                <span id="4"></span>
                <span id="5"></span>
                <span id="6"></span>
                <span id="7"></span>
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
            setInterval(() => this.sliderOnScrollLeft(), 3000)             
        },
        methods: {
            sliderIndicator() {
            // slider indicators
                const dot1 = document.getElementById('1') 
                const dot2 = document.getElementById('2') 
                const dot3 = document.getElementById('3') 
                const dot4 = document.getElementById('4') 
                const dot5 = document.getElementById('5') 
                const dot6 = document.getElementById('6') 
                const dot7 = document.getElementById('7') 
                
                if(this.count == 0){
                    dot1.style.backgroundColor = '#fff';
                    dot1.style.transform = 'scaleX(3)';
                    dot1.style.borderRadius = '1px';
                } else {
                    dot1.style.backgroundColor = 'rgb(132, 131, 131)';
                    dot1.style.transform = 'scaleX(1)';
                    dot1.style.borderRadius = '50%';
                }

                if(this.count == 1){
                    dot2.style.backgroundColor = '#fff';
                    dot2.style.transform = 'scaleX(3)';
                    dot2.style.borderRadius = '1px';
                } else {
                    dot2.style.backgroundColor = 'rgb(132, 131, 131)';
                    dot2.style.transform = 'scaleX(1)';
                    dot2.style.borderRadius = '50%';
                }

                if(this.count == 2){
                    dot3.style.backgroundColor = '#fff';
                    dot3.style.transform = 'scaleX(3)';
                    dot3.style.borderRadius = '1px';

                } else {
                    dot3.style.backgroundColor = 'rgb(132, 131, 131)';
                    dot3.style.transform = 'scaleX(1)';
                    dot3.style.borderRadius = '50%';
                }
                
                if(this.count == 3){
                    dot4.style.backgroundColor = '#fff';
                    dot4.style.transform = 'scaleX(3)';
                    dot4.style.borderRadius = '1px';

                } else {
                    dot4.style.backgroundColor = 'rgb(132, 131, 131)';
                    dot4.style.transform = 'scaleX(1)';
                    dot4.style.borderRadius = '50%';
                }
                
                if(this.count == 4){
                    dot5.style.backgroundColor = '#fff';
                    dot5.style.transform = 'scaleX(3)';
                    dot5.style.borderRadius = '1px';

                } else {
                    dot5.style.backgroundColor = 'rgb(132, 131, 131)';
                    dot5.style.transform = 'scaleX(1)';
                    dot5.style.borderRadius = '50%';
                }
                
                if(this.count == 5){
                    dot6.style.backgroundColor = '#fff';
                    dot6.style.transform = 'scaleX(3)';
                    dot6.style.borderRadius = '1px';

                } else {
                    dot6.style.backgroundColor = 'rgb(132, 131, 131)';
                    dot6.style.transform = 'scaleX(1)';
                    dot6.style.borderRadius = '50%';
                }
                
                if(this.count == 6){
                    dot7.style.backgroundColor = '#fff';
                    dot7.style.transform = 'scaleX(3)';
                    dot7.style.borderRadius = '1px';

                } else {
                    dot7.style.backgroundColor = 'rgb(132, 131, 131)';
                    dot7.style.transform = 'scaleX(1)';
                    dot7.style.borderRadius = '50%';
                }
            },
            sliderOnScrollLeft() {
                this.count++;
                let tl = gsap.timeline({});
                if(this.count > 6){
                    tl.to(".hero-image", {x: 0 , duration:1}); 
                    this.count = 0;   
                } else {
                    tl.to(".hero-image", {x: '+=100%' , duration:1});    
                }
            },  
            sliderOnScrollRight() {
                this.count--;
                let tl = gsap.timeline({});
                if(this.count < 0){
                    tl.to(".hero-image", {x: '+=600%' , duration:1}); // in this line, on the x section put (the number of slide * 100)
                    this.count = 6;   
                } else {
                    tl.to(".hero-image", {x: '-=100%' , duration:1});    
                }        
            },
            buttonActive(){
                document.querySelector('.right-control-hero').style.display = 'initial',
                document.querySelector('.left-control-hero').style.display = 'initial'
            },
            buttonDisable(){
                document.querySelector('.right-control-hero').style.display = 'none',
                document.querySelector('.left-control-hero').style.display = 'none'
            }
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

    .slider-dots{
        position: absolute;
        right: 3px;
        bottom: 15px;
        span{
            background-color: rgb(132, 131, 131);
            width: 5px;
            height: 5px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 10px;
        }
    }

    @media only screen and (max-width: 992px){
        .hero-image {
            height: 268px;
        }

        .hero-section{
            border-radius: 0px;
        }

        .slider-dots{
            display: none;
        }
    }
</style>