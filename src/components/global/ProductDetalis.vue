<template>
    <div class="ProductDetalis">
        <Cartmini />
        <div class="row">
           
            <div class="col-sm-6 col-xs-12">
                <div class="content-pro text-center">
                    <div class="name-prod">
                        Name Product: {{ details.title }}
                    </div>
                    <div class="category">
                        description: {{ details.description }}
                    </div>
                    <div class="stars">
                        <span class="fa fa-star  checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <div>
                        <span>ل.س {{ price }}</span>
                        <div class="price" style="display: inline-block"></div>
                    </div>
                   
                    <div class="row">
                        <div class="col">
                            <button
                                @click="addToCart"
                                class="but1"
                            >
                                <span>
                                إضافة لعربة التسوق </span>
                            </button>
                        </div>
                        <div class="col">
                            <button @click="gotocart" class="but1">
                                <span>
                                الذهاب لعربة التسوق </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     <!-- ___________________________________________________ -->
     

    </div>
</template>
<script>
import Cartmini from '@/components/cart/Cartmini.vue';

export default {
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
    components: {
        Cartmini,
    },
    props: ['title', 'description', 'id', 'price'],
    computed: {
        count() {
            return this.$store.state.count;
        },
    },
    methods: {
        increment() {
            this.$store.commit('increment');
        },
        addItem(items) {
            this.$store.dispatch('addToCart', items);
        },
        gotocart: function() {
            this.$router.push(`/Cart`);
        },
        addToCart() {
            this.$store.dispatch('addToCart', this.details);
            document.getElementById('myCarousel').animate(
                [
                    // keyframes
                    { transform: 'scale(1,1)' },
                    { transform: 'scale(1.1,1.1)' },
                    { transform: 'scale(1,1)' },
                    { transform: 'scale(1.1,1.1)' },
                ],
                {
                    // timing options
                    duration: 500,
                }
            );
        },
    },
};
</script>
<style lang="scss" scoped>


</style>
<style scoped>
.row {
    justify-content: center;
    margin: 0;
}
.carousel {
    position: relative;
    transition: ease-in all;
}
.carousel-item img {
    object-fit: cover;
    border-radius: 5%;
}
#carousel-thumbs {
    background: rgba(255, 255, 255, 0.3);
    bottom: 0;
    left: 0;
    padding: 0 50px;
    right: 0;
}
#carousel-thumbs img {
    border: 5px solid transparent;
    cursor: pointer;
}
#carousel-thumbs img:hover {
    border-color: rgba(255, 255, 255, 0.3);
}
#carousel-thumbs .selected img {
    border-color: #fff;
}
.carousel-control-prev,
.carousel-control-next {
    width: 50px;
}
@media all and (max-width: 767px) {
    .carousel-container #carousel-thumbs img {
        border-width: 3px;
    }
}
@media all and (min-width: 576px) {
    .carousel-container #carousel-thumbs {
        position: absolute;
    }
}
@media all and (max-width: 576px) {
    .carousel-container #carousel-thumbs {
        background: #ccccce;
    }
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
  color: #FFFFFF;
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
    .content-pro {
        font-size: 15px;
    }
    .show-prod .reower .col-xs-6 {
        flex: 1 0 50%;
        max-width: 50%;
    }
    .show-prod .content-pro button {
        width: 80px;
        margin-top: 10px;
        border-radius: 13px;
        font-weight: 1;
    }
    .content-pro {
        margin-top: 2vh;
    }
    .content-pro div {
        margin: 1vh 0;
    }
    .content-pro button {
        margin: 5px 0;
    }
}
</style>
