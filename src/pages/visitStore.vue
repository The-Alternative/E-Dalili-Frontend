<template>
    <div class="visitStore">
        <div
            id="carouselExampleInterval"
            class="carousel slide mb-4 carouselSlide"
            data-ride="carousel"
            style="justify-content: center;"
        >
            <div class="carousel-inner text-center">
                <div class="carousel-item active" data-interval="2000">
                    <img
                        src="../../public/img/banner-2.jpg"
                        class="d-block w-100 h-50"
                        alt="..."
                    />
                </div>
                <div class="carousel-item">
                    <img
                        src="../../public/img/banner-1.jpg"
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
                <div class="col-lg-3 col-sm-3">
                    <img
                        class="isActive mt-4"
                        src="../../public/img/open.png"
                        height="40"
                    />
                    <div class="mt-4">{{ workDays }}</div>
                    <div class="mt-3 row">
                        <div class="row">
                            <div class="mr-2">{{ endTime }}</div>
                        </div>
                        <div class="row">
                            <div>{{ startTime }}</div>
                        </div> 
                    </div>
                    <div class="row mt-4">
                        <div>{{ address }}</div>
                    </div>
                    <hr class="hr" />
                </div>
                <div class="col-lg-6">
                    <img
                        class="rounded-circle mb-4 profile"
                        src="../../public/img/market-logo.png"
                        height="100"
                    />
                    <div class="mt-4 mb-4">{{ title }}</div>
                </div>
                <div class="col-lg-3 mt-4 pr-0">
                    <div class="textRight"><span>متجر تجزئة</span></div>
                    <div class="icons mt-3">
                        <div class="row telephone mt-3">
                            <span class="texticon">{{
                                phonenumber
                            }}</span>
                            <img
                                class="ml-2"
                                src="../../public/img/telephone.svg"
                                height="20"
                            />
                        </div>
                        <div class="row mt-2 mb-2 phone">
                            <span class="texticon">{{
                                mobilephone
                            }}</span>
                            <img
                                class="ml-2"
                                src="../../public/img/mobile-phone.svg"
                                height="30"
                            />
                        </div>
                        <div class="row">
                            <span class="texticon">تواصل مع المتجر</span>
                            <img
                                class="ml-2"
                                src="../../public/img/comments.svg"
                                height="20"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-2 bottomdetails">
                <div class="rowimg">
                    <div class="socail-menu col mb-3">
                        <a
                            ><img
                                class="location mr-2"
                                src="../../public/img/location.png"
                                height="30"
                        /></a>
                        <a
                            ><img
                                class="instagram mr-2"
                                src="../../public/img/instagram-new.png"
                                height="30"
                        /></a>
                        <a
                            ><img
                                class="whatsapp mr-2"
                                src="../../public/img/whatsapp.png"
                                height="30"
                        /></a>
                        <a
                            ><img
                                class="telegram mr-2"
                                src="../../public/img/telegram-app.png"
                                height="30"
                        /></a>
                        <a
                            ><img
                                class="facebook"
                                src="../../public/img/facebook-new.png"
                                height="30"
                        /></a>
                    </div>
                    <div class="col imgdiliver mb-3">
                        <img
                            class="MaskGroup"
                            src="../../public/img/MaskGroup.png"
                            height="30"
                        />
                        <img
                            class="Group"
                            src="../../public/img/Group.png"
                            height="30"
                        />
                    </div>
                </div>
                <div class="col">
                    <div class="textFollow" id="textFollow" @click="heart()">
                        <span class="heart mr-2" id="heart"></span>
                        <span class="follow mr-4" id="follow">متابعة</span>
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
                    <div class="col count">
                        <span class="followCount">2800</span>
                        <span class="textcount">المتابعين</span>
                    </div>
                </div>
            </div>
        </div>
        <div id="nav" class="naver">
            <div class="container">
                <div class="row text-center">
                    <div class=" col-lg-12" style="padding: 0">
                        <div>
                            <button type="button" class="btn btn-light light1">
                                <a>مشترياتي</a>
                            </button>
                        </div>
                        <div>
                            <button type="button" class="btn light1">
                                <a>الأحداث</a>
                            </button>
                        </div>
                        <div>
                            <button type="button" class="btn btn-light light1">
                                <a>جديد المتجر</a>
                            </button>
                        </div>
                        <div>
                            <button type="button" class="btn light1">
                                <a>فرص عمل</a>
                            </button>
                        </div>
                        <div class="img">
                            <button
                                type="button"
                                class="btn btn-warning sel light1"
                            >
                                <a>عروض المتجر</a>
                            </button>
                        </div>
                        <div>
                            <button type="button" class="btn light1">
                                <a>جميع الأقسام</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="homeborder">
            <div class="all-section">
                <span class="text">جميع الأقسام</span>
            </div>
            <div class="row align-middle" style="height: 80%;">
                <div
                    class="col-md-6 col-lg-3 col-xs-3 mb-4 column"
                    v-for="catog in categories"
                    :key="catog.id"
                    :slug="catog.slug"
                    :name="catog.name"
                    :image="catog.image"
                    style="width:50%"
                >
                    <router-link :to="`/${catog.slug}`">
                        <div class="card">
                            <div class="txt">
                                <h1>{{ catog.name }}</h1>
                            </div>
                            <a href="#">more</a>
                            <div class="ico-card">
                                <img
                                    src="../../public/img/buty.jpg"
                                    style="width:60%"
                                />
                                <i class="fa fa-rebel"></i>
                            </div>
                        </div>
                    </router-link>
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
                    <img src="../../public/img/S1.png" />
                </div>
            </div>
        </div>
        <div class="mar mb-4">
            <div class="all-section">
                <span class="text">أشهر الماركات</span>
            </div>
            <div
                class="show-market"
                v-for="brand in brands.slice(2, 7)"
                :key="brand.id"
            >
                <img src="../../public/img/IMG_2.png" />
            </div>
        </div>
        <!-- show  products -->
        <div class="show-prod">
            <div class="all-section">
                <span class="text">آخر عمليات البحث</span>
            </div>
            <div class="row mt-2">
                <BodyProductStore
                    v-for="items in product"
                    :key="items.pr" 
                    :id="items.id"
                    :price="items.price"
                    :title="items.title"
                    :description="items.description"
                    v-on:click="gotodetails(items)"
                    >

                </BodyProductStore>
            </div>
        </div>
    </div>
