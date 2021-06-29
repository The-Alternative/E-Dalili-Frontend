<template>
    <div class="products">
        <Cartmini />
        <!--  show img  -->
        <div class="show-img">
            <div class="row">
                <div
                    class="col-md-6 img"
                    v-for="brand in brands.slice(0, 2)"
                    :key="brand.id"
                >
                    <img :src="brand.image" />
                </div>
            </div>
        </div>
        <!-- show  products -->
        <!-- <div class="show-prod">
            <div class="row reower">
                <BodyProduct
                    v-for="items in Product.slice(0, 4)"
                    :key="items.id"
                    :id="items.id"
                    :image="items.image"
                    :short_des="items.short_des"
                    :long_des="items.long_des"
                    :name="items.name"
                >
                </BodyProduct>
            </div>
        </div>  -->
        <!-- show market-->
        <!-- <div class="mar">
            <div
                class="show-market"
                v-for="bran in Brands.slice(0, 5)"
                :key="bran.id"
            >
                <img v-lazy="bran.image" />
            </div>
        </div> -->
        <!-- show  products -->
        <!-- <div class="show-prod">
            <div class="row reower">
                <BodyProduct
                    v-for="items in Product.slice(4, 8)"
                    :key="items.id"
                    :id="items.id"
                    :image="items.image"
                    :short_des="items.short_des"
                    :name="items.name"
                >
                </BodyProduct>
            </div>
        </div> -->

        <!-- show der -->
        <div class="show-der">
            <div class="row">
                <div
                    class="col-lg-6 img text-center"
                    v-for="brand in brands.slice(7, 9)"
                    :key="brand.id"
                    :image="brand.image"
                >
                    <img :src="brand.image" />
                </div>
            </div>
        </div>
        <!-- --------------------------------------------- -->
        <div id="demo" class="carousel slide" data-ride="carousel">
            <div class="row">
                <div class="col-lg-3 col-sm-4 col-xs-12">
                    <div>
                        <span class="last">اخر المشتركین</span>
                        <div class="last-subscriber">
                            <Subscriber
                                v-for="Store in Stores.slice(0, 6)"
                                :key="Store.pr"
                                :title="Store.title"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 col-sm-8 col-xs-12">
                    <div class="carousel-inner carousel-inner1">
                        <!-- <div class="carousel-item active">
                            <div class="show-prod">
                                <div class="row">
                                    <BodyProduct
                                        v-for="items in Product.slice(0, 4)"
                                        :key="items.id"
                                        :id="items.id"
                                        :short_des="items.short_des"
                                        :name="items.name"
                                        :image="items.image"
                                    >
                                    </BodyProduct>
                                </div>
                            </div>
                        </div>
                        -->
                        <!-- <div class="carousel-item">
                            <div class="show-prod">
                                <div class="row">
                                    <BodyProduct
                                        v-for="items in Product.slice(4, 8)"
                                        :key="items.id"
                                        :id="items.id"
                                        :image="items.image"
                                        :short_des="items.short_des"
                                        :name="items.name"
                                    >
                                    </BodyProduct>
                                </div>
                            </div>
                        </div> -->

                        <!-- <div class="carousel-item">
                            <div class="show-prod">
                                <div class="row">
                                    <BodyProduct
                                        v-for="items in Product.slice(8, 12)"
                                        :key="items.id"
                                        :id="items.id"
                                        :image="items.image"
                                        :short_des="items.short_des"
                                        :name="items.name"
                                    >
                                    </BodyProduct>
                                </div>
                            </div>
                        </div> -->
                    </div>

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

                    <div
                        class="row"
                        style="
                            margin: 30px 0 0 0;
                            justify-content: space-around;
                        "
                    >
                        <div
                            v-for="brand in brands.slice(9, 10)"
                            :key="brand.id"
                            :image="brand.image"
                            class="col-sm-9 imgs"
                        >
                            <img :src="brand.image" style="width: 100%" />
                        </div>
                        <div class="two-img">
                            <div
                                v-for="brand in brands.slice(10, 11)"
                                :key="brand.id"
                                :image="brand.image"
                                class="col-sm-1.5 imges1"
                            >
                                <img :src="brand.image" />
                            </div>
                            <div
                                v-for="brand in brands.slice(11, 12)"
                                :key="brand.id"
                                :image="brand.image"
                                class="col-sm-1.5 imges2"
                            >
                                <img :src="brand.image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- second Carousel -->
        <!-- <div
            id="deno"
            class="carousel slide"
            data-ride="carousel"
            style="margin-top: 40px"
        >
            <div class="col-sm-12" style="padding: 0">
                <div class="carousel-inner">
                 
                    <div class="carousel-item active">
                        <div class="show-prod">
                            <div class="row">
                                <BodyProduct
                                    v-for="items in Product.slice(12, 16)"
                                    :key="items.id"
                                    :id="items.id"
                                    :image="items.image"
                                    :short_des="items.short_des"
                                    :name="items.name"
                                >
                                </BodyProduct>
                            </div>
                        </div>
                    </div>
                
                    <div class="carousel-item">
                        <div class="show-prod">
                            <div class="row">
                                <BodyProduct
                                    v-for="items in Product.slice(16, 20)"
                                    :key="items.id"
                                    :id="items.id"
                                    :image="items.image"
                                    :short_des="items.short_des"
                                    :name="items.name"
                                >
                                </BodyProduct>
                            </div>
                        </div>
                    </div>
                   
                    <div class="carousel-item">
                        <div class="show-prod">
                            <div class="row">
                                <BodyProduct
                                    v-for="items in Product.slice(0, 4)"
                                    :key="items.id"
                                    :id="items.id"
                                    :image="items.image"
                                    :short_des="items.short_des"
                                    :name="items.name"
                                >
                                </BodyProduct>
                            </div>
                        </div>
                    </div>
                </div>

              
                <a class="carousel-control-prev" href="#deno" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#deno" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </div> -->
    </div>
