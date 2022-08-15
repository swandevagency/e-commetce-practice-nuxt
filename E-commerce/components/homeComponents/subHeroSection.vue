<template>
  <div>
      <section class="sub-hero-section">
            <div class="sub-hero-items">
                <img src="../../static/sub-hero/1.png"/>
                <p>دیجی‌کالا جت</p>
            </div>
            <div class="sub-hero-items">
                <img src="../../static/sub-hero/2.png"/>
                <p>تخفیف‌های ساعت</p>
            </div>
            <div class="sub-hero-items">
                <img src="../../static/sub-hero/3.png"/>
                <p>دیجی پی</p>
            </div>
            <div class="sub-hero-items">
                <img src="../../static/sub-hero/4.png"/>
                <p>دیجی‌کالا مهر</p>
            </div>
            <div class="sub-hero-items">
                <img src="../../static/sub-hero/5.png"/>
                <p>ماموریت‌ها</p>
            </div>
            <div class="sub-hero-items">
                <img src="../../static/sub-hero/6.png"/>
                <p>دیجی پلاس</p>
            </div>
            <div class="sub-hero-items">
                <img src="../../static/sub-hero/7.png"/>
                <p>دیجی کلاب</p>
            </div>
            <div class="sub-hero-items">
                <div class="sub-hero-more">
                    <svg width="28" height="28" fill="#a1a3a8" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m16.5 11.995c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25z"/>
                    </svg>
                </div>
                <p>بیشتر</p>
            </div>
        </section>
  </div>
</template>

<script>
export default {
    
}
</script>


<style lang="scss">
    .sub-hero-section{
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        padding: 31px 0px;
    }

    .sub-hero-items{
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        img{
            width: 52px;
            height: 52px;

        }
        img:hover{
            filter: drop-shadow(3px 3px 5px #00000040);
        }

        &:hover{
            transform: scale(1.1);

        }
    }

    .sub-hero-more{
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background-color:#f0f0f1;
        display: flex;
        align-items: center;
        justify-content: center;
    }




    @media only screen and (max-width: 992px){
        
        .sub-hero-section{
            flex-wrap: wrap;
            row-gap: 20px;
        }

        .sub-hero-items{
            flex-basis: 25%;
        }

    }
</style>