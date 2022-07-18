<template>
    <div>
        <div class="category">
            <div class="category-header">
                <h3>دسته‌بندی‌های دیجی‌کالا</h3>
            </div>
            <div class="category-items-wrapper">
                <div class="category-item">
                    <img src="../../static/Categories/1.png" />
                    <p>کالای دیجیتال</p>
                </div>
                <div class="category-item">
                    <img src="../../static/Categories/2.png" />
                    <p>خودرو، ابزار و تجهیزات صنعتی</p>
                </div>
                <div class="category-item">
                    <img src="../../static/Categories/3.png" />
                    <p>مد و پوشاک</p>
                </div>
                <div class="category-item">
                    <img src="../../static/Categories/4.png" />
                    <p>اسباب بازی، کودک و نوزاد</p>
                </div>
                <div class="category-item">
                    <img src="../../static/Categories/5.png" />
                    <p>کالاهای سوپرمارکتی</p>
                </div>
                <div class="category-item">
                    <img src="../../static/Categories/6.png" />
                    <p>زیبایی و سلامتی</p>
                </div>
                <div class="category-item">
                    <img src="../../static/Categories/7.png" />
                    <p>خانه و آشپزخانه</p>
                </div>
                <div class="category-item">
                    <img src="../../static/Categories/8.png" />
                    <p>کتاب، لوازم تحریر و هنر</p>
                </div>
                <div class="category-item">
                    <img src="../../static/Categories/9.png" />
                    <p>ورزش و سفر</p>
                </div>
                <div class="category-item">
                    <img src="../../static/Categories/10.png" />
                    <p>محصولات بومی و محلی</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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
        img{
            width: 100%;
        }
    }


</style>