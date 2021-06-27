<template>
    <div class="parent">
        <div class="child1">
            <div class="colum_baner">
                <img src="../../../public/img/fistival_baner.png" />
            </div>
        </div>
        <div class="child2">
            <div
                v-for="store in Stores.slice(0, 10)"
                :key="store.pr"
                :store="store"
                style="margin-bottom: 50px"
            >
                <div class="ch2">
                    <div class="date">
                        <div>15/8/2021</div>
                        08:30 AM
                        <div></div>
                    </div>
                    <div class="title">
                        الریم سنتر- سوبر ماركت
                        <img
                            class="rounded-circle"
                            src="../../../public/img/market-logo.png"
                            height="70"
                        />
                    </div>
                </div>
                <div class="card" style="margin-top: 40px">
                    <div>
                        الشامبو الأفضل لمعالجة القشرة یحتوي على كربونات الزنك ,
                        یساعد على محاربة القشور عن طریق ترطیب فروة الرأس حسم 10
                        % على جمیع أنواع الشامبو
                    </div>
                    <span>head & shoulders</span>
                    <hr class="hr" />
                    <div class="conten_price">
                        <div>
                            <span
                                style="
                                    text-decoration-line: line-through;
                                    opacity: 0.5;
                                "
                                >5500</span
                            >
                            <span>4900 ل.س</span>
                        </div>

                        <div>
                            <div class="tofer">توفير</div>
                        </div>
                    </div>
                    <div class="img_content">
                        <img src="../../../public/img/fistival_img.png" />
                    </div>
                    <div class="Remaining_time">
                        <h4>الزمن المتبقي للعرض</h4>
                        <div class="time_progress">
                            <span class="progress"></span>
                            <span class="time">7ساعات و 5 دقائق</span>
                        </div>
                    </div>
                    <div class="action">
                        <div class="stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <div
                            class="textFollow"
                            id="textFollow"
                            @click="heart()"
                        >
                            <span class="share heart" id="heart"></span>
                            <i
                                class="fas fa-share fa-2x"
                                style="color: #d7cfcf"
                            ></i>
                            <span class="follow" id="follow">مشاركة العرض</span>
                        </div>
                        <div
                            class="textFollow"
                            id="textFollow"
                            @click="heart()"
                        >
                            <span class="heart" id="heart"></span>
                            <span class="follow" id="follow"
                                >الأعجاب بالعرض</span
                            >
                        </div>
                    </div>
                    <div class="action">
                        <h5>70.000</h5>
                        <h5>30</h5>
                        <h5>120.000</h5>
                    </div>
                    <div class="contact">
                        <div></div>
                        <div class="get_offer">أطلب العرض</div>
                        <div class="icon_contact">
                            <whatsapp-store></whatsapp-store>
                            <phone-store></phone-store>
                            <location-store></location-store>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="child3">
            <div class="backdrop"></div>
            <div class="card text-right checked-all open" id="all">
                <span class="text-center span-text text">{{
                    $t('Viewoffers')
                }}</span>
                <span class="text-center bgcolor">{{
                    $t('Bydepartment')
                }}</span>
                <div class="checklist">
                    <label class="textcheck" for="check4">{{
                        $t('All')
                    }}</label>
                    <input
                        class="categories fa fa-check-square-o"
                        type="checkbox"
                        id="check4"
                    />
                    <ul>
                        <li
                            class="textcheck"
                            v-for="category in Sections"
                            :key="category"
                        >
                            {{ category.name }}
                            <input
                                class="categories"
                                type="checkbox"
                                v-bind:value="category"
                                id="category"
                                v-model="selectedCategory"
                            />
                        </li>
                    </ul>
                </div>
                <span class="text-center bgcolor">{{
                    $t('DependingStoreCompany')
                }}</span>
                <div class="checklist">
                    <div class="">
                        <label class="textcheck" for="check1">{{
                            $t('ShopicoSupermarket')
                        }}</label
                        >&nbsp;
                        <input class="categories" type="checkbox" id="check1" />
                    </div>
                    <div class="">
                        <label class="textcheck" for="check2">{{
                            $t('PrincessCenter')
                        }}</label
                        >&nbsp;
                        <input class="categories" type="checkbox" id="check2" />
                    </div>
                    <div class="">
                        <label class="textcheck" for="check3">{{
                            $t('ElectronicsCompany')
                        }}</label
                        >&nbsp;
                        <input class="categories" type="checkbox" id="check3" />
                    </div>
                </div>
                <span class="text-center bgcolor">{{
                    $t('AccordingEvaluation')
                }}</span>
                <div class="checklist stars">
                    <div class="row star-right">
                        <span
                            @click="rating = item"
                            v-for="item in parseInt(rating)"
                            :key="item"
                            class="fa fa-star"
                            aria-hidden="true"
                        ></span>
                        <span
                            @click="rating = item + rating"
                            v-for="item in 5 - rating"
                            :key="item"
                            class="far fa-star"
                            aria-hidden="true"
                        ></span>
                    </div>
                    <div class="row star-right2">
                        <span
                            @click="rating = item"
                            v-for="item in parseInt(rating)"
                            :key="item"
                            class="fa fa-star"
                            aria-hidden="true"
                        ></span>
                        <span
                            @click="rating = item + rating"
                            v-for="item in 4 - rating"
                            :key="item"
                            class="far fa-star"
                            aria-hidden="true"
                        ></span>
                    </div>
                    <div class="row star-right3">
                        <span
                            @click="rating = item"
                            v-for="item in parseInt(rating)"
                            :key="item"
                            class="fa fa-star"
                            aria-hidden="true"
                        ></span>
                        <span
                            @click="rating = item + rating"
                            v-for="item in 3 - rating"
                            :key="item"
                            class="far fa-star"
                            aria-hidden="true"
                        ></span>
                    </div>
                    <div class="row star-right4">
                        <span
                            @click="rating = item"
                            v-for="item in parseInt(rating)"
                            :key="item"
                            class="fa fa-star"
                            aria-hidden="true"
                        ></span>
                        <span
                            @click="rating = item + rate"
                            v-for="item in 2 - rating"
                            :key="item"
                            class="far fa-star"
                            aria-hidden="true"
                        ></span>
                    </div>
                    <div class="row star-right5">
                        <span
                            @click="rating = item"
                            v-for="item in parseInt(rating)"
                            :key="item"
                            class="fa fa-star"
                            aria-hidden="true"
                        ></span>
                        <span
                            @click="rating = item + rating"
                            v-for="item in 1 - rating"
                            :key="item"
                            class="far fa-star"
                            aria-hidden="true"
                        ></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
