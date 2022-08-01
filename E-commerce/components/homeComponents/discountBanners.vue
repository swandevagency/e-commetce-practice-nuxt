<template>
    <div>
        <!-- <div class="discount-banner-wrapper topMargin80">
            <transition appear @before-enter="beforeEnterRight" @enter="enterRight">
                <div class="discount-banner-items">
                    <img :src="(`${bannerPath1}`)"/>
                </div>
            </transition>    
            <transition appear @before-enter="beforeEnterLeft" @enter="enterLeft"> 
                <div class="discount-banner-items">
                    <img :src="(`${bannerPath2}`)" />
                </div>
            </transition>
        </div> -->
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        props: [
            'bannerPath1',
            'bannerPath2',
            'bannerPath3',
            'bannerPath4',
        ],
        /* methods: {
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
        } */
    }
</script>

<style lang="scss">
    .topMargin80{
        margin-top: 80px;
    }

    .discount-banner-wrapper{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        width: 100%;
        margin-top: 25px;
    }

    .discount-banner-items{
        width:calc(49% + 4px);
        margin-top: 0px;
        img{
            width:100%;
            border-radius: 16px;
            object-fit: cover;
        }
    }

    @media only screen and (max-width: 992px){
        .discount-banner-wrapper{
            flex-wrap: wrap;
            row-gap: 10px;
        }
    }
</style>