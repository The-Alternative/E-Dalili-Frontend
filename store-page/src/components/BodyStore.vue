<template>
    <!--  all coulome body  -->
    <div
        class="card-group col-sm-12 wrapper"
        id="wrapper"
        style="display: flex; justify-content: center; padding: 0"
    >
        <!--      coulome one left -->
        <div class="card pl-3 pr-0 col-lg-3 col-md-2 col-sm-6 coulom-img">
            <img class="mb-3" src="../assets/img1.png" height="50%" />
            <img class="" src="../assets/img.png" height="50%" />
        </div>

        <!--     coulome middel stors group   -->
        <div class="card pl-1 pr-1 col-lg-6 col-md-7 col-sm-8 col-xs-8 stors">
            <!--          store 1-->
            <div class="store" v-for="store in stores" :key="store.id">
                <div class="card-title row justify-content-lg-end">
                    <div class="d-flex flex-row">
                        <img
                            class="img-open"
                            src="../assets/open.png"
                            height="40"
                        />
                        <div class="text-muted">{{ store.space }}</div>
                        <div>
                            <div class="title">
                                {{ store.title }}
                                <div class="stars text-right">
                                    <span
                                        @click="store.rate = item"
                                        v-for="item in parseInt(store.rate)"
                                        :key="item"
                                        class="fa fa-star"
                                        aria-hidden="true"
                                    ></span>
                                    <span
                                        @click="store.rate = item + store.rate"
                                        v-for="item in 5 - store.rate"
                                        :key="item"
                                        class="far fa-star"
                                        aria-hidden="true"
                                    ></span>
                                </div>
                            </div>
                        </div>
                        <img
                            class="rounded-circle"
                            src="../assets/market-logo.png"
                            height="60"
                        />
                    </div>
                </div>
                <div class="card-footer">
                    <ul class="flex-row d-inline-flex">
                        <li>
                            {{ store.categories }}
                        </li>
                    </ul>
                    <div class="row img-button">
                        <img
                            class="Group"
                            src="../assets/Group.png"
                            height="20"
                        />
                        <img
                            class="MaskGroup"
                            src="../assets/MaskGroup.png"
                            height="20"
                        />
                        <button type="button" class="btn w-25">
                            <b>زيارة</b>
                        </button>
                        <img
                            class="location"
                            src="../assets/location.png"
                            height="20"
                        />
                        <img
                            class="phone"
                            src="../assets/phone.png"
                            height="20"
                        />
                        <img
                            class="whatsapp"
                            src="../assets/whatsapp.png"
                            height="20"
                        />
                    </div>
                </div>
            </div>
        </div>

        <!--              check box     -->
        <span class="slide" id="btn">
            <a href="#">
                <i class="fa fa-bars" @click="btnbar"></i>
            </a>
        </span>

        <div
            class="card pl-0 pr-3 mr-4 col-lg-3 col-md-3 col-sm-4 col-xs-4 categores"
            id="menu"
        >
            <div class="backdrop"></div>
            <div class="card text-right checked-all open" id="all">
                <span class="text-center span-text text">عرض العروضات حسب</span>
                <span class="text-center bgcolor">حسب القسم</span>
                <div class="checklist">
                    <label for="check4">الكل</label
                    ><input
                        class="categories"
                        type="checkbox"
                        @click="CheckAll()"
                        v-model="IsCheckAll"
                        id="check4"
                    />
                    <ul>
                        <li
                            class="categories"
                            v-for="lang in langsdata"
                            :key="lang"
                        >
                            {{ lang }}
                            <input
                                class="categories"
                                :click="printvalues()"
                                type="checkbox"
                                v-bind:value="lang"
                                v-model="languages"
                                @change="updateCheckall()"
                            />
                        </li>
                    </ul>
                </div>
                <span class="text-center bgcolor">حسب المتجر أو الشركة</span>
                <div class="checklist">
                    <div class="">
                        <label for="check1">سوبر ماركت شوبيكو</label>&nbsp;
                        <input type="checkbox" id="check1" />
                    </div>
                    <div class="">
                        <label for="check2">أميرة سنتر</label>&nbsp;
                        <input type="checkbox" id="check2" />
                    </div>
                    <div class="">
                        <label for="check3">شركة الصفدي للإلكترونيات</label
                        >&nbsp;
                        <input type="checkbox" id="check3" />
                    </div>
                </div>
                <span class="text-center bgcolor">حسب التقييم</span>
                <div class="checklist stars">
                    <div class="row star-right">
                        <span
                            @click="rate = item"
                            v-for="item in parseInt(rate)"
                            :key="item"
                            class="fa fa-star"
                            aria-hidden="true"
                        ></span>
                        <span
                            @click="rate = item + rate"
                            v-for="item in 5 - rate"
                            :key="item"
                            class="far fa-star "
                            aria-hidden="true"
                        ></span>
                    </div>
                    <div class="row star-right2">
                        <span
                            @click="rate = item"
                            v-for="item in parseInt(rate)"
                            :key="item"
                            class="fa fa-star"
                            aria-hidden="true"
                        ></span>
                        <span
                            @click="rate = item + rate"
                            v-for="item in 4 - rate"
                            :key="item"
                            class="far fa-star "
                            aria-hidden="true"
                        ></span>
                    </div>
                    <div class="row star-right3">
                        <span
                            @click="rate = item"
                            v-for="item in parseInt(rate)"
                            :key="item"
                            class="fa fa-star"
                            aria-hidden="true"
                        ></span>
                        <span
                            @click="rate = item + rate"
                            v-for="item in 3 - rate"
                            :key="item"
                            class="far fa-star "
                            aria-hidden="true"
                        ></span>
                    </div>
                    <div class="row star-right4">
                        <span
                            @click="rate = item"
                            v-for="item in parseInt(rate)"
                            :key="item"
                            class="fa fa-star"
                            aria-hidden="true"
                        ></span>
                        <span
                            @click="rate = item + rate"
                            v-for="item in 2 - rate"
                            :key="item"
                            class="far fa-star "
                            aria-hidden="true"
                        ></span>
                    </div>
                    <div class="row star-right5">
                        <span
                            @click="rate = item"
                            v-for="item in parseInt(rate)"
                            :key="item"
                            class="fa fa-star"
                            aria-hidden="true"
                        ></span>
                        <span
                            @click="rate = item + rate"
                            v-for="item in 1 - rate"
                            :key="item"
                            class="far fa-star "
                            aria-hidden="true"
                        ></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '../jeson/data';
