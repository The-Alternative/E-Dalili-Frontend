<template>
    <div class="ProductDetalis" style="background-color:#e9ecf2">
        <Cartmini />
 
     <div
            id="deno"
            class="carousel slide"
            data-ride="carousel"
            style="margin-top: 10px;"
        >
            <div
                class="col-sm-12"
                style="padding:0"
            >
                <div
                    class="carousel-inner"
                >
                    <!-- carousel item 1 -->
                    <div
                        class="carousel-item active"
                    >
                        <div
                            class="show-prod"
                        >
                            <div
                                class="row"
                            >
    <!-- ___________________________________________________ -->
             <div class="col-sm-6 col-xs-12">
                <div class="row" style="width:400px">
                    <div class="col-12"><img src="../../../public/img/w.jpg" alt=""></div>
                     <div class="col-4"><img src="../../../public/img/w.jpg" alt=""></div>
                      <div class="col-4"><img src="../../../public/img/w.jpg" alt=""></div>
                       <div class="col-4"><img src="../../../public/img/w.jpg" alt=""></div>
                </div>
                
            </div>
            <div class="col-sm-6 col-xs-12">
            <div class="store"
                v-for="store in stores.slice(0,1)"
                v-bind:store="store"
                :key="store.id"
                :address="store.address"
            >

            <div><img class="img-open" style="margin-right:10px"
            src="../../../public/img/open.png"
            height="40"
            />{{store.space}}
                <h2 style="display: inline-block;margin: 0 20px 0 100px;">{{store.title}}</h2>
            <img class="rounded-circle"
            src="../../../public/img/market-logo.png"
            height="60"
            /></div>
            
            </div>
                <div class="content-pro text-center">
                    <div class="name-prod">
                         {{ details.title }}
                    </div>
                    <div class="category">
                        {{ details.description }}
                    </div>

                    <div>
                        <span>80.00 S.P</span>
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
                        </div>
                    </div>
                    <!-- carousel item 2 -->
                    <div
                        class="carousel-item"
                    >
                        <div
                            class="show-prod"
                        >
                            <div
                                class="row"
                            >
    <!-- ___________________________________________________ -->
            <div class="col-sm-6 col-xs-12">
                <div class="row" style="width:400px">
                    <div class="col-12"><img src="../../../public/img/w.jpg" alt=""></div>
                     <div class="col-4"><img src="../../../public/img/w.jpg" alt=""></div>
                      <div class="col-4"><img src="../../../public/img/w.jpg" alt=""></div>
                       <div class="col-4"><img src="../../../public/img/w.jpg" alt=""></div>
                </div>
                
            </div>
            <div class="col-sm-6 col-xs-12">
            <div class="store"
                v-for="store in stores.slice(1,2)"
                v-bind:store="store"
                :key="store.id"
                :address="store.address"
            >
               <div><img class="img-open" style="margin-right:10px"
            src="../../../public/img/open.png"
            height="40"
            />{{store.space}}
                <h2 style="display: inline-block;margin: 0 20px 0 100px;">{{store.title}}</h2>
            <img class="rounded-circle"
            src="../../../public/img/market-logo.png"
            height="60"
            /></div>
            </div>
                <div class="content-pro text-center">
                    <div class="name-prod">
                         {{ details.title }}
                    </div>
                    <div class="category">
                        {{ details.description }}
                    </div>

                    <div>
                        <span>90.00 S.P</span>
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
                        </div>
                    </div>
                    <!-- carousel item 3 -->
                    <div
                        class="carousel-item"
                    >
                        <div
                            class="show-prod"
                        >
                                       <div
                                class="row"
                            >
    <!-- ___________________________________________________ -->
             <div class="col-sm-6 col-xs-12">
                <div class="row" style="width:400px">
                    <div class="col-12"><img src="../../../public/img/w.jpg" alt=""></div>
                     <div class="col-4"><img src="../../../public/img/w.jpg" alt=""></div>
                      <div class="col-4"><img src="../../../public/img/w.jpg" alt=""></div>
                       <div class="col-4"><img src="../../../public/img/w.jpg" alt=""></div>
                </div>
                
            </div>
            <div class="col-sm-6 col-xs-12">
            <div class="store"
                v-for="store in stores.slice(2,3)"
                v-bind:store="store"
                :key="store.id"
                :address="store.address"
            >
            <div><img class="img-open" style="margin-right:10px"
            src="../../../public/img/open.png"
            height="40"
            />{{store.space}}
                 <h2 style="display: inline-block;margin: 0 20px 0 100px;">{{store.title}}</h2>
            <img class="rounded-circle"
            src="../../../public/img/market-logo.png"
            height="60"
            /></div>
            </div>
                <div class="content-pro text-center">
                    <div class="name-prod">
                         {{ details.title }}
                    </div>
                    <div class="category">
                        {{ details.description }}
                    </div>

                    <div>
                        <span>100.00 S.P</span>
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
                        </div>
                    </div>
                </div>

                <!-- Left and right controls -->
                <a
                    class="carousel-control-prev"
                    href="#deno"
                    data-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                    ></span>
                </a>
                <a
                    class="carousel-control-next"
                    href="#deno"
                    data-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                    ></span>
                </a>
            </div>
        </div>

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
        stores() {
            return this.$store.state
                .stores;
        }
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
        }
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
.col-4 img{
height: 100px;
width: 101px;
margin: 10px;
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
.carousel-control-next,
.carousel-control-prev {
    height: 50px;
}
.carousel-control-next-icon,
.carousel-control-prev-icon {
border: 1px solid #fff;
border-radius: 50%;
width: 37px;
height: 60px;
background-color: #9b8282;
top: 100px;
position: absolute;
}
</style>
