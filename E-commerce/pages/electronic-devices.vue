<template>
    <div>
            <div class="electronic-devices-wrapper">
                <HeroSlider
                    :paths="yo"
                />

                <HotOffers />
                    <nuxtLink to="/electronic-devices/samsung">
                        <h1>
                            arsam
                        </h1>
                    </nuxtLink>
                    <nuxtChild />
                <div class="main-container">    
                    <Categories categories-title="خرید بر اساس دسته‌بندی" />

                    <div class="electronic-devices-banners-section">
                        <a class="electronic-devices-banner">
                            <img src="../static/electronic-devices-page-banners/1.jpg" />
                        </a>
                        <a class="electronic-devices-banner">
                            <img src="../static/electronic-devices-page-banners/2.jpg" />
                        </a>
                        <a class="electronic-devices-banner">
                            <img src="../static/electronic-devices-page-banners/3.jpg" />
                        </a>
                        <a class="electronic-devices-banner">
                            <img src="../static/electronic-devices-page-banners/4.jpg" />
                        </a>
                    </div>

                    <DigiSuggestions suggestion-title="دسته‌بندی‌های پیشنهادی"/>

                    <blog />

                    <div class="digital-description-section">
                        <div class="digital-description-section-header">
                            <h1>کالای دیجیتال</h1>
                        </div>
                        <div class="digital-description-section-body">
                            <h2>کالای دیجیتال، سرزمین تکنولوژی</h2>
                            <p>اگر شما هم هر سال چشم انتظار ارائه جدیدترین محصولات برندهای مطرح دنیا هستید، کالای دیجیتال دسته بندی مورد علاقه شماست. محصولات این دسته بسیار متنوع هستند و در قلب تپنده‌ی آن‌ها جدیدترین تکنولوژی‌ها قرار گرفته است. شما می‌توانید این محصولات را از قیمت‌های اقتصادی تا گران‌ترین و کامل‌ترین کانفیگ ممکن تهیه کنید. </p>
                        </div>
                        <div>
                            <button  @click="moreContent = !moreContent" class="digital-description-button">
                                <div v-if="moreContent">
                                    <a>مشاهده بیشتر</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                                        <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
                                    </svg>
                                </div>
                                <div v-else>
                                    <a>مشاهده کمتر</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                                        <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/>
                                    </svg>
                                </div>
                            </button>
                        </div>
                        <div v-if="!moreContent" class="digital-description-moreContent">
                            <div>
                                <h3>انواع کالای دیجیتال</h3>
                                <p>موبایل: تلفن همراه یکی از مهم‌ترین و اصلی‌ترین کالای دیجیتال در زندگی مدرن است. این محصولات هوشمند حتی اقتصادی‌ترین آن‌ها امکانات بسیار زیادی را در اختیار شما قرار می‌دهد و لذت زندگی مدرن را برای‌تان به ارمغان می‌آورد. با خرید یک تلفن هوشمند می‌توانید بهترین عکس‌ها را بگیرید، به موسیقی با بالاترین کیفیت گوش دهید و با تمام دنیا به راحتی چند کلیک ارتباط برقرار کنید.  
                                    لپتاپ: اهمیت لپتاپ، فراتر از یک دستگاه دیجیتال امروزی است زیرا به یک وسیله مهم برای کار و کسب درآمد تبدیل شده است. در واقع شما می‌توانید در هر نقطه‌ از دنیا که هستید، با فشردن یک دکمه لپتاپ، وارد فضای کاری یا خانوادگی شوید. این محصولات برای هر نوع کاربری  به صورت تخصصی طراحی می‌شوند. از این رو می‌توانید یک لپتاپ خاص را برای گیمینگ یا کارهای فنی و مهندسی تهیه کنید.
                                    تبلت: تبلت‌ها عمر کوتاه‌تری نسبت به سایر لوازم دیجیتال دارند. با این حال بسیار مورد استقبال قرار گرفته‌اند و امکانات زیادی گاهی در حد یک لپتاپ ارائه می‌کنند. شما می‌توانید از این محصولات برای طراحی یا مطالعه کتاب الکتارونیکی استفاده کنید. 
                                    هدست و هندز فری: این محصول از جالب‌ترین تولیدات ابزارهای دیجیتال است. هندزفری‌ها در دو نوع بلوتوثی یا با سیم طراحی می‌شوند که با اتصال به موبایل دست شما را برای انجام سایر امور آزاد می‌گذارد. 
                                    اسپیکر: چندین سال پیش به همراه تلویزیون‌ها سیستم صوتی جدیدی به بازار عرضه شد تحت عنوان سینماهای خانوادگی. امروزه اما برای پخش موسیقی دیگر نیازی به اسپیکرها و دستگاه‌ها ضبط و پخش بزرگ نیست. با یک اسپیکر کوچک و یک تلفن همراه یا فلش به سادگی می‌توان با صدای بلند به موسیقی گوش داد.
                                    از دیگر محصولات این گروه می‌توان به دوربین‌‌ها، ماشین‌های اداری، انواع فلش و هارد اکسترنال و جدیدترین محصولات آن یعنی مچبند و ساعت هوشمند اشاره کرد. 
                                </p>
                            </div>
                            <div>
                                <h3>انواع برند تولید کننده کالای دیجیتال</h3>
                                <p>
                                    شرکت‌های بسیاری در تولید محصولات دیجیتال دست دارند. بعضی از آن‌ها مانند سامسونگ samsung، ایسوس ASUS، شیائومی Xiaomi، برندهای به نامی در این حوزه هستند و طرفداران بسیاری هم دارند. اما شرکت‌هایی چون دبلیو یو دبلیو WUW، ماهوت Mahoot، ریمکس Remax هم در این حوزه فعالیت دارند. از سایر برندهای معروف در تولید کالای دیجیتال می‌توان به اپل Apple، نوکیا Nokia، تسکو Tesco، اچ پی HP و ... اشاره کرد.
                                </p>
                            </div>
                            <div>
                                <h3>خرید انواع کالای دیجیتال از دیجی کالا (Digikala)</h3>
                                <p>
                                    تنوع در این محصولات و برند تولید کننده‌ی آن‌ها بسیار زیاد است. برای یک خرید هوشمندانه و مطمئن، به وب‌سایت دیجی کالا مراجعه کرده و انواع کالای دیجیتال مورد نظر را با توضیحات کامل و بهترین قیمت موجود در بازار مشاهده کنید. هم‌چنین می‌توانید از تخفیف‌ها و امکانات فروش قسطی بهره‌مند شوید.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            moreContent:true,
            yo: [
                {path: require('@/static/electronic-devices-page-hero-slider/1.jpg')},
                {path: require('@/static/electronic-devices-page-hero-slider/2.jpg')},
                {path: require('@/static/electronic-devices-page-hero-slider/3.jpg')},
                {path: require('@/static/electronic-devices-page-hero-slider/4.jpg')},
                {path: require('@/static/electronic-devices-page-hero-slider/5.jpg')},
            ]
        }
    },
    components: {
        HeroSlider: () => import ("@/components/homeComponents/heroSlider.vue"),
        HotOffers:() => import ("@/components/homeComponents/hotOffers.vue"),
        Categories:() => import ("@/components/homeComponents/categories.vue"),
        DigiSuggestions: () => import ("@/components/homeComponents/digiSuggestions.vue"),
        blog: () => import ("@/components/homeComponents/blog.vue")
        
    },    
}
</script>