export default {
    props: ['id', 'title', 'section', 'Product', 'brand'],
    components: {
        WhatsappStore: () => import('@/components/body/whatsapp-store.vue'),
        PhoneStore: () => import('@/components/body/phone-store'),
        LocationStore: () => import('@/components/body/location-store'),
    },
    data() {
        return {
            Sections: [],
            viewProductsInStore: [],
            rating: 0,
            selectedCategory: [],
        };
    },
    computed: {
        ...mapState(['categories', 'Stores']),
        // Stores: function() {
        //     if (this.selectedCategory.length == 0)
        //         return this.$store.state.stores;
        //     var Stores = [];
        //     var filters = this.selectedCategory;
        //
        //     this.$store.state.stores.forEach(function(store) {
        //         function storeContainsFilter(filter) {
        //             return store.categories.indexOf(filter) != -1;
        //         }
        //         if (filters.every(storeContainsFilter)) {
        //             Stores.push(store);
        //         }
        //     });
        //     return Stores;
        // },
    },
    mounted() {
        this.$store.dispatch('loadStores');
    },
    methods: {
        heart: function () {
            document
                .getElementById('textFollow')
                .classList.toggle('heart-active');
            document.getElementById('follow').classList.toggle('heart-active');
            document.getElementById('heart').classList.toggle('heart-active');
        },
        btnbar: function () {
            document.getElementById('btn').classList.toggle('click');
            document.getElementById('menu').classList.toggle('show');
        },
        gotoview: function (i, t, w) {
            this.$router.push(`visitStore/${i}/${t}/${w}`);
        },
        fetch() {
            var self = this;
            let lang = window.localStorage.getItem('lang');
            axios
                .get(`/api/sections/getAll?lang=${lang}`)
                .then((res) => {
                    self.Sections = res.data.Section;
                    console.warn('Data SUCCESS: ', res.data.Section);
                })
                .catch(function (error) {
                    console.warn('------ Error ------: ', error);
                });
        },
    },
    created() {
        this.fetch();
    },
};
</script>
<style scoped>
.parent {
    display: flex;
}
.parent .child1,
.parent .child3 {
    width: 20%;
}
.parent .child2 {
    width: 50%;
    display: grid;
    grid-template-columns: 1fr;
    margin: auto;
}
.parent .child2 .ch2 {
    display: inline-flex;
    justify-content: space-between;
    width: 95%;
}
.parent .child2 .title {
    font-weight: bold;
    opacity: 0.8;
    position: relative;
}
.parent .child2 .ch2 .title::after {
    content: 'السويداء-طريق القنوات';
    position: absolute;
    opacity: 0.4;
    top: 46px;
    right: 70px;
}
.parent .child2 .ch2 .title::before {
    content: 'الجمال والعناية بالبشرة';
    position: absolute;
    opacity: 0.4;
    top: 68px;
    right: 70px;
}