export default {
    data() {
        return {
            stores: data,
            IsCheckAll: false,
            langsdata: [
                'البقالة',
                'خضار و فواكه',
                'مخابز وحلويات',
                'الجمال والعناية الشخصية',
                'موبايلات و إكسسواراتها',
                'كمبيوترات و إكسسواراتها',
                'أجهزة كهربائية و الكترونية',
                'المنزل و المطبخ',
                'قرطاسية و تعليم',
                'أزياء',
                'أحذية',
                'ديكور و مفروشات',
                'عالم الطفل',
                'لوازم و أجهزة طبية صغيرة',
                'ألعاب و هدايا',
                'أصباغ ومواد ديكور',
                'عالم الموسيقا',
                'عدد ومستلزمات بناء',
                'مواد بناء',
                'مجوهرات و إكسسوارات',
                'مستلزمات واكسسوارات السيارات',
                'أنتيك و أعمال فنية',
                'كتب',
                'بصريات',
                'مستلزمات بيطرية',
                'مستلزامات زراعية',
            ],
            languages: [],
            selectedlang: '',
            rate: 0,
        };
    },

    methods: {
        CheckAll: function() {
            this.IsCheckAll = !this.IsCheckAll;
            this.languages = [];

            if (this.IsCheckAll) {
                for (var key in this.langsdata) {
                    this.languages.push(this.langsdata[key]);
                }
            }
        },
        updateCheckall: function() {
            if (this.languages.length === this.langsdata.length) {
                this.IsCheckAll = true;
            } else {
                this.IsCheckAll = false;
            }
        },
        printvalues: function() {
            this.selectedlang = '';
            for (var key in this.languages) {
                this.selectedlang += this.languages[key] + '|';
            }
        },
        btnbar: function() {
            document.getElementById('btn').classList.toggle('click');
            document.getElementById('menu').classList.toggle('show');
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 598px) {
    .checked-all {
        font-size: 12px;
        color: #000000;
        overflow-y: auto;
        white-space: nowrap;
    }
    input {
        margin-right: 10px;
        height: 10px;
    }
    label {
        font-weight: bold;
        font-size: 12px;
        color: #000000;
    }
    .checked-all ul li {
        color: #000000;
    }
    .span-text {
        font-weight: bold;
        font-size: 15px;
    }
    .bgcolor {
        background-color: #e0e0d1;
        border-radius: 3px;
        border: 1px solid #e0e0d1;
        font-size: 12px;
        margin-top: 5px;
        font-weight: bold;
    }
    .star-right {
        margin-top: 8px;
        font-size: 10px;
        margin-left: 90px;
    }
    .star-right2 {
        margin-top: 8px;
        font-size: 10px;
        margin-left: 102px;
    }
    .star-right3 {
        margin-top: 8px;
        font-size: 10px;
        margin-left: 112px;
    }
    .star-right4 {
        margin-top: 8px;
        font-size: 10px;
        margin-left: 122px;
    }
    .star-right5 {
        margin-top: 8px;
        font-size: 10px;
        margin-left: 134px;
    }
    /*...................*/
    .categores {
        margin-right: 0;
        color: #000000;
        position: fixed;
        width: 250px;
        right: -300px;
        height: 100%;
        transition: right 0.4s ease;
    }
    .categores.show {
        right: 0;
    }
    .slide {
        position: absolute;
        top: 0;
        right: 10px;
        height: 45px;
        width: 45px;
        cursor: pointer;
        transition: right 0.4s ease;
    }
    .slide.click {
        right: 260px;
    }
    .slide i {
        color: #000000;
    }
    .slide.click i:before {
        content: '\f00d';
    }
    .coulom-img {
        display: none;
    }
    .card {
        margin-top: 20px;
        margin-right: 0;
        margin-left: 0;
    }
    .img-open {
        height: 30px;
        margin-left: 60px;
        margin-right: 20px;
        margin-top: 10px;
    }
    .rounded-circle {
        height: 40px;
    }
    /*!*!*space store*!*!*/
    .text-muted {
        font-weight: bold;
        margin-right: 90px;
        margin-left: 30px;
        margin-top: 20px;
        font-size: 9px;
    }
    /*!*!*!*!*name store*!*!*!*!*/
    .title {
        margin-top: 10px;
        margin-right: 10px;
        font-size: 12px;
        font-weight: bold;
    }
    .stars {
        color: #ffd200;
        list-style: none;
    }

    /*!*!*!*!*type of goods*!*!*!*!*/
    ul {
        font-weight: bold;
        margin-top: 5px;
        list-style: none;
        font-size: 12px;
        color: #751aff;
    }

    /*!*!*!*!*button visit store*!*!*!*!*/
    .btn {
        font-weight: bold;
        font-size: 12px;
        height: 30px;
        width: 8px;
        margin-left: 80px;
    }
    .img-button {
        margin-top: 5px;
    }
    .location {
        height: 15px;
        margin-left: 80px;
        margin-right: 10px;
    }
    .phone {
        height: 15px;
        margin-left: 10px;
        margin-right: 10px;
    }
    .whatsapp {
        height: 15px;
        margin-left: 10px;
    }
    .Group {
        margin-left: 20px;
        height: 15px;
    }
    .MaskGroup {
        height: 15px;
    }
}
@media (min-width: 599px) and (max-width: 767px) {
    .coulom-img {
        display: none;
    }
    .card {
        margin-top: 20px;
        margin-right: 0;
        margin-left: 0;
    }
    .img-open {
        height: 20px;
        margin-right: 20px;
        margin-top: 5px;
    }
    .rounded-circle {
        height: 30px;
    }
    /*!*!*space store*!*!*/
    .text-muted {
        font-weight: bold;
        margin-right: 90px;
        margin-left: 30px;
        margin-top: 10px;
        font-size: 9px;
    }
    /*!*!*!*!*name store*!*!*!*!*/
    .title {
        margin-right: 5px;
        font-size: 12px;
        font-weight: bold;
    }
    .stars {
        color: #ffd200;
        list-style: none;
    }

    /*!*!*!*!*type of goods*!*!*!*!*/
    ul {
        font-weight: bold;
        margin-top: 5px;
        list-style: none;
        font-size: 10px;
        color: #751aff;
    }
    /*!*!*!*!*button visit store*!*!*!*!*/
    .btn {
        font-weight: bold;
        font-size: 10px;
        height: 25px;
        width: 8px;
        margin-left: 80px;
    }
    .img-button {
        margin-top: 5px;
    }
    .location {
        height: 15px;
        margin-left: 60px;
        margin-right: 10px;
    }
    .phone {
        height: 15px;
        margin-left: 10px;
        margin-right: 10px;
    }
    .whatsapp {
        height: 15px;
        margin-left: 10px;
    }
    .Group {
        height: 15px;
    }
    .MaskGroup {
        height: 15px;
    }
    input {
        height: 10px;
    }
    label {
        font-weight: bold;
        font-size: 10px;
    }
    .categories {
        color: #000000;
    }
    .span-text {
        font-weight: bold;

        font-size: 15px;
    }
    .bgcolor {
        background-color: #e0e0d1;
        border-radius: 3px;
        border: 1px solid #e0e0d1;
        font-size: 9px;
        margin-top: 5px;
        font-weight: bold;
    }
    .star-right {
        margin-top: 8px;
        font-size: 10px;
        margin-left: 90px;
    }
    .star-right2 {
        margin-top: 8px;
        font-size: 10px;
        margin-left: 102px;
    }
    .star-right3 {
        margin-top: 8px;
        font-size: 10px;
        margin-left: 112px;
    }
    .star-right4 {
        margin-top: 8px;
        font-size: 10px;
        margin-left: 122px;
    }
    .star-right5 {
        margin-top: 8px;
        font-size: 10px;
        margin-left: 134px;
    }
    .slide {
        display: none;
    }
}
@media (min-width: 768px) and (max-width: 991.98px) {
    .card {
        margin-top: 20px;
        margin-right: 0;
        margin-left: 0;
    }
    .img-open {
        height: 30px;
        margin-right: 20px;
        margin-top: 10px;
    }
    .rounded-circle {
        height: 30px;
        /*margin-top: 10px;*/
    }
    /*!*space store*!*/
    .text-muted {
        font-weight: bold;
        margin-right: 80px;
        margin-left: 30px;
        margin-top: 20px;
        font-size: 10px;
    }
    /*!*!*!*name store*!*!*!*/
    .title {
        font-weight: bold;
        margin-right: 20px;
        margin-left: 20px;
        font-size: 12px;
    }
    .stars {
        color: #ffd200;
        list-style: none;
    }
    /*!*!*!*type of goods*!*!*!*/
    li {
        font-weight: bold;
        list-style: none;
        font-size: 12px;
        color: #751aff;
    }
    /*!*!*!*button visit store*!*!*!*/
    .btn {
        margin-left: 70px;
        height: 30px;
    }
    .img-button {
        margin-top: 10px;
    }
    .location {
        margin-left: 80px;
        margin-right: 10px;
    }
    .phone {
        margin-left: 10px;
        margin-right: 10px;
    }
    .whatsapp {
        margin-left: 10px;
    }
    input {
        height: 12px;
    }
    label {
        font-weight: bold;
        font-size: 15px;
    }
    .checked-all {
        font-size: 9px;
    }
    .categories {
        color: #000000;
    }
    .span-text {
        font-weight: bold;
        font-size: 15px;
    }
    .bgcolor {
        font-weight: bold;
        background-color: #e0e0d1;
        border-radius: 3px;
        border: 1px solid #e0e0d1;
        font-size: 10px;
        margin-top: 5px;
    }
    .star-right {
        margin-top: 8px;
        font-size: 15px;
        margin-left: 60px;
    }
    .star-right2 {
        margin-top: 8px;
        font-size: 15px;
        margin-left: 78px;
    }
    .star-right3 {
        margin-top: 8px;
        font-size: 15px;
        margin-left: 94px;
    }
    .star-right4 {
        margin-top: 8px;
        font-size: 15px;
        margin-left: 110px;
    }
    .star-right5 {
        margin-top: 8px;
        font-size: 15px;
        margin-left: 128px;
    }
    .slide {
        display: none;
    }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
    .card {
        margin-top: 20px;
        margin-right: 0;
        margin-left: 0;
    }
    .img-open {
        height: 30px;
        margin-right: 20px;
        margin-top: 10px;
    }
    .rounded-circle {
        height: 40px;
        /*margin-top: 10px;*/
    }
    .span-text {
        font-weight: bold;
    }
    /*space store*/
    .text-muted {
        font-weight: bold;
        margin-right: 90px;
        margin-left: 30px;
        margin-top: 20px;
        font-size: 12px;
    }
    /*!*!*name store*!*!*/
    .title {
        font-weight: bold;
        margin-right: 20px;
        margin-left: 20px;
        font-size: 15px;
    }
    .stars {
        color: #ffd200;
        list-style: none;
    }
    /*!*!*type of goods*!*!*/
    li {
        font-weight: bold;
        list-style: none;
        font-size: 14px;
        color: #751aff;
    }
    /*!*!*button visit store*!*!*/
    .btn {
        margin-left: 90px;
        width: 20px;
    }
    .img-button {
        margin-top: 20px;
    }
    .location {
        margin-left: 80px;
        margin-right: 10px;
    }
    .phone {
        margin-left: 10px;
        margin-right: 10px;
    }
    .whatsapp {
        margin-left: 10px;
    }
    input {
        height: 12px;
    }
    label {
        font-weight: bold;
        font-size: 15px;
    }
    .categories {
        color: #000000;
        font-weight: bold;
        font-size: 15px;
    }
    .span-text {
        font-weight: bold;
        font-size: 15px;
    }
    .bgcolor {
        background-color: #e0e0d1;
        border-radius: 3px;
        border: 1px solid #e0e0d1;
        font-size: 15px;
        margin-top: 5px;
        font-weight: bold;
    }
    .star-right {
        margin-top: 8px;
        font-size: 15px;
        margin-left: 80px;
    }
    .star-right2 {
        margin-top: 8px;
        font-size: 15px;
        margin-left: 98px;
    }
    .star-right3 {
        margin-top: 8px;
        font-size: 15px;
        margin-left: 115px;
    }
    .star-right4 {
        margin-top: 8px;
        font-size: 15px;
        margin-left: 132px;
    }
    .star-right5 {
        margin-top: 8px;
        font-size: 15px;
        margin-left: 150px;
    }
    .slide {
        display: none;
    }
}
@media (min-width: 1200px) {
    .menu {
        display: none;
    }
    .img-open {
        margin-right: 50px;
        margin-top: 10px;
    }
    .span-text {
        font-weight: bold;
    }
    /*space store*/
    .text-muted {
        font-weight: bold;
        margin-right: 120px;
        margin-left: 30px;
        margin-top: 20px;
    }
    /*name store*/
    .title {
        font-weight: bold;
        margin-left: 20px;
        margin-right: 10px;
    }
    /*type of goods*/
    li {
        font-weight: bold;
        list-style: none;
        font-size: 15px;
        color: #751aff;
        margin-top: 10px;
    }
    /*button visit store*/
    .btn {
        margin-left: 150px;
        background-color: #66ff66;
    }
    .img-button {
        margin-top: 30px;
    }

    .location {
        margin-left: 140px;
        margin-right: 10px;
    }
    .phone {
        margin-left: 10px;
        margin-right: 10px;
    }
    .whatsapp {
        margin-left: 10px;
    }
    /*    check list   */
    .bgcolor {
        background-color: #e0e0d1;
        border-radius: 3px;
        border: 1px solid #e0e0d1;
        font-size: 15px;
        font-weight: bold;
    }
    input {
        height: 15px;
    }
    .categories {
        font-weight: bold;
        font-size: 15px;
        color: #000000;
    }
    .card {
        margin-top: 20px;
        margin-right: 0;
        margin-left: 0;
    }
    .star-right {
        font-size: 20px;
        margin-left: 100px;
    }
    .star-right2 {
        font-size: 20px;
        margin-left: 122px;
        margin-top: 10px;
    }
    .star-right3 {
        font-size: 20px;
        margin-left: 144px;
        margin-top: 10px;
    }
    .star-right4 {
        font-size: 20px;
        margin-left: 166px;
        margin-top: 10px;
    }
    .star-right5 {
        font-size: 20px;
        margin-left: 188px;
        margin-top: 10px;
        margin-right: 10px;
    }
    .slide {
        display: none;
    }
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
body {
    font-family: sans-serif;
    overflow-x: hidden;
}
/*div loop store*/
.store {
    background-color: #ffffff;
    border: 1px solid #ffffff;
    margin-bottom: 10px;
    border-radius: 7px;
    box-shadow: 3px 3px 3px 3px #7a7a52;
}
.stars {
    color: #ffd200;
    list-style: none;
}
.store:hover {
    border-radius: 0;
    box-shadow: 10px 10px 10px;
}
/*coulome store*/
.stors {
    background-color: transparent;
    border: none;
}
.coulom-img {
    background-color: transparent;
    border: none;
}
.card-title {
    margin: 20px;
}

.card-group {
    background-color: #ccccb3;
}
.checklist {
    font-weight: bold;
    font-size: 15px;
    margin-top: 20px;
    background-color: #f5f5f0;
    border: 1px solid #f5f5f0;
    margin-bottom: 10px;
    border-radius: 7px;
    box-shadow: 1px 1px 1px 1px #f5f5f0;
}
.checked-all {
    border-radius: 7px;
    border: 1px solid #f5f5f0;
}
.btn {
    background-color: #00cc44;
    color: #ffffff;
}
.card-footer {
    margin-top: 10px;
    text-align: center;
}
</style>
