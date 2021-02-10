<template>

<div class="card">
    <div class="row">
        <div class="col-md-8 cart">
            <div class="title">
                <div class="row">
                    <div class="col">
                        <h4><b>عربة التسوق</b></h4>
                    </div>
                  
                </div>
            </div>
            
<div v-for="items in cartItems" :key="items.id" class="row border-top border-bottom" style="padding: 10px 0">
    
        <div class="cart-items" style="display: inline-flex;width:100%">
            <div class="col-2"><img class="img-fluid" src="@/assets/w.jpg"></div>
            <div class="col-2" style="margin-top: 6vh;">{{items.title}}</div>
            <div class="col-2" style="margin-top: 6vh;">{{items.description}}</div>
        <div class="col-2" style="margin-top: 6vh;"> 
        <button class="btnn" @click="removeItem(items)">-</button>  
        <a  href="#" class="border"> <span class="cart-quantity">{{items.quantity}}</span></a>
        <button class="btnn" @click="addItem(items)">+</button> </div>
        <div class="col-2" style="margin-top: 6vh;">{{items.price * items.quantity}}<span style="margin-top: 0;margin-right: -15vh;" @click="removeFromCart(items)" class="close">&#10005;</span></div>
            </div>

</div>
          
           
        </div>
        <div class="col-md-4 summary" v-if="totalPrice !==0" >
            <div>
                <h5><b>أسم المتجر</b></h5>
            </div>
            <hr>
            <div class="row">
                <div :totalPrice="totalPrice" class="col text-right">{{totalPrice}} S.P</div>
                <div class="col" style="padding-left:0;">:السعر</div>
            </div>
            <form style="margin-top: 10vh;">
                <p>طريقة الدفع</p>
                <p> تكاليف الشحن 500 ل.س</p>     
            </form>
            <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
                <div class="col text-right">{{totalPrice + 500}} S.P</div>
                <div class="col">:السعر مع تكاليف الشحن</div>
            </div> <button class="btn">CHECKOUT</button>
        </div>
        <EmptyCart v-else />
    </div>
</div>
   
</template>

<script>
import EmptyCart from "@/components/cart/EmptyCart.vue";
export default {
   name: "Cart",
   
   data(){
     return {
        
            }
   },
   components:{
       EmptyCart
   },
   methods: {
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
  computed:{
    cartItems() {
      return this.$store.state.cartItems;
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

.title {
    margin-bottom: 5vh
}

.card {
    margin: 0;
    width: 100%;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 1rem;
    border: transparent
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
    font-size: 0.7rem;
    cursor: pointer;
}

img {
    width: 5.5rem;
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

.btn {
    background-color: #000;
    border-color: #000;
    color: white;
    width: 100%;
    font-size: 0.7rem;
    margin-top: 4vh;
    padding: 1vh;
    border-radius: 0;
    height: 50px;
    margin-top: 25vh;
}
.btnn {
    background-color: transparent;
    border: none;
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
</style>