.parent .child2 .date {
    opacity: 0.5;
}
.parent .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
}
.parent .card .hr {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
}
.parent .card .conten_price {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    font-weight: bold;
}
.parent .card .conten_price .tofer {
    background-color: #f6ef19;
    padding: 2px 20px;
    color: red;
}
.parent .card .conten_price .tofer::after {
    content: url(../../../public/img/icon_tofer.png);
    position: absolute;
    top: 87px;
    right: 54px;
}
.parent .card .conten_price .tofer::before {
    content: 'ل.س 550';
    position: absolute;
    right: 100px;
    color: black;
    font-size: 18px;
    opacity: 0.8;
}
.parent .card .img_content {
    margin: 40px 0 10px 0;
    width: 96%;
    margin-left: auto;
    margin-right: auto;
}
.parent .card .img_content img {
    width: 100%;
}
.parent .card .conten_price div span {
    margin: 0 5px;
}
.parent .card .Remaining_time {
    width: 95%;
    margin: 0 auto 50px auto;
}
.parent .card .Remaining_time .time_progress {
    width: 100%;
    height: 20px;
    background-color: #f6f1f1;
    position: relative;
}
.parent .card .Remaining_time .time_progress .progress {
    position: absolute;
    left: 2px;
    top: 2px;
    width: 70%;
    height: 80%;
    background-color: #19e653;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}
.parent .card .Remaining_time .time_progress .time {
    font-size: 12px;
    opacity: 0.5s;
    opacity: 0.5;
    position: absolute;
    right: 15px;
}
.parent .child1 .colum_baner {
    display: flex;
    flex-direction: column;
}
.parent .action {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 20px;
}
.parent .icon_contact {
    display: flex;
    margin: 15px;
    justify-content: space-around;
    width: 25%;
}

.parent .action .stars span {
    margin: 0 5px;
    font-size: 30px;
}
.parent .action h5 {
    opacity: 0.8;
    text-shadow: 3px 5px 10px #909090;
}
.parent .contact {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-flow: row-reverse;
    direction: rtl;
}
.parent .contact .get_offer {
    background-color: #f6ef19;
    padding: 9px 30px;
    color: red;
    border-radius: 5px;
    font-weight: bold;
    box-shadow: 0 5px 2px -2px #dadada;
    position: relative;
    margin: 15px;
}
.parent .contact .get_offer::before {
    content: url(../../../public/img/getoffer.png);
    position: absolute;
    top: -4px;
    right: 116px;
}
.textFollow {
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid #eae2e1;
    max-width: 30%;
    position: relative;
    padding: 10px 10px 10px 50px;
}
.textFollow i {
    position: absolute;
    left: 5px;
}

.textFollow .heart {
    width: 100px;
    height: 100px;
    background: url('../../../public/img/heart.png') no-repeat;
    background-position: left;
    background-size: 2900%;
    position: absolute;
    top: 26px;
    left: 2px;
    transform: translate(-30%, -55%);
}
.follow {
    font-size: 14px;
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
.share {
    display: none;
}
.checked {
    color: #f6ef19;
}
/* small devices (portrait phones, less than 767px) */
@media (max-width: 767.98px) {
    .parent .child2 {
        width: 90%;
    }
    .parent .child3,
    .parent .child1 {
        display: none;
    }
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 576.98px) {
}
/* ____________________________________________________  */

.btn {
    font-weight: bold;
    font-size: 1rem;
    height: 30px;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 50px;
}
.checked-all {
    font-size: 16px;
    color: #000000;
    overflow-y: auto;
    white-space: nowrap;
}
.categories {
    height: 14px;
    font-size: 16px;
    color: #000000;
    list-style: none;
    margin-bottom: 10px;
    transition: all 0.8s;
    margin-left: 10px;
}
.textcheck {
    list-style: none;
    margin-bottom: 10px;
    font-size: 16px;
    color: #000000;
    transition: all 0.8s;
}
.checked-all .listcategories .categories {
    color: #000000;
    margin-right: 10px;
}
.span-text {
    font-size: 16px;
}
.bgcolor {
    background-color: #e0e0d1;
    border-radius: 3px;
    border: 1px solid #e0e0d1;
    font-size: 16px;
    margin-top: 5px;
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .parent .card .conten_price .tofer::after {
        top: 108px;
    }
}
/* Extra small devices (portrait phones, less than 576px) */
@media (min-width: 340px) and (max-width: 576.98px) {
    .parent .child2 .ch2 .title {
        display: flex;
        flex-direction: inherit;
    }
    .parent .child2 .ch2 .title::after {
        top: 46px;
        right: 66px;
    }
    .parent .child2 .ch2 .title::before {
        top: 68px;
        right: 70px;
    }
    .parent .card .conten_price .tofer::after {
        top: 108px;
    }
    .parent .card .conten_price .tofer::before {
        font-size: 15px;
    }
    .parent .card .stars {
        display: none;
    }
    .textFollow {
        max-width: 40%;
        padding: 10px 0px 10px 28px;
    }
}
@media (min-width: 200px) and (max-width: 339.98px) {
    .parent .child2 .ch2 .title {
        display: flex;
        flex-direction: inherit;
    }
    .parent .card .conten_price .tofer::after {
        top: 129px;
    }
    .parent .card .stars {
        display: none;
    }
    .textFollow {
        max-width: 40%;
        padding: 10px 0px 10px 28px;
    }
}
</style>
