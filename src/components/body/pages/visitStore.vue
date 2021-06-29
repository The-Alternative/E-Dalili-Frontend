<template>
    <div class="visitStore" v-if="store">
        <Cartmini />
        <div
            id="carouselExampleInterval"
            class="carousel slide mb-4 carouselSlide"
            data-ride="carousel"
            style="justify-content: center"
        >
            <div class="carousel-inner text-center">
                <div class="carousel-item active" data-interval="2000">
                    <img
                        src="../../../../public/img/banner-2.jpg"
                        class="d-block w-100 h-50"
                        alt="..."
                    />
                </div>
                <div class="carousel-item">
                    <img
                        src="../../../../public/img/banner-1.jpg"
                        class="d-block w-100 h-30"
                        alt="..."
                    />
                </div>
            </div>
            <a
                class="carousel-control-prev"
                href="#carouselExampleInterval"
                role="button"
                data-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
            </a>
            <a
                class="carousel-control-next"
                href="#carouselExampleInterval"
                role="button"
                data-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="border1 mb-4">
            <div
                class="col-sm-12 detailssmall"
                style="display: flex; padding: 0"
            >
                <div class="col-lg-3 datedetails">
                    <img
                        class="isActive mt-4"
                        src="../../../../public/img/open.png"
                        height="40"
                    />
                    <div class="mt-4">{{ $t('SaturdayFriday') }}</div>
                    <div class="mt-3 row">
                        <div class="row">
                            <div class="mr-2">{{ store.workingHours }}</div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div>{{ $t('SweidaQanawatRoad') }}</div>
                    </div>
                    <hr class="hr" />
                    <div class="drop" id="drop-active" @click="dropactive()">
                        <i class="fa fa-angle-down"></i>
                    </div>
                </div>
                <div class="col-lg-6">
                    <img
                        class="rounded-circle mb-4 profile"
                        src="../../../../public/img/market-logo.png"
                        height="100"
                    />
                    <div class="mt-4 mb-4 title-profile">{{ store.title }}</div>
                </div>
                <div class="col-lg-3 mt-4 pr-0">
                    <div class="textRight">
                        <span>{{ $t('RetailStore') }}</span>
                    </div>
                    <div class="icons mt-3">
                        <div class="row telephone mt-3">
                            <span class="texticon">016315190</span>
                            <img
                                class="ml-2"
                                src="../../../../public/img/telephone.svg"
                                height="20"
                            />
                        </div>
                        <div class="row mt-2 mb-2 phone">
                            <span class="texticon">0930253884</span>
                            <img
                                class="ml-2"
                                src="../../../../public/img/mobile-phone.svg"
                                height="30"
                            />
                        </div>
                        <div class="row">
                            <span class="texticon">{{
                                $t('ContactStore')
                            }}</span>
                            <img
                                class="ml-2"
                                src="../../../../public/img/comments.svg"
                                height="20"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="description" id="description">
                <div class="row mb-2 bottomdetails" id="bottomdetails">
                    <div class="rowimg">
                        <div class="socail-menu col mb-3">
                            <a
                                ><img
                                    class="location mr-2 ml-2"
                                    src="../../../../public/img/location.png"
                                    height="20"
                            /></a>
                            <a
                                ><img
                                    class="instagram mr-2"
                                    src="../../../../public/img/instagram-new.png"
                                    height="30"
                            /></a>
                            <a
                                ><img
                                    class="whatsapp mr-2"
                                    src="../../../../public/img/whatsapp.png"
                                    height="30"
                            /></a>
                            <a
                                ><img
                                    class="telegram mr-2"
                                    src="../../../../public/img/telegram-app.png"
                                    height="30"
                            /></a>
                            <a
                                ><img
                                    class="facebook"
                                    src="../../../../public/img/facebook-new.png"
                                    height="30"
                            /></a>
                        </div>
                        <div class="col imgdiliver mb-3">
                            <img
                                class="MaskGroup"
                                src="../../../../public/img/MaskGroup.png"
                                height="30"
                            />
                            <img
                                class="Group"
                                src="../../../../public/img/Group.png"
                                height="30"
                            />
                        </div>
                    </div>
                    <div class="col">
                        <div
                            class="textFollow"
                            id="textFollow"
                            @click="heart()"
                        >
                            <span class="heart mr-2 mt-2" id="heart"></span>
                            <span class="follow mr-4" id="follow">{{
                                $t('Continue')
                            }}</span>
                        </div>
                    </div>
                    <div class="likecount">
                        <div class="col cartlike">
                            <router-link to="/Cart">
                                <span
                                    class="fa fa-cart-plus fa-2x cart mr-4"
                                ></span>
                            </router-link>
                            <span
                                class="far fa-thumbs-down fa-2x dislike"
                                id="dislikebtn"
                                @click="dislikebtn()"
                            ></span>
                            <span
                                class="far fa-thumbs-up fa-2x like"
                                id="likebtn"
                                @click="likebtn()"
                            ></span>
                        </div>
                        <div class="col count mt-2">
                            <span class="followCount">2800</span>
                            <span class="textcount mt-5">{{
                                $t('Followers')
                            }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="nav" class="naver">
            <div class="container">
                <div class="row text-center">
                    <div class="col-lg-12" style="padding: 0">
                        <div>
                            <button type="button" class="btn btn-light light1">
                                <a>{{ $t('MyPurchases') }}</a>
                            </button>
                        </div>
                        <div>
                            <button type="button" class="btn light1">
                                <a>{{ $t('Events') }}</a>
                            </button>
                        </div>
                        <div>
                            <button type="button" class="btn btn-light light1">
                                <a>{{ $t('NewStore') }}</a>
                            </button>
                        </div>
                        <div>
                            <button type="button" class="btn light1">
                                <a>{{ $t('Jobs') }}</a>
                            </button>
                        </div>
                        <div class="img">
                            <button
                                type="button"
                                class="btn btn-light sel light1"
                            >
                                <a>{{ $t('StoreOffers') }}</a>
                            </button>
                        </div>
                        <div class="">
                            <button type="button" class="btn light1">
                                <a>{{ $t('Allsections') }}</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="homeborder">
            <div class="all-section">
                <span class="text">{{ $t('Allsections') }}</span>
            </div>
            <div class="row align-middle" style="height: 80%">
                <div
                    class="col-md-6 col-lg-3 col-xs-3 mb-4 column"
                    v-for="catog in store.section"
                    :key="catog.id"
                    :slug="catog.slug"
                    :image="catog.image"
                    :name="catog.name"
                    :category="catog.category"
                    style="width: 50%"
                >
                    <div class="card">
                        <div class="txt">
                            <h1>{{ catog.name }}</h1>
                        </div>
                        <router-link>{{ $t('More') }}</router-link>
                        <div class="ico-card mt-2">
                            <img :src="catog.image" height="60%" width="80%" />
                            <i class="fa fa-rebel"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="show-der mb-4">
            <div class="row">
                <div
                    class="col-lg-6 img text-center"
                    v-for="brand in brands.slice(7, 9)"
                    :key="brand.id"
                    :image="brand.image"
                >
                    <img src="../../../../public/img/S1.png" />
                </div>
            </div>
        </div>
        <div class="mar mb-4">
            <div class="all-section">
                <span class="text">{{ $t('TheFamousBrands') }}</span>
            </div>
            <div
                class="show-market"
                v-for="item in store.brand.slice(0, 5)"
                :key="item.id"
            >
                <img :src="item.image" height="20%" width="80%" />
            </div>
        </div>
        <!-- show  products -->
        <div class="show-prod">
            <div class="all-section">
                <span class="text">{{ $t('LatestSearches') }}</span>
            </div>
            <div class="row mt-2">
                <BodyProductStore
                    v-for="items in store.product"
                    :key="items.pr"
                    :id="items.id"
                    :name="items.name"
                    :image="items.image"
                    :long_des="items.long_des"
                    :short_des="items.short_des"
                    :store_product="items.store_product"
                >
                </BodyProductStore>
            </div>
        </div>
        <div
            class="col-lg-12 col-md-12 col-sm-12 mb-5 mt-5 visiter text-center"
        >
            <ul>
                {{
                    $t('Thevisits')
                }}
                <br />
                <li>0</li>
                <li>0</li>
                <li>1</li>
                <li>4</li>
                <li>7</li>
                <li>9</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { defineAsyncComponent } from 'vue';
export default {
    name: 'visitStore',
    props: ['id'],
    components: {
        BodyProductStore: defineAsyncComponent(() =>
            import(`./BodyProductStore.vue`)
        ),
        Cartmini: defineAsyncComponent(() =>
            import(`@/components/cart/Cartmini.vue`)
        ),
    },
    computed: {
        ...mapState(['store', 'brands']),
    },
    mounted() {
        this.$store.dispatch('loadstore', this.id);
        // <!--        this.$store.dispatch('loadStoreDetailsProduct', this.id);-->
    },
    methods: {
        heart: function () {
            document
                .getElementById('textFollow')
                .classList.toggle('heart-active');
            document.getElementById('follow').classList.toggle('heart-active');
            document.getElementById('heart').classList.toggle('heart-active');
        },
        dropactive: function () {
            document
                .getElementById('drop-active')
                .classList.toggle('drop-rotate');
            document
                .getElementById('description')
                .classList.toggle('drop-active');
        },
        likebtn: function () {
            document.getElementById('likebtn').classList.toggle('');
        },
    },
};
</script>
<style lang="scss" scoped>
* {
    transition: 0.5s;
}
@media (min-width: 200px) and (max-width: 367px) {
    ///start details store///
    .border1 {
        position: relative;
        overflow: hidden;
        margin: 10px;
        border-radius: 40px 0 40px 0;
        border: 2px solid rgb(236, 158, 95);
        max-width: 100%;
        max-height: 100%;
        background-color: #ffffff;
        box-shadow: 10px 10px 10px #f1c685;
    }
    .border1:hover {
        border: 1px solid #ffffff;
        border-radius: 40px 0 40px 0;
        box-shadow: 3px 3px 3px 3px #f1c685;
    }
    .detailssmall {
        display: flex;
        flex-direction: column-reverse;
    }
    .profile {
        border-radius: 250px;
        border: 2px solid rgb(231, 179, 102);
        margin-top: 40px;
        transition: all 0.5s;
    }
    .profile:hover {
        transform: scale3d(1.05, 1.05, 3);
    }
    .isActive {
        padding-left: 0;
    }
    .textRight {
        border-radius: 6px 0 0 6px;
        margin-right: 0;
        font-size: 3vh;
        background-color: rgb(144, 148, 147);
        margin-left: 120px;
        border: 2px solid rgb(144, 148, 147);
    }
    .drop {
        position: absolute;
        bottom: 5px;
        display: flex;
        border-radius: 40px;
        background: rgb(199, 175, 39);
        justify-content: center;
    }
    .drop i {
        display: block;
        cursor: pointer;
        font-size: 1.8rem;
        transition: all 0.8s ease-in-out;
    }
    .drop i:hover {
        color: rgb(134, 133, 133);
    }
    .drop-active {
        height: 400px !important;
        justify-content: center;
        margin-left: 18%;
    }
    .drop-rotate {
        transform: rotate(180deg);
    }
    .hr {
        display: none;
    }
    .icons {
        display: inline;
        margin-top: 20px;
    }
    .texticon {
        margin-left: 30px;
    }
    .phone {
        margin-left: 30px;
    }
    .telephone {
        margin-left: 30px;
    }
    .bottomdetails {
        position: absolute;
        z-index: 1;
        display: flex;
        flex-direction: column-reverse;
    }
    .like {
        margin-top: 20px;
        margin-bottom: 20px;
        color: #2f7cc5;
    }
    .dislike {
        margin-top: 20px;
        margin-bottom: 20px;
        color: #2f7cc5;
    }
    .cart {
        margin-top: 20px;
        margin-bottom: 20px;
        color: #2f7cc5;
    }
    .heart {
        color: red;
    }
    .followCount {
        font-size: 3vh;
        max-width: 50px;
        text-align: center;
        margin-left: 20px;
        margin-bottom: 20px;
        border-radius: 6px 0 6px 0;
        background-color: rgb(199, 175, 39);
        border: 2px solid rgb(199, 175, 39);
    }
    .socail-menu img:hover {
        transform: translate(0, -10px);
    }
    .textFollow {
        cursor: pointer;
        border-radius: 5px;
        border: 2px solid #eae2e1;
        display: flex;
        max-width: 100%;
        text-align: center;
        margin: auto;
        align-items: center;
        justify-content: center;
    }
    .textFollow .heart {
        width: 70px;
        height: 70px;
        background: url('../../../../public/img/heart.png') no-repeat;
        background-position: left;
        background-size: 2900%;
        position: absolute;
        top: 40%;
        left: 25%;
        transform: translate(-30%, -55%);
    }
    .follow {
        font-size: 3vh;
        margin-bottom: 10px;
        margin-top: 10px;
        margin-left: 40px;
        color: grey;
    }
    .heart.heart-active {
        background-position: right;
        animation: animate 0.8s steps(28) 1;
    }
    @keyframes animate {
        0% {
            background-position: left;
        }
        100% {
            background-position: right;
        }
    }
    .textFollow.heart-active {
        border-color: #f9b9c4;
        background: #fbd0d8;
    }
    .follow.heart-active {
        color: black;
    }
    .followCount {
        font-size: 3vh;
        margin-top: 20px;
        margin-right: 10px;
        border-radius: 6px 0 6px 0;
        background-color: rgb(199, 175, 39);
        border: 2px solid rgb(199, 175, 39);
    }
    .count {
        margin-bottom: 20px;
    }
    .like {
        color: #004eff;
        cursor: pointer;
    }
    .dislike {
        color: #004eff;
        cursor: pointer;
    }
    .like:active {
        /* content:'\f164'; */
        color: #004eff;
        background-color: #004eff;
        transform: scale(1.2);
    }
    .dislike:active {
        color: #004eff;
        background-color: #004eff;
        transform: scale(1.2);
    }
    ///end details store///
    ///start slide///
    .carouselSlide {
        margin: 20px;
    }
    .carousel-inner {
        width: 100%;
    }
    .carousel-control-next,
    .carousel-control-prev {
        height: 50px;
    }
    .carousel-control-next-icon,
    .carousel-control-prev-icon {
        border: 1px solid #c7c7c7;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        background-color: #caabab;
        top: 40px;
        position: absolute;
    }
    .carousel-inner {
        background-color: #ffff;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 30px 0 rgba(0, 0, 0, 0.19);
    }
    .socail-menu img {
        transition: 0.6s;
        cursor: pointer;
        border-radius: 250px;
        width: 25px;
        height: 30px;
    }
    .socail-menu {
        margin-top: 20px;
    }
    .imgdiliver {
        margin-top: 20px;
    }
    ///end slide///
    ////start navbar store///
    .naver {
        background-color: #a7a6a6;
        padding: 5px 0 5px 0;
        margin: 5px 0 5px 0;
    }
    .naver .row .col-lg-12 div {
        margin: 5px 5px;
        display: inline-block;
    }
    .naver .row .light1 {
        min-width: 150px;
        height: 29px;
        color: #635f5f;
        padding: 0 10px;
    }
    .btn:hover {
        transform: scale3d(1.1, 1.1, 1.1);
    }
    .naver .img::before {
        content: url('../../../../public/img/icon-button.png');
        position: absolute;
        top: 68%;
    }
    .naver .row .sell {
        color: #f6ef19;
        margin-left: 30px;
        height: 29px;
    }
    ///end navbar store///
    ///start card categories///
    .text {
        border: 1px solid #a5a0a0;
        border-radius: 0 3px 0 10px;
        background-color: #a5a0a0;
    }
    .all-section {
        text-align: right;
        color: #434346;
    }
    .align-middle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        right: 10%;
        left: 10%;
        width: 100%;
        position: relative;
        top: 50%;
    }
    .column {
        display: inline-block;
        margin-top: 3rem;
        padding-left: 3rem;
        &:hover {
            padding-left: 0;
            .card .txt {
                margin-left: 1rem;
                h1 {
                    color: rgb(8, 8, 8);
                    opacity: 1;
                }
            }
            a {
                color: rgba(8, 8, 8, 1);
                &:after {
                    width: 10%;
                }
            }
        }
    }
    .card {
        min-height: 160px;
        min-width: 150px;
        margin: auto;
        padding: 1.7rem 1.2rem;
        border: none;
        border-radius: 0;
        color: rgba(0, 0, 0, 1);
        letter-spacing: 0.05rem;
        font-family: 'Oswald', sans-serif;
        box-shadow: 0 0 21px rgba(0, 0, 0, 0.27);
        .txt {
            margin-left: 1rem;
            margin-top: 7rem;
            z-index: 1;
            h1 {
                font-size: 1rem;
                font-weight: 300;
                text-transform: uppercase;
            }
            p {
                font-size: 0.7rem;
                font-family: 'Open Sans', sans-serif;
                letter-spacing: 0rem;
                margin-top: 33px;
                opacity: 0;
                color: rgba(255, 255, 255, 1);
            }
        }
        a {
            z-index: 3;
            font-size: 0.7rem;
            color: rgba(0, 0, 0, 1);
            margin-left: 1rem;
            position: relative;
            bottom: -0.5rem;
            text-transform: uppercase;
            &:after {
                content: '';
                display: inline-block;
                height: 0.5em;
                width: 0;
                margin-right: -100%;
                margin-left: 10px;
                border-top: 1px solid rgba(255, 255, 255, 1);
                transition: 0.5s;
            }
        }
        .ico-card {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 92%;
            overflow: hidden;
        }
        i {
            position: relative;
            right: -50%;
            top: 60%;
            font-size: 12rem;
            line-height: 0;
            opacity: 0.2;
            color: rgba(255, 255, 255, 1);
            z-index: 0;
        }
    }
    .homeborder {
        background-color: #fefefe;
        margin: 20px 20px 20px 20px;
        border-radius: 10px;
        box-shadow: 3px 3px 3px 3px #c2bdbd;
        height: 80%;
    }
    ///end card categories///
    ///start brand///
    .row {
        justify-content: center;
    }
    .show-img .row .img {
        text-align: center;
        transition: all 0.5s;
    }
    .show-img .row .img:hover {
        transform: scale3d(1.05, 1.05, 1);
    }
    .show-img .row .img img {
        margin: 10px 0 10px 0;
    }
    .show-der {
        height: 240px;
    }
    .show-der .img img {
        width: 90%;
        height: 180px;
    }
    .show-der .img:last-child {
        display: none;
    }
    ///end brand///
    ///start brand market///
    .show-market {
        background-color: #fff;
        width: 100%;
        border-radius: 7px;
    }
    .show-market img {
        width: 50%;
        height: 100px;
    }
    .mar {
        background-color: #fefefe;
        margin: 0 20px;
        border-radius: 10px;
        box-shadow: 3px 3px 3px 3px #c2bdbd;
    }
    ///end brand market
    ///start product
    .show-prod {
        height: 410px;
    }
    .row {
        justify-content: center;
    }
    .show-prod {
        margin-bottom: 20%;
        background-color: #fefefe;
        height: 100%;
        margin: 20px 20px;
        border-radius: 10px;
        box-shadow: 3px 3px 3px 3px #c2bdbd;
    }
    ///end product
    //start visiter store///
    .visiter ul {
        list-style: none;
        margin: 0;
        font-size: 18px;
    }
    .visiter li {
        width: 15px;
        height: 29px;
        display: inline-block;
        margin: 0.5vh;
        background-color: #aca6a6;
        border-radius: 10px;
    }
    //end visiter store
}
@media (min-width: 368px) and (max-width: 510px) {
    ///start details store///
    .border1 {
        position: relative;
        overflow: hidden;
        margin: 10px;
        border-radius: 40px 0 40px 0;
        border: 2px solid rgb(236, 158, 95);
        max-width: 100%;
        height: 100%;
        background-color: #ffffff;
        box-shadow: 10px 10px 10px #f1c685;
    }
    .border1:hover {
        border: 1px solid #ffffff;
        border-radius: 40px 0 40px 0;
        box-shadow: 3px 3px 3px 3px #f1c685;
    }
    .detailssmall {
        display: flex;
        flex-direction: column-reverse;
    }
    .profile {
        border-radius: 250px;
        border: 2px solid rgb(231, 179, 102);
        margin-top: 40px;
        transition: all 0.5s;
    }
    .profile:hover {
        transform: scale3d(1.05, 1.05, 3);
    }
    .drop {
        position: absolute;
        bottom: 5px;
        // width: 100%;
        display: flex;
        border-radius: 40px;
        background: rgb(199, 175, 39);
        justify-content: center;
    }
    .drop i {
        display: block;
        cursor: pointer;
        font-size: 1.8rem;
        // color: rgb(204, 204, 204,0.179);
        transition: all 0.8s ease-in-out;
    }
    .drop i:hover {
        color: rgb(134, 133, 133);
    }
    .drop-active {
        height: 400px !important;
        justify-content: center;
        margin-left: 30%;
    }
    .drop-rotate {
        transform: rotate(180deg);
    }
    .hr {
        display: none;
    }
    .isActive {
        padding-left: 0;
    }
    .textRight {
        border-radius: 6px 0 0 6px;
        margin-right: 0;
        font-size: 4vh;
        background-color: rgb(144, 148, 147);
        margin-left: 250px;
        border: 2px solid rgb(144, 148, 147);
    }
    .icons {
        display: inline;
        margin-top: 20px;
    }
    .texticon {
        margin-left: 180px;
    }
    .phone {
        margin-left: 30px;
    }
    .telephone {
        margin-left: 30px;
    }
    .bottomdetails {
        position: absolute;
        z-index: 1;
        display: flex;
        flex-direction: column-reverse;
        transition: 0.2s ease-in-out;
    }
    .socail-menu {
        margin-top: 20px;
    }
    .like {
        margin-top: 20px;
        margin-bottom: 20px;
        color: #2f7cc5;
    }
    .dislike {
        margin-top: 20px;
        margin-bottom: 20px;
        color: #2f7cc5;
    }
    .cart {
        margin-top: 20px;
        margin-bottom: 20px;
        color: #2f7cc5;
    }
    .heart {
        color: red;
    }
    .followCount {
        font-size: 4vh;
        max-width: 50px;
        text-align: center;
        margin: auto;
        margin-bottom: 20px;
        border-radius: 6px 0 6px 0;
        background-color: rgb(199, 175, 39);
        border: 2px solid rgb(199, 175, 39);
    }
    .socail-menu img:hover {
        transform: translate(0, -10px);
    }
    .textFollow {
        cursor: pointer;
        border-radius: 5px;
        border: 2px solid #eae2e1;
        display: flex;
        max-width: 150px;
        text-align: center;
    }
    .textFollow .heart {
        width: 80px;
        height: 80px;
        background: url('../../../../public/img/heart.png') no-repeat;
        background-position: left;
        background-size: 2900%;
        position: absolute;
        top: 50%;
        left: 20%;
        transform: translate(-30%, -55%);
    }
    .follow {
        font-size: 4vh;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 60px;
        color: grey;
    }
    .heart.heart-active {
        background-position: right;
        animation: animate 0.8s steps(28) 1;
    }
    @keyframes animate {
        0% {
            background-position: left;
        }
        100% {
            background-position: right;
        }
    }
    .textFollow.heart-active {
        border-color: #f9b9c4;
        background: #fbd0d8;
    }
    .follow.heart-active {
        color: black;
    }
    .followCount {
        font-size: 3vh;
        margin-top: 20px;
        border-radius: 6px 0 6px 0;
        background-color: rgb(199, 175, 39);
        border: 2px solid rgb(199, 175, 39);
    }
    .count {
        display: flex;
        flex-direction: column-reverse;
        margin-bottom: 20px;
    }
    .like {
        color: #004eff;
        cursor: pointer;
    }
    .dislike {
        color: #004eff;
        cursor: pointer;
    }
    .like:active {
        /* content:'\f164'; */
        color: #004eff;
        background-color: #004eff;
        transform: scale(1.2);
    }
    .dislike:active {
        color: #004eff;
        background-color: #004eff;
        transform: scale(1.2);
    }
    .imgdiliver {
        margin-top: 20px;
    }
    ///end details store///
    ///start slide///
    .carouselSlide {
        margin: 20px;
    }
    .carousel-inner {
        width: 100%;
    }
    .carousel-control-next,
    .carousel-control-prev {
        height: 50px;
    }
    .carousel-control-next-icon,
    .carousel-control-prev-icon {
        border: 1px solid #c7c7c7;
        border-radius: 50%;
        width: 20px;
        height: 30px;
        background-color: #caabab;
        top: 80px;
        position: absolute;
    }
    .carousel-inner {
        background-color: #ffff;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 30px 0 rgba(0, 0, 0, 0.19);
    }
    .socail-menu img {
        transition: 0.6s;
        cursor: pointer;
        border-radius: 250px;
        width: 25px;
        height: 30px;
    }
    .imgdiliver {
        margin-top: 20px;
    }
    ///end slide///
    ////start navbar store///
    .naver {
        background-color: #a7a6a6;
        padding: 5px 0 5px 0;
        margin: 5px 0 5px 0;
    }
    .naver .row .col-lg-12 div {
        margin: 5px 5px;
        display: inline-block;
    }
    .naver .row .light1 {
        min-width: 150px;
        height: 29px;
        color: #635f5f;
        padding: 0 10px;
    }
    .btn:hover {
        transform: scale3d(1.1, 1.1, 1.1);
    }
    .naver .img::before {
        content: url('../../../../public/img/icon-button.png');
        position: absolute;
        top: 70%;
    }
    .naver .row .sell {
        color: #f6ef19;
        margin-left: 30px;
        height: 29px;
    }
    ///end navbar store///
    ///start card categories///
    .text {
        border: 1px solid #a5a0a0;
        border-radius: 0 3px 0 10px;
        background-color: #a5a0a0;
    }
    .all-section {
        text-align: right;
        color: #434346;
    }
    .align-middle {
        right: 8%;
        position: relative;
        top: 50%;
    }
    .column {
        margin-top: 3rem;
        padding-left: 3rem;
        &:hover {
            padding-left: 0;
            .card .txt {
                margin-left: 1rem;
                h1 {
                    color: rgb(8, 8, 8);
                    opacity: 1;
                }
            }
            a {
                color: rgba(8, 8, 8, 1);
                &:after {
                    width: 10%;
                }
            }
        }
    }
    .card {
        min-height: 170px;
        min-width: 150px;
        margin: auto;
        padding: 1.7rem 1.2rem;
        border: none;
        border-radius: 0;
        color: rgba(0, 0, 0, 1);
        letter-spacing: 0.05rem;
        font-family: 'Oswald', sans-serif;
        box-shadow: 0 0 21px rgba(0, 0, 0, 0.27);
        .txt {
            margin-left: 1rem;
            margin-top: 8rem;
            z-index: 1;
            h1 {
                font-size: 1.2rem;
                font-weight: 300;
                text-transform: uppercase;
            }
            p {
                font-size: 0.7rem;
                font-family: 'Open Sans', sans-serif;
                letter-spacing: 0rem;
                margin-top: 33px;
                opacity: 0;
                color: rgba(255, 255, 255, 1);
            }
        }
        a {
            z-index: 3;
            font-size: 0.7rem;
            color: rgba(0, 0, 0, 1);
            margin-left: 1rem;
            position: relative;
            bottom: -0.5rem;
            text-transform: uppercase;
            &:after {
                content: '';
                display: inline-block;
                height: 0.5em;
                width: 0;
                margin-right: -100%;
                margin-left: 10px;
                border-top: 1px solid rgba(255, 255, 255, 1);
                transition: 0.5s;
            }
        }
        .ico-card {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 92%;
            overflow: hidden;
        }
        i {
            position: relative;
            right: -50%;
            top: 60%;
            font-size: 12rem;
            line-height: 0;
            opacity: 0.2;
            color: rgba(255, 255, 255, 1);
            z-index: 0;
        }
    }
    .homeborder {
        background-color: #fefefe;
        margin: 20px 20px 20px 20px;
        border-radius: 10px;
        box-shadow: 3px 3px 3px 3px #c2bdbd;
        height: 80%;
    }
    ///end card categories///
    ///start brand///
    .row {
        justify-content: center;
    }
    .show-img .row .img {
        text-align: center;
        transition: all 0.5s;
    }
    .show-img .row .img:hover {
        transform: scale3d(1.05, 1.05, 1);
    }
    .show-img .row .img img {
        margin: 20px 0 20px 0;
    }
    .show-der {
        height: 240px;
    }
    .show-der .img img {
        width: 80%;
        height: 180px;
    }
    .show-der .img:last-child {
        display: none;
    }
    ///end brand///
    ///start brand market///
    .show-market {
        background-color: #fff;
        width: 100%;
        border-radius: 7px;
    }
    .show-market img {
        width: 50%;
        height: 150px;
    }
    .mar {
        background-color: #fefefe;
        margin: 0 20px;
        border-radius: 10px;
        box-shadow: 3px 3px 3px 3px #c2bdbd;
    }
    ///end brand market
    ///start product
    .show-prod {
        height: 410px;
    }
    .row {
        justify-content: center;
    }
    .show-prod {
        margin-bottom: 20%;
        background-color: #fefefe;
        margin: 20px 20px;
        height: 100%;
        border-radius: 10px;
        box-shadow: 3px 3px 3px 3px #c2bdbd;
    }
    ///end product
    //start visiter store///
    .visiter ul {
        list-style: none;
        margin: 0;
        font-size: 18px;
    }
    .visiter li {
        width: 15px;
        height: 29px;
        display: inline-block;
        margin: 0.5vh;
        background-color: #aca6a6;
        border-radius: 10px;
    }
    //end visiter store
}
@media (min-width: 511px) and (max-width: 767px) {
    ///start details store///
    .border1 {
        position: relative;
        overflow: hidden;
        margin: 10px;
        border-radius: 40px 0 40px 0;
        border: 2px solid rgb(236, 158, 95);
        max-width: 100%;
        height: 100%;
        background-color: #ffffff;
        box-shadow: 10px 10px 10px #f1c685;
    }
    .border1:hover {
        border: 1px solid #ffffff;
        border-radius: 40px 0 40px 0;
        box-shadow: 3px 3px 3px 3px #f1c685;
    }
    .detailssmall {
        display: flex;
        flex-direction: column-reverse;
    }
    .profile {
        border-radius: 250px;
        border: 2px solid rgb(231, 179, 102);
        margin-top: 40px;
        transition: all 0.5s;
    }
    .profile:hover {
        transform: scale3d(1.05, 1.05, 3);
    }
    .drop {
        position: absolute;
        bottom: 5px;
        display: flex;
        border-radius: 40px;
        background: rgb(199, 175, 39);
        justify-content: center;
    }
    .drop i {
        display: block;
        cursor: pointer;
        font-size: 1.8rem;
        // color: rgb(204, 204, 204,0.179);
        transition: all 0.8s ease-in-out;
    }
    .drop i:hover {
        color: rgb(134, 133, 133);
    }
    .drop-active {
        height: 400px !important;
        justify-content: center;
        margin-left: 30%;
    }
    .drop-rotate {
        transform: rotate(180deg);
    }
    .description {
        right: 10%;
        left: 10%;
    }
    .hr {
        display: none;
    }
    .isActive {
        padding-left: 0;
    }
    .textRight {
        border-radius: 6px 0 0 6px;
        margin-right: 0;
        font-size: 4vh;
        background-color: rgb(144, 148, 147);
        margin-left: 80%;
        border: 2px solid rgb(144, 148, 147);
    }
    .icons {
        display: inline;
        margin-top: 20px;
    }
    .texticon {
        margin-left: 70%;
    }
    .phone {
        margin-left: 18%;
    }
    .telephone {
        margin-left: 18%;
    }
    .bottomdetails {
        position: absolute;
        z-index: 1;
        display: flex;
        flex-direction: column-reverse;
        transition: 0.2s ease-in-out;
    }
    .socail-menu {
        margin-top: 20px;
    }
    .like {
        margin-top: 20px;
        margin-bottom: 20px;
        color: #2f7cc5;
    }
    .dislike {
        margin-top: 20px;
        margin-bottom: 20px;
        color: #2f7cc5;
    }
    .cart {
        margin-top: 20px;
        margin-bottom: 20px;
        color: #2f7cc5;
    }
    .heart {
        color: red;
    }
    .followCount {
        font-size: 6vh;
        max-width: 80%;
        text-align: center;
        margin: auto;
        margin-bottom: 20px;
        border-radius: 6px 0 6px 0;
        background-color: rgb(199, 175, 39);
        border: 2px solid rgb(199, 175, 39);
    }
    .socail-menu img:hover {
        transform: translate(0, -10px);
    }
    .textFollow {
        cursor: pointer;
        border-radius: 5px;
        border: 2px solid #eae2e1;
        display: flex;
        max-width: 100%;
    }
    .textFollow .heart {
        width: 80px;
        height: 80px;
        background: url('../../../../public/img/heart.png') no-repeat;
        background-position: left;
        background-size: 2900%;
        position: absolute;
        top: 50%;
        left: 20%;
        transform: translate(-30%, -55%);
    }
    .follow {
        font-size: 4vh;
        margin-bottom: 10px;
        margin-top: 10px;
        margin-left: 50%;
        color: grey;
    }
    .heart.heart-active {
        background-position: right;
        animation: animate 0.8s steps(28) 1;
    }
    @keyframes animate {
        0% {
            background-position: left;
        }
        100% {
            background-position: right;
        }
    }
    .textFollow.heart-active {
        border-color: #f9b9c4;
        background: #fbd0d8;
    }
    .follow.heart-active {
        color: black;
    }
    .followCount {
        font-size: 3vh;
        margin-top: 20px;
        border-radius: 6px 0 6px 0;
        background-color: rgb(199, 175, 39);
        border: 2px solid rgb(199, 175, 39);
    }
    .count {
        display: flex;
        flex-direction: column-reverse;
        margin-bottom: 20px;
    }
    .like {
        color: #004eff;
        cursor: pointer;
    }
    .dislike {
        color: #004eff;
        cursor: pointer;
    }
    .like:active {
        color: #004eff;
        background-color: #004eff;
        transform: scale(1.2);
    }
    .dislike:active {
        color: #004eff;
        background-color: #004eff;
        transform: scale(1.2);
    }
    .imgdiliver {
        margin-top: 20px;
    }

    ///end details store///
    ///start slide///
    .carouselSlide {
        margin: 50px;
    }
    .carousel-inner {
        width: 100%;
    }
    .carousel-control-next,
    .carousel-control-prev {
        height: 50px;
    }
    .carousel-control-next-icon,
    .carousel-control-prev-icon {
        border: 1px solid #c7c7c7;
        border-radius: 50%;
        width: 30px;
        height: 50px;
        background-color: #caabab;
        top: 100px;
        position: absolute;
    }
    .carousel-inner {
        background-color: #ffff;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 30px 0 rgba(0, 0, 0, 0.19);
    }
    .socail-menu img {
        transition: 0.6s;
        cursor: pointer;
        border-radius: 250px;
        width: 25px;
        height: 30px;
    }
    ///end slide///
    ////start navbar store///
    .naver {
        background-color: #a7a6a6;
        padding: 5px 0 5px 0;
        margin: 5px 0 5px 0;
    }
    .naver .row .col-lg-12 div {
        margin: 0 5px;
        display: inline-block;
    }
    .naver .row .light1 {
        min-width: 150px;
        height: 29px;
        color: #635f5f;
        padding: 0 10px;
    }
    .btn:hover {
        transform: scale3d(1.1, 1.1, 1.1);
    }
    .naver .img::before {
        content: url('../../../../public/img/icon-button.png');
        position: absolute;
        top: 28px;
    }
    .naver .row .sell {
        color: #f6ef19;
        margin-left: 30px;
        height: 29px;
    }
    ///end navbar store///
    ///start card categories///
    .text {
        border: 1px solid #a5a0a0;
        border-radius: 0 3px 0 10px;
        background-color: #a5a0a0;
    }
    .all-section {
        text-align: right;
        color: #434346;
    }
    .align-middle {
        position: relative;
        top: 50%;
    }
    .column {
        margin-top: 3rem;
        padding-left: 3rem;
        &:hover {
            padding-left: 0;
            .card .txt {
                margin-left: 1rem;
                h1 {
                    color: rgb(8, 8, 8);
                    opacity: 1;
                }
            }
            a {
                color: rgba(8, 8, 8, 1);
                &:after {
                    width: 10%;
                }
            }
        }
    }
    .card {
        min-height: 170px;
        margin: 0;
        padding: 1.7rem 1.2rem;
        border: none;
        border-radius: 0;
        color: rgba(0, 0, 0, 1);
        letter-spacing: 0.05rem;
        font-family: 'Oswald', sans-serif;
        box-shadow: 0 0 21px rgba(0, 0, 0, 0.27);
        .txt {
            margin-left: 1rem;
            margin-top: 12rem;
            z-index: 1;
            h1 {
                font-size: 1.2rem;
                font-weight: 300;
                text-transform: uppercase;
            }
            p {
                font-size: 0.7rem;
                font-family: 'Open Sans', sans-serif;
                letter-spacing: 0rem;
                margin-top: 33px;
                opacity: 0;
                color: rgba(255, 255, 255, 1);
            }
        }
        a {
            z-index: 3;
            font-size: 0.7rem;
            color: rgba(0, 0, 0, 1);
            margin-left: 1rem;
            position: relative;
            bottom: -0.5rem;
            text-transform: uppercase;
            &:after {
                content: '';
                display: inline-block;
                height: 0.5em;
                width: 0;
                margin-right: -100%;
                margin-left: 10px;
                border-top: 1px solid rgba(255, 255, 255, 1);
                transition: 0.5s;
            }
        }
        .ico-card {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 92%;
            overflow: hidden;
        }
        i {
            position: relative;
            right: -50%;
            top: 60%;
            font-size: 12rem;
            line-height: 0;
            opacity: 0.2;
            color: rgba(255, 255, 255, 1);
            z-index: 0;
        }
    }
    .homeborder {
        background-color: #fefefe;
        margin: 20px 20px 20px 20px;
        border-radius: 10px;
        box-shadow: 3px 3px 3px 3px #c2bdbd;
        height: 80%;
    }
    ///end card categories///
    ///start brand///
    .row {
        justify-content: center;
    }
    .show-img .row .img {
        text-align: center;
        transition: all 0.5s;
    }
    .show-img .row .img:hover {
        transform: scale3d(1.05, 1.05, 1);
    }
    .show-img .row .img img {
        margin: 20px 0 20px 0;
    }
    .show-der .img img {
        width: 500px;
    }
    .show-der .img:last-child {
        display: none;
    }
    ///end brand///
    ///start brand market///
    .show-market {
        background-color: #fff;
        width: 100%;
        border-radius: 7px;
    }
    .show-market img {
        width: 80%;
        height: 200px;
    }
    .mar {
        background-color: #fefefe;
        margin: 0 20px;
        border-radius: 10px;
        box-shadow: 3px 3px 3px 3px #c2bdbd;
    }
    ///end brand market
    ///start product
    .show-prod {
        height: 410px;
    }
    .row {
        justify-content: center;
    }
    .show-prod {
        margin-bottom: 30%;
        background-color: #fefefe;
        margin: 20px 20px;
        height: 100%;
        border-radius: 10px;
        box-shadow: 3px 3px 3px 3px #c2bdbd;
    }
    ///end product
    //start visiter store///
    .visiter ul {
        list-style: none;
        margin: 0;
        font-size: 18px;
    }
    .visiter li {
        width: 15px;
        height: 29px;
        display: inline-block;
        margin: 0.5vh;
        background-color: #aca6a6;
        border-radius: 10px;
    }
    //end visiter store
}
@media (min-width: 768px) and (max-width: 991.98px) {
    ///start details store///
    .border1 {
        margin: auto;
        border-radius: 40px 0 40px 0;
        border: 2px solid rgb(236, 158, 95);
        max-width: 90%;
        max-height: 100%;
        background-color: #ffffff;
        box-shadow: 10px 10px 10px #f1c685;
    }
    .border1:hover {
        border: 1px solid #ffffff;
        border-radius: 40px 0 40px 0;
        box-shadow: 3px 3px 3px 3px #f1c685;
    }
    .profile {
        // margin-left: 50px;
        border-radius: 250px;
        border: 2px solid rgb(231, 179, 102);
        margin-top: 40px;
        justify-content: center;
        transition: all 0.5s;
    }
    .profile:hover {
        transform: scale3d(1.05, 1.05, 3);
    }
    // .title-profile {
    //     // margin-left: 30px;
    // }
    .isActive {
        padding-left: 0;
    }
    .textRight {
        border-radius: 6px 0 0 6px;
        margin-right: 0;
        font-size: 4vh;
        background-color: rgb(144, 148, 147);
        margin-left: 110px;
        border: 2px solid rgb(144, 148, 147);
    }
    .icons {
        display: inline;
    }
    .texticon {
        margin-left: 60px;
    }
    .phone {
        margin-left: 30px;
    }
    .telephone {
        margin-left: 30px;
    }
    .like {
        color: #2f7cc5;
    }
    .dislike {
        color: #2f7cc5;
    }
    .cart {
        color: #2f7cc5;
    }
    .heart {
        color: red;
    }
    .followCount {
        font-size: 4vh;
        border-radius: 6px 0 6px 0;
        background-color: rgb(199, 175, 39);
        border: 2px solid rgb(199, 175, 39);
    }
    .socail-menu img:hover {
        transform: translate(0, -10px);
    }
    .rowimg {
        display: flex;
        flex-direction: column-reverse;
    }
    .likecount {
        margin-right: 20px;
        display: flex;
        flex-direction: column-reverse;
    }
    .textFollow {
        cursor: pointer;
        border-radius: 5px;
        border: 2px solid #eae2e1;
        display: flex;
        max-width: 60%;
        margin-left: 80px;
    }
    .textFollow .heart {
        width: 80px;
        height: 80px;
        background: url('../../../../public/img/heart.png') no-repeat;
        background-position: left;
        background-size: 2900%;
        position: absolute;
        top: 20%;
        left: 35%;
        transform: translate(-30%, -55%);
    }
    .follow {
        font-size: 4vh;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 50%;
        color: grey;
    }
    .heart.heart-active {
        background-position: right;
        animation: animate 0.8s steps(28) 1;
    }
    @keyframes animate {
        0% {
            background-position: left;
        }
        100% {
            background-position: right;
        }
    }
    .textFollow.heart-active {
        border-color: #f9b9c4;
        background: #fbd0d8;
    }
    .follow.heart-active {
        color: black;
    }
    .textcount {
        margin: 30px 0 0 30px;
    }
    .like {
        color: #004eff;
        cursor: pointer;
    }
    .dislike {
        color: #004eff;
        cursor: pointer;
    }
    .like:active {
        /* content:'\f164'; */
        color: #004eff;
        background-color: #004eff;
        transform: scale(1.2);
    }
    .dislike:active {
        color: #004eff;
        background-color: #004eff;
        transform: scale(1.2);
    }
    .drop {
        display: none;
    }
    ///end details store///
    ///start slide///
    .carouselSlide {
        margin: 50px;
    }
    .carousel-inner {
        width: 100%;
    }
    .carousel-control-next,
    .carousel-control-prev {
        height: 50px;
    }
    .carousel-control-next-icon,
    .carousel-control-prev-icon {
        border: 1px solid #c7c7c7;
        border-radius: 50%;
        width: 30px;
        height: 60px;
        background-color: #caabab;
        top: 120px;
        position: absolute;
    }
    .carousel-inner {
        background-color: #ffff;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 30px 0 rgba(0, 0, 0, 0.19);
    }
    .socail-menu img {
        transition: 0.6s;
        cursor: pointer;
        border-radius: 250px;
        width: 25px;
        height: 30px;
    }
    ///end slide///
    ////start navbar store///
    .naver {
        background-color: #a7a6a6;
        padding: 5px 0 5px 0;
        margin: 5px 0 5px 0;
    }
    .naver .row .col-lg-12 div {
        margin: 0 5px;
        display: inline-block;
    }
    .naver .row .light1 {
        min-width: 150px;
        height: 29px;
        color: #635f5f;
        padding: 0 10px;
    }
    .btn:hover {
        transform: scale3d(1.1, 1.1, 1.1);
    }
    .naver .img::before {
        content: url('../../../../public/img/icon-button.png');
        position: absolute;
        top: 27px;
    }
    .naver .row .sell {
        color: #f6ef19;
        margin-left: 30px;
        height: 29px;
    }
    ///end navbar store///
    ///start card categories///
    .text {
        border: 1px solid #a5a0a0;
        border-radius: 0 3px 0 10px;
        background-color: #a5a0a0;
    }
    .all-section {
        text-align: right;
        color: #434346;
    }
    .align-middle {
        position: relative;
        top: 50%;
    }
    .column {
        margin-top: 3rem;
        padding-left: 3rem;
        &:hover {
            padding-left: 0;
            .card .txt {
                margin-left: 1rem;
                h1 {
                    color: rgb(8, 8, 8);
                    opacity: 1;
                }
            }
            a {
                color: rgba(8, 8, 8, 1);
                &:after {
                    width: 10%;
                }
            }
        }
    }
    .card {
        min-height: 170px;
        margin: 0;
        padding: 1.7rem 1.2rem;
        border: none;
        border-radius: 0;
        color: rgba(0, 0, 0, 1);
        letter-spacing: 0.05rem;
        font-family: 'Oswald', sans-serif;
        box-shadow: 0 0 21px rgba(0, 0, 0, 0.27);
        .txt {
            margin-left: 1rem;
            margin-top: 18rem;
            z-index: 1;
            h1 {
                font-size: 1.2rem;
                font-weight: 300;
                text-transform: uppercase;
            }
            p {
                font-size: 0.7rem;
                font-family: 'Open Sans', sans-serif;
                letter-spacing: 0rem;
                margin-top: 33px;
                opacity: 0;
                color: rgba(255, 255, 255, 1);
            }
        }
        a {
            z-index: 3;
            font-size: 0.7rem;
            color: rgba(0, 0, 0, 1);
            margin-left: 1rem;
            position: relative;
            bottom: -0.5rem;
            text-transform: uppercase;
            &:after {
                content: '';
                display: inline-block;
                height: 0.5em;
                width: 0;
                margin-right: -100%;
                margin-left: 10px;
                border-top: 1px solid rgba(255, 255, 255, 1);
                transition: 0.5s;
            }
        }
        .ico-card {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 92%;
            overflow: hidden;
        }
        i {
            position: relative;
            right: -50%;
            top: 60%;
            font-size: 12rem;
            line-height: 0;
            opacity: 0.2;
            color: rgba(255, 255, 255, 1);
            z-index: 0;
        }
    }
    .homeborder {
        background-color: #fefefe;
        margin: 20px 20px 20px 20px;
        border-radius: 10px;
        box-shadow: 3px 3px 3px 3px #c2bdbd;
        height: 80%;
    }
    ///end card categories///
    ///start brand///
    .row {
        justify-content: center;
    }
    .show-img .row .img {
        text-align: center;
        transition: all 0.5s;
    }
    .show-img .row .img:hover {
        transform: scale3d(1.05, 1.05, 1);
    }
    .show-img .row .img img {
        margin: 20px 0 20px 0;
    }
    // .show-der .img img {
    //     width: 450px;
    // }
    .show-der .img img {
        width: 600px;
    }
    .show-der .img:last-child {
        display: none;
    }
    ///end brand///
    ///start brand market///
    .mar {
        background-color: #fefefe;
        margin: 0 20px;
        border-radius: 10px;
        box-shadow: 3px 3px 3px 3px #c2bdbd;
    }
    .show-market {
        background-color: #fff;
        width: 100%;
        height: 250px;
        margin-top: 50px;
        border-radius: 7px;
        display: inline;
    }
    .show-market img {
        width: 19%;
        height: 230px;
    }
    .show-prod {
        height: 410px;
    }
    ///end brand market
    ///start product
    .row {
        justify-content: center;
    }
    .show-prod {
        margin-bottom: 20%;
        background-color: #fefefe;
        margin: 20px 20px;
        height: 100%;
        border-radius: 10px;
        box-shadow: 3px 3px 3px 3px #c2bdbd;
    }
    ///end product
    //start visiter store///
    .visiter ul {
        list-style: none;
        margin: 0;
        font-size: 18px;
    }
    .visiter li {
        width: 15px;
        height: 29px;
        display: inline-block;
        margin: 0.5vh;
        background-color: #aca6a6;
        border-radius: 10px;
    }
    //end visiter store
}
@media (min-width: 992px) and (max-width: 1199.98px) {
    ///start details store///
    .border1 {
        margin: auto;
        border-radius: 40px 0 40px 0;
        border: 2px solid rgb(236, 158, 95);
        max-width: 90%;
        max-height: 100%;
        background-color: #ffffff;
        box-shadow: 10px 10px 10px #f1c685;
    }
    .border1:hover {
        border: 1px solid #ffffff;
        border-radius: 40px 0 40px 0;
        box-shadow: 3px 3px 3px 3px #f1c685;
    }
    .profile {
        border-radius: 250px;
        border: 2px solid rgb(231, 179, 102);
        margin-top: 40px;
        transition: all 0.5s;
    }
    .profile:hover {
        transform: scale3d(1.05, 1.05, 3);
    }
    .isActive {
        padding-left: 0;
    }
    .textRight {
        border-radius: 6px 0 0 6px;
        margin-right: 0;
        font-size: 4vh;
        background-color: rgb(144, 148, 147);
        margin-left: 100px;
        border: 2px solid rgb(144, 148, 147);
    }
    .icons {
        // margin-left: 150px;
        display: inline;
    }
    .phone {
        margin-left: 30px;
    }
    .telephone {
        margin-left: 30px;
    }
    .like {
        color: #2f7cc5;
    }
    .dislike {
        color: #2f7cc5;
    }
    .cart {
        color: #2f7cc5;
    }
    .heart {
        color: red;
    }
    .followCount {
        font-size: 4vh;
        border-radius: 6px 0 6px 0;
        background-color: rgb(199, 175, 39);
        border: 2px solid rgb(199, 175, 39);
    }
    .socail-menu img:hover {
        transform: translate(0, -10px);
    }
    .rowimg {
        display: flex;
        flex-direction: column-reverse;
    }
    .drop {
        display: none;
    }
    .likecount {
        margin-right: 20px;
        display: flex;
        flex-direction: column-reverse;
    }
    .textFollow {
        cursor: pointer;
        border-radius: 5px;
        border: 2px solid #eae2e1;
        display: flex;
        max-width: 40%;
        justify-content: center;
        margin-left: 170px;
    }
    .textFollow .heart {
        width: 80px;
        height: 80px;
        background: url('../../../../public/img/heart.png') no-repeat;
        background-position: left;
        background-size: 2900%;
        position: absolute;
        top: 20%;
        left: 40%;
        transform: translate(-30%, -55%);
    }
    .follow {
        font-size: 4vh;
        margin-bottom: 10px;
        margin-top: 10px;
        margin-left: 80px;
        color: grey;
    }
    .heart.heart-active {
        background-position: right;
        animation: animate 0.8s steps(28) 1;
    }
    @keyframes animate {
        0% {
            background-position: left;
        }
        100% {
            background-position: right;
        }
    }
    .textFollow.heart-active {
        border-color: #f9b9c4;
        background: #fbd0d8;
    }
    .follow.heart-active {
        color: black;
    }
    .textcount {
        margin-top: 40px;
        margin-left: 20px;
    }
    .like {
        color: #004eff;
        cursor: pointer;
    }
    .dislike {
        color: #004eff;
        cursor: pointer;
    }
    .like:active {
        /* content:'\f164'; */
        color: #004eff;
        background-color: #004eff;
        transform: scale(1.2);
    }
    .dislike:active {
        color: #004eff;
        background-color: #004eff;
        transform: scale(1.2);
    }
    ///end details store///
    ///start slide///
    .carouselSlide {
        margin: 50px;
    }
    .carousel-inner {
        width: 100%;
    }
    .carousel-control-next,
    .carousel-control-prev {
        height: 50px;
    }
    .carousel-control-next-icon,
    .carousel-control-prev-icon {
        border: 1px solid #c7c7c7;
        border-radius: 50%;
        width: 30px;
        height: 80px;
        background-color: #caabab;
        top: 180px;
        position: absolute;
    }
    .carousel-inner {
        background-color: #ffff;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 30px 0 rgba(0, 0, 0, 0.19);
    }
    .socail-menu img {
        transition: 0.6s;
        cursor: pointer;
        border-radius: 250px;
        width: 25px;
        height: 30px;
    }
    ///end slide///
    ////start navbar store///
    .naver {
        background-color: #a7a6a6;
        padding: 5px 0 5px 0;
        margin: 5px 0 5px 0;
    }
    .naver .row .col-lg-12 div {
        margin: 0 5px;
        display: inline-block;
    }
    .naver .row .light1 {
        min-width: 150px;
        height: 29px;
        color: #635f5f;
        padding: 0 10px;
    }
    .btn:hover {
        transform: scale3d(1.1, 1.1, 1.1);
    }
    .naver .img::before {
        content: url('../../../../public/img/icon-button.png');
        position: absolute;
        top: -1px;
    }
    .naver .row .sell {
        color: #f6ef19;
        margin-left: 30px;
        height: 29px;
    }
    ///end navbar store///
    ///start card categories///
    .text {
        border: 1px solid #a5a0a0;
        border-radius: 0 3px 0 10px;
        background-color: #a5a0a0;
    }
    .all-section {
        text-align: right;
        color: #434346;
    }
    .align-middle {
        position: relative;
        top: 50%;
    }
    .column {
        margin-top: 3rem;
        padding-left: 3rem;
        &:hover {
            padding-left: 0;
            .card .txt {
                margin-left: 1rem;
                h1 {
                    color: rgb(8, 8, 8);
                    opacity: 1;
                }
            }
            a {
                color: rgba(8, 8, 8, 1);
                &:after {
                    width: 10%;
                }
            }
        }
    }
    .card {
        min-height: 170px;
        margin: 0;
        padding: 1.7rem 1.2rem;
        border: none;
        border-radius: 0;
        color: rgba(0, 0, 0, 1);
        letter-spacing: 0.05rem;
        font-family: 'Oswald', sans-serif;
        box-shadow: 0 0 21px rgba(0, 0, 0, 0.27);
        .txt {
            margin-left: 1rem;
            margin-top: 12rem;
            z-index: 1;
            h1 {
                font-size: 1.2rem;
                font-weight: 300;
                text-transform: uppercase;
            }
            p {
                font-size: 0.7rem;
                font-family: 'Open Sans', sans-serif;
                letter-spacing: 0rem;
                margin-top: 33px;
                opacity: 0;
                color: rgba(255, 255, 255, 1);
            }
        }
        a {
            z-index: 3;
            font-size: 0.7rem;
            color: rgba(0, 0, 0, 1);
            margin-left: 1rem;
            position: relative;
            bottom: -0.5rem;
            text-transform: uppercase;
            &:after {
                content: '';
                display: inline-block;
                height: 0.5em;
                width: 0;
                margin-right: -100%;
                margin-left: 10px;
                border-top: 1px solid rgba(255, 255, 255, 1);
                transition: 0.5s;
            }
        }
        .ico-card {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 92%;
            overflow: hidden;
        }
        i {
            position: relative;
            right: -50%;
            top: 60%;
            font-size: 12rem;
            line-height: 0;
            opacity: 0.2;
            color: rgba(255, 255, 255, 1);
            z-index: 0;
        }
    }
    .homeborder {
        background-color: #fefefe;
        margin: 20px 20px 20px 20px;
        border-radius: 10px;
        box-shadow: 3px 3px 3px 3px #c2bdbd;
    }
    ///end card categories///
    ///start brand///
    .row {
        justify-content: center;
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
    .show-der .img img {
        width: 450px;
    }
    ///end brand///
    ///start brand market///
    .mar {
        background-color: #fefefe;
        margin: 0 20px;
        border-radius: 10px;
        box-shadow: 3px 3px 3px 3px #c2bdbd;
    }
    .show-market {
        background-color: #fff;
        width: 100%;
        height: 250px;
        margin-top: 50px;
        border-radius: 7px;
        display: inline;
    }
    .show-market img {
        width: 19%;
        height: 230px;
    }
    .show-prod {
        height: 410px;
    }
    ///end brand market
    ///start product
    .row {
        justify-content: center;
    }
    .show-prod {
        margin-bottom: 20%;
        background-color: #fefefe;
        margin: 20px 20px;
        height: 100%;
        border-radius: 10px;
        box-shadow: 3px 3px 3px 3px #c2bdbd;
    }
    ///end product
    //start visiter store///
    .visiter ul {
        list-style: none;
        margin: 0;
        font-size: 18px;
    }
    .visiter li {
        width: 15px;
        height: 29px;
        display: inline-block;
        margin: 0.5vh;
        background-color: #aca6a6;
        border-radius: 10px;
    }
    //end visiter store
}
@media (min-width: 1200px) {
    ///start details store///
    .border1 {
        margin: auto;
        border-radius: 40px 0 40px 0;
        border: 2px solid rgb(236, 158, 95);
        max-width: 90%;
        max-height: 100%;
        background-color: #ffffff;
        box-shadow: 10px 10px 10px #f1c685;
    }
    .border1:hover {
        border: 1px solid #ffffff;
        border-radius: 40px 0 40px 0;
        box-shadow: 3px 3px 3px 3px #f1c685;
    }
    .profile {
        border-radius: 250px;
        border: 2px solid rgb(231, 179, 102);
        margin-top: 40px;
        transition: all 0.5s;
        cursor: pointer;
    }
    .isActive {
        padding-left: 0;
    }
    .textRight {
        border-radius: 6px 0 0 6px;
        margin-right: 0;
        font-size: 4vh;
        background-color: rgb(144, 148, 147);
        margin-left: 90px;
        border: 2px solid rgb(144, 148, 147);
    }
    .rowimg {
        display: flex;
    }
    .likecount {
        margin-right: 60px;
        display: flex;
    }
    .socail-menu {
        margin-left: 20px;
        display: flex;
    }
    .cartlike {
        margin-right: 80px;
        display: flex;
    }
    .imgdiliver {
        margin-left: 90px;
    }
    .icons {
        margin-left: 110px;
    }
    .phone {
        margin-left: 30px;
        cursor: pointer;
    }
    .telephone {
        margin-left: 30px;
        cursor: pointer;
    }
    .like {
        color: #2f7cc5;
        cursor: pointer;
    }
    .dislike {
        color: #2f7cc5;
        cursor: pointer;
    }
    .cart {
        color: #2f7cc5;
        cursor: pointer;
    }
    .heart {
        color: red;
    }
    .followCount {
        font-size: 4vh;
        margin-top: 20px;
        border-radius: 6px 0 6px 0;
        background-color: rgb(199, 175, 39);
        border: 2px solid rgb(199, 175, 39);
    }
    .drop {
        display: none;
    }
    .count {
        display: flex;
        flex-direction: column-reverse;
        bottom: 60%;
    }
    .socail-menu img:hover {
        transform: translate(0, -10px);
    }
    .textFollow {
        cursor: pointer;
        border-radius: 5px;
        border: 2px solid #eae2e1;
        display: flex;
        max-width: 80%;
        margin-left: 10px;
    }
    .textFollow .heart {
        width: 100px;
        height: 100px;
        background: url('../../../../public/img/heart.png') no-repeat;
        background-position: left;
        background-size: 2900%;
        position: absolute;
        top: 15%;
        left: 18%;
        transform: translate(-30%, -55%);
    }
    .follow {
        font-size: 4vh;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 40%;
        color: grey;
    }
    .heart.heart-active {
        background-position: right;
        animation: animate 0.8s steps(28) 1;
    }
    @keyframes animate {
        0% {
            background-position: left;
        }
        100% {
            background-position: right;
        }
    }
    .textFollow.heart-active {
        border-color: #f9b9c4;
        background: #fbd0d8;
    }
    .follow.heart-active {
        color: black;
    }
    .like {
        color: #004eff;
        cursor: pointer;
    }
    .dislike {
        color: #004eff;
        cursor: pointer;
    }
    .like:active {
        color: #004eff;
        background-color: #004eff;
        transform: scale(1.2);
    }
    .dislike:active {
        color: #004eff;
        background-color: #004eff;
        transform: scale(1.2);
    }
    ///end details store///
    ///start slide///
    .carouselSlide {
        margin: 50px;
    }
    .carousel-inner {
        width: 100%;
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
        top: 250px;
        position: absolute;
    }
    .carousel-inner {
        background-color: #ffff;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 30px 0 rgba(0, 0, 0, 0.19);
    }
    .socail-menu img {
        transition: 0.6s;
        cursor: pointer;
        border-radius: 250px;
        width: 25px;
        height: 30px;
    }
    ///end slide///
    ////start navbar store///
    .naver {
        background-color: #a7a6a6;
        padding: 5px 0 5px 0;
        margin: 10px 0 10px 0;
    }
    .naver .row .col-lg-12 div {
        margin: 0 10px;
        display: inline-block;
    }
    .naver .row .light1 {
        min-width: 150px;
        height: 29px;
        color: #635f5f;
        padding: 0 10px;
    }
    .btn:hover {
        transform: scale3d(1.1, 1.1, 1.1);
    }
    .naver .img::before {
        content: url('../../../../public/img/icon-button.png');
        position: absolute;
        top: -1px;
    }
    .naver .row .sell {
        color: #f6ef19;
        margin-left: 30px;
        height: 29px;
    }
    ///end navbar store///
    ///start card categories///
    .text {
        border: 1px solid #a5a0a0;
        border-radius: 0 3px 0 10px;
        background-color: #a5a0a0;
    }
    .all-section {
        text-align: right;
        color: #434346;
    }
    .align-middle {
        position: relative;
        top: 50%;
    }
    .column {
        margin-top: 3rem;
        padding-left: 3rem;
        &:hover {
            padding-left: 0;
            .card .txt {
                margin-left: 1rem;
                h1 {
                    color: rgb(8, 8, 8);
                    opacity: 1;
                }
            }
            a {
                color: rgba(8, 8, 8, 1);
                &:after {
                    width: 10%;
                }
            }
        }
    }
    .card {
        min-height: 170px;
        margin: 0;
        padding: 1.7rem 1.2rem;
        border: none;
        border-radius: 0;
        color: rgba(0, 0, 0, 1);
        letter-spacing: 0.05rem;
        font-family: 'Oswald', sans-serif;
        box-shadow: 0 0 21px rgba(0, 0, 0, 0.27);
        .txt {
            margin-left: 1rem;
            margin-top: 12rem;
            z-index: 1;
            h1 {
                font-size: 1rem;
                font-weight: 300;
                text-transform: uppercase;
            }
            p {
                font-size: 0.7rem;
                font-family: 'Open Sans', sans-serif;
                letter-spacing: 0rem;
                margin-top: 33px;
                opacity: 0;
                color: rgba(255, 255, 255, 1);
            }
        }
        a {
            z-index: 3;
            font-size: 0.7rem;
            color: rgba(0, 0, 0, 1);
            margin-left: 1rem;
            position: relative;
            bottom: -0.5rem;
            text-transform: uppercase;
            &:after {
                content: '';
                display: inline-block;
                height: 0.5em;
                width: 0;
                margin-right: -100%;
                margin-left: 10px;
                border-top: 1px solid rgba(255, 255, 255, 1);
                transition: 0.5s;
            }
        }
        .ico-card {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 92%;
            overflow: hidden;
        }
        i {
            position: relative;
            right: -50%;
            top: 60%;
            font-size: 12rem;
            line-height: 0;
            opacity: 0.2;
            color: rgba(255, 255, 255, 1);
            z-index: 0;
        }
    }
    .homeborder {
        background-color: #fefefe;
        margin: 20px 20px 20px 20px;
        border-radius: 10px;
    }
    ///end card categories///
    ///start brand///
    .row {
        justify-content: center;
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
    ///end brand///
    ///start brand market///
    .mar {
        background-color: #fefefe;
        margin: 0 20px;
        border-radius: 10px;
        box-shadow: 3px 3px 3px 3px #c2bdbd;
    }
    .show-market {
        background-color: #fff;
        width: 100%;
        height: 250px;
        margin-top: 50px;
        border-radius: 7px;
        display: inline;
    }
    .show-market img {
        width: 19%;
        height: 230px;
    }

    ///end brand market
    ///start product
    .show-prod {
        height: 410px;
    }
    .row {
        justify-content: center;
    }
    .show-prod {
        margin-bottom: 10%;
        background-color: #fefefe;
        margin: 20px 20px;
        height: 100%;
        border-radius: 10px;
    }
    ///end product
    //start visiter store//
    .visiter ul {
        list-style: none;
        margin: 0;
        font-size: 18px;
    }
    .visiter li {
        width: 15px;
        height: 29px;
        display: inline-block;
        margin: 0.5vh;
        background-color: #aca6a6;
        border-radius: 10px;
    }
    //end visiter store
}
.profile:hover {
    cursor: pointer;
    transform: scale3d(1.05, 1.05, 3);
}
.like:hover {
    cursor: pointer;
    transform: scale3d(1.2, 1.2, 1);
}
.dislike:hover {
    cursor: pointer;
    transform: scale3d(1.2, 1.2, 1);
}
.cart:hover {
    transform: scale3d(1.2, 1.2, 1);
}
.isActive:hover {
    cursor: pointer;
    transform: scale3d(1.2, 1.2, 1);
}
.icons span:hover {
    cursor: pointer;
}
.textFollow:hover {
    background-color: #d3b85f;
}
.show-market {
    background-color: #fff;
    border-radius: 7px;
    margin: 0 2px;
}
.show-market img {
    border-radius: 5%;
    margin: 10px 0;
    transition: all 0.5s;
}
.show-market img:hover {
    transform: scale3d(1.05, 1.05, 1);
    cursor: pointer;
}
</style>
