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
        <div class="card pl-1 pr-1 col-lg-6 col-md-7 col-sm-8 col-xs-8 stors ">
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
                        <li class="categorystore">
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
                        <btnvisit-store></btnvisit-store>
                        <location-store></location-store>
                        <phone-store></phone-store>
                        <whatsapp-store></whatsapp-store>
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
                    <label class="textcheck" for="check4">الكل</label
                    ><input
                        class="categories"
                        type="checkbox"
                        @click="CheckAll()"
                        v-model="IsCheckAll"
                        id="check4"
                    />
                    <ul>
                        <li
                            class="textcheck"
                            v-for="category in categories"
                            :key="category"
                        >
                            {{ category }}
                            <input
                                class="categories"
                                :click="printvalues()"
                                type="checkbox"
                                v-bind:value="category"
                                v-model="languages"
                                @change="updateCheckall()"
                            />
                        </li>
                    </ul>
                </div>
                <span class="text-center bgcolor">حسب المتجر أو الشركة</span>
                <div class="checklist">
                    <div class="">
                        <label class="textcheck" for="check1"
                            >سوبر ماركت شوبيكو</label
                        >&nbsp;
                        <input class="categories" type="checkbox" id="check1" />
                    </div>
                    <div class="">
                        <label class="textcheck" for="check2">أميرة سنتر</label
                        >&nbsp;
                        <input class="categories" type="checkbox" id="check2" />
                    </div>
                    <div class="">
                        <label class="textcheck" for="check3"
                            >شركة الصفدي للإلكترونيات</label
                        >&nbsp;
                        <input class="categories" type="checkbox" id="check3" />
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

<script src="../js/Store.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
