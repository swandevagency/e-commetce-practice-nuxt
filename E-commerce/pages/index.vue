<script>
  export default {
    name: 'IndexPage',
    components: {
      HeaderPage: () => import("@/components/sections/headerPage.vue"),
      HeroSlider: () => import("@/components/sections/heroSlider.vue"),
      MainPage: () => import("@/components/sections/mainPage.vue"),
    },  
  }
</script>

<template>
  <div>
    <HeaderPage />
    <HeroSlider />
    <MainPage/>
  </div>
</template>
