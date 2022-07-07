<script>
  export default {
    name: 'IndexPage',
      components: {
        HeaderPage: () => import ('@/components/headerPage'), 
        HeroSlider:() => ('@/components/heroslider')
      },  
    }
</script>

<template>
  <div>
    <HeaderPage />
    <HeroSlider />
  </div>
</template>