</template>

<script>
// import Cartmini from '@/components/cart/Cartmini.vue';
import BodyProductStore from '@/pages/globalpages/BodyProductStore';

export default {
    name: 'visitStore',
    props: ['id', 'title','phonenumber','mobilephone','workDays','startTime','endTime','address','description', 'price'],
    data() {
        return {
            urll: '/img/',
        };
    },
    components: {
        BodyProductStore,
        // Cartmini
    },
    computed: {
        stores() {
            return this.$store.state.stores;
        },
        categories() {
            return this.$store.state.categories;
        },
        brands() {
            return this.$store.state.brands;
        },
        product() {
            return this.$store.state.stores[0].products;
        },
    },
    methods: {
        heart: function() {
            document
                .getElementById('textFollow')
                .classList.toggle('heart-active');
            document.getElementById('follow').classList.toggle('heart-active');
            document.getElementById('heart').classList.toggle('heart-active');
        },
        likebtn: function() {
            document.getElementById('likebtn').classList.toggle('');
        },
        gotodetails(item){
            this.$router.push({name:'ProductDetailsStore',params:item});
        },
        //  goto: function(i, t, d, p) {
        //      this.$router.push(`ProductDetalis/${i}/${t}/${d}/${p}`);
        // },
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
        max-width: 100px;
        text-align: center;
        margin: auto;
    }
    .textFollow .heart {
        width: 80px;
        height: 80px;
        background: url('../../public/img/heart.png') no-repeat;
        background-position: left;
        background-size: 2900%;
        position: absolute;
        top: 60%;
        left: 32%;
        transform: translate(-30%, -55%);
    }
    .follow {
        font-size: 3vh;
        margin-bottom: 10px;
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
        content: url(../../public/img/icon-button.png);
        position: absolute;
        top: 160px;
        right: 550x;
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
        flex-direction: column-reverse;
        right: 8%;
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
            margin-top: 6rem;
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
        margin-top: 20px;
        border-radius: 7px;
        display: inline;
    }
    .show-market img {
        width: 19%;
        height: 100%;
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
        height: 100%;
        margin: 20px 20px;
        border-radius: 10px;
        box-shadow: 3px 3px 3px 3px #c2bdbd;
    }
    ///end product
}
@media (min-width: 368px) and (max-width: 598.99px) {
    ///start details store///
    .border1 {
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
        margin-left: 250px;
        border: 2px solid rgb(144, 148, 147);
    }
    .icons {
        display: inline;
        margin-top: 20px;
    }
    .socail-menu {
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
        max-width: 100px;
        text-align: center;
        margin: auto;
    }
    .textFollow .heart {
        width: 80px;
        height: 80px;
        background: url('../../public/img/heart.png') no-repeat;
        background-position: left;
        background-size: 2900%;
        position: absolute;
        top: 60%;
        left: 38%;
        transform: translate(-30%, -55%);
    }
    .follow {
        font-size: 3vh;
        margin-bottom: 10px;
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
        border-radius: 6px 0 6px 0;
        background-color: rgb(199, 175, 39);
        border: 2px solid rgb(199, 175, 39);
    }
    .count {
        display: flex;
        flex-direction: column-reverse;
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
        content: url(../../public/img/icon-button.png);
        position: absolute;
        top: 82px;
        right: 550x;
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
            margin-top: 6rem;
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
        height: 100%;
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
}
@media (min-width: 599px) and (max-width: 767px) {
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
        margin-left: 40px;
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
        margin-left: 110px;
        border: 2px solid rgb(144, 148, 147);
    }
    .icons {
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
        font-size: 3vh;
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
        max-width: 70%;
        // margin-right: 20px;
    }
    .textFollow .heart {
        width: 80px;
        height: 80px;
        background: url('../../public/img/heart.png') no-repeat;
        background-position: left;
        background-size: 2900%;
        position: absolute;
        top: 25%;
        left: 19%;
        transform: translate(-30%, -55%);
    }
    .follow {
        font-size: 3vh;
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
    .textcount {
        margin-left: 10px;
        font-size: 12px;
        margin-top: 20px;
    }
    .rowimg {
        display: flex;
        flex-direction: column-reverse;
    }
    .likecount {
        display: flex;
        flex-direction: column-reverse;
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
        content: url(../../public/img/icon-button.png);
        position: absolute;
        top: 28px;
        right: 550x;
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
        height: 100%;
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
        margin-bottom: 30%;
        background-color: #fefefe;
        margin: 20px 20px;
        height: 100%;
        border-radius: 10px;
        box-shadow: 3px 3px 3px 3px #c2bdbd;
    }
    ///end product
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
        margin-left: 50px;
        border-radius: 250px;
        border: 2px solid rgb(231, 179, 102);
        margin-top: 40px;
        justify-content: center;
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
        font-size: 3vh;
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
        max-width: 50%;
        margin-left: 40px;
    }
    .textFollow .heart {
        width: 80px;
        height: 80px;
        background: url('../../public/img/heart.png') no-repeat;
        background-position: left;
        background-size: 2900%;
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translate(-30%, -55%);
    }
    .follow {
        font-size: 3vh;
        margin-bottom: 10px;
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
        margin: 30px 0 0 50px;
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
        content: url(../../public/img/icon-button.png);
        position: absolute;
        top: 27px;
        right: 550x;
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
        height: 100%;
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
        font-size: 2vh;
        background-color: rgb(144, 148, 147);
        margin-left: 120px;
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
        font-size: 3vh;
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
        max-width: 30%;
        margin-left: 160px;
        // margin-right: 10px;
    }
    .textFollow .heart {
        width: 80px;
        height: 80px;
        background: url('../../public/img/heart.png') no-repeat;
        background-position: left;
        background-size: 2900%;
        position: absolute;
        top: 26%;
        left: 38%;
        transform: translate(-30%, -55%);
    }
    .follow {
        font-size: 3vh;
        margin-bottom: 10px;
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
        content: url(../../public/img/icon-button.png);
        position: absolute;
        top: -1px;
        right: 550x;
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
        height: 100%;
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
        font-size: 2vh;
        background-color: rgb(144, 148, 147);
        margin-left: 200px;
        border: 2px solid rgb(144, 148, 147);
    }
    .rowimg {
        display: flex;
        // flex-direction: column-reverse;
    }
    .likecount {
        margin-right: 60px;
        display: flex;
        // flex-direction: column-reverse;
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
        font-size: 3vh;
        margin-top: 20px;
        border-radius: 6px 0 6px 0;
        background-color: rgb(199, 175, 39);
        border: 2px solid rgb(199, 175, 39);
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
        max-width: 50%;
        margin-left: 50px;
    }
    .textFollow .heart {
        width: 90px;
        height: 90px;
        background: url('../../public/img/heart.png') no-repeat;
        background-position: left;
        background-size: 2900%;
        position: absolute;
        top: 35%;
        left: 25%;
        transform: translate(-30%, -55%);
    }
    .follow {
        font-size: 4vh;
        margin-bottom: 10px;
        margin-left: 75px;
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
        content: url(../../public/img/icon-button.png);
        position: absolute;
        top: -1px;
        right: 550x;
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
            margin-left: -3rem;
            margin-top: 12rem;
            z-index: 1;
            h1 {
                font-size: 1.5rem;
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
        height: 100%;
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
        margin-bottom: 10%;
        background-color: #fefefe;
        margin: 20px 20px;
        height: 100%;
        border-radius: 10px;
        box-shadow: 3px 3px 3px 3px #c2bdbd;
    }
    ///end product
}
</style>
