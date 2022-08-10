<template>
    <div>
        <div class="hero-section-wrapper"><!-- @mouseenter="heroButtonOn()" @mouseleave="heroButtonOff()" -->
            <div class="hero-section" id="hero-slider" v-if="paths">
                <div class="hero-image" v-for="path in paths" :key="path.id">
                    <a>
                        <img :src="path.path">
                    </a>
                </div>
            </div>
            <div @click="sliderOnScrollLeft">
                <LeftControlHero /> <!-- {{count}} -->
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
        },
        methods: {
            /* heroButtonOn(){
                document.querySelector('.left-control-hero').style.display = 'initial';
                document.querySelector('.right-control-hero').style.display = 'initial';
            },
            heroButtonOff(){
                document.querySelector('.left-control-hero').style.display = 'none';
                document.querySelector('.right-control-hero').style.display = 'none';
            }, */
            sliderOnScrollLeft() {
                                // gsap.to('.hero-image', {x: '+=100%', ease: 'none', duration: 2, delay: 2})
                // const sliderLeftButton = document.querySelector('.left-control-hero');
                // console.log(this.paths);
                // const sliderImg = this.paths;
                // const lastIndex = sliderImg.slice(-1);
                // const lastKey = Object.keys(sliderImg).pop();
                // console.log(lastKey)

                // let heroImages = []
                // const sliderImg = this.paths;
                // heroImages.push(sliderImg);
                // console.log(heroImages);
                // /* const lastItem = heroImages.slice(-1); */
                // console.log(heroImages.slice(-1));
                // let tl = gsap.timeline();
                // tl.to(".hero-image", {x: '+=100%' , duration:0.5, delay:0});
                // if(heroImages.length !== (-1)){
                //     tl.restart(true)
                //     console.log('finished')  
                // }

                // let tl =  gsap.timeline();
                // tl.set(".hero-image", {
                //     x: (i) => i * 1
                // });


                // tl.to(".hero-image", {
                //     duration: 5,
                //     ease: "none",
                //     x: "+=100%",
                //     modifiers: {
                //         x: gsap.utils.unitize(x => parseFloat(x) % 1000)
                //     },
                //     repeat: -1
                // });

                /* const heroImages = document.querySelector(".hero-image")
                for(var i = 0; i < heroImages; i++){
                    gsap.set('.hero-image', {
                        x:function(i) {
                            return i + 1528;
                        }
                    });
                    
                } */

                // gsap.to('.hero-image a', {
                //     x: '+=1528',
                //     duration: 0.5,
                // });


                /* if (!heroImages.style.transform >= "translateX(9000)") {
                    console.log('615');
                    tl.fromTo(".hero-image", {x: '9168', ease: 'none'},{x: '0', ease: 'none'})
                } */

                // x: x => gsap.utils.snap(1528, Math.round(x / 1528) * 1528)
                
                // const heroImages = document.querySelector(".hero-image img")

                this.count++;

                let tl = gsap.timeline({});
                if(this.count > 6){
                    tl.to(".hero-image", {x: 0 , duration:0.5, delay:0}); 
                    this.count = 0;   
                } else {
                    tl.to(".hero-image", {x: '+=1528' , duration:0.5, delay:0});    
                }


                // tl = new TimelineMax();
                // var distancePoint = this.slides.x;
                // var distance = Math.abs(Math.round(distancePoint / 300));
                // if ((distance > 0) && (distance <= 2)) {
                //     tl.to(this.slides, 1, {
                //         x: -(distance * 300) + 300,
                //         ease: Power2.easeOut
                //     })
                // }
                


                // let slider = [sliderImg];
                // let move = +1528;

                // gsap.to(slider, { x: i => move + i * move, duration: 1});


                // for(let i = 0; i < sliderImg; i++) {
                //     gsap.to( {x:'i+', duration:0.5, delay:0});
                    
                // }


                // let firstIndex = sliderImg.slice(0, 1);
                // let lastIndex = sliderImg.slice(-1);

                // if(lastIndex){
                //     sliderLeftButton.disabled = true    
                // }
                                                      

                
                       
                
                // let slider = document.querySelector('.slider')
                // let slides = slider.querySelectorAll('div:not(:first-child)')
                // let firstSlide = slider.querySelector('div:first-child');

                // tl = new TimelineMax({
                //     repeat: -1
                // })
                // .staggerFrom(slides, 2.5, {
                //     xPercent: -100,
                //     autoAlpha: 0
                // }, 8, 2)
                // .fromTo(firstSlide, 2.5, {
                //     xPercent: -100,
                //     autoAlpha: 0
                // }, 
                // {
                //     xPercent: 0,
                //     autoAlpha: 1,
                //     zIndex: 20,
                //     immediateRender: false
                // }, '+=2');



            },
              
            sliderOnScrollRight() {
                this.count--;

                let tl = gsap.timeline({});
                if(this.count < 0){
                    tl.to(".hero-image", {x: 9168 , duration:0.5, delay:0}); 
                    this.count = 6;   
                } else {
                    tl.to(".hero-image", {x: '-=1528' , duration:0.5, delay:0});    
                }
                
                    
                
                   
                
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