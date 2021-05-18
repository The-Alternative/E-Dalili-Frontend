<template>
    <div class="ProductDetalis" style="background-color: #e9ecf2">
        <div class="row">
            <div class="col-12"><h2>أختيار الترتيب</h2></div>
            <div class="sort col-3">
                <input
                    id="radio1"
                    name="radios"
                    value="price"
                    type="radio"
                    v-model="sortType"
                    v-on:change="sortItem()"
                />
                <label for="radio1">من الأرخص الى الأغلى</label>
            </div>
            <div class="sort col-3">
                <input
                    id="radio2"
                    name="radios"
                    value="prices"
                    type="radio"
                    v-model="sortType"
                    v-on:change="sortItem()"
                />
                <label for="radio2">من الأغلى الى الأرخص</label>
            </div>
            <div class="sort col-3">
                <input
                    type="radio"
                    id="radio3"
                    name="radios"
                    value="space"
                    v-model="sortType"
                    v-on:change="sortItem()"
                />
                <label for="radio3">من الأقرب الى الأبعد</label>
            </div>
            <div class="sort col-3">
                <input
                    type="radio"
                    id="radio4"
                    name="radios"
                    value="spaces"
                    v-model="sortType"
                    v-on:change="sortItem()"
                />
                <label for="radio4">من الأبعد الى الأقرب</label>
            </div>
            <div class="col-8" style="margin: 10px 0">
                <img class="product-img" src="../../../public/img/w.jpg" />
            </div>
            <div class="col-4">
                <div class="row">
                    <div class="col-12">
                        <h5 class="prod-name">{{ ProductID[0].name }}</h5>
                    </div>
                    <div class="col-12">
                        <h5 class="prod-dis">{{ ProductID[0].short_des }}</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="show-prod">
            <div
                class="store animate__animated animate__fadeInUpBig"
                v-for="store in ProductID[0].store"
                :key="store"
            >
                <div>
                    <img
                        class="rounded-circle store-logo"
                        src="../../../public/img/market-logo.png"
                    />
                </div>
                <div>
                    <h2>
                        {{ store.title }}
                    </h2>
                    <span>{{ 500 }}متر</span>
                </div>
                <div>
                    <img
                        class="icon-delivery"
                        style="margin-right: 10px"
                        src="../../../public/img/icon-delivery.png"
                        height="40"
                    />
                    <span class="fa fa-check-circle"></span>
                </div>

                <div>
                    <h2>{{ store.pivot.price }} ل.س</h2>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.show-prod .store {
    width: 100%;
    direction: rtl;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
.sort input[type='radio'] {
    display: none;
}

.sort label {
    display: inline-block;
    background-color: #e9ecf2;
    padding: 4px 11px;
    font-family: Arial;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
    height: 100%;
    padding: 10px 0;
}
.sort label:hover {
    background-color: #68d268;
    border-radius: 10px;
    transition: all 0.5s;
}

.sort input[type='radio']:checked + label {
    background-color: #68d268;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    color: #fff;
}

h2 {
    font-size: 2vw;
    margin-top: 25px;
}
span {
    font-size: 1.8vw;
}
.store-logo {
    width: 100px;
    height: 100px;
}
.row {
    justify-content: center;
    margin: 0;
}
.sort {
    border: 1px solid azure;
    border-radius: 10px;
    padding: 0;
}

.store {
    margin: 20px 0;
}
.store .row .col-7,
.col-2,
.col-1 {
    margin: auto;
}
.product-img {
    width: 200px;
    height: 180px;
    border-radius: 5%;
}
.fa-check-circle {
    color: #48d748;
    margin: 10px 10px;
}
.prod-name,
.prod-dis {
    margin: 20px 0;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    h2 {
        font-size: 4vw;
        margin-top: 3vh;
    }
    span {
        font-size: 4vw;
    }
    .fa-check-circle {
        margin: 10px 22px;
    }
    .store-logo {
        width: 50px;
        height: 50px;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .show-prod h2 {
        font-size: 18px;
        margin: 10px;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .show-prod h2 {
        font-size: 20px;
        margin: 22px;
    }
}
</style>
<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            details: {
                id: this.id,
                name: this.name,
                short_des: this.short_des,
                long_des: this.long_des,
                price: this.price,
            },
            sortType: '1',
        };
    },
    components: {},

    props: ['id', 'name', 'short_des', 'long_des', 'price'],
    computed: {
        ...mapState(['ProductID']),
    },
    mounted() {
        this.$store.dispatch('loadProduct', this.id);
    },
    methods: {
        sortItem() {
            if (this.sortType == 'space') {
                this.stores = this.stores.sort(
                    (prev, curr) => prev.space - curr.space
                );
            } else if (this.sortType == 'spaces') {
                this.stores = this.stores.sort(
                    (prev, curr) => curr.space - prev.space
                );
            } else if (this.sortType == 'price') {
                this.$store.state.ProductID[0].store = this.$store.state.ProductID[0].store.sort(
                    (prev, curr) => prev.pivot.price - curr.pivot.price
                );
            } else if (this.sortType == 'prices') {
                this.$store.state.ProductID[0].store = this.$store.state.ProductID[0].store.sort(
                    (prev, curr) => curr.pivot.price - prev.pivot.price
                );
            }
        },
    },
};
</script>
