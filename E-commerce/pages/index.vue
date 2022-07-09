<script>
  export default {
    name: 'IndexPage',
    components: {
      HeaderPage: () => import("@/components/sections/headerPage.vue"),
      MainPage: () => import("@/components/sections/mainPage.vue"),
    },  
  }
</script>

<template>
  <div>
    <HeaderPage />

    <MainPage/>
  </div>
</template>
