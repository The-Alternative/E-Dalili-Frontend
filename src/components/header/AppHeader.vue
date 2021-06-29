<template>
    <div class="header">
        <div class="upper-bar">
            <div class="row">
                <div @click="goto" class="col-md-2 col-sm-12 col-xs-12 imag">
                    <img src="../../../public/img/logo-4.png" />
                </div>
                <div class="col-md-10 col-sm-12 col-xs-12 text-center selo">
                    <div class="customer-select sel4">
                        <select v-model="lang" @change="handleChange($event)">
                            <option value="en">English</option>
                            <option value="ar">العربية</option>
                        </select>
                    </div>
                    <span class="lang2">نطاق البحث</span>
                    <div class="customer-select sel1">
                        <select v-model="sortType" c>
                            <option value="1" disabled>المحافظة</option>
                            <option
                                v-for="gover in governorates"
                                :key="gover.id"
                            >
                                {{ gover.name }}
                            </option>
                        </select>
                    </div>

                    <div class="customer-select sel2">
                        <select v-model="sortType">
                            <option value="1" disabled>المدینة/القریة</option>
                            <option v-for="city in cities" :key="city.id">
                                {{ city.name }}
                            </option>
                        </select>
                    </div>
                    <div class="customer-select sel3">
                        <select v-model="sortType">
                            <option value="1" disabled>الحي</option>
                            <option v-for="street in streets" :key="street.id">
                                {{ street.name }}
                            </option>
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
            <div class="bars" @click="showfut()">
                <i class="fa fa-bars"></i>
            </div>
            <div
                class="exit-fut animate__animated animate__heartBeat"
                id="exit-fut"
                @click="hidefut()"
            >
                X
            </div>
            <div class="container">
                <div class="row">
                    <div class="search col-lg-12">
                        <i class="fa fa-search"></i
                        ><input
                            class="input"
                            type="search"
                            :placeholder="$t('Search')"
                        />
                    </div>
                    <div class="col-lg-12">
                        <div
                            class="featuers animate__animated animate__heartBeat"
                            id="fut"
                        >
                            <div>
                                <router-link to="/addStore" class="link">{{
                                    $t('AddPlatform')
                                }}</router-link>
                            </div>
                            <div @click="gotocart()">
                                <i class="fa fa-shopping-cart"></i>
                                <span class="cart-count">{{
                                    cartItemCount
                                }}</span>
                                <div class="shopping">
                                    {{ $t('Shoppingcart') }}
                                </div>
                            </div>
                            <i class="fa fa-map-marker"></i>
                            <div class="map">{{ $t('Selectlocation') }}</div>

                            <i class="fa fa-user-circle"> </i>
                            <template v-if="authenticated" class="user">
                                <a href="#" class="link">Signout</a>
                            </template>
                            <template v-else class="user">
                                <router-link class="link" to="/signin">{{
                                    $t('signin')
                                }}</router-link>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End landing -->

        <!-- Start navbar-->
        <div id="nav" class="naver">
            <div class="container" lang="en">
                <div class="row text-center">
                    <div class="col-lg-12" style="padding: 0">
                        <div>
                            <router-link to="/instrc" exact>
                                <button type="button" class="btn btn-light">
                                    <a>{{ $t('Factories') }}</a>
                                </button></router-link
                            >
                        </div>
                        <div>
                            <router-link to="/company">
                                <button type="button" class="btn btn-light">
                                    <a>{{ $t('Companies') }}</a>
                                </button></router-link
                            >
                        </div>
                        <div>
                            <router-link to="/professional">
                                <button type="button" class="btn btn-light">
                                    <a>{{ $t('ProfessionalsTechnicians') }}</a>
                                </button></router-link
                            >
                        </div>
                        <div>
                            <router-link to="/medic">
                                <button
                                    type="button"
                                    class="btn btn-light medic"
                                >
                                    <a>{{ $t('PharmaciesMedicines') }}</a>
                                </button></router-link
                            >
                        </div>
                        <div>
                            <router-link to="/doctors">
                                <button type="button" class="btn btn-light">
                                    <a>{{ $t('Doctors') }}</a>
                                </button></router-link
                            >
                        </div>
                        <div>
                            <router-link to="/resturants">
                                <button type="button" class="btn btn-light">
                                    <a>{{ $t('RestaurantsCafes') }}</a>
                                </button></router-link
                            >
                        </div>
                        <div class="img" lang="en">
                            <router-link to="/festival">
                                <button
                                    type="button"
                                    class="btn btn-light sell"
                                >
                                    <a>{{ $t('FestivalPerformances') }}</a>
                                </button></router-link
                            >
                        </div>
                        <div>
                            <router-link to="/stores">
                                <button type="button" class="btn btn-light">
                                    <a>{{ $t('Stores') }}</a>
                                </button></router-link
                            >
                        </div>
                        <div>
                            <router-link to="/products">
                                <button
                                    type="button"
                                    class="btn btn-light products"
                                >
                                    <a>{{ $t('Products') }}</a>
                                </button></router-link
                            >
                        </div>
                        <div>
                            <router-link to="/">
                                <button type="button" class="btn btn-light">
                                    <a>{{ $t('Allsections') }}</a>
                                </button></router-link
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* ____________________________________ cart icon _______________________________ */
.cart-count {
    font-size: 13px;
    color: #ba8b00;
    margin-left: -21px;
    background: #ffffff;
    height: 19px;
    border-radius: 50%;
    width: 17px;
    position: absolute;
    margin-top: -10px;
}
/* ____________________________________app header _______________________________ */
.upper-bar .imag img {
    cursor: pointer;
}
.upper-bar {
    background-color: #9b9a9a;
    color: #fff;
    padding: 20px;
    width: 100%;
}
.upper-bar span {
    font-size: 17px;
}
.upper-bar .customer-select {
    display: inline-flex;
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
    padding: 0;
    z-index: 2;
    font-size: 16px;
    position: relative;
    height: 35px;
    line-height: 2.15;
}
.upper-bar .sel1:after {
    position: absolute;
    content: '>';
    top: 4px;
    left: 14px;
    background-color: transparent;
    color: #fff;
    transform: rotate(90deg);
    /*font-size: 17px;*/
    z-index: 1;
    font-size: 20px;
}
.upper-bar .sel2:after {
    position: absolute;
    content: '>';
    top: 4px;
    left: 9px;
    background-color: transparent;
    color: #fff;
    transform: rotate(90deg);
    /*font-size: 17px;*/
    z-index: 1;
    font-size: 20px;
}
.upper-bar .sel3:after {
    position: absolute;
    content: '>';
    top: 4px;
    left: 14px;
    background-color: transparent;
    color: #fff;
    transform: rotate(90deg);
    /*font-size: 17px;*/
    z-index: 1;
    font-size: 20px;
}
.upper-bar .sel1 select {
    width: 125px;
    padding: 0 28px;
}
.upper-bar .sel2 select {
    width: 140px;
    padding: 0 16px;
    font-size: 13px;
}
.upper-bar .sel3 select {
    width: 100px;
    padding: 0 30px;
}
.upper-bar .sel4 select {
    width: 125px;
    padding: 0 30px;
}
.upper-bar .sel4:after {
    position: absolute;
    content: '>';
    top: 4px;
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
    font-size: 16px;
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
        width: 100px;
        display: block;
        margin-bottom: 2vh;
        margin-left: -40px;
    }
    .upper-bar .customer-select select {
        font-size: 13px;
        width: 115px;
        text-align: center;
    }
    .upper-bar .row span {
        font-size: 12px;
    }
    .upper-bar .fa-map-marker {
        font-size: 12px;
        position: absolute;
        left: 82px;
        top: 57px;
    }
    .upper-bar .customer-select select:after {
        left: 12px;
        top: 7px;
        font-size: 18px;
    }
    .upper-bar .lang {
        position: absolute;
        top: 5px;
        left: 110px;
    }
    .upper-bar .lang2 {
        position: absolute;
        top: 55px;
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
        font-size: 13px;
    }
    .upper-bar .row span {
        font-size: 14px;
    }
    .upper-bar .fa-map-marker {
        font-size: 13px;
    }
    .upper-bar .sel2 {
        margin: 0 1vh;
    }
    .upper-bar .sel1 {
        margin-right: 4px;
    }
    .upper-bar .sel4 {
        margin-right: 4px;
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
        width: 95px;
    }
    .upper-bar .sel2 {
        margin: 0 1vh;
    }
    .upper-bar .sel1 {
        margin-right: 4px;
    }
    .upper-bar .sel4 {
        margin-right: 4px;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .upper-bar .row .col-md-10 {
        margin-top: 2vh;
    }
    .upper-bar .sel3 {
        margin-left: 25vh;
    }
    .upper-bar .sel2 {
        margin: 0 2vh;
    }
    .upper-bar .sel1 {
        margin-right: 5px;
    }
    .upper-bar .sel4 {
        margin-right: 5px;
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
    .upper-bar .sel2 {
        margin: 0 2vh;
    }
    .upper-bar .sel1 {
        margin-right: 5px;
    }
    .upper-bar .sel4 {
        margin-right: 5px;
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
    background-image: url('../../../public/img/Screenshot_2020-10-17 E-DALELY Design.png');
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
    padding: 10px 10px;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    width: 35px;
    height: 34px;
    color: aliceblue;
    cursor: pointer;
}
.jumbotron .featuers {
    width: 890px;
    margin: auto;
    margin-top: 410px;
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
.bars,
.exit-fut {
    display: none;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .jumbotron {
        height: 300px;
        width: 100%;
    }
    .jumbotron .featuers {
        width: 250px;
        position: absolute;
        font-size: 11px;
        border-radius: 20px;
        overflow: hidden;
        display: none;
    }
    .jumbotron .show {
        margin-top: 60px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
    .exit-fut {
        width: 25px;
        height: 25px;
        position: absolute;
        background-color: #5daaa6;
        border-radius: 50%;
        cursor: pointer;
        color: #fff;
        top: 45%;
        left: 9%;
        padding: 1px;
        font-weight: bold;
    }
    .bars {
        display: block;
        text-align: right;
        cursor: pointer;
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
        width: 460px;
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
        width: 740px;
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
.naver .container:lang(en) {
    max-width: 1325px;
}
.naver .row .col-lg-12 div {
    margin: 0 5px;
    display: inline-block;
}
.naver .row .btn-light {
    min-width: 70px;
    height: 29px;
    border-radius: 15px;
    color: #635f5f;
    padding: 0 5px;
}
.btn:hover {
    transform: scale3d(1.1, 1.1, 1.1);
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
.naver .img::before {
    content: url(../../../public/img/icon-button.png);
    position: absolute;
    top: -1px;
    /*right: 450x;*/
}
.naver .row .sell {
    background-color: #f6ef19;
    border-color: #f6ef19;
    margin-left: 30px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    height: 29px;
}

/* Extra small devices (portrait phones, less than 576px)   */

@media (min-width: 520px) and (max-width: 576.98px) {
    .naver .img::before {
        top: 38px;
        right: 358px;
    }
}

@media (max-width: 575.98px) {
    .naver .row .btn-light {
        width: 85px;
        height: 29px;
        margin-bottom: 10px;
        font-size: 11px;
    }
    .naver .row .sell {
        height: 29px;
        font-size: 11px;
    }
    .naver .img::before {
        top: 38px;
    }

    .naver .row .products {
        width: 60px;
    }
    .naver .row .medic {
        width: 90px;
    }
}
@media (min-width: 330px) and (max-width: 414.98px) {
    .naver .img::before {
        top: 77px;
    }
}
@media (max-width: 329.98px) {
    .naver .img::before {
        top: 77px;
    }
}
@media (max-width: 314.98px) {
    .naver .img::before {
        top: 116px;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .naver .row .btn-light {
        width: 122px;
        height: 29px;
        margin-bottom: 10px;
        font-size: 14px;
    }
    .naver .row .sell {
        height: 29px;
    }
    .naver .img::before {
        top: 38px;
    }
    .naver .row .products {
        width: 60px;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .naver .row .btn-light {
        width: 122px;
        height: 29px;
        margin-bottom: 10px;
        font-size: 14px;
    }

    .naver .row .sell {
        height: 29px;
    }
    .naver .img::before {
        top: 38px;
    }
    .naver .row .products {
        width: 60px;
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
    .naver .row .sell {
        height: 29px;
    }
    .naver .img::before {
        top: -1px;
    }
}
.link {
    color: #635f5f;
    text-decoration: none;
}
.link:hover {
    text-decoration: none;
    color: aliceblue;
}
/* End Naver*/
/* End header */
</style>
<!--<script src="../../js/proj.js"></script>-->

<script>
import { mapGetters } from 'vuex';
import jeson from '@/jeson/MOCK_DATA.json';
export default {
    name: 'AppHeader',
    props: ['title', 'description', 'id', 'price'],
    data() {
        const lang = localStorage.getItem('lang') || 'en';
        return {
            lang: lang,
            details: {
                id: this.id,
                title: this.title,
                description: this.description,
                price: this.price,
            },
            sortType: '1',
            cities: jeson[0].cities,
            governorates: jeson[0].governorates,
            streets: jeson[0].streets,
            // cities:[],
            // governorates:[],
            // streets:[]
        };
    },
    computed: {
        cartItemCount() {
            return this.$store.state.cartItemCount;
        },
        ...mapGetters({
            authenticated: 'authenticated',
            // user: 'user',
        }),
    },
    methods: {
        gotocart() {
            this.$router.push(`/Cart`);
        },
        goto: function () {
            this.$router.push(`/`);
        },
        showfut() {
            document.getElementById('fut').classList.toggle('show');
            document.getElementById('exit-fut').style.display = 'block';
        },
        hidefut() {
            document.getElementById('exit-fut').style.display = 'none';
            document.getElementById('fut').classList.remove('show');
        },
        handleChange(event) {
            localStorage.setItem('lang', event.target.value);
            window.location.reload();
        },
    },

    //
    // created(){
    //  axios.get("http://edalili.e-dalely.com")// axios.get('/routename').then{response=>this.routename=response.data}
    //  .then(response => {
    //    this.cities = response.data[0].cities;
    //  })
    //  .then(response => {
    //    this.governorates = response.data[0].governorates;
    //  })
    //  .then(response => {
    //    this.streets = response.data[0].streets;
    //  })
    //  .then(response => {
    //    this.categories = response.data[0].categories;
    //  })
    //  }
    //
};
</script>
