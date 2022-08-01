<template>
    <div>
        <div class="category">
            <div class="category-header">
                <h3>{{categoriesTitle}}</h3>
            </div>
            <div class="category-items-wrapper">
                <div class="category-item">
                    <img src="../../static/Categories/1.png" class="flip-vertical-right"/>
                    <p>کالای دیجیتال</p>
                </div>
                <div class="category-item">
                    <img src="../../static/Categories/2.png" class="flip-vertical-right"/>
                    <p>خودرو، ابزار و تجهیزات صنعتی</p>
                </div>
                <div class="category-item">
                    <img src="../../static/Categories/3.png" class="flip-vertical-right"/>
                    <p>مد و پوشاک</p>
                </div>
                <div class="category-item">
                    <img src="../../static/Categories/4.png" class="flip-vertical-right"/>
                    <p>اسباب بازی، کودک و نوزاد</p>
                </div>
                <div class="category-item">
                    <img src="../../static/Categories/5.png" class="flip-vertical-right"/>
                    <p>کالاهای سوپرمارکتی</p>
                </div>
                <div class="category-item">
                    <img src="../../static/Categories/6.png" class="flip-vertical-right"/>
                    <p>زیبایی و سلامتی</p>
                </div>
                <div class="category-item">
                    <img src="../../static/Categories/7.png" class="flip-vertical-right"/>
                    <p>خانه و آشپزخانه</p>
                </div>
                <div class="category-item">
                    <img src="../../static/Categories/8.png" class="flip-vertical-right"/>
                    <p>کتاب، لوازم تحریر و هنر</p>
                </div>
                <div class="category-item">
                    <img src="../../static/Categories/9.png" class="flip-vertical-right"/>
                    <p>ورزش و سفر</p>
                </div>
                <div class="category-item">
                    <img src="../../static/Categories/10.png" class="flip-vertical-right"/>
                    <p>محصولات بومی و محلی</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
            font-size: 0.9em;
            transition: 0.4s;
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
</style>