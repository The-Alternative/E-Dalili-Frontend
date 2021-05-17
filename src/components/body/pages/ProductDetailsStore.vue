<template>
    <div class="ProductDetalis" style="background-color: #e9ecf2">
        <Cartmini />
        <!-- ___________________________________________________ -->
        <div
            class="col-12 row"
            v-for="prod in ProductID.slice(0, 1)"
            :key="prod"
        >
            <div class="col-6">
                <div class="row">
                    <div class="col-12">
                        <img :src="prod.image" />
                    </div>
                </div>
            </div>

            <div class="content-pro text-center col-6">
                <div>{{ prod.id }}</div>
                <div class="name-prod">
                    {{ prod.name }}
                </div>
                <div class="category">
                    {{ prod.long_des }}
                </div>
                <div>
                    <div>{{ ProductID[0].store[prod.id].pivot.price }} s.p</div>
                    <div class="price" style="display: inline-block"></div>
                </div>
                <div class="row">
                    <div class="col">
                        <button @click="addToCart" class="but1">
                            <span>
                                {{ $t('AddCart') }}
                            </span>
                        </button>
                    </div>
                    <div class="col">
                        <button @click="gotocart" class="but1">
                            <span>
                                {{ $t('GoToCart') }}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDetailsStore',
    data() {
        return {
            details: {
                id: this.id,
                id_store: this.$route.params.id,
                title: this.$route.params.title,
                name: this.name,
                image: this.image,
                short_des: this.short_des,
                long_des: this.long_des,
                store_product: this.store_product,
            },
        };
    },
    components: {
        Cartmini: () => import('@/components/cart/Cartmini.vue'),
    },
    props: [
        'id',
        'name',
        'image',
        'short_des',
        'long_des',
        'store_product',
        'title',
    ],
    computed: {
        ProductID() {
            return this.$store.state.ProductID;
        },
    },
    mounted() {
        this.$store.dispatch('loadProduct', this.id);
    },
    methods: {
        increment() {
            this.$store.commit('increment');
        },
        addItem(items) {
            this.$store.dispatch('addToCart', items);
        },
        gotocart: function () {
            this.$router.push(`/Cart`);
        },
        addToCart() {
            this.$store.dispatch('addToCart', this.details, this.id);
            document.getElementById('cart').animate(
                [
                    // keyframes
                    { transform: 'rotate(-20deg)' },
                    { transform: 'rotate(20deg)' },
                    { transform: 'scale(3,3)' },
                    { transform: 'scale(1,1)' },
                ],
                {
                    // timing options
                    duration: 1000,
                }
            );
        },
    },
};
</script>

<style scoped>
.row {
    justify-content: center;
    align-items: center;
    margin: 0;
}
.show-prod h2 {
    display: inline-block;
    margin: 0 20px 0 100px;
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
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .show-prod h2 {
        font-size: 20px;
        margin: 22px;
    }
}
</style>
