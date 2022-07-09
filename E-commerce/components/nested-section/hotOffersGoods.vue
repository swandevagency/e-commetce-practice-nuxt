<script>
export default {

}
</script>

<template>
    <div class="hot-offer-goods">
        <div class="hot-offer-items">
            <img src="../../static/Goods/1.jpg" />
            <div class="hot-offer-price">
                <p class="hot-offer-price-number">
                    <span>999,000</span>
                    <svg style="width: 16px; height: 16px; fill: var(--color-icon-high-emphasis);">
                        <use xlink:href="#toman"></use>
                    </svg>
                </p>
                <p class="hot-offer-price-discount">
                    20%
                </p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped> 
    .hot-offer-goods{
        background-color: #fff;
        display: flex;
        flex-flow: row nowrap;
        overflow-x: scroll;
        overflow-y: none;
    }

    .hot-offer-items{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>