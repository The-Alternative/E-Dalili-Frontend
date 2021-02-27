<template>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 coler">
        <div class="content-pro text-center">
            <img
                @click="goto(id, title, description, price)"
                src="../../../public/img/w.jpg"
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
            <div class="all">
                <div class="left" @click="goto(id, title, description, price)">
                    <div class="text">تفاصيل المنتج</div>
                </div>
                <div class="center">
                    <div class="explainer">
                        <span><i class="fa fa-shopping-cart"></i></span>
                    </div>
                    <div class="text">أختيار</div>
                </div>
                <div class="right" @click="addToCart">
                    <div class="text">أضف للعربة</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.all {
    margin: 20px 0;
    display: flex;
    perspective: 10px;
    transform: perspective(250px) rotateX(20deg);
    will-change: perspective;
    perspective-origin: center center;
    transition: all 1.3s ease-out;
    justify-content: center;
    transform-style: preserve-3d;
}

.all:hover {
    perspective: 1000px;
    transition: all 1.3s ease-in;
    transform: perspective(10000px) rotateX(0deg);
    .text {
        opacity: 1;
    }
    & > div {
        opacity: 1;
        transition-delay: 0s;
    }
    .explainer {
        opacity: 0;
    }
}

.left,
.center,
.right {
    width: 50px;
    height: 60px;
    transform-style: preserve-3d;
    border-radius: 10px;
    border: 1px solid #fff;
    box-shadow: 0 0 20px 5px rgba(142, 142, 170, 0.4);
    opacity: 0;
    transition: all 0.3s ease;
    transition-delay: 1s;
    position: relative;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #949ba6;
    background-blend-mode: color-burn;
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 30px 10px rgba(141, 141, 179, 0.6);
        background-color: #ccf;
    }
}
.text {
    transform: translateY(30px);
    opacity: 0;
    transition: all 0.3s ease;
    bottom: -4px;
    left: -23px;
    position: absolute;
    will-change: transform;
    color: #2f2e2e;
    text-shadow: 0 0 5px rgba(44, 44, 44, 0.6);
    width: 100px;
    font-size: 14px;
}

.left {
    transform: translateX(-30px) translateZ(-25px) rotateY(-5deg);
    background-image: url(https://cdn3.iconfinder.com/data/icons/other-icons/48/app_window-512.png);
}
.center {
    opacity: 1;
    background-image: url(https://image.flaticon.com/icons/png/128/724/724802.png);
}
.right {
    transform: translateX(30px) translateZ(-25px) rotateY(5deg);
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcnzP6OhuBuJHzrtSe0aWPwzbO2dxlG-d8g&usqp=CAU);
}
.explainer {
    font-weight: 300;
    font-size: 2rem;
    color: #fff;
    transition: all 0.6s ease;
    width: 100%;
    height: 100%;
    background-color: #303050;
    background-image: radial-gradient(circle at center top, #cce, #9090ac);
    border-radius: 10px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
<script>
export default {
    name: 'Products',
    props: ['id', 'title', 'description', 'price'],
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
    background-color: #a5abac;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 20px;
    border-radius: 13px;
    font-weight: 1;
    padding: 10px 20px;
    width: 80px;
    font-size: 14px;
}
.content-pro button:hover {
    background-color: #d3b85f;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .content-pro {
        font-size: 10px;
        height: auto;
        margin-top: 5vh;
    }
    .content-pro .name-prod {
        margin-bottom: 10px;
    }

    .reower .col-xs-6 {
        flex: 1 0 50%;
        max-width: 50%;
    }
    .content-pro button {
        margin-top: 12px;
        border-radius: 13px;
        font-weight: 1;
        padding: 5px 10px;
        width: 50px;
    }
}
</style>
