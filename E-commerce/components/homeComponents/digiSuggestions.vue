<template>
  <div>
        <div class="suggestions-section-wrapper">
            <div class="suggestion-header">
                <h3>{{suggestionTitle}}</h3>
            </div>
            <div class="suggestion-blocks-wrapper">
                <div class="suggestion-blocks">
                    <a class="suggestion-item sugg-border-bottom">
                        <div class="suggestion-item-background">
                            <img src="../../static/Categories/1.png" />
                        </div>
                        <p>گوشی موبایل</p>
                    </a>
                    <a  class="suggestion-item">
                        <div class="suggestion-item-background">
                            <img src="../../static/Categories/2.png" />
                        </div>
                        <p>ساعت هوشمند</p>
                    </a>
                </div>

                <div class="suggestion-blocks">
                    <a class="suggestion-item sugg-border-bottom">
                        <div class="suggestion-item-background">
                            <img src="../../static/Categories/3.png" />
                        </div>
                        <p>کنسول خانگی</p>
                    </a>
                    <a  class="suggestion-item">
                        <div class="suggestion-item-background">
                            <img src="../../static/Categories/4.png" />
                        </div>
                        <p>پاوربانک</p>
                    </a>
                </div>

                <div class="suggestion-blocks">
                    <a class="suggestion-item sugg-border-bottom">
                        <div class="suggestion-item-background">
                            <img src="../../static/Categories/5.png" />
                        </div>
                        <p>لپ تاپ</p>
                    </a>
                    <a  class="suggestion-item">
                        <div class="suggestion-item-background">
                            <img src="../../static/Categories/6.png" />
                        </div>
                        <p>مچ بند</p>
                    </a>
                </div>

                <div class="suggestion-blocks">
                    <a class="suggestion-item sugg-border-bottom">
                        <div class="suggestion-item-background">
                            <img src="../../static/Categories/7.png" />
                        </div>
                        <p>جوراب</p>
                    </a>
                    <a  class="suggestion-item">
                        <div class="suggestion-item-background">
                            <img src="../../static/Categories/8.png" />
                        </div>
                        <p>کولر آبی</p>
                    </a>
                </div>

                <div class="suggestion-blocks">
                    <a class="suggestion-item sugg-border-bottom">
                        <div class="suggestion-item-background">
                            <img src="../../static/Categories/9.png" />
                        </div>
                        <p>کولر گازی</p>
                    </a>
                    <a  class="suggestion-item">
                        <div class="suggestion-item-background">
                            <img src="../../static/Categories/1.png" />
                        </div>
                        <p>شارژر تبلت</p>
                    </a>
                </div>

                <div class="suggestion-blocks">
                    <a class="suggestion-item sugg-border-bottom">
                        <div class="suggestion-item-background">
                            <img src="../../static/Categories/2.png" />
                        </div>
                        <p>هدفون</p>
                    </a>
                    <a  class="suggestion-item">
                        <div class="suggestion-item-background">
                            <img src="../../static/Categories/3.png" />
                        </div>
                        <p>کنسول خانگی</p>
                    </a>
                </div>

                <div class="suggestion-blocks">
                    <a class="suggestion-item sugg-border-bottom">
                        <div class="suggestion-item-background">
                            <img src="../../static/Categories/4.png" />
                        </div>
                        <p>گوشی موبایل</p>
                    </a>
                    <a  class="suggestion-item">
                        <div class="suggestion-item-background">
                            <img src="../../static/Categories/5.png" />
                        </div>
                        <p>ساعت مچی</p>
                    </a>
                </div>
            </div>
            <div @click="SuggestionRightControl">
                <RightControl />
            </div>
            <div @click="SuggestionLeftControl">
                <LeftControl />
            </div>
        </div>
  </div>
</template>

<script>
    export default {
        components:{
            RightControl: () => import('../buttons/rightControlSuggestion.vue'),
            LeftControl: () => import('../buttons/leftControlSuggestion.vue'),
        },
        props: {
            suggestionTitle: String
        },
        methods:{
            SuggestionLeftControl(){
                document.querySelector('.right-control-suggestion').style.display = 'initial';
                document.querySelector('.left-control-suggestion').style.display = 'none';
                
                let tl = gsap.timeline({});
                    tl.to(".suggestion-blocks", {x: '+101px'});
            },
            SuggestionRightControl(){
                document.querySelector('.right-control-suggestion').style.display = 'none';
                document.querySelector('.left-control-suggestion').style.display = 'initial';
                
                let tl = gsap.timeline({});
                    tl.to(".suggestion-blocks", {x: '0px'});
            }
        }
    }
</script>


<style lang="scss">
@import "@/assets/scss/color.scss";
    .suggestions-section-wrapper{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px 0px;
        position: relative;
    }

    .suggestion-header{
        margin-bottom: 25px;
        h3{
            font-size:1.5em;
            font-weight: 500;
            cursor: default;
        }
    }

    .suggestion-blocks-wrapper{
        width: 100%;
        border-radius: 16px;
        border:1px solid $border-color;
        display: flex;
        flex-flow: row nowrap;
        overflow-x: scroll;
    }

    .suggestion-blocks-wrapper::-webkit-scrollbar{
        display:none;
    }

    .suggestion-blocks{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 16.6%;
        border:1px solid $border-color;
        padding: 0px 43px;
    }


    .suggestion-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px;
        cursor: pointer;

        p{
            font-size: 1.1em;
            font-display: 400;
        }
    }

    .sugg-border-bottom{
        border-bottom:1px solid $border-color;
    }

    .suggestion-item-background{
        width: 84px;
        height: 84px;
        border-radius: 50%;
        background-color: $border-color;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 60px;
            height: 60px;

        }
    }
    




    @media only screen and (max-width: 992px){
        .suggestion-blocks-wrapper{
            border: none;
            
            & >div:last-child{
                display: none;
            }

        }
        
    }
    @media only screen and (max-width: 768px){
        .suggestion-blocks{
            width: 26%;
        }
    }

    @media only screen and (max-width: 576px){
        .suggestion-blocks{
            width: 35%;
        }
    }

    @media only screen and (max-width: 360px){
        .suggestion-blocks{
            width: 54%;
        }
    }


</style>