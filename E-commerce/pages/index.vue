<template>
  <div>
    <HeaderPage />

    <MainPage />

    <FooterPage />
  </div>
</template>

<script>
  export default {
    name: 'IndexPage',
    components: {
      HeaderPage: () => import("@/components/sections/headerPage.vue"),
      MainPage: () => import("@/components/sections/mainPage.vue"),
      FooterPage: () => import("@/components/sections/footerPage.vue"),
    },  
  }
</script>
