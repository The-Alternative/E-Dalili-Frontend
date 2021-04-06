<template>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 coler">
        <div class="content-pro text-center">
            <img
                @click="goto(id, title, description, price)"
                v-lazy="image"
                class="new"
            />
            <div @click="goto(id, title, description, price)" class="name-prod">
                {{ title }}
            </div>
            <div @click="goto(id, title, description, price)" class="category">
                {{ description }}
            </div>

            <div class="stars">
                <span class="fa fa-star  checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
            </div>
            <div>
                <span>ل.س{{ price }} </span>
                <div class="price" style="display: inline-block"></div>
            </div>
            <div class="avilble">
                <div style="display: inline-block">متوفر في متاجر</div>
                <span class="fa fa-check-circle"></span>
            </div>
            <div class="stage row">
                <div @click="addToCart()" class="cart-ico">
                    <button class="cart-button">
                        <i class="fa fa-shopping-cart"></i>
                    </button>
                </div>
                <div @click="heartlike()" id="heart" class="heart"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Products',
    props: ['id', 'title', 'description', 'price', 'image'],
    data() {
        return {
            details: {
                id: this.id,
                title: this.title,
                description: this.description,
                price: this.price,
            },
        };
    },
    methods: {
        goto: function(i, t, d, p) {
            this.$router.push(`ProductDetalis/${i}/${t}/${d}/${p}`);
        },
        heartlike: function() {
            this.$el.lastChild.lastChild.lastChild.classList.toggle(
                'is-active'
            );
        },
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
    },
};
</script>

<style scoped>
@media (max-width: 575.98px) {
    .left,
    .center,
    .right {
        width: 40px;
        height: 45px;
    }
    .left {
        transform: translateX(-10px) translateZ(-25px) rotateY(-5deg);
    }
    .right {
        transform: translateX(10px) translateZ(-25px) rotateY(5deg);
    }
    .text {
        bottom: -7px;
        left: 5px;
        width: 0px;
        font-size: 13px;
    }
}
/* body of products */
.cart-ico {
    margin: auto;
}
.cartshop {
    background-color: #ccc;
    width: 20px;
    padding: 11px;
    border-radius: 50%;
}
.cartshop:hover {
    background-color: #d3b85f;
}
.coler .rot {
    color: #585b5e;
    text-decoration: none;
}
.content-pro {
    font-size: 16px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
    margin-top: 10vh;
    margin-bottom: 10vh;
    border-radius: 5%;
    transition: all 0.5s;
}
.content-pro:hover {
    transform: scale3d(1.05, 1.05, 1);
}
.content-pro .new {
    width: 100%;
    border-top-right-radius: 5%;
    border-top-left-radius: 5%;
    cursor: pointer;
}
.content-pro .name-prod,
.content-pro .category {
    cursor: pointer;
}
.content-pro .stars {
    margin-top: 20px;
}
.content-pro .checked {
    color: #dcd741;
}
.content-pro .avilble {
    color: #19e653;
}
.content-pro .avilble div {
    margin-right: 10px;
}
.content-pro button {
    border-radius: 59%;
    width: 50px;
    height: 50px;
    font-size: 20px;
    border: none;
    padding: 0;
    color: #5daaa6;
}
.content-pro button:hover {
    background-color: #d3b85f;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .content-pro {
    font-size: 12px;
    height: auto;
    margin-top: 3vh;
    }
    .content-pro .name-prod {
        margin-bottom: 10px;
    }

    .reower .col-xs-6 {
        flex: 1 0 50%;
        max-width: 50%;
    }
}
</style>

<style lang="scss" scoped>
.heart {
    width: 80px;
    height: 100px;
    background: url('../../../public/img/heart.png') no-repeat;
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
