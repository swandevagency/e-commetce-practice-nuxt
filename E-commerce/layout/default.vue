<template>
    <div>
        <TheHeader />
    
        <Nuxt />
    
        <TheFooter />
    </div>
</template>
<script>
    export default{
        components:{
            TheHeader: () => import("@/components/reusable/theHeader.vue"),
            TheFooter: () => import("@/components/reusable/theFooter.vue"),
        }       
    }
</script>
