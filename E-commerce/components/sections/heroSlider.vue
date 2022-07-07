<script>

</script>
<template>
    <div>
        <div class="hero-section">
            <div class="hero-image">
                <a>
                    <img src="../../static/Slider-Images/1.jpg" />
                </a>
            </div>
            <div class="hero-image">
                <a>
                    <img src="../../static/Slider-Images/2.jpg" />
                </a>
            </div>
            <div class="hero-image">
                <a>
                    <img src="../../static/Slider-Images/3.jpg" />
                </a>
            </div>
            <div class="hero-image">
                <a>
                    <img src="../../static/Slider-Images/4.jpg" />
                </a>
            </div>
            <div class="hero-image">
                <a>
                    <img src="../../static/Slider-Images/5.jpg" />
                </a>
            </div>
            <div class="hero-image">
                <a>
                    <img src="../../static/Slider-Images/6.jpg" />
                </a>
            </div>
            <div class="hero-image">
                <a>
                    <img src="../../static/Slider-Images/7.jpg" />
                </a>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .hero-section{
        width: 100%;

        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        overflow-y: hidden;
        position: relative;
    }

    .hero-section::-webkit-scrollbar{
        display:none;
    }

    .hero-image{
        width: 100%;
        height: 400px;

        img{
            height: 100%;
        }
    }

</style>