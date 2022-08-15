<template>
    <div>
        <div class="category">
            <div class="category-header">
                <h3>{{ categoriesTitle }}</h3>
            </div>
            <div class="category-items-wrapper">
                <div class="category-item" v-for="category in categories" :key="category.id">
                    <img :src="`http://localhost:1337${category.attributes.picture.data[0].attributes.url}`" class="flip-vertical-right"/>
                    <p>{{ category.attributes.title }}</p>
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
        title:"",
        error: null
        }
    },
    computed: {
        categories() {
            return this.$store.state.service.categories;
        }
    },
    props: {
        categoriesTitle: String
    }
}
</script>

<style lang="scss">
    .category{
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    }

    .category-header{
        text-align: center;
        padding: 10px 0px;

        h3{
            font-size:1.5em;
            font-weight: 500;
            cursor: default;
        }
    }

    .category-items-wrapper{
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        column-gap: 60px;
    }

    .category-item{
        width: 13%;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        text-align: center;
        img{
            width: 100%;

        }
    }
    .category-item:hover{
        .flip-vertical-right {
            -webkit-animation: flip-vertical-right 0.4s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
            animation: flip-vertical-right 0.4s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
        }
        p{
            transform: scale(1.1);
        }
    }

    @-webkit-keyframes flip-vertical-right {
        0% {
            -webkit-transform: rotateY(0);
                    transform: rotateY(0);
        }
        100% {
            -webkit-transform: rotateY(180deg);
                    transform: rotateY(180deg);
        }
    }
    @keyframes flip-vertical-right {
        0% {
            -webkit-transform: rotateY(0);
                    transform: rotateY(0);
        }
        100% {
            -webkit-transform: rotateY(180deg);
                    transform: rotateY(180deg);
        }
    }


    @media only screen and (max-width: 992px){
        .category-item {
            flex-basis: 21%;
        }
        .category-item img {
            width: 60%;
        }
    }

    @media only screen and (max-width: 768px){
        .category-item{
            p{
                font-size: 0.9em;
            }

            img{
                width: 100%;
            }
        } 
        
    }

    @media only screen and (max-width: 576px){
        .category-item img {
            width: 100%;
        }
    }

    @media only screen and (max-width: 360px){
        .category-items-wrapper{
            grid-column-gap: 0px;
            -moz-column-gap: 0px;
            column-gap: 0px;
        }

        .category-item {
            flex-basis: 32%;
            
            font-size: 0.9em;
        }

        .category-item img {
            width: 80%;
        }
    }
</style>