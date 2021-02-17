<template>
    <div class="products">
        <Cartmini />
        <!--  show img  -->
        <div class="show-img">
            <div class="container">
                <div class="row">
                    <div
                        class="col-md-6 img"
                        v-for="brand in brands.slice(0, 2)"
                        :key="brand.id"
                        :image="brand.image"
                    >
                        <img :src="`${urll}/${brand.image}`" />
                    </div>
                </div>
            </div>
        </div>
        <!-- show  products -->
        <div class="show-prod">
            <div class="container">
                <div class="row reower">
                    <BodyProduct
                        v-for="items in Product.slice(0, 4)"
                        :key="items.pr"
                        :id="items.id"
                        :price="items.price"
                        :title="items.title"
                        :description="items.description"
                        @click="goto(items)"
                    >
                    </BodyProduct>
                </div>
            </div>
        </div>
        <!-- show market-->
        <div class="show-market">
            <img src="@/assets/IMG_1.png" />
            <img src="@/assets/IMG_2.png" />
            <img src="@/assets/IMG_3.png" />
            <img src="@/assets/IMG_4.png" />
            <img src="@/assets/IMG_5.png" />
        </div>
        <!-- show  products -->
        <div class="show-prod">
            <div class="container">
                <div class="row reower">
                    <BodyProduct
                        v-for="items in Product.slice(4, 8)"
                        :key="items.pr"
                        :id="items.id"
                        :price="items.price"
                        :title="items.title"
                        :description="items.description"
                        @click="goto(items)"
                    >
                    </BodyProduct>
                </div>
            </div>
        </div>

        <!-- show der -->
        <div class="show-der">
            <div class="container">
                <div class="row">
                    <div
                        class="col-lg-6 img text-center"
                        v-for="brand in brands.slice(2, 4)"
                        :key="brand.id"
                        :image="brand.image"
                    >
                        <img :src="`${urll}/${brand.image}`" />
                    </div>
                </div>
            </div>
        </div>
        <!-- --------------------------------------------- -->
        <div id="demo" class="carousel slide" data-ride="carousel">
            <div class="container">
                <!-- Indicators -->
                <!-- The slideshow -->
                <div class="row">
                    <div class="col-lg-3 col-sm-4 col-xs-12">
                        <div>
                            <span class="last">اخر المشتركین</span>
                            <div class="last-subscriber">
                                <Subscriber
                                    v-for="Store in lastStores"
                                    :key="Store.id"
                                    :title="Store.title"
                                    :location="Store.location"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 col-sm-8 col-xs-12">
                        <div class="carousel-inner carousel-inner1">
                            <!-- carousel item 1 -->
                            <div class="carousel-item active">
                                <div class="show-prod">
                                    <div class="container">
                                        <div class="row">
                                            <BodyProduct
                                                v-for="items in Product.slice(
                                                    0,
                                                    4
                                                )"
                                                :key="items.pr"
                                                :id="items.id"
                                                :price="items.price"
                                                :title="items.title"
                                                :description="items.description"
                                                @click="goto(items)"
                                            >
                                            </BodyProduct>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- carousel item 2 -->
                            <div class="carousel-item">
                                <div class="show-prod">
                                    <div class="container">
                                        <div class="row">
                                            <BodyProduct
                                                v-for="items in Product.slice(
                                                    4,
                                                    8
                                                )"
                                                :key="items.pr"
                                                :id="items.id"
                                                :price="items.price"
                                                :title="items.title"
                                                :description="items.description"
                                                @click="goto(items)"
                                            >
                                            </BodyProduct>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- carousel item 3 -->
                            <div class="carousel-item">
                                <div class="show-prod">
                                    <div class="container">
                                        <div class="row">
                                            <BodyProduct
                                                v-for="items in Product.slice(
                                                    8,
                                                    12
                                                )"
                                                :key="items.pr"
                                                :id="items.id"
                                                :price="items.price"
                                                :title="items.title"
                                                :description="items.description"
                                                @click="goto(items)"
                                            >
                                            </BodyProduct>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Left and right controls -->
                        <a
                            class="carousel-control-prev"
                            href="#demo"
                            data-slide="prev"
                        >
                            <span class="carousel-control-prev-icon"></span>
                        </a>
                        <a
                            class="carousel-control-next"
                            href="#demo"
                            data-slide="next"
                        >
                            <span class="carousel-control-next-icon"></span>
                        </a>
                        <!-- ------------------------------------------------------------ -->
                        <div
                            class="col-sm-1.5 imges"
                            style="top: 600px"
                            v-for="brand in brands.slice(4, 5)"
                            :key="brand.id"
                            :image="brand.image"
                        >
                            <img :src="`${urll}/${brand.image}`" />
                        </div>
                        <div
                            class="col-sm-1.5 imges"
                            style="top: 800px"
                            v-for="brand in brands.slice(5, 6)"
                            :key="brand.id"
                            :image="brand.image"
                        >
                            <img :src="`${urll}/${brand.image}`" />
                        </div>
                        <div class="col-sm-9 imgs">
                            <img
                                :src="`${urll}/${brand.image}`"
                                style="width: 100%"
                                v-for="brand in brands.slice(6, 7)"
                                :key="brand.id"
                                :image="brand.image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- second Carousel -->
        <div
            id="deno"
            class="carousel slide"
            data-ride="carousel"
            style="margin-top: 40px;"
        >
            <div class="col-sm-12">
                <div class="carousel-inner">
                    <!-- carousel item 1 -->
                    <div class="carousel-item active">
                        <div class="show-prod">
                            <div class="container">
                                <div class="row">
                                    <BodyProduct
                                        v-for="items in Product.slice(0, 4)"
                                        :key="items.pr"
                                        :id="items.id"
                                        :price="items.price"
                                        :title="items.title"
                                        :description="items.description"
                                        @click="goto(items)"
                                    >
                                    </BodyProduct>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- carousel item 2 -->
                    <div class="carousel-item">
                        <div class="show-prod">
                            <div class="container">
                                <div class="row">
                                    <BodyProduct
                                        v-for="items in Product.slice(4, 8)"
                                        :key="items.pr"
                                        :id="items.id"
                                        :price="items.price"
                                        :title="items.title"
                                        :description="items.description"
                                        @click="goto(items)"
                                    >
                                    </BodyProduct>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- carousel item 3 -->
                    <div class="carousel-item">
                        <div class="show-prod">
                            <div class="container">
                                <div class="row">
                                    <BodyProduct
                                        v-for="items in Product.slice(8, 12)"
                                        :key="items.pr"
                                        :id="items.id"
                                        :price="items.price"
                                        :title="items.title"
                                        :description="items.description"
                                        @click="goto(items)"
                                    >
                                    </BodyProduct>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Left and right controls -->
                <a class="carousel-control-prev" href="#deno" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#deno" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import BodyProduct from '@/components/global/BodyProduct.vue';
