<template>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 coler">
        <div class="borderproduct">
            <div class="product-top">
                <img :src="image" class="new" />
                <div class="overlay">
                    <router-link
                        :to="{
                            name: 'ProductDetailsStore',
                            params: {
                                id: id,
                                name: name,
                                image: image,
                                short_des: short_des,
                                long_des: long_des,
                                store_product: store_product,
                                category: category,
                            },
                        }"
                    >
                        <button
                            type="button"
                            class="btn btn-secondary"
                            title="Quick Shop"
                        >
                            <i class="fa fa-eye"></i>
                        </button>
                    </router-link>
                    <button
                        type="button"
                        class="btn btn-secondary"
                        id="heart"
                        title="Add to wishlist"
                        @click="heartlike()"
                    >
                        <i class="fa fa-heart"></i>
                    </button>
                    <button
                        type="button"
                        class="btn btn-secondary cartshop"
                        id="cart"
                        title="Add to cart"
                        @click="addToCart()"
                    >
                        <i class="fa fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
            <div class="product-bottom text-center">
                <div class="name-prod">
                    {{ name }}
                </div>
                <div v-for="item in store_product" :key="item.id">
                    {{ item.price }}
                </div>
                <div class="stars">
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star"></i>
                </div>
                <div class="category">
                    {{ short_des }}
                </div>
                <div>
                    <span>{{ long_des }} $</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BodyProductStore',
    props: [
        'id',
        'name',
        'image',
        'short_des',
        'long_des',
        'store_product',
        'category',
    ],
    data() {
        return {
            details: {
                id: this.id,
                name: this.name,
                image: this.image,
                short_des: this.short_des,
                long_des: this.long_des,
                store_product: this.store_product,
                category: this.category,
            },
        };
    },
    methods: {
        // gotodetails(i, n, l) {
        //     this.$router.push(`ProductDetailsStore/${i}/${n}/${l}`);
        // },
        // gotodetails: function(i, t, d, p) {
        //     this.$router.push(`ProductDetailsStore/${i}/${t}/${d}/${p}`);
        // },
        addToCart() {
            this.$store.dispatch('addToCart', this.details);
            this.$el.animate(
                [
                    // keyframes
                    {
                        transform:
                            'perspective(500px) translate3d(-200px, 1000px,-10000px)',
                    },
                ],
                {
                    // timing options
                    duration: 1000,
                }
            );
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
    computed: {
        count() {
            return this.$store.state.count;
        },
        // stores() {
        //     return this.$store.state.stores;
        // },
        // categories() {
        //     return this.$store.state.categories;
        // },
        // brands() {
        //     return this.$store.state.brands;
        // },
        // product() {
        //     return this.$store.state.stores[0].products;
        // },
    },
    mounted() {
        this.$store.dispatch('loadStoreDetailsProduct', this.id);
    },
};
</script>

<style scoped>
.coler {
    width: 100%;
    justify-content: center;
    letter-spacing: 1px;
}
.borderproduct {
    justify-content: center;
    border-radius: 10px;
    box-shadow: 3px 3px 3px 3px #c2bdbd;
    background-color: #ffffff;
    margin: 10px;
}
.new {
    width: 100%;
    cursor: pointer;
}
.overlay {
    display: block;
    opacity: 0;
    position: absolute;
    top: 10%;
    margin-left: 0;
    width: 70px;
}
.product-top:hover .overlay {
    opacity: 1;
    margin-left: 5%;
    transition: 0.5s;
}
.overlay .fa {
    cursor: pointer;
    background-color: #fff;
    color: #000;
    height: 35px;
    width: 35px;
    font-size: 20px;
    padding: 7px;
    margin: 5%;
    margin-bottom: 5%;
}
.overlay .btn-secondary {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
}
.cartshop {
    position: relative;
    transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
}
.cartshop:active {
    transform: scale(0.9);
    background-color: #ffa130;
    box-shadow: 0 2px 25px rgba(255, 215, 52, 0.2);
}
.cartshop:hover {
    background-color: #d3b85f;
}
.name-prod,
.category {
    cursor: pointer;
}
.checked {
    color: #dcd741;
}
.avilble {
    color: #19e653;
}
.avilble div {
    margin-right: 10px;
}
</style>

<style lang="scss" scoped>
.heart {
    width: 100px;
    height: 100px;
    background: url('../../../../public/img/heart.png') no-repeat;
    background-position: 0 0;
    cursor: pointer;
    transition: background-position 1s steps(28);
    transition-duration: 0s;
    margin: auto;

    &.is-active {
        transition-duration: 1s;
        background-position: -2800px 0;
    }
}
</style>
