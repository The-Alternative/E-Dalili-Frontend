import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import jeson from '@/jeson/MOCK_DATA.json';
import data from '../jeson/data';
Vue.use(Vuex, axios);

let cartItems = window.localStorage.getItem('cartItems');
let cartItemCount = window.localStorage.getItem('cartItemCount');

export default new Vuex.Store({
    state: {
        // MOCK_DATA json
        // Stores: [],
        Stores: [],
        Store: null,
        products: [],
        ////////////////
        Product: jeson[0].Products,
        stores: data.stores,
        product: data.stores[0].products,
        Categories: data.categories,
        lastStores: jeson[0].lastStores,
        brands: jeson[0].brands,
        categories: jeson[0].categories,
        cartItemCount: cartItemCount ? JSON.parse(cartItemCount) : 0,
        cartItems: cartItems ? JSON.parse(cartItems) : [],
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        cartItems: (state, connections) => {
            state.cartItems = connections;
        },
        addToCart(state, payload) {
            let item = payload;
            item = { ...item, quantity: 1 };
            if (state.cartItems.length > 0) {
                let bool = state.cartItems.some((i) => i.id === item.id);
                if (bool) {
                    let itemIndex = state.cartItems.findIndex(
                        (el) => el.id === item.id
                    );
                    state.cartItems[itemIndex]['quantity'] += 1;
                } else {
                    state.cartItems.push(item);
                }
            } else {
                state.cartItems.push(item);
            }
            state.cartItemCount++;
            this.commit('savedata');
        },
        savedata(state) {
            window.localStorage.setItem(
                'cartItems',
                JSON.stringify(state.cartItems)
            );
            window.localStorage.setItem(
                'cartItemCount',
                JSON.stringify(state.cartItemCount)
            );
        },
        removeItem(state, payload) {
            if (state.cartItems.length > 0) {
                let bool = state.cartItems.some((i) => i.id === payload.id);
                if (bool) {
                    let index = state.cartItems.findIndex(
                        (el) => el.id === payload.id
                    );
                    if (state.cartItems[index]['quantity'] !== 0) {
                        state.cartItems[index]['quantity'] -= 1;
                        state.cartItemCount--;
                        this.commit('savedata');
                    }
                    if (state.cartItems[index]['quantity'] === 0) {
                        state.cartItems.splice(index, 1);
                    }
                }
            }
        },
        removeFromCart(state, item) {
            let index = state.cartItems.indexOf(item);

            if (index > -1) {
                let product = state.cartItems[index];
                state.cartItemCount -= product.quantity;

                state.cartItems.splice(index, 1);
                this.commit('savedata');
            }
        },
        SET_Stores(state, Stores) {
            state.Stores = Stores;
        },
        // SET_PRODUCTS(state, products) {
        //     state.products = products;
        // },
        SET_Store(state, Store) {
            state.Store = Store;
        },
    },

    actions: {
        addToCart: (context, payload) => {
            context.commit('addToCart', payload);
        },
        removeItem: (context, payload) => {
            context.commit('removeItem', payload);
        },
        loadStores({ commit }) {
            axios
                .get('http://localhost:8080/api/stores/getAll')
                .then((res) => {
                    console.warn(res.data.Stores);
                    let Stores = res.data.Stores;
                    commit('SET_Stores', Stores);
                })
                .catch(function(error) {
                    console.log('Error: ', error);
                });
        },
        loadStore({ commit }, productId) {
            axios
                .get(`http://localhost:8080/api/stores/getById/${productId}`)
                .then((res) => {
                    console.warn(res.data.Stores);
                    let store = res.data.Stores;
                    commit('SET_Stores', store);
                })
                .catch(function(error) {
                    console.log('Error: ', error);
                });
        },
    },
    // getProducts({ commit }) {
    //     axios
    //         .get('http://localhost:8080/api/stores/getAll')
    //         .then((res) => {
    //             commit('SET_PRODUCTS', res.data);
    //             console.warn('dataproduct', res.data);
    //         })
    //         .catch(function(error) {
    //             console.log('Error: ', error);
    //         });
    // },
});