import Subscriber from '@/components/global/Subscriber.vue';
import Cartmini from '@/components/cart/Cartmini.vue';

//import axios from "axios";
export default {
    data() {
        return {
            urll: 'http://edalili.e-dalely.com',
            //  Product:[],
            // lastStores:[],
            //  brands:[]
        };
    },
    name: 'products',
    components: {
        BodyProduct,
        Subscriber,
        Cartmini,
    },
    computed: {
        Product() {
            return this.$store.state.Product;
        },
        lastStores() {
            return this.$store.state.lastStores;
        },
        brands() {
            return this.$store.state.brands;
        },
    },
    /* created(){
    axios.get("http://edalili.e-dalely.com")
    .then(response => {
      this.Product = response.data[0].Products;
    })
    .then(response => {
      this.lastStores = response.data[0].lastStores;
    })
    .then(response => {
      this.brands = response.data[0].brands;
    })
  },
  */
};
</script>

<style scoped>
/* ____________________________ Start Products ________________________________ */
.row {
    justify-content: center;
}
.show-img {
    background-image: linear-gradient(180deg, #a6a6a6, #fff);
    width: 100%;
    height: 370px;
    border-radius: 7px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
    margin-top: 5vh;
}

.show-img .row .img {
    text-align: center;
}
.show-img .row .img img {
    margin: 40px 0 40px 0;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .show-img {
        height: 285px;
    }
    .show-img .img:last-child {
        display: none;
    }
    .show-img .img img {
        width: 80%;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .show-img {
        height: 280px;
    }
    .show-img .img:last-child {
        display: none;
    }
    .show-img .img img {
        width: 60vh;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .show-img {
        height: 280px;
    }
    .show-img .img img {
        width: 50vh;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .show-img .img img {
        margin: 40px 0px 40px -10px;
        width: 450px;
    }
}
/* style of product */
.show-prod {
    width: 100%;
    height: 570px;
    border-radius: 7px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
}
.show-prod .mini {
    font-size: 20px;
    color: #655f5f;
    margin-bottom: 20px;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .show-img {
        height: 260px;
    }
    .show-img .img:last-child {
        display: none;
    }
    .show-img .img img {
        width: 80%;
    }
    .show-prod {
        height: 410px;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .show-img {
        height: 280px;
    }
    .show-img .img:last-child {
        display: none;
    }
    .show-img .img img {
        width: 60vh;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .show-img {
        height: 280px;
    }
    .show-img .img img {
        width: 50vh;
    }
    .show-prod .row .content-pro {
        height: 416px;
        margin-top: -10px;
    }
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .show-prod .row .coler:nth-child(1) {
        display: none;
    }
    .show-prod .row .coler:nth-child(2) {
        display: none;
    }
    .carousel-inner {
        width: 105%;
    }
    .carousel-inner .show-prod .row .coler:nth-child(3) {
        display: none;
    }
    .carousel-inner .show-prod .row .col-xs-6 {
        flex: 0 0 60%;
        max-width: 60%;
    }
}

/* Small devices (landscape phones, 576px and up)   */
@media (min-width: 576px) and (max-width: 767.98px) {
    .show-prod .row .coler:nth-child(1) {
        display: none;
    }
    .show-prod .row .coler:nth-child(2) {
        display: none;
    }
}

/*  Medium devices (tablets, 768px and up)  */
@media (min-width: 768px) and (max-width: 991.98px) {
    .show-prod .row .coler:last-child {
        display: none;
    }
    .carousel-inner1 .show-prod .row .coler:nth-child(1) {
        display: none;
    }
    .carousel-inner1 .show-prod .row .col-xs-6 {
        flex: 0 0 50%;
        max-width: 50%;
    }
}

/*  Large devices (desktops, 992px and up)  */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .carousel-inner1 .show-prod .row .coler:nth-child(3) {
        display: none;
    }
    .carousel-inner1 .show-prod .row .col-xs-6 {
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
}

/* Extra large devices (large desktops, 1200px and up)  */
@media (min-width: 1200px) {
}

/* End style for product */
/* --------------------------------------------- */
.show-der .img img {
    height: 200px;
    width: 550px;
    margin-top: 40px;
    margin-bottom: 100px;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .show-der {
        height: 260px;
    }
    .show-der .img img {
        width: 80%;
    }
    .show-der .img:last-child {
        display: none;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .show-der .img img {
        width: 500px;
    }
    .show-der .img:last-child {
        display: none;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .show-der .img img {
        width: 600px;
    }
    .show-der .img:last-child {
        display: none;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .show-der .img img {
        width: 450px;
    }
}
/*  show market  */
/* show market */
.show-market {
    background-color: #fff;
    width: 100%;
    height: 250px;
    margin-top: 50px;
    border-radius: 7px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
}
.show-market img {
    width: 19%;
    height: 100%;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .show-market {
        height: 150px;
    }
    .show-market img:nth-child(2),
    .show-market img:nth-child(3) {
        display: none;
    }
    .show-market img {
        width: 32%;
    }
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .show-img {
        height: 285px;
    }
    .show-img .img:last-child {
        display: none;
    }
    .show-img .img img {
        width: 80%;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .show-img {
        height: 280px;
    }
    .show-img .img:last-child {
        display: none;
    }
    .show-img .img img {
        width: 60vh;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .show-img {
        height: 280px;
    }
    .show-img .img img {
        width: 50vh;
    }
    /* End About-Us */

    /* --------------------------------------------- */
    .show-der .img img {
        height: 200px;
        width: 550px;
        margin-top: 40px;
        margin-bottom: 100px;
    }
    /* Extra small devices (portrait phones, less than 576px) */
    @media (max-width: 575.98px) {
        .show-der .img img {
            width: 80%;
        }
        .show-der .img:last-child {
            display: none;
        }
    }
    /* Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) and (max-width: 767.98px) {
        .show-der .img img {
            width: 500px;
        }
        .show-der .img:last-child {
            display: none;
        }
    }
    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) and (max-width: 991.98px) {
        .show-der .img img {
            width: 600px;
        }
        .show-der .img:last-child {
            display: none;
        }
    }
    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) and (max-width: 1199.98px) {
        .show-der .img img {
            width: 450px;
        }
    }
}
.slide .last {
    margin-left: 90px;
    font-weight: bold;
    color: #5e4949;
}
.last-subscriber {
    height: 990px;
    background-color: #d4cccc;
    position: relative;
    padding-top: 10px;
    border-radius: 5px;
}
.carousel-inner {
    background-color: #ffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
}
.carousel-inner .show-prod .row .content-pro {
    margin-top: 0;
}
.carousel-control-next,
.carousel-control-prev {
    height: 50px;
}
.carousel-control-next-icon,
.carousel-control-prev-icon {
    border: 1px solid #c7c7c7;
    border-radius: 50%;
    width: 54px;
    height: 95px;
    background-color: #caabab;
    top: 290px;
    position: absolute;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .carousel-control-next-icon,
    .carousel-control-prev-icon {
        width: 40px;
        height: 50px;
    }
    .last-subscriber {
        margin-bottom: 50px;
        width: 110%;
        text-align: center;
        margin-left: 0%;
    }
    .carousel-inner {
        box-shadow: none;
    }
    .last-subscriber .subscriber {
        width: 85%;
        margin: 10px 0 -4px 15px;
        font-size: 16px;
    }
    .last-subscriber .subscriber img {
        right: 15%;
    }
    .slide .last {
        margin-left: 40px;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .last-subscriber {
        width: 120%;
        margin-left: -20px;
        height: 695px;
        padding-top: 1px;
    }
    .last-subscriber .subscriber {
        font-size: 12px;
        height: 69px;
    }
    .last-subscriber .subscriber img {
        width: 35px;
        right: 12px;
    }
    .slide .last {
        margin-left: 35px;
        font-size: 14px;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .last-subscriber {
        height: 800px;
    }
    .last-subscriber .subscriber {
        font-size: 15px;
        height: 79px;
    }
    .last-subscriber .subscriber img {
        right: 18px;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .last-subscriber .subscriber {
        font-size: 16px;
    }
    .last-subscriber .subscriber img {
        right: 16px;
    }
}
/* ------------------------------------------ */

.imges {
    position: absolute;
    top: 660px;
    left: 635px;
}
.imges img {
    width: 100%;
    margin-bottom: 15px;
}
.imgs {
    margin-top: 40px;
    position: absolute;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .imges,
    .imgs {
        display: none;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .imges,
    .imgs {
        display: none;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .imges {
        top: 600px;
        left: 370px;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .imges {
        top: 660px;
        left: 560px;
    }
    .imges img {
        width: 80%;
        margin-bottom: 15px;
    }
    .imgs {
        margin-top: 40px;
        position: absolute;
    }
    .imgs img {
        width: 80%;
    }
}

/* ________________________________ End Products _______________________________*/
</style>
