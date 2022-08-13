<template>
    <div>
        <HeroSlider 
            :paths="yo"
        />
    </div>
</template>

<script>
    export default {
        data(){
            return{
                yo:[
                    {path: require('@/static/Slider-Images/1.jpg')},
                    {path: require('@/static/Slider-Images/2.jpg')},
                    {path: require('@/static/Slider-Images/3.jpg')},
                    {path: require('@/static/Slider-Images/4.jpg')},
                    {path: require('@/static/Slider-Images/5.jpg')},
                    {path: require('@/static/Slider-Images/6.jpg')},
                    {path: require('@/static/Slider-Images/7.jpg')}, 
                ],
            }
        },
        components: {
        HeroSlider: () => import ("../components/homeComponents/heroSlider.vue"),
        }
    }
</script>

<style>

</style>