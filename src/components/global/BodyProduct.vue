<template>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 coler">
        <div class="content-pro text-center">
            <router-link class="link"
                :to="{
                    name: 'ProductDetails',
                    params: {
                        id: id,
                        name: name,
                        image: image,
                        short_des: short_des,
                        long_des: long_des,
                    },
                }"
                ><img v-lazy="`${image}`" class="new"
            /></router-link>
            <router-link class="link"
                :to="{
                    name: 'ProductDetails',
                    params: {
                        id: id,
                        name: name,
                        image: image,
                        short_des: short_des,
                        long_des: long_des,
                    },
                }"
                ><div class="name-prod">
                    {{ name }}
                </div></router-link
            >
            <router-link class="link"
                :to="{
                    name: 'ProductDetails',
                    params: {
                        id: id,
                        name: name,
                        image: image,
                        short_des: short_des,
                        long_des: long_des,
                    },
                }"
                ><div class="category">
                    {{ short_des }}
                </div></router-link
            >

            <div class="stars">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
            </div>
            
            <div class="avilble">
                <div style="display: inline-block">متوفر في متاجر</div>
                <span class="fa fa-check-circle"></span>
            </div>
            <div class="row">
                <button @click="gotoListView(id, name, short_des)">
                    {{ $t('Choose') }}
                </button>
                <div class="heart-conten">
                    <div @click="heartlike()" id="heart" class="heart"></div>
                </div>
            </div>
            </div>
             <!-- 
             <div class="stage row">
              <div @click="addToCart()" class="cart-ico">
                    <button class="cart-button">
                        <i class="fa fa-shopping-cart"></i>
                    </button>
                </div>
              
            </div>
             -->
        </div>
</template>
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
.content-pro .link {
    color: #585b5e;
    text-decoration: none;
}
.content-pro {
    font-size: 1.2vw;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
    margin-top: 10vh;
    margin-bottom: 10vh;
    border-radius: 5%;
    transition: all 0.5s;
}
.content-pro .flex-body-prod{
    display: flex;
    flex-flow: column;
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
    margin-bottom: 10px;
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
    width: 100px;
    height: 50px;
    font-size: 1.5vw;
    border: none;
    color: #5daaa6;
    margin: 15px auto;
    border-radius: 10px;
}
.content-pro button:hover {
    background-color: #d3b85f;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 576.98px) {
    .content-pro {
        height: auto;
        margin-top: 2vh;
        font-size: 4vw;
    }
    .carousel-inner .content-pro{
  margin-top: -4vh;
    }
    .content-pro .row {
        flex-wrap: nowrap;
    }
    .content-pro .name-prod {
        margin-bottom: 10px;
    }
    .reower .col-xs-6 {
        flex: 1 0 50%;
        max-width: 50%;
    }
    .content-pro button {
        font-size: 4vw;
        width: 70px;
        height: 40px;
        margin: 16px 3px;
    }
    .heart-conten {
        margin: 10px 0;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .content-pro {
        font-size: 3.3vw;
    }
    .content-pro button {
        font-size: 3.3vw;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .content-pro {
        font-size: 1.8vw;
    }
    .content-pro button {
        font-size: 1.8vw;
    }
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
.content-pro .heart-conten:hover {
    background-color: #d3b85f;
}
.heart {
    width: 80px;
    height: 100px;
    background: url('../../../public/img/heart.png') no-repeat;
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
<script>
export default {
    name: 'Products',
    props: ['id', 'name', 'image', 'short_des', 'long_des', 'price'],
    // data () {
    //     return {
    //         details: {
    //             id: this.id,
    //             name: this.name,
    //             short_des: this.short_des,
    //             long_des: this.long_des,
    //         },
    //     };
    // },
    methods: {
        // gotodetails: function (i, n, s, l) {
        //     this.$router.push(`ProductDetalis/${i}/${n}/${s}/${l}`);
        // },
        gotoListView: function (i, n, s) {
            this.$router.push(`ListView/${i}/${n}/${s}`);
        },
        heartlike: function () {
            this.$el.lastChild.lastChild.lastChild.lastChild.classList.toggle(
                'is-active'
            );
        },
        /*  addToCart() {
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
        */
    },
    computed: {
        count () {
            return this.$store.state.count;
        },
    },
};
</script>
