import Vue from "vue";
import Vuex from "vuex";
import jeson from "@/jeson/MOCK_DATA.json";

Vue.use(Vuex);

let cartItems = window.localStorage.getItem('cartItems');
let cartItemCount = window.localStorage.getItem('cartItemCount');

export default new Vuex.Store({
  state: {
    Product: jeson[0].Products,
    lastStores: jeson[0].lastStores,
    brands: jeson[0].brands,
    cartItemCount: cartItemCount ? JSON.parse(cartItemCount) : 0,
    cartItems: cartItems ? JSON.parse(cartItems) : []
    
  }
  ,mutations: {
     increment(state) {
    state.count++ 
  },
   cartItems: (state, connections) =>
  {state.cartItems = connections;}
  ,
  addToCart(state, payload) {
            let item = payload;
            item = { ...item, quantity: 1 };
            if (state.cartItems.length > 0) {
                let bool = state.cartItems.some(
                    i => i.id === item.id
                );
                if (bool) {
                    let itemIndex = state.cartItems.findIndex(
                        el => el.id === item.id
                    );
                    state.cartItems[itemIndex]["quantity"] += 1;
                    
                    
                } else {
                    state.cartItems.push(item);
                }
            } else {
                state.cartItems.push(item);
            }
            state.cartItemCount++;
            this.commit('savedata');
           
        },
        savedata(state){
            window.localStorage.setItem('cartItems',JSON.stringify(state.cartItems));
            window.localStorage.setItem('cartItemCount',JSON.stringify(state.cartItemCount));
        }
        ,
        removeItem(state, payload) {
            if (state.cartItems.length > 0) {
                let bool = state.cartItems.some(
                    i => i.id === payload.id
                );
                if (bool) {
                    let index = state.cartItems.findIndex(
                        el => el.id === payload.id
                    );
                    if (state.cartItems[index]["quantity"] !==0){
                        state.cartItems[index]["quantity"] -= 1;
                        state.cartItemCount--
                        this.commit('savedata');
                    }
                    if (state.cartItems[index]["quantity"] === 0){
                    state.cartItems.splice(index, 1)}
                }
            }
        },removeFromCart(state, item) {
            let index = state.cartItems.indexOf(item);
        
            if (index > -1) {
                let product = state.cartItems[index];
                state.cartItemCount -= product.quantity;
        
                state.cartItems.splice(index, 1);
                this.commit('savedata');
            }
        }


  },
  actions: {
    addToCart: (context, payload) => {
        context.commit('addToCart', payload);
        
    },
    removeItem: (context, payload) => {
        context.commit('removeItem', payload)
    },

}, 

});