</template>
<style scoped>
.show-img {
    background-image: linear-gradient(180deg, #a6a6a6, #fff);
    width: 100%;
    height: 370px;
    border-radius: 7px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
    margin-top: 2vh;
}
.show-prod {
    padding: 0 10px;
}
.show-img .row .img {
    text-align: center;
    transition: all 0.5s;
}
.show-img .row .img:hover {
    transform: scale3d(1.05, 1.05, 1);
}
.show-img .row .img img {
    margin: 40px 0 40px 0;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .show-img {
        height: auto;
    }
    .show-img .img:last-child {
        display: none;
    }
    .show-img .img img {
        width: 80%;
    }
    .show-prod {
        height: 330px;
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
        width: 360px;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .show-img {
        height: 280px;
    }
    .show-img .img img {
        width: 360px;
    }
    .row .content-pro {
        height: 416px;
        margin-top: -10px;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .show-img .img img {
        margin: 40px 0px 40px -10px;
        width: 450px;
    }
}
/* ____________________________ Start Products ________________________________ */
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .row .coler:nth-child(1) {
        display: none;
    }
    .row .coler:nth-child(2) {
        display: none;
    }
    .carousel-inner {
        width: 105%;
    }
    .carousel-inner .row .coler:nth-child(3) {
        display: none;
    }
    .carousel-inner .row .col-xs-6 {
        flex: 0 0 60%;
        max-width: 60%;
    }
    .carousel-item {
        margin-bottom: 40px;
    }
}
/* Small devices (landscape phones, 576px and up)   */
@media (min-width: 576px) and (max-width: 767.98px) {
    .row .coler:nth-child(1) {
        display: none;
    }
    .row .coler:nth-child(2) {
        display: none;
    }
}
/*  Medium devices (tablets, 768px and up)  */
@media (min-width: 768px) and (max-width: 991.98px) {
    .row .coler:last-child {
        display: none;
    }
    .carousel-inner1 .row .coler:nth-child(1) {
        display: none;
    }
    .carousel-inner1 .row .col-xs-6 {
        flex: 0 0 50%;
        max-width: 50%;
    }
}
/*  Large devices (desktops, 992px and up)  */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .carousel-inner1 .row .coler:nth-child(3) {
        display: none;
    }
    .carousel-inner1 .row .col-xs-6 {
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
    height: 250px;
    width: 600px;
    margin-top: 40px;
    margin-bottom: 100px;
    transition: all 0.5s;
}
.show-der .img img:hover {
    transform: scale3d(1.05, 1.05, 1);
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .show-der {
        height: 240px;
    }
    .show-der .img img {
        width: 80%;
        height: 180px;
        margin-top: 50px;
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
.mar {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
    background-color: #eee;
    display: flex;
    justify-content: space-around;
}
.show-market {
    background-color: #fff;
    width: 100%;
    height: 250px;
    margin-top: 50px;
    width: calc(96% / 5);
}
.show-market img {
    height: 230px;
    transition: all 0.5s;
    width: 100%;
    height: 100%;
}
.show-market img:hover {
    transform: scale3d(1.05, 1.05, 1);
    cursor: pointer;
}
@media (max-width: 576.98px) {
    .mar {
        margin-top: 47vh;
        margin-bottom: 4vh;
    }
}
@media (max-width: 500.98px) {
    .mar {
        margin-top: 35vh;
        margin-bottom: 4vh;
    }
}
@media (max-width: 435.98px) {
    .mar {
        margin-top: 5vh;
        margin-bottom: 4vh;
    }
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .show-market {
        height: 180px;
        width: calc(96% / 3);
    }
    .mar .show-market:nth-child(2),
    .mar .show-market:nth-child(3) {
        display: none;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .show-market {
        height: 180px;
        width: calc(96% / 5);
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .show-der .img img {
        height: 200px;
        width: 550px;
        margin-top: 40px;
        margin-bottom: 100px;
        text-align: center;
    }
    .show-market {
        height: 200px;
        width: calc(96% / 5);
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
    font-size: 16px;
    font-weight: bold;
    color: #5e4949;
}
.last-subscriber {
    height: 680px;
    background-color: #d4cccc;
    position: relative;
    padding-top: 10px;
    border-radius: 5px;
}
.carousel-inner {
    background-color: #ffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
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
    top: 160px;
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
        width: 100%;
        text-align: center;
        margin-left: 0%;
    }
    .carousel-inner {
        box-shadow: none;
        overflow: visible;
    }
    .last-subscriber .subscriber {
        width: 85%;
        margin: 10px 0 -4px 21px;
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
        height: 475px;
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
        height: 545px;
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
.two-img {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
}
.imges1 img {
    width: 170px;
    transition: all 0.5s;
}
.imges2 img {
    width: 170px;
    transition: all 0.5s;
}
.imges1 img:hover {
    transform: scale3d(1.05, 1.05, 1);
}
.imges2 img:hover {
    transform: scale3d(1.05, 1.05, 1);
}
.imgs {
    max-width: 600px;
}
.imgs img {
    transition: all 0.5s;
}
.imgs img:hover {
    transform: scale3d(1.05, 1.05, 1);
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .imges1,
    .imges2 {
        display: none;
    }
    .imgs {
        display: none;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .imges1,
    .imges2 {
        display: none;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .two-img {
        height: 240px;
    }
    .imges1 img {
        width: 100px;
    }
    .imges2 img {
        width: 100px;
    }
    .imgs {
        max-width: 550px;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .two-img {
        height: 335px;
    }
    .imges1 img {
        width: 150px;
    }
    .imges2 img {
        width: 150px;
    }
    .imgs {
        max-width: 550px;
    }
}
/* Extra large devices (large desktops, 1200px and up)  */
@media (min-width: 1200px) {
    .imges1 img {
        width: 180px;
    }
    .imges2 img {
        width: 180px;
    }
}
/* ________________________________ End Products _______________________________*/
</style>

<script>
import { mapState } from 'vuex';
import { defineAsyncComponent } from 'vue';
export default {
    data() {
        return {
            urll: '/img/',
        };
    },
    name: 'products',
    components: {
        // BodyProduct: defineAsyncComponent(() =>import(`@/components/global/BodyProduct.vue`),),
        Subscriber: defineAsyncComponent(() =>
            import(`@/components/global/Subscriber.vue`)
        ),
        Cartmini: defineAsyncComponent(() =>
            import(`@/components/cart/Cartmini.vue`)
        ),
    },
    props: {
        type: String,
    },

    computed: {
        ...mapState([
            'Product',
            'brands',
            'Brands',
            'categories',
            'Stores',
            'lastStores',
        ]),
    },
    mounted() {
        this.$store.dispatch('loadProducts');
        this.$store.dispatch('loadStores');
        this.$store.dispatch('loadBrands');
    },
};
</script>
