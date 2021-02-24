<template>
    <div class="card">
        <div class="row">
            <div
                class="col-sm-9 col-xs-12 cart"
            >
                <div class="title">
                    <div class="row">
                        <div
                            class="col-sm-12"
                        >
                            <h4>
                                <b
                                    >عربة
                                    التسوق</b
                                >
                            </h4>
                        </div>
                        <div
                            class="store"
                        >
                            <span
                                >اسم
                                المتجر</span
                            >
                        </div>
                    </div>
                </div>

                <div
                    v-for="items in cartItems"
                    :key="items.id"
                    class="row border-top border-bottom"
                    style="padding: 10px 0"
                >
                    <div
                        class="cart-items"
                    >
                        <div
                            class="col-sm-2 col-xs-12"
                        >
                            <img
                                class="img"
                                src="@/assets/w.jpg"
                            />
                        </div>
                        <div
                            class="col-sm-2 col-xs-3"
                        >
                            {{
                                items.title
                            }}
                        </div>
                        <div
                            class="col-sm-2 col-xs-3"
                        >
                            {{
                                items.description
                            }}
                        </div>
                        <div
                            class="col-sm-3 quantity-add"
                        >
                            <button
                                class="btnn"
                                @click="
                                    removeItem(
                                        items
                                    )
                                "
                            >
                                <i
                                    class="fa fa-angle-down"
                                ></i>
                            </button>
                            <a
                                class="quantity"
                            >
                                <span
                                    class="cart-quantity"
                                    >{{
                                        items.quantity
                                    }}</span
                                ></a
                            >
                            <button
                                class="btnn"
                                @click="
                                    addItem(
                                        items
                                    )
                                "
                            >
                                <i
                                    class="fa fa-angle-up"
                                ></i>
                            </button>
                        </div>
                        <div
                            class="col-sm-2 col-xs-3"
                        >
                            <span
                                >price:
                            </span>
                            <span
                                class="price"
                                >{{
                                    items.price *
                                        items.quantity
                                }}</span
                            >
                            <span
                                @click="
                                    removeFromCart(
                                        items
                                    )
                                "
                               class="close fa fa-trash"
                                ></span
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="col-sm-3 col-xs-12 summary"
                v-if="totalPrice !== 0"
            >
                <div class="row">
                    <div
                        :totalPrice="
                            totalPrice
                        "
                        class="col text-right"
                    >
                        <span
                            class="price"
                        >
                            {{
                                totalPrice
                            }}</span
                        >
                        S.P
                    </div>
                    <div
                        class="col"
                        style="padding-left:0;"
                    >
                        :السعر
                    </div>
                </div>
                <form class="fo">
                    <p>
                        تكاليف الشحن 500
                        ل.س
                    </p>
                </form>
                <div
                    class="row"
                    style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;"
                >
                    <div
                        class="col text-right"
                    >
                        <span
                            class="price"
                        >
                            {{
                                totalPrice +
                                    500
                            }}</span
                        >
                        S.P
                    </div>
                    <div class="col">
                        :السعر مع تكاليف
                        الشحن
                    </div>
                </div>
                <button class="btn">
                    CHECKOUT
                </button>
            </div>
            <EmptyCart v-else />
        </div>
    </div>
</template>

<script>
import EmptyCart from '@/components/cart/EmptyCart.vue';
export default {
    name: 'Cart',

    data() {
        return {};
    },
    components: {
        EmptyCart,
    },
    methods: {
        addItem(items) {
            this.$store.dispatch(
                'addToCart',
                items
            );
        },
        removeItem(items) {
            this.$store.dispatch(
                'removeItem',
                items
            );
        },
        removeFromCart(item) {
            this.$store.commit(
                'removeFromCart',
                item
            );
        },
    },
    computed: {
        cartItems() {
            return this.$store.state
                .cartItems;
        },
        totalPrice() {
            let price = 0;
            this.$store.state.cartItems.map(
                (el) => {
                    price +=
                        el['quantity'] *
                        el['price'];
                }
            );
            return price;
        },
    },
};
</script>
<style scoped>
@media (max-width: 767px) {
    .cart {
        padding: 4vh;
        border-bottom-left-radius: unset;
        border-top-right-radius: 1rem;
    }
    .card {
        margin: 3vh auto;
    }
    .summary {
        border-top-right-radius: unset;
        border-bottom-left-radius: 1rem;
    }
}
.close:hover {
    color: red;
    font-size: 20px;
}
.title {
    margin-bottom: 5vh;
}

.card {
    margin: 0;
    width: 100%;
    box-shadow: 0 6px 20px 0
        rgba(0, 0, 0, 0.19);
    border-radius: 1rem;
    border: transparent;
}
.cart-items div {
    margin: auto;
}
.cart-items {
    display: inline-flex;
    width: 100%;
}
.cart {
    background-color: #fff;
    padding: 4vh 5vh;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
}

.summary {
    background-color: #ddd;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 4vh;
    color: rgb(65, 65, 65);
}

.summary .col-2 {
    padding: 0;
}

.summary .col-10 {
    padding: 0;
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

.col-2,
.col {
    padding: 0 1vh;
}

a {
    padding: 0 1vh;
    border: 1px solid;
}

.close {
    margin-left: auto;
    font-size: 0.7rem;
    cursor: pointer;
}

img {
    width: 5.5rem;
    border-radius: 50%;
    transition: 1s;
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
    border: 1px solid
        rgba(0, 0, 0, 0.137);
    padding: 1.5vh 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(
        247,
        247,
        247
    );
}

input {
    border: 1px solid
        rgba(0, 0, 0, 0.137);
    padding: 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(
        247,
        247,
        247
    );
}

input:focus::-webkit-input-placeholder {
    color: transparent;
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
.btn {
    background-color: darkcyan;
    color: white;
    width: 100%;
    font-size: 0.8rem;
    margin-top: 4vh;
    padding: 1vh;
    border-radius: 2px;
    height: 50px;
    margin-top: 5vh;
}
.btnn {
    color: #fff;
    background-color: transparent;
    background-color: darkcyan;
    transition: all 0.3s ease-in-out;
}
.quantity {
    font-size: 2vh;
    border-color: #fff;
}
.price {
    font-weight: bold;
    color: rgb(226, 176, 37);
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
    .title {
        margin: 0.5vh;
    }
    .cart {
        padding: 0;
        font-size: 12px;
    }
    .cart-items {
        display: inline-block;
        width: 100%;
    }
    .cart-items div {
        margin-bottom: 1vh;
    }
    .cart-items .img-fluid {
        max-width: -1px;
    }
    .fo {
        margin-top: 1vh;
    }
    .btn {
        margin-top: 1vh;
    }
}
</style>
