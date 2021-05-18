<template>
    <div>
        <div
            class="cart-shop-icon"
            @click="totalPrice !== 0 ? showcart() : hidecart()"
            id="cart"
        >
            <i class="fa fa-shopping-cart"></i>
            <span class="cart-count">{{ cartItemCount }}</span>
        </div>
        <div id="cartshop" class="cart-shop">
            <div class="row">
                <div class="col-md-12 cart">
                    <div
                        v-for="items in cartItems"
                        :key="items.id"
                        class="row border-top border-bottom"
                        style="padding: 10px 0"
                    >
                        <div class="cart-items">
                            <div class="row" style="width: 100%">
                                <div class="col-md-2 col-xs-12">
                                    <img class="img" :src="items.image" />
                                </div>
                                <div class="col-md-3 col-xs-12">
                                    {{ items.name }}
                                </div>
                                <div class="col-md-3 col-xs-12">
                                    {{ items.short_des }}
                                </div>
                                <div class="col-md-2 col-xs-12 quantity-add">
                                    <button
                                        class="btnn"
                                        @click="removeItem(items)"
                                    >
                                        <i class="fa fa-angle-down"></i>
                                    </button>
                                    <a class="quantity">
                                        <span class="cart-quantity price">{{
                                            items.quantity
                                        }}</span></a
                                    >
                                    <button
                                        class="btnn"
                                        @click="addItem(items)"
                                    >
                                        <i class="fa fa-angle-up"></i>
                                    </button>
                                </div>
                                <div class="col-md-2 col-xs-12">
                                    <span
                                        class="price"
                                        v-for="item in items.store_product"
                                        :key="item.id"
                                        >{{ item.price * items.quantity }}</span
                                    >
                                    <span
                                        @click="removeFromCart(items)"
                                        class="close fa fa-trash"
                                    ></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <button class="button">
                            <span>{{ $t('Buynow') }}</span>
                        </button>
                        <router-link to="/Cart">
                            <button class="button but1">
                                <span>{{ $t('Gotocart') }}</span>
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* ____________________________ Start Cart Shop ________________________________ */
.button {
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

.button span {
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

.button:hover span {
    padding-right: 25px;
}

.button:hover span:after {
    opacity: 1;
    right: 0;
}

.close {
    cursor: pointer;
}
.close:hover {
    color: red;
    font-size: 20px;
}
.cart-count {
    font-size: 15px;
    color: #ba8b00;
    padding: 0px 5px;
    margin-left: -5px;
    background: #ffffff;
    height: 21px;
    border-radius: 50%;
    width: 20px;
    position: absolute;
    margin-top: -13px;
}
.cart-shop-icon {
    position: fixed;
    bottom: 10px;
    left: 5px;
    width: 50px;
    height: 50px;
    background-color: #73a580;
    padding: 13px 10px;
    border-radius: 50%;
    z-index: 999;
}
.cart-shop {
    position: fixed;
    bottom: 0px;
    visibility: hidden;
    z-index: 998;
    overflow-y: scroll;
    height: 200px;
    width: 100%;
    box-shadow: 0px 4px 20px 0 rgb(255, 216, 6),
        1px 6px 30px 0px rgba(196, 10, 10, 0.19);
    scrollbar-width: thin;
}
.vs {
    visibility: visible;
}
.title {
    margin-bottom: 5vh;
}
.cart-items {
    display: inline-flex;
    width: 100%;
}
.col-md-2,
.col-md-3 {
    margin: auto;
    font-size: 17px;
}
@media (max-width: 767px) {
    .card {
        margin: 3vh auto;
    }
    .cart {
        padding: 4vh;
    }
    .summary {
        border-top-right-radius: unset;
        border-bottom-left-radius: 1rem;
    }
}
.cart {
    background-color: #dddcdc;
    padding: 4vh 5vh;
}
.summary {
    background-color: #ddd;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 4vh;
    color: rgb(65, 65, 65);
}
.row {
    margin: 0;
}
.title b {
    font-size: 1.5rem;
}
.main {
    margin: 0;
    padding: 2vh 0;
    width: 100%;
}
a {
    padding: 0 1vh;
}
.close {
    margin-left: auto;
    font-size: 0.7rem;
}
img {
    width: 6.5rem;
    border-radius: 50%;
    transition: 1s;
}
.img:hover {
    transform: scale(1.3);
    z-index: 2;
}
.store {
    font-size: 1rem;
    text-align: left;
    width: 100%;
    border: 2px solid #fff;
    height: 50px;
    padding: 1vh;
    background-color: darkcyan;
}
.store span {
    margin-left: 10px;
    color: #fff;
}
h5 {
    margin-top: 4vh;
}
hr {
    margin-top: 1.25rem;
}
form {
    padding: 2vh 0;
}
select {
    border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 1.5vh 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247);
}
input {
    border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247);
}
input:focus::-webkit-input-placeholder {
    color: transparent;
}
.btnn {
    color: #fff;
    background-color: transparent;
    background-color: darkcyan;
    transition: all 0.3s ease-in-out;
    border: none;
    border-radius: 9px;
}
.btn {
    background-color: darkcyan;
    color: white;
    font-size: 0.8rem;
    padding: 1vh;
    border-radius: 2px;
    height: 50px;
    margin: 5vh;
}
.quantity {
    font-size: 2vh;
    border-color: #fff;
}
.price {
    font-weight: bold;
    color: rgb(202, 150, 6);
    font-size: 16px;
}
.btn:focus {
    box-shadow: none;
    outline: none;
    box-shadow: none;
    color: white;
    -webkit-box-shadow: none;
    -webkit-user-select: none;
    transition: none;
}
.btn:hover {
    color: white;
}
a {
    color: black;
}
a:hover {
    color: black;
    text-decoration: none;
}
#code {
    background-image: linear-gradient(
            to left,
            rgba(255, 255, 255, 0.253),
            rgba(255, 255, 255, 0.185)
        ),
        url('https://img.icons8.com/small/16/000000/long-arrow-right.png');
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: center;
}
@media (max-width: 575.98px) {
    .cart {
        padding: 5px 2px 2px 0;
    }
    .close {
        font-size: 15px;
    }
    .close:hover {
        color: red;
        font-size: 20px;
    }
    .col-md-2,
    .col-md-3 {
        margin-top: 1vh;
    }
}
</style>

<script>
import { mapState } from 'vuex';

export default {
    components: {},
    props: ['id', 'name', 'image', 'short_des', 'long_des', 'store_product'],

    data() {
        return {};
    },
    methods: {
        showcart: function () {
            var cart = document.getElementById('cartshop');
            cart.classList.toggle('vs');
        },
        hidecart: function () {
            var cart = document.getElementById('cartshop');
            cart.classList.remove('vs');
        },
        addItem(items) {
            this.$store.dispatch('addToCart', items);
        },
        removeItem(items) {
            this.$store.dispatch('removeItem', items);
        },
        removeFromCart(item) {
            this.$store.commit('removeFromCart', item);
        },
    },
    computed: {
        cartItems() {
            return this.$store.state.cartItems;
        },
        cartItemCount() {
            return this.$store.state.cartItemCount;
        },
        totalPrice() {
            let price = 0;
            this.$store.state.cartItems.map((el) => {
                price += el['quantity'] * el['price'];
            });
            return price;
        },
        ...mapState(['store']),
    },
    // mounted () {
    //     this.$store.dispatch('loadstore');
    // },
};
</script>
