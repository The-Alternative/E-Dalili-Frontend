<template>
    <div class="ProductDetalis" style="background-color: #e9ecf2">
        <div class="show-prod">
            <div class="row">
                <div class="col-xs-12" style="direction: rtl">
                    <div class="content-pro text-center">
                        <img
                            class=""
                            :src="image"
                            style="
                                width: 250px;
                                height: 250px;
                                border-radius: 10px;
                            "
                        />
                        <div class="name-prod">
                            {{ name }}
                        </div>
                        <div class="category">
                            {{ long_des }}
                        </div>
                        <div class="avilble">
                            <div style="display: inline-block">
                                متوفر في 5 متاجر
                            </div>
                            <span class="fa fa-check-circle"></span>
                        </div>
                        <div>
                            <span> 80,00 ل.س الى 100,00 ل.س</span>
                            <div
                                class="price"
                                style="display: inline-block"
                            ></div>
                        </div>
                        <div class="heart-conten">
                            <div
                                @click="heartlike()"
                                id="heart"
                                class="heart"
                            ></div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <button
                                    @click="gotoListView(id, name, short_des)"
                                    class="but1"
                                >
                                    <span>
                                        {{ $t('Choose') }}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.row {
    justify-content: center;
    margin: 0;
}
.show-prod .col-4 {
    max-width: 21%;
}
.show-prod h2 {
    display: inline-block;
    margin: 0 20px 0 100px;
}
.col-4 img {
    height: 100px;
    width: 101px;
    margin: 10px;
}
/* product style */
.content-pro {
    font-size: 18px;
    margin-top: 10vh;
}
.content-pro div {
    margin-top: 3vh;
    margin-bottom: 3vh;
}
.content-pro .stars {
    margin-top: 20px;
}
.content-pro .avilble {
    color: #19e653;
}
.content-pro .checked {
    color: #dcd741;
}
.but1 {
    border-radius: 4px;
    background-color: #008b8b;
    border: none;
    color: #ffffff;
    text-align: center;
    font-size: 16px;
    padding: 20px;
    width: 190px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
}
.but1 span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}
.but1 span:after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
    font-size: 30px;
}
.but1:hover span {
    padding-right: 25px;
}
.but1:hover span:after {
    opacity: 1;
    right: 0;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .show-prod .col-12 img {
        width: 220px;
    }
    .show-prod .col-4 {
        padding: 0;
        max-width: 24%;
    }
    .show-prod .col-4 img {
        height: 55px;
        width: 55px;
    }
    .show-prod h2 {
        display: inline-block;
        margin: 22px;
        font-size: 20px;
        font-weight: bold;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .show-prod h2 {
        font-size: 18px;
        margin: 10px;
    }
    .show-prod .col-12 img {
        width: 300px;
    }
    .show-prod .col-4 {
        padding: 0;
        max-width: 30%;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .show-prod h2 {
        font-size: 20px;
        margin: 22px;
    }
    .show-prod .col-4 {
        padding: 0;
        max-width: 30%;
    }
}
.carousel-control-next,
.carousel-control-prev {
    height: 50px;
}
.carousel-control-next-icon,
.carousel-control-prev-icon {
    border: 1px solid #fff;
    border-radius: 50%;
    width: 37px;
    height: 60px;
    background-color: #9b8282;
    top: 100px;
    position: absolute;
}
</style>
<style lang="scss" scoped>
.heart-conten {
    background-color: #f0f0f0;
    border-radius: 20%;
    width: 50px;
    height: 50px;
    margin: 10px auto;
}
.content-pro .heart-conten:hover {
    background-color: #d3b85f;
}
.heart {
    width: 80px;
    height: 100px;
    background: url('../../../public/img/heart.png') no-repeat;
    background-position: 5px -23px;
    cursor: pointer;
    transition: background-position 1s steps(28);
    transition-duration: 0s;
    margin: -22px 0px 0 -25px;

    &.is-active {
        transition-duration: 1s;
        background-position: -2795px -23px;
    }
}
</style>
<script>
export default {
    name: 'ProductDetails',
    data () {
        return {};
    },
    components: {},
    props: ['id', 'name', 'image', 'short_des', 'long_des'],
    computed: {
        count () {
            return this.$store.state.count;
        },
        stores () {
            return this.$store.state.stores;
        },
        product () {
            return this.$store.state.stores[0].products;
        },
    },
    methods: {
        heartlike: function () {
            document.getElementById('heart').classList.toggle('is-active');
        },
        gotoListView: function (i, n, s) {
            this.$router.push(`/ListView/${i}/${n}/${s}`);
        },
    },
};
</script>
