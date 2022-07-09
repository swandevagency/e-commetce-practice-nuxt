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
                <div class="sub-hero-more"></div>
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
        justify-content: space-evenly;
        padding: 40px 0px;
    }

    .sub-hero-items{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 52px;
            height: 52px;
        }
    }

    .sub-hero-more{
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background-color:#f0f0f1
    }
</style>