<template>
    <div class="digital-category-section-wrapper">
        <div class="digital-category-container">
            <div class="digital-category-part">
                <div class="digital-category-header">    
                    <h4>ساعت هوشمند</h4>
                    <p>بر اساس بازدیدهای شما</p>
                </div> 
                <div class="digital-category-items">
                    <a>
                        <img src="../../static/digital-categories/1.jpg"/>
                    </a>
                    <a>
                        <img src="../../static/digital-categories/2.jpg"/>
                    </a>
                    <a>
                        <img src="../../static/digital-categories/3.jpg"/>
                    </a>
                    <a>
                        <img src="../../static/digital-categories/4.jpg"/>
                    </a>
                </div>
                <div class="digital-category-more">
                    <a>مشاهده</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
                        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
                    </svg>    
                </div>
            </div>

            <div class="digital-category-part">
                <div class="digital-category-header">    
                    <h4>ساعت هوشمند</h4>
                    <p>بر اساس بازدیدهای شما</p>
                </div> 
                <div class="digital-category-items">
                    <a>
                        <img src="../../static/digital-categories/5.jpg"/>
                    </a>
                    <a>
                        <img src="../../static/digital-categories/6.jpg"/>
                    </a>
                    <a>
                        <img src="../../static/digital-categories/7.jpg"/>
                    </a>
                    <a>
                        <img src="../../static/digital-categories/8.jpg"/>
                    </a>
                </div>
                <div class="digital-category-more">
                    <a>مشاهده</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
                        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
                    </svg>    
                </div>
            </div>

            <div class="digital-category-part">
                <div class="digital-category-header">    
                    <h4>ساعت هوشمند</h4>
                    <p>بر اساس بازدیدهای شما</p>
                </div> 
                <div class="digital-category-items">
                    <a>
                        <img src="../../static/digital-categories/9.jpg"/>
                    </a>
                    <a>
                        <img src="../../static/digital-categories/10.jpg"/>
                    </a>
                    <a>
                        <img src="../../static/digital-categories/11.jpg"/>
                    </a>
                    <a>
                        <img src="../../static/digital-categories/12.jpg"/>
                    </a>
                </div>
                <div class="digital-category-more">
                    <a>مشاهده</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
                        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
                    </svg>    
                </div>
            </div>

            <div class="digital-category-part">
                <div class="digital-category-header">    
                    <h4>ساعت هوشمند</h4>
                    <p>بر اساس بازدیدهای شما</p>
                </div>    
                <div class="digital-category-items">
                    <a>
                        <img src="../../static/digital-categories/13.jpg"/>
                    </a>
                    <a>
                        <img src="../../static/digital-categories/14.jpg"/>
                    </a>
                    <a>
                        <img src="../../static/digital-categories/15.jpg"/>
                    </a>
                    <a>
                        <img src="../../static/digital-categories/16.jpg"/>
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
export default {

}
</script>

<style lang="scss">
    .digital-category-section-wrapper{
        width: 100%;
        margin: 50px 0px 25px;
    }

    .digital-category-container{
        width: 100%;
        background-color: #f0f0f1;
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
        }
        p{
            padding: 0px 25px;
            padding-bottom: 5px;
            background-color: #fff
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

        svg{
            fill: #19bfd3;
            margin-right: 5px
        }
    }

</style>