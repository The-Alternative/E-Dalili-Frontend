<template>
    <div class="header">
        <div class="upper-bar">
            <div class="row">
                <div class="col-md-2 col-sm-12 col-xs-12 imag">
                    <img src="@/assets/logo-4.png" />
                </div>
                <div class="col-md-10 col-sm-12  col-xs-12 text-center selo">
                    <div class="customer-select sel4">
                        <select>
                            <option>العربية</option>
                            <option></option>
                        </select>
                    </div>
                    <span class="lang2">نطاق البحث</span>
                    <div class="customer-select sel1">
                        <select>
                            <option disabled>المحافظة</option>
                            <option
                                v-for="gover in governorates"
                                :key="gover.id"
                                >{{ gover.name }}</option
                            >
                        </select>
                    </div>

                    <div class="customer-select sel2">
                        <select>
                            <option disabled>المدینة/القریة</option>
                            <option v-for="city in cities" :key="city.id"
                                >{{ city.name }}
                            </option>
                        </select>
                    </div>
                    <div class="customer-select sel3">
                        <select>
                            <option disabled>الحي</option>
                            <option
                                v-for="street in streets"
                                :key="street.id"
                                >{{ street.name }}</option
                            >
                        </select>
                    </div>
                    <span class="lang">اللغة</span
                    ><i class="fa fa-map-marker"></i>
                </div>
            </div>
        </div>
        <!-- End Upper Bar -->
        <!-- Start landing -->
        <div class="jumbotron">
            <div class="container">
                <div class="row">
                    <div class="search col-lg-12">
                        <i class="fa fa-search"></i
                        ><input class="input" type="search" placeholder="بحث" />
                    </div>
                    <div class="col-lg-12 fet">
                        <div class="featuers">
                            <div><span>E-Dalely</span> أضف متجرك إلى منصة</div>
                            <div @click="gotocart">
                                <i class="fa fa-shopping-cart"></i>
                                <span class="cart-count">{{
                                    cartItemCount
                                }}</span>
                                <div class="shopping">عربة التسوق</div>
                            </div>
                            <i class="fa fa-map-marker"></i>
                            <div class="map">حدد موقعك</div>

                            <i class="fa fa-user-circle "> </i>
                            <div class="user">تسجیل الدخول</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End landing -->

        <!-- Start navbar-->
        <div id="nav" class="naver">
            <div class="container">
                <div class="row text-center">
                    <div class=" col-lg-12" style="padding: 0">
                        <div>
                            <router-link to="/instrc" exact>
                                <button type="button" class="btn btn-light">
                                    <a>مصانع</a>
                                </button></router-link
                            >
                        </div>
                        <div>
                            <router-link to="/company">
                                <button type="button" class="btn btn-light">
                                    <a>شركات</a>
                                </button></router-link
                            >
                        </div>
                        <div>
                            <router-link to="/professional">
                                <button type="button" class="btn btn-light">
                                    <a>مھنیون وفنیون</a>
                                </button></router-link
                            >
                        </div>
                        <div>
                            <router-link to="/medic">
                                <button type="button" class="btn btn-light">
                                    <a>صیدلیات وأدویة</a>
                                </button></router-link
                            >
                        </div>
                        <div>
                            <router-link to="/doctors">
                                <button type="button" class="btn btn-light">
                                    <a>أطباء</a>
                                </button></router-link
                            >
                        </div>
                        <div>
                            <router-link to="/resturants">
                                <button type="button" class="btn btn-light">
                                    <a>مطاعم ومقاھي</a>
                                </button></router-link
                            >
                        </div>
                        <div>
                            <router-link to="/festival">
                                <button
                                    type="button"
                                    class="btn btn-light sell"
                                >
                                    <a>مھرجان العروضات والتخفیضات</a>
                                </button></router-link
                            >
                        </div>
                        <img src="@/assets/icon-button.png" />
                        <div>
                            <router-link to="/stores">
                                <button type="button" class="btn btn-light">
                                    <a>متاجر</a>
                                </button></router-link
                            >
                        </div>
                        <div>
                            <router-link to="/">
                                <button
                                    type="button"
                                    class="btn btn-light products"
                                >
                                    <a>منتجات</a>
                                </button></router-link
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Naver -->
        <!-- Start Section-->

        <div class="section">
            <div class="row">
                <div
                    class="col-xs-6 responsive"
                    v-for="catog in categories"
                    :key="catog.id"
                    :slug="catog.slug"
                    :name="catog.name"
                >
                    <div class="gallery">
                        <router-link :to="`/${catog.slug}`">
                            <img
                                src="@/assets/S1.png"
                                width="600"
                                height="400"
                            />
                        </router-link>
                        <div class="desc">
                            {{ catog.name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Section-->
    </div>
</template>

<script>
import jeson from '@/jeson/MOCK_DATA.json';
// import axios from "axios";

export default {
    name: 'AppHeader',
    props: ['title', 'description', 'id', 'price'],
    data() {
        return {
            details: {
                id: this.id,
                title: this.title,
                description: this.description,
                price: this.price,
            },
            urll: 'http://edalili.e-dalely.com',
            cities: jeson[0].cities,
            governorates: jeson[0].governorates,
            streets: jeson[0].streets,
            categories: jeson[0].categories,
            // cities:[],
            // governorates:[],
            // streets:[]
            // categories:[]
        };
    },
    computed: {
        cartItemCount() {
            return this.$store.state.cartItemCount;
        },
    },
    methods: {
        gotocart: function() {
            this.$router.push(`/Cart`);
        },
    },

    /*
   created(){
    axios.get("http://edalili.e-dalely.com")
    .then(response => {
      this.cities = response.data[0].cities;
    })
    .then(response => {
      this.governorates = response.data[0].governorates;
    })
    .then(response => {
      this.streets = response.data[0].streets;
    })
    .then(response => {
      this.categories = response.data[0].categories;
    })
    }
    */
};
</script>

<style scoped>
/* ____________________________________ cart icon _______________________________ */
.cart-count {
    font-size: 15px;
    color: #ba8b00;
    padding: 0px 5px;
    margin-left: -13px;
    background: #ffffff;
    height: 22px;
    border-radius: 50%;
    width: 21px;
    position: absolute;
    margin-top: -10px;
}
/* ____________________________________app header _______________________________ */
.row {
    justify-content: center;
    margin: 0;
}
.upper-bar {
    background-color: #9b9a9a;
    color: #fff;
    padding: 20px;
    width: 100%;
}

.upper-bar .customer-select {
    display: inline-block;
    border: none;
    background-color: #878080;
    width: 110px;
    border-radius: 15px;
    position: relative;
}
.upper-bar .customer-select select {
    border: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    background-color: transparent;
    color: #fff;
    padding: 3px 30px;
    z-index: 2;
    font-size: 13px;
    position: relative;
    height: 30px;
}
.upper-bar .sel1:after {
    position: absolute;
    content: '>';
    top: 0;
    left: 14px;
    background-color: transparent;
    color: #fff;
    transform: rotate(90deg);
    font-size: 17px;
    z-index: 1;
    font-size: 20px;
}
.upper-bar .sel2:after {
    position: absolute;
    content: '>';
    top: 0;
    left: 14px;
    background-color: transparent;
    color: #fff;
    transform: rotate(90deg);
    font-size: 17px;
    z-index: 1;
    font-size: 20px;
}
.upper-bar .sel3:after {
    position: absolute;
    content: '>';
    top: 0;
    left: 14px;
    background-color: transparent;
    color: #fff;
    transform: rotate(90deg);
    font-size: 17px;
    z-index: 1;
    font-size: 20px;
}
.upper-bar .sel4:after {
    position: absolute;
    content: '>';
    top: 0;
    left: 14px;
    background-color: transparent;
    color: #fff;
    transform: rotate(90deg);
    font-size: 17px;
    z-index: 1;
    font-size: 20px;
}
.upper-bar .fa-map-marker {
    margin-left: 1vh;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .upper-bar .imag img {
        margin-top: -15px;
        margin-bottom: 10px;
    }
    .upper-bar .row .col-sm-12 {
        margin-top: 2vh;
        text-align: center;
    }
    .upper-bar .selo {
        width: 50%;
    }
    .upper-bar .customer-select {
        width: 64px;
        display: block;
        margin-bottom: 2vh;
    }
    .upper-bar .customer-select select {
        font-size: 11px;
        padding-left: 14px;
    }
    .upper-bar .row span {
        font-size: 10px;
    }
    .upper-bar .fa-map-marker {
        font-size: 10px;
        position: absolute;
        left: 85px;
        top: 45px;
    }
    .upper-bar .sel1:after {
        left: 5px;
        top: 2px;
        font-size: 15px;
    }
    .upper-bar .sel2:after {
        left: 5px;
        top: 2px;
        font-size: 15px;
    }
    .upper-bar .sel3:after {
        left: 5px;
        top: 2px;
        font-size: 15px;
    }
    .upper-bar .sel4:after {
        left: 5px;
        top: 2px;
        font-size: 15px;
    }
    .upper-bar .lang {
        position: absolute;
        top: 3px;
        left: 110px;
    }
    .upper-bar .lang2 {
        position: absolute;
        top: 45px;
        left: 98px;
        width: 60px;
    }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .upper-bar .imag img {
        margin-top: -15px;
        margin-bottom: 10px;
    }
    .upper-bar .row .col-sm-12 {
        margin-top: 2vh;
        text-align: center;
    }
    .upper-bar .customer-select {
        width: 95px;
    }
    .upper-bar .customer-select select {
        font-size: 11px;
    }
    .upper-bar .row span {
        font-size: 14px;
    }
    .upper-bar .fa-map-marker {
        font-size: 13px;
    }
    .upper-bar .sel3 {
        margin-left: 2vh;
    }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .upper-bar .row .col-md-10 {
        margin-top: 2vh;
    }
    .upper-bar .sel3 {
        margin-left: 2vh;
    }

    .upper-bar .customer-select {
        width: 105px;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .upper-bar .row .col-md-10 {
        margin-top: 2vh;
    }
    .upper-bar .sel1 {
        margin-left: 10vh;
    }
}
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
    .upper-bar .row .col-md-10 {
        margin-top: 2vh;
    }
    .upper-bar .sel3 {
        margin-left: 50vh;
    }
}
/* End Upper Bar */

/* Start landing */
.jumbotron {
    text-align: center;
    position: relative;
    height: 560px;
    margin-bottom: 10px;
    width: 100%;
    background-image: url(../../assets/Screenshot_2020-10-17%20E-DALELY%20Design.png);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.jumbotron .input {
    border: none;
    width: 400px;
    padding: 4px 10px 5px 10px;
    height: 34px;
}
.jumbotron .search:after {
    position: absolute;
    content: '>';
    top: 0;
    background-color: #87948b;
    width: 34px;
    height: 34px;
    color: #fff;
    transform: rotate(90deg);
    font-size: 17px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}
.jumbotron .search i {
    background-color: #87948b;
    padding: 9px 10px;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    width: 35px;
    height: 34px;
    color: aliceblue;
    cursor: pointer;
}
.jumbotron .featuers {
    width: 800px;
    margin: auto;
    margin-top: 63vh;
    background-color: #bfc0c2;
    padding: 10px 20px;
    color: #635f5f;
}
.jumbotron .featuers span {
    font-weight: bold;
}
.jumbotron .featuers div {
    display: inline-block;
    position: relative;
    cursor: pointer;
}
.jumbotron .featuers div:hover {
    color: aliceblue;
}

.jumbotron .featuers i {
    margin: 0 10px 0 60px;
    color: #635f5f;
    font-size: 20px;
}
.jumbotron .featuers .shopping:after {
    position: absolute;
    content: '';
    top: -5px;
    left: -60px;
    height: 33px;
    width: 1px;
    background-color: #8d8d8d;
}
.jumbotron .featuers .map:after {
    position: absolute;
    content: '';
    top: -5px;
    left: -60px;
    height: 33px;
    width: 1px;
    background-color: #8d8d8d;
}
.jumbotron .featuers .user:after {
    position: absolute;
    content: '';
    top: -5px;
    left: -60px;
    height: 33px;
    width: 1px;
    background-color: #8d8d8d;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .jumbotron {
        height: 300px;
        width: 100%;
    }
    .jumbotron .search {
        width: 100%;
    }

    .jumbotron .search input {
        width: 50%;
        padding: 4px 10px;
        height: 35px;
    }

    .jumbotron .search i {
        height: 35px;
        width: 34px;
        padding: 10px 10px;
    }
    .jumbotron .search:after {
        width: 34px;
        height: 34px;
        top: 0;
    }
    .jumbotron .featuers div {
        margin-bottom: 10px;
        display: inline-block;
    }
    .jumbotron .fet {
        width: 100%;
    }
    .jumbotron .featuers {
        width: 200px;
        margin-left: -12px;
        margin-top: 11vh;
        font-size: 11px;
        border-radius: 20px;
    }
    .jumbotron .featuers i {
        font-size: 17px;
    }

    .jumbotron .featuers .shopping:after,
    .jumbotron .featuers .map:after,
    .jumbotron .featuers .user:after {
        display: none;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .jumbotron {
        height: 430px;
    }

    .jumbotron .featuers div {
        margin-bottom: 10px;
    }
    .jumbotron .featuers {
        width: 375px;
        margin-top: 200px;
        font-size: 12px;
        border-radius: 20px;
    }

    .jumbotron .featuers .shopping:after,
    .jumbotron .featuers .map:after,
    .jumbotron .featuers .user:after {
        display: none;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .jumbotron .featuers {
        width: 700px;
        margin-top: 399px;
        font-size: 12px;
    }
    .jumbotron .featuers .shopping:after,
    .jumbotron .featuers .map:after,
    .jumbotron .featuers .user:after {
        top: -8px;
    }
}
/* End landing */

/* Start Naver*/
.naver {
    background-color: #a7a6a6;
    padding: 5px 0 5px 0;
    margin: 10px 0 10px 0;
}
.naver img {
    position: absolute;
    top: 1px;
    right: 66vh;
}

.naver .row .col-lg-12 div {
    margin: 0 5px;
    display: inline-block;
}
.naver .row .btn-light {
    min-width: 70px;
    height: 28px;
    border-radius: 15px;
    color: #635f5f;
    padding: 0 5px;
}
.naver .row .products {
    border-radius: 50px;
    height: 28px;
    font-size: 15px;
    padding: 1px;
    background-color: #cc0808;
    color: #fff;
    width: 100px;
    border-color: #cc0808;
}
.naver .row .sell {
    background-color: #f6ef19;
    border-color: #f6ef19;
    padding-left: 35px;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .naver .row .btn-light {
        min-width: 40px;
        font-size: 12px;
        margin-bottom: 2vh;
    }
    .naver img {
        display: none;
    }
    .naver .row .sell {
        width: 20vh;
        font-size: 9px;
        padding-left: 5px;
    }
    .naver .row .col-lg-12 {
        padding: 0;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .naver img {
        display: none;
    }
    .naver .row .btn-light {
        min-width: 77px;
        height: 25px;
        margin-bottom: 10px;
        font-size: 14px;
    }
    .naver .row .products {
        width: 13vh;
    }
    .naver .row .sell {
        width: 22vh;
        font-size: 9px;
        padding-left: 5px;
    }
    .naver .row .col-lg-12 {
        padding: 0;
    }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .naver img {
        display: none;
    }
    .naver .row .btn-light {
        min-width: 20px;
        height: 25px;
        margin-bottom: 10px;
        font-size: 10px;
    }

    .naver .row .products {
        width: 9vh;
        font-size: 12px;
    }
    .naver .row .sell {
        width: 22vh;
        font-size: 9px;
        padding-left: 5px;
    }
    .naver .row .col-lg-12 {
        padding: 0;
    }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .naver .row .btn-light {
        min-width: 35px;
        height: 25px;
        margin-bottom: 10px;
        font-size: 13px;
    }
    .naver img {
        right: 57vh;
    }
}
/* End Naver*/

/* Start Section  */
.section {
    height: 400px;
}
div.gallery {
    border: 1px solid #ccc;
    border-radius: 10px;
}

div.gallery:hover {
    border: 1px solid #777;
}

div.gallery img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

div.desc {
    text-align: center;
}

* {
    box-sizing: border-box;
}

.responsive {
    padding: 0;
    float: left;
    width: 18%;
    margin: 1%;
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .section {
        height: 350px;
    }
}
/*  Medium devices (tablets, 768px and up)  */
@media (min-width: 768px) and (max-width: 991.98px) {
    div.desc {
        font-size: 12px;
    }
    .section {
        height: 300px;
    }
}

/* Small devices (landscape phones, 576px and up)   */
@media (min-width: 576px) and (max-width: 767.98px) {
    .responsive {
        width: 18%;
    }
    div.desc {
        font-size: 9px;
    }
    .section {
        height: 240px;
    }
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .responsive {
        flex: 1 0 50%;
        max-width: 43%;
    }
    div.desc {
        font-size: 10px;
    }
    .section {
        height: 400px;
    }
}
/* End Section */

/* End header */
</style>
