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
                                id: this.id,
                                id_store: this.$route.params.id,
                                title: this.$route.params.title,
                                name: this.name,
                                image: this.image,
                                short_des: this.short_des,
                                long_des: this.long_des,
                                store_product: this.store_product,
                            },
                        }"
                    >
                        <button
                            type="button"
                            class="btn btn-secondary"
                            title="Quick Shop"
                            @click="productDetalis()"
                        >
                            <i class="fa fa-eye"></i>
                        </button>
                    </router-link>
                    <button
                        type="button"
                        class="btn btn-secondary"
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
                <div class="name-prod mt-2">{{ name }}</div>
                <div class="stars mb-2">
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star"></i>
                </div>
                <div class="category">
                    {{ short_des }}
                </div>
                <div v-for="item in store_product" :key="item.id">
                    {{ item.price }} s.p
                </div>
                <div class="row">
                    <div class="heart-conten">
                        <div
                            @click="heartlike()"
                            id="heart"
                            class="heart"
                        ></div>
                    </div>
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
        'title',
    ],
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
    methods: {
        heartlike: function () {
            this.$el.lastChild.lastChild.lastChild.classList.toggle(
                'is-active'
            );
        },
        addToCart() {
            this.$store.dispatch('addToCart', this.details, this.id);
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
    transition: all 0.5s;
}
.borderproduct .row {
    flex-wrap: nowrap;
}
.borderproduct:hover {
    transform: scale3d(1.05, 1.05, 1);
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
    transition: all 0.5s;
}
.overlay .btn-secondary {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
}
.overlay .fa:hover {
    transform: scale3d(1.2, 1.2, 1);
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
.heart-conten {
    background-color: #f0f0f0;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 10px auto;
}
.heart-conten:hover {
    background-color: #d3b85f;
}
.heart {
    width: 80px;
    height: 100px;
    background: url('../../../../public/img/heart.png') no-repeat;
    background-position: 0 0;
    cursor: pointer;
    transition: background-position 1s steps(28);
    transition-duration: 0s;
    margin: -22px 0px 0 -25px;

    &.is-active {
        transition-duration: 1s;
        background-position: -2800px 0;
    }
}
@media (max-width: 576.98px) {
    .heart-conten {
        margin: 10px 0;
    }
}
</style>