<style lang="scss">
@import "@/assets/scss/color.scss";

    .hot-offers-section{
        background: linear-gradient(to top,#5c51bf,#6763d9);
    }

    .hot-offer-goods{
        background-color: #6661d6 !important;
    }

    .electronic-devices-wrapper{
        margin-top: 50px;
        padding: 0px 120px;
    }

    .hero-section{
        border-radius: 16px;
    }

    .hot-offers-section{
        
        margin: 20px 0px 25px;
    }

    .electronic-devices-banners-section{
        display: grid;
        grid-template-columns: repeat(2,minmax(0,1fr));
        gap: 16px;
        margin: 60px 0px 20px;
    }

    .electronic-devices-banner{
        flex-basis: 49%;

        img{
            border-radius: 16px;
            width: 100%;
            height: 100%;
        }
    }

    .digital-description-section{
        width: 100%;
        margin-top: 30px;

        h1{
            color: #62666d;
            font-size: 1.5em;
            font-weight: 300;
            cursor: default;
        }
        
        h2{
            color: #62666d;
            font-size: 1.8em;
            font-weight: 300;
            cursor: default;
        }

        p{
            color:#a1a3a8;
            font-size: 0.9em;
            cursor: default;
        }
    }
    .digital-description-button{
        outline: none;
        border: none;
        background: none;
        cursor: pointer;

        margin-top: 30px;
        div{
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
        }
        a{
            color: $more-content-color;
            font-size: 1.2em;
        }
        svg{
            fill: $more-content-color;
            margin-top: 5px;
            margin-right: 5px;
        }

    }

    .digital-description-moreContent{
        div{
            margin-top: 15px;
        }

        h3{
            color: #62666d;
            font-size: 1.4em;
            font-weight: 300;
        }

        p{
            color:#a1a3a8;
            font-size: 0.8em; 
        }
    }

    // .main-container{
    //     margin: 0px 0px;
    //     padding: 0px 0px;
    // }

    @media only screen and (max-width: 992px){
        .electronic-devices-wrapper {
            margin-top: 0px;
            padding: 0px 0px;
        }

        .electronic-devices-banners-section{
            grid-template-columns:none;      
        }

        .main-container{
            padding: 0px 20px;
        }

        .digital-description-section{
            h1{
                color: #62666d;
                font-size: 1.2em;
                font-weight: 300;
            }
            
            h2{
                color: #62666d;
                font-size: 1.5em;
                font-weight: 300;
            }

            p{
                color:#a1a3a8;
                font-size: 0.8em;
            }
        }
        
        .digital-description-moreContent{

            h3{
                color: #62666d;
                font-size: 1.2em;
                font-weight: 300;
            }

            p{
                color:#a1a3a8;
                font-size: 0.8em; 
            }
        }
        
    }
</style>