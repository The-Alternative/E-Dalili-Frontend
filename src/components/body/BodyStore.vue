<template>
    <!--  all coulome body  -->
    <div
        class="card-group col-sm-12 wrapper"
        id="wrapper"
        style="display: flex; justify-content: center; padding: 0"
    >
        <!--      coulome one left -->
        <div
            class="card pl-3 pr-0 col-lg-3 col-md-2 col-sm-6 coulom-img"
        >
            <img
                class="mb-3 img1"
                src="../../assets/img1.png"
                height="50%"
            />
            <img
                class="img2"
                src="../../assets/img.png"
                height="50%"
            />
        </div>

        <!--     coulome middel stors group   -->
        <div
            class="card pl-1 pr-1 col-lg-6 col-md-7 col-sm-8 col-xs-8 stors "
        >
            <!--          store 1-->
            <div
                class="store"
                v-for="store in activeStores"
                :key="store.id"
            >
                <div
                    class="card-title row justify-content-lg-end"
                >
                    <div
                        class="d-flex flex-row"
                    >
                        <img
                            class="img-open"
                            src="../../assets/open.png"
                            height="40"
                        />
                        <div
                            class="text-muted"
                        >
                            {{
                                store.space
                            }}
                        </div>
                        <div>
                            <div
                                class="title"
                            >
                                {{
                                    store.title
                                }}
                                <div
                                    class="stars text-right"
                                >
                                    <span
                                        @click="
                                            store.rate = item
                                        "
                                        v-for="item in parseInt(
                                            store.rate
                                        )"
                                        :key="
                                            item
                                        "
                                        class="fa fa-star"
                                        aria-hidden="true"
                                    ></span>
                                    <span
                                        @click="
                                            store.rate =
                                                item +
                                                store.rate
                                        "
                                        v-for="item in 5 -
                                            store.rate"
                                        :key="
                                            item
                                        "
                                        class="far fa-star"
                                        aria-hidden="true"
                                    ></span>
                                </div>
                            </div>
                        </div>
                        <img
                            class="rounded-circle"
                            src="../../assets/market-logo.png"
                            height="60"
                        />
                    </div>
                </div>
                <div
                    class="card-footer"
                >
                    <ul
                        class="flex-row d-inline-flex"
                    >
                        <li
                            class="categorystore"
                        >
                            {{
                                store.categories
                            }}
                        </li>
                    </ul>
                    <div
                        class="row img-button"
                    >
                        <img
                            class="Group"
                            src="../../assets/Group.png"
                            height="20"
                        />
                        <img
                            class="MaskGroup"
                            src="../../assets/MaskGroup.png"
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
            <a>
                <i
                    class="fa fa-bars"
                    @click="btnbar()"
                ></i>
            </a>
        </span>

        <div
            class="card pl-0 pr-3 mr-4 col-lg-3 col-md-3 col-sm-4 col-xs-4 categores"
            id="menu"
        >
            <div class="backdrop"></div>
            <div
                class="card text-right checked-all open"
                id="all"
            >
                <span
                    class="text-center span-text text"
                    >عرض العروضات
                    حسب</span
                >
                <span
                    class="text-center bgcolor"
                    >حسب القسم</span
                >
                <div class="checklist">
                    <label
                        class="textcheck"
                        for="check4"
                        >الكل</label
                    >
                    <input
                        class="categories fa fa-check-square-o"
                        type="checkbox"
                        id="check4"
                    />
                    <ul>
                        <li
                            class="textcheck"
                            v-for="category in categories"
                            :key="
                                category
                            "
                            for="category"
                        >
                            {{
                                category
                            }}
                            <input
                                class="categories"
                                type="checkbox"
                                v-bind:value="
                                    category
                                "
                                id="category"
                                v-model="
                                    selectedCategory
                                "
                            />
                        </li>
                    </ul>
                </div>
                <span
                    class="text-center bgcolor"
                    >حسب المتجر أو
                    الشركة</span
                >
                <div class="checklist">
                    <div class="">
                        <label
                            class="textcheck"
                            for="check1"
                            >سوبر ماركت
                            شوبيكو</label
                        >&nbsp;
                        <input
                            class="categories"
                            type="checkbox"
                            id="check1"
                        />
                    </div>
                    <div class="">
                        <label
                            class="textcheck"
                            for="check2"
                            >أميرة
                            سنتر</label
                        >&nbsp;
                        <input
                            class="categories"
                            type="checkbox"
                            id="check2"
                        />
                    </div>
                    <div class="">
                        <label
                            class="textcheck"
                            for="check3"
                            >شركة الصفدي
                            للإلكترونيات</label
                        >&nbsp;
                        <input
                            class="categories"
                            type="checkbox"
                            id="check3"
                        />
                    </div>
                </div>
                <span
                    class="text-center bgcolor"
                    >حسب التقييم</span
                >
                <div
                    class="checklist stars"
                >
                    <div
                        class="row star-right"
                    >
                        <span
                            @click="
                                rate = item
                            "
                            v-for="item in parseInt(
                                rate
                            )"
                            :key="item"
                            class="fa fa-star"
                            aria-hidden="true"
                        ></span>
                        <span
                            @click="
                                rate =
                                    item +
                                    rate
                            "
                            v-for="item in 5 -
                                rate"
                            :key="item"
                            class="far fa-star "
                            aria-hidden="true"
                        ></span>
                    </div>
                    <div
                        class="row star-right2"
                    >
                        <span
                            @click="
                                rate = item
                            "
                            v-for="item in parseInt(
                                rate
                            )"
                            :key="item"
                            class="fa fa-star"
                            aria-hidden="true"
                        ></span>
                        <span
                            @click="
                                rate =
                                    item +
                                    rate
                            "
                            v-for="item in 4 -
                                rate"
                            :key="item"
                            class="far fa-star "
                            aria-hidden="true"
                        ></span>
                    </div>
                    <div
                        class="row star-right3"
                    >
                        <span
                            @click="
                                rate = item
                            "
                            v-for="item in parseInt(
                                rate
                            )"
                            :key="item"
                            class="fa fa-star"
                            aria-hidden="true"
                        ></span>
                        <span
                            @click="
                                rate =
                                    item +
                                    rate
                            "
                            v-for="item in 3 -
                                rate"
                            :key="item"
                            class="far fa-star "
                            aria-hidden="true"
                        ></span>
                    </div>
                    <div
                        class="row star-right4"
                    >
                        <span
                            @click="
                                rate = item
                            "
                            v-for="item in parseInt(
                                rate
                            )"
                            :key="item"
                            class="fa fa-star"
                            aria-hidden="true"
                        ></span>
                        <span
                            @click="
                                rate =
                                    item +
                                    rate
                            "
                            v-for="item in 2 -
                                rate"
                            :key="item"
                            class="far fa-star "
                            aria-hidden="true"
                        ></span>
                    </div>
                    <div
                        class="row star-right5"
                    >
                        <span
                            @click="
                                rate = item
                            "
                            v-for="item in parseInt(
                                rate
                            )"
                            :key="item"
                            class="fa fa-star"
                            aria-hidden="true"
                        ></span>
                        <span
                            @click="
                                rate =
                                    item +
                                    rate
                            "
                            v-for="item in 1 -
                                rate"
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

<script src="../../js/body.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 200px) and (max-width: 467px) {
    .checked-all {
        font-size: 12px;
        color: #000000;
        overflow-y: auto;
        white-space: nowrap;
    }
    .categories {
        height: 8px;
        color: #000000;
        list-style: none;
        margin-bottom: 10px;
        transition: all 0.8s;
    }
    .textcheck {
        font-weight: bold;
        list-style: none;
        margin-bottom: 10px;
        font-size: 7px;
        color: #000000;
        transition: all 0.8s;
    }
    .checked-all
        .listcategories
        .categories {
        color: #000000;
        margin-right: 10px;
        display: none;
    }
    .span-text {
        font-size: 10px;
    }
    .bgcolor {
        background-color: #e0e0d1;
        border-radius: 3px;
        border: 1px solid #e0e0d1;
        font-size: 9px;
        margin-top: 5px;
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
        position: absolute;
        width: 180px;
        right: -400px;
        height: 50%;
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
    .slide .fa-bars {
        color: #000000;
    }
    .slide.click .fa-bars:before {
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
    .card-footer {
        text-align: center;
    }
    .img-open {
        height: 20px;
        margin-top: 10px;
        margin-left: 10px;
        transition: all 0.8s;
    }
    .rounded-circle {
        height: 30px;
    }
    /*!*!*space store*!*!*/
    .text-muted {
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 20px;
        font-size: 9px;
    }
    /*!*!*!*!*name store*!*!*!*!*/
    .title {
        margin-top: 10px;
        margin-right: 10px;
        font-size: 9px;
    }
    .stars {
        color: #ffd200;
        list-style: none;
    }
    /*!*!*!*!*type of goods*!*!*!*!*/
    .categorystore {
        margin-top: 5px;
        list-style: none;
        font-size: 10px;
        color: #751aff;
        text-align: center;
    }
    .img-button {
        margin-top: 5px;
    }
    .Group {
        height: 15px;
    }
    .MaskGroup {
        height: 15px;
    }
    .stors {
        width: 100%;
    }
}
@media (min-width: 468px) and (max-width: 598.99px) {
    .checked-all {
        font-size: 12px;
        color: #000000;
        overflow-y: auto;
        white-space: nowrap;
    }
    .categories {
        height: 10px;
        font-size: 15px;
        color: #000000;
        list-style: none;
        margin-bottom: 10px;
        transition: all 0.8s;
    }
    .textcheck {
        list-style: none;
        margin-bottom: 10px;
        font-size: 8px;
        font-weight: bold;
        color: #000000;
        transition: all 0.8s;
    }
    .checked-all
        .listcategories
        .categories {
        color: #000000;
        margin-right: 10px;
    }
    .span-text {
        font-size: 12px;
    }
    .bgcolor {
        background-color: #e0e0d1;
        border-radius: 3px;
        border: 1px solid #e0e0d1;
        font-size: 10px;
        margin-top: 5px;
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
        position: absolute;
        width: 200px;
        right: -400px;
        height: 50%;
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
    .slide .fa-bars {
        color: #000000;
    }
    .slide.click .fa-bars:before {
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
    .card-footer {
        text-align: center;
    }
    .img-open {
        height: 20px;
        margin-top: 10px;
        margin-left: 30px;
        transition: all 0.8s;
    }
    .rounded-circle {
        height: 30px;
    }
    /*!*!*space store*!*!*/
    .text-muted {
        margin-top: 20px;
        margin-left: 60px;
        margin-right: 80px;
        font-size: 10px;
    }
    /*!*!*!*!*name store*!*!*!*!*/
    .title {
        margin-top: 10px;
        margin-right: 10px;
        font-size: 12px;
    }
    .stars {
        color: #ffd200;
        list-style: none;
    }

    /*!*!*!*!*type of goods*!*!*!*!*/
    .categorystore {
        margin-top: 5px;
        list-style: none;
        font-size: 12px;
        color: #751aff;
        text-align: center;
    }
    .img-button {
        margin-top: 5px;
    }
    .Group {
        margin-left: 10px;
        height: 15px;
    }
    .MaskGroup {
        height: 15px;
    }
    .stors {
        width: 100%;
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
        transition: all 0.8s;
    }
    .rounded-circle {
        height: 30px;
    }
    /*!*!*space store*!*!*/
    .text-muted {
        margin-right: 40px;
        margin-left: 30px;
        margin-top: 10px;
        font-size: 9px;
    }
    /*!*!*!*!*name store*!*!*!*!*/
    .title {
        margin-right: 5px;
        font-size: 12px;
    }
    .stars {
        color: #ffd200;
        list-style: none;
    }
    /*!*!*!*!*type of goods*!*!*!*!*/
    .categorystore {
        margin-top: 5px;
        list-style: none;
        font-size: 10px;
        color: #751aff;
    }
    .img-button {
        margin-top: 5px;
    }
    .Group {
        margin-left: 10px;
    }
    .Group {
        height: 15px;
    }
    .MaskGroup {
        height: 15px;
    }

    .textcheck {
        list-style: none;
        margin-bottom: 10px;
        font-size: 8px;
        font-weight: bold;
        color: #000000;
        transition: all 0.8s;
    }
    .categories {
        height: 10px;
        color: #000000;
        list-style: none;
        margin-bottom: 10px;
        transition: all 0.8s;
        /* position: relative; */
    }
    .categories[type='checkbox'] {
        width: 10px;
        height: 10px;
        border: 1px solid #000;
    }
    .span-text {
        font-size: 15px;
    }
    .bgcolor {
        background-color: #e0e0d1;
        border-radius: 3px;
        border: 1px solid #e0e0d1;
        font-size: 9px;
        margin-top: 5px;
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
        transition: all 0.8s;
    }
    .rounded-circle {
        height: 30px;
        /*margin-top: 10px;*/
    }
    /*!*space store*!*/
    .text-muted {
        margin-right: 50px;
        margin-left: 30px;
        margin-top: 20px;
        font-size: 10px;
    }
    /*!*!*!*name store*!*!*!*/
    .title {
        margin-right: 20px;
        font-size: 12px;
    }
    .stars {
        color: #ffd200;
        list-style: none;
    }
    /*!*!*!*type of goods*!*!*!*/
    .categorystore {
        list-style: none;
        font-size: 12px;
        color: #751aff;
    }
    .img-button {
        margin-top: 10px;
    }
    .categories {
        height: 10px;
        color: #000000;
        list-style: none;
        margin-bottom: 10px;
        transition: all 0.8s;
    }
    .textcheck {
        font-weight: bold;
        list-style: none;
        margin-bottom: 10px;
        font-size: 8px;
        color: #000000;
        transition: all 0.8s;
    }
    .checked-all {
        font-size: 9px;
    }

    .span-text {
        font-size: 15px;
    }
    .bgcolor {
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
        transition: all 0.8s;
    }
    .rounded-circle {
        height: 40px;
        /*margin-top: 10px;*/
    }
    /*space store*/
    .text-muted {
        margin-right: 60px;
        margin-left: 30px;
        margin-top: 20px;
        font-size: 12px;
    }
    /*!*!*name store*!*!*/
    .title {
        margin-right: 20px;
        font-size: 15px;
    }
    .stars {
        color: #ffd200;
        list-style: none;
    }
    /*!*!*type of goods*!*!*/
    .categorystore {
        list-style: none;
        font-size: 14px;
        color: #751aff;
    }
    .img-button {
        margin-top: 20px;
    }
    .Group {
        margin-left: 10px;
    }
    .textcheck {
        list-style: none;
        margin-bottom: 10px;
        font-size: 12px;
        color: #000000;
        transition: all 0.8s;
    }
    .categories {
        height: 15px;
        font-size: 15px;
        color: #000000;
        list-style: none;
        margin-bottom: 10px;
        transition: all 0.8s;
    }
    .span-text {
        font-size: 15px;
    }
    .bgcolor {
        background-color: #e0e0d1;
        border-radius: 3px;
        border: 1px solid #e0e0d1;
        font-size: 15px;
        margin-top: 5px;
    }
    .star-right {
        margin-top: 8px;
        font-size: 15px;
        margin-left: 140px;
    }
    .star-right2 {
        margin-top: 8px;
        font-size: 15px;
        margin-left: 156px;
    }
    .star-right3 {
        margin-top: 8px;
        font-size: 15px;
        margin-left: 174px;
    }
    .star-right4 {
        margin-top: 8px;
        font-size: 15px;
        margin-left: 190px;
    }
    .star-right5 {
        margin-top: 8px;
        font-size: 15px;
        margin-left: 202px;
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
        transition: all 0.8s;
    }
    .textcheck {
        list-style: none;
        margin-bottom: 10px;
        font-size: 15px;
        color: #000000;
        transition: all 0.8s;
    }
    /*space store*/
    .text-muted {
        margin-right: 90px;
        margin-left: 30px;
        margin-top: 20px;
    }
    /*name store*/
    .title {
        margin-left: 20px;
        margin-right: 10px;
    }
    /*type of goods*/
    .categorystore {
        list-style: none;
        font-size: 15px;
        color: #751aff;
        margin-top: 10px;
    }
    .img-button {
        margin-top: 30px;
    }
    .Group {
        margin-left: 10px;
    }
    /*    check list   */
    .bgcolor {
        background-color: #e0e0d1;
        border-radius: 3px;
        border: 1px solid #e0e0d1;
        font-size: 15px;
    }
    .categories {
        height: 15px;
        font-size: 15px;
        color: #000000;
        list-style: none;
        margin-bottom: 10px;
        transition: all 0.8s;
    }
    .card {
        margin-top: 20px;
        margin-right: 0;
        margin-left: 0;
    }
    .star-right {
        font-size: 20px;
        margin-left: 150px;
    }
    .star-right2 {
        font-size: 20px;
        margin-left: 176px;
        margin-top: 10px;
    }
    .star-right3 {
        font-size: 20px;
        margin-left: 194px;
        margin-top: 10px;
    }
    .star-right4 {
        font-size: 20px;
        margin-left: 218px;
        margin-top: 10px;
    }
    .star-right5 {
        font-size: 20px;
        margin-left: 250px;
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
.fa-star:hover {
    color: #ffd200;
    box-shadow: 0 0 40px #eebe22;
}
.store:hover {
    border-radius: 0;
    box-shadow: 10px 10px 10px #adad85;
}
/*coulome store*/
.stors {
    transition: all 0.35s ease-in-out;
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
    background-color: #fefefe;
}
.checklist {
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
.card-footer {
    margin-top: 10px;
    text-align: center;
}
.textcheck:hover {
    color: #5a5957;
    transform: translate(0, -5px);
}
.categorystore:hover {
    transform: scale(1.3);
}
.img-open:hover {
    transform: scale(1.3);
    cursor: pointer;
}
.title:hover {
    font-weight: bold;
}
.text-muted:hover {
    font-weight: bold;
}
.img1:hover {
    background-color: #ffffff;
    border: 1px solid #ffffff;
    margin-bottom: 10px;
    border-radius: 7px;
    box-shadow: 3px 3px 3px 3px #f3d160;
}
.img2:hover {
    background-color: #ffffff;
    border: 1px solid #ffffff;
    margin-bottom: 10px;
    border-radius: 7px;
    box-shadow: 3px 3px 3px 3px #f3d160;
}
</style>
