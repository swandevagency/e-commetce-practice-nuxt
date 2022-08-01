<template>
    <div class="category-banner-wrapper">
        <div class="first-category-banner-items">
            <img src="../../static/category-banner/1.gif"/>
        </div>
        <div class="first-category-banner-items">
            <img src="../../static/category-banner/2.jpg"/>
        </div>
        <div class="first-category-banner-items">
            <img src="../../static/category-banner/3.jpg"/>
        </div>
        <div class="first-category-banner-items">
            <img src="../../static/category-banner/4.jpg"/>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
    .category-banner-wrapper{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        width: 100%;
        margin-top: 25px;
        overflow: hidden;
    }

    .first-category-banner-items{
        width:24%;
        margin-top: 0px;
        cursor: pointer;
        img{
            width:100%;
            border-radius: 16px;
            object-fit: cover;
        }

        & img:hover{
            -ms-transform: skewX(-5deg); /* IE 9 */
            transform: skewX(-5deg);
        }
    }

    @media only screen and (max-width: 992px){
        .first-category-banner-items{
            flex-basis: 49%;
        }

        .category-banner-wrapper{
                flex-flow: wrap;
        }
    }    
</style>