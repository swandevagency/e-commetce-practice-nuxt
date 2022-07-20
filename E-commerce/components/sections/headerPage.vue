<template>
    <div>
        <div id="onScroll"></div>
        <div class="white-space"></div>
        <div class="header-section">
            <div class="header-banner">
                <img src="../../static/header-banner.jpg" />
            </div>
            <div class="upper-header-section">
                <div class="upper-header-section-right">
                    <img class="header-logo" src="../../static/logo.svg"/>
                    <div class="searchBar">
                        <searchIcon />
                        <input class="header-searchbar-input" placeholder="جستجو" />
                    </div>
                </div>
                <div class="upper-header-section-left">
                    <div class="header-user-section">
                        <div to="/SignUp" class="header-signup-section">
                            <SignInIcon />
                            <NuxtLink to="/SignUp" class="signup">ورود | ثبت‌نام</NuxtLink>
                        </div>
                        <div class="header-cart">
                            <CartIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div @scroll="handleScroll()" class="bottom-header-section">
                <nav class="navbar">
                    <div class="sub-header-navbar">
                        <div class="sub-header-main-nav" @mouseenter="dropDownOn()" @mouseleave="dropDownOff()">
                            <HumberMenu />
                            <button>دسته‌بندی کالاها</button>
                            <div @mousemove="dropDownOn()">
                                <Classification />
                            </div>
                        </div>

                        <div class="sub-header-minor-nav">
                            <div class="sub-minor-nav">
                                <FruitBasket />                                
                                <a>سوپرمارکت</a>
                            </div>
                            <div class="sub-minor-nav">
                                <HotSales />
                                <a>پرفروش‌ترین‌ها</a>
                            </div>
                            <div class="sub-minor-nav">
                                <Discount />
                                <a>تخفیف‌ها و پیشنهادها</a>
                            </div>
                            <div class="sub-minor-nav">
                                <HotSales />
                                <a>شگفت‌انگیزها</a>
                            </div>
                        </div> 

                        <div class="faq">
                            <a>سوالی دارید؟</a>
                        </div>
                        <div class="salesman">  
                            <a>فروشنده شوید!</a>
                        </div>
                    </div>
                </nav>
                <div class="header-location-section">
                    <Location />
                    <p>لطفا شهر خود را انتخاب کنید</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'headerPage',
        props: ['title'],
        components: {
            SearchIcon: () => import ('../icons/searchIcon'),
            SignInIcon: () => import ('../icons/signin'),
            CartIcon: () => import ('../icons/cartIcon'),
            HumberMenu: () => import ('../icons/hambermenu'),
            FruitBasket: () => import ('../icons/fruitbasket'),
            HotSales: () => import ('../icons/hot'),
            Discount: () => import ('../icons/discount'),
            Awesome: () => import ('../icons/awesome'),
            Location: () => import ('../icons/location.vue'),
            Classification: () => import ('../../components/nested-section/classification.vue'),
        
        },

        methods: {
            handleScroll() {
                 gsap.fromTo('.bottom-header-section', {x: 100, ease: 'none' },{y: '-= 100%', ease: 'none'})
            },

            dropDownOn() {
                const classification = document.querySelector('.classification-section-wrapper')
                classification.style.display = 'initial';
            },

            dropDownOff() {
                const classification = document.querySelector('.classification-section-wrapper')
                classification.style.display = 'none';
            },     
            scrollFunction() {
                if (document.body.scrollTop > 500) {
                    document.querySelector(".bottom-header-section").style.display = "none";
                }
            }
        },
        mounted(){
            this.scrollFunction();
        }
        
    }
</script>

<style lang="scss">

    .white-space{
        height: 173px;
        position: relative;
    }

    .header-section {
        width: 100%;
        display: flex;
        flex-flow: column;
        background-color: #fff;
        position: fixed;
        top: 0px;
        z-index: 10000000000000000;
        display: block;
        box-shadow: 1px 1px 2px 0px #0000003d;
    }

    .header-banner{
        width: 100%;
        img{
            height: 60px;
            width: 100%;
            object-fit: cover;
        }
    }

    .upper-header-section {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        padding: 12px 16px;
        margin-top: -4px;

    }

    .upper-header-section-right {
        width: 86%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

    }

    .header-user-section {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .header-logo{
        width: 115px;
        height: 30px;
    }

    .searchBar{
        width: 600px;
        border-radius: 8px;
        background-color: #f0f0f1;
        display: flex;
        flex-flow: row nowrap;
        padding: 5px;
        height: 44px;
        margin-right: 20px;
    }

    .header-searchbar-input::placeholder{
        color: #81858b;
        font-family: "Iran Yekan";
        font-weight: 400;
        
    }  

    .search-icon-input{
        width: 8%;
        padding: 5px 0px;
        svg{
            width: 20px;
            height: 20px;
            margin-right: 13px;
            margin-top: 2px;
        }
    }

    .header-searchbar-input{
        width: 92%;
        background-color: #f0f0f1;
        border: none;
        outline: none;
    }

    .header-signup-section{
        padding: 8px 16px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        border: 1px solid #e0e0e2;
        border-radius:8px;
        a{
            margin-right: 10px;
            color: #000;
        }
    }

    .header-cart{
        margin-right: 15px;
        padding-right: 20px;
        border-right: 1px solid #e0e0e2
    }


    .bottom-header-section {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 8px 16px 0px;
        position: relative;
    }

    .navbar{
        width: 60%;
    }

    .sub-header-navbar{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        
        svg{
            fill: #424750;
        }
    }

    .sub-header-icon{
        align-items: center;
    }

    .sub-header-main-nav{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        padding: 0px 0px 7px;
        button{
            font-size:0.9em;
            margin-right: 5px;        
            background: none;
            border: none;
        }


    }

    .sub-header-minor-nav{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        border-right: 1px solid #cecece;
        border-left: 1px solid #cecece;
        padding: 0px 10px;
        margin: 0px 20px;
        color:#62666d;
        fill: #62666d;
        a{
            margin-left: 25px;    
            margin-right: 5px;    
        }
    }

    .sub-minor-nav{
        display: flex;
        flex-flow: row nowrap;
        padding: 0px 0px 7px;
    }


    @keyframes header-animation {
        from {left: 0%;}
        to {right: 100%;}
    } 
    .sub-minor-nav:hover,
    .sub-header-main-nav:hover,
    .faq:hover,
    .salesman:hover{
        animation: header-animation 3s alternate;;
        border-bottom: 1px solid red;
    }
 
    
    .faq{
        margin-left: 20px;
        color:#62666d;
        padding: 0px 0px 7px;
    }

    .salesman{
        color:#62666d;
        padding: 0px 0px 7px;
    }

    .header-location-section{
        display: flex;
        flex-flow: row nowrap;
    }
    
</style>