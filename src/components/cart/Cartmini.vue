<template>
<div>
 <div class="cart-shop-icon" @click="showcart">
      <i class="fa fa-shopping-cart"></i>
      <span class="cart-count">{{cartItemCount}}</span>
    </div>
     <div id="cartshop" class="cart-shop">
<div class="card">
    <div class="row">
        <div   class="col-md-12 cart">
            <div class="title">
                <div class="row">
                    <div class="col">
                       <h4><b>عربة التسوق</b></h4>
                    </div>
                </div>
            </div>
           <div v-for="items in cartItems" :key="items.id" class="row border-top border-bottom" style="padding: 10px 0">
    
        <div class="cart-items">
            <div class="col-sm-2 col-xs-12"><img class="img" src="@/assets/w.jpg"></div>
            <div class="col-sm-2 col-xs-3">{{items.title}}</div>
            <div class="col-sm-2 col-xs-3">{{items.description}}</div>
        <div class="col-sm-3"> 
        <button class="btnn" @click="removeItem(items)">-</button>  
        <a  href="#" class="border"> <span class="cart-quantity">{{items.quantity}}</span></a>
        <button class="btnn" @click="addItem(items)">+</button> </div>
        <div class="col-sm-2 col-xs-3">{{items.price * items.quantity}}<span style="margin-top: 0;margin-right: -15vh;" @click="removeFromCart(items)" class="close">&#10005;</span></div>
            </div>

                </div>
        </div>
        
    </div>
</div>
    </div>
    
    </div>
</template>
<script>

export default {
   components:{
       
   },data(){
     return {
     
        
            }
   },
  methods:{
    showcart: function(){
      var  cart= document.getElementById('cartshop');
    cart.classList.toggle("vs");
    },
    addItem(items) {
    this.$store.dispatch("addToCart", items);
  },
  removeItem(items) {
     this.$store.dispatch("removeItem", items);
   },
   removeFromCart(item) {
        this.$store.commit('removeFromCart', item);
    }
    
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
     this.$store.state.cartItems.map(el => {
        price += el["quantity"] * el["price"];
      });
     return price;
    }
  }
}
</script>

<style scoped>
/* ____________________________ Start Cart Shop ________________________________ */
.close{
    cursor: pointer;
}
.cart-count{
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
.cart-shop-icon{
position: fixed;
bottom: 10px;
left: 5px;
width: 50px;
height: 50px;
background-color: #73a580;
padding: 10px 10px;
border-radius: 50%;
z-index: 999;
}
.cart-shop{
  position: fixed;
  bottom: 0px;
  left: 65px;
  visibility: hidden;
  z-index: 999;
  overflow-y: scroll;
  max-height: 400px;
  width: 72%;
  
}
.vs {
  visibility: visible;
}
.title {
    margin-bottom: 5vh
}

.card {
    margin: 0;
    max-width: 950px;
    width: 120%;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 1rem;
    border: transparent;
}

@media(max-width:767px) {
    .card {
        margin: 3vh auto
    }
}

.cart {
    background-color: #fff;
    padding: 4vh 5vh;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem
}

@media(max-width:767px) {
    .cart {
        padding: 4vh;
        border-bottom-left-radius: unset;
        border-top-right-radius: 1rem
    }
}

.summary {
    background-color: #ddd;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 4vh;
    color: rgb(65, 65, 65)
}

@media(max-width:767px) {
    .summary {
        border-top-right-radius: unset;
        border-bottom-left-radius: 1rem
    }
}

.summary .col-2 {
    padding: 0
}

.summary .col-10 {
    padding: 0
}

.row {
    margin: 0
}

.title b {
    font-size: 1.5rem
}

.main {
    margin: 0;
    padding: 2vh 0;
    width: 100%
}

.col-2,
.col {
    padding: 0 1vh
}

a {
    padding: 0 1vh
}

.close {
    margin-left: auto;
    font-size: 0.7rem
}

img {
    width: 15.5rem;
    border-radius: 50%;
}

h5 {
    margin-top: 4vh
}

hr {
    margin-top: 1.25rem
}

form {
    padding: 2vh 0
}

select {
    border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 1.5vh 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247)
}

input {
    border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247)
}

input:focus::-webkit-input-placeholder {
    color: transparent
}
.btnn {
    background-color: transparent;
    border: none;
}
.btn {
    background-color: #000;
    border-color: #000;
    color: white;
    width: 100%;
    font-size: 0.7rem;
    margin-top: 4vh;
    padding: 1vh;
    border-radius: 0
}

.btn:focus {
    box-shadow: none;
    outline: none;
    box-shadow: none;
    color: white;
    -webkit-box-shadow: none;
    -webkit-user-select: none;
    transition: none
}

.btn:hover {
    color: white
}

a {
    color: black
}

a:hover {
    color: black;
    text-decoration: none
}

#code {
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0.253), rgba(255, 255, 255, 0.185)), url("https://img.icons8.com/small/16/000000/long-arrow-right.png");
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: center
}
@media (max-width: 575.98px) {
.cart-shop-icon {
    display: none;
}
}
</style>