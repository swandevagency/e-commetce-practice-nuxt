<template>
    <div class="digital-category-section-wrapper">
        <div class="digital-category-container">
            <div class="digital-category-part" v-for="(digital, index) in digitals" :key="index">
                <div class="digital-category-header">    
                    <h4>{{ digital.attributes.title }}</h4>
                    <p>{{ digital.attributes.subtitle }}</p>
                </div> 
                <div class="digital-category-items">
                    <a>
                        <img :src="`http://localhost:1337${digital.attributes.image.data[0].attributes.url}`"/>
                    </a>
                    <a>
                        <img :src="`http://localhost:1337${digital.attributes.image.data[1].attributes.url}`"/>
                    </a>
                    <a>
                        <img :src="`http://localhost:1337${digital.attributes.image.data[2].attributes.url}`"/>
                    </a>
                    <a>
                        <img :src="`http://localhost:1337${digital.attributes.image.data[3].attributes.url}`"/>
                    </a>
                </div>
                <div class="digital-category-more">
                    <a>مشاهده</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
                        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
                    </svg>    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
        digitals: [],
        title:"",
        subtitle:"",
        error: null
        }
    },
    async mounted () {
        try {
            const response = await axios.get('http://localhost:1337/api/digitals?populate=*')
            console.log(response.data)
            this.digitals = response.data.data;
        } catch (error) {
            this.error = error;
        }
    },

}
</script>

<style lang="scss">
@import "@/assets/scss/color.scss";
    .digital-category-section-wrapper{
        width: 100%;
        margin: 50px 0px 25px;
    }

    .digital-category-container{
        width: 100%;
        background-color: $border-color;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 2px;
        border-radius: 16px;
    }

    .digital-category-part{
        flex-basis: calc(24% + 11px);
    }

    .digital-category-header{
        padding: 0px 0px;
        h4{
            padding: 0px 25px;
            padding-top:5px;
            background-color: #fff;
            font-size: 1.1em;
            font-weight: 400;
            cursor: default;
        }
        p{
            padding: 0px 25px;
            padding-bottom: 5px;
            cursor: default;
            background-color: #fff;
        }
    }

    .digital-category-items{
        display: grid; 
        grid-auto-rows: 1fr; 
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 1fr; 
        gap: 11px 2px;
        margin-top: -1px;
        a{
            margin-bottom: -9px;
            padding: 15px;
            background-color: #fff;
        }
        img{
            width: 100%;
            margin-bottom: 0px;
            cursor: pointer;
        }

    }

    .digital-category-more{
        background-color: #fff;
        text-align: center;
        color: #19bfd3;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0px 20px;
        cursor: pointer;
        svg{
            fill: #19bfd3;
            margin-right: 5px
        }
    }





    @media only screen and (max-width: 992px){ 
        .digital-category-container{
            flex-flow: wrap;
        }    

        .digital-category-part{
            flex-basis: 100%;
        }

        .digital-category-items{
            img{
                padding: 60px;
            }    
        }

        .digital-category-container{
            padding: 0px;
        }
    }

    @media only screen and (max-width: 768px){
        .digital-category-items img{
            padding: 0;
        }
    }


    @media only screen and (max-width: 576px){
        .digital-category-items img {
            padding: 0px;
        }
    }

    @media only screen and (max-width: 360px){
        .digital-category-items img {
            padding: 0px;
        }

        .service-container-goods-picture {
            flex-basis: 50%;
        }

        .service-container-goods-picture {
            flex-basis: 50%;
            font-size: 0.8em;
        }

        .map {
            flex-basis: 100%;
            margin-top: 25px;
        }
    }

</style>