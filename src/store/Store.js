import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import jeson from '@/jeson/MOCK_DATA.json';
import data from '../jeson/data';
Vue.use(Vuex, axios);

let cartItems = window.localStorage.getItem('cartItems');
let cartItemCount = window.localStorage.getItem('cartItemCount');
let lang = window.localStorage.getItem('lang');
export default new Vuex.Store({
    state: {
        // APi
        Stores: [],
        store: null,
        Sections: [],
        Product: [],
        ProductID: null,
        Brand: [],
        Brands: [],
        Categories: [],
        priceArray: [],
        ////////////////
        // Product: jeson[0].Products,
        stores: data.stores,

        lastStores: jeson[0].lastStores,
        brands: jeson[0].brands,
        categories: jeson[0].categories,
        cartItemCount: cartItemCount ? JSON.parse(cartItemCount) : 0,
        cartItems: cartItems ? JSON.parse(cartItems) : [],
    },
    mutations: {
        increment (state) {
            state.count++;
        },
        cartItems: (state, connections) => {
            state.cartItems = connections;
        },
        addToCart (state, payload) {
            let item = payload;
            item = { ...item, quantity: 1 };
            if (state.cartItems.length > 0) {
                let bool = state.cartItems.some(
                    (i) => i.id_store === item.id_store
                );
                if (bool) {
                    let itemIndex = state.cartItems.findIndex(
                        (el) => el.id_store === item.id_store
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
        savedata (state) {
            window.localStorage.setItem(
                'cartItems',
                JSON.stringify(state.cartItems)
            );
            window.localStorage.setItem(
                'cartItemCount',
                JSON.stringify(state.cartItemCount)
            );
        },
        removeItem (state, payload) {
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
        removeFromCart (state, item) {
            let index = state.cartItems.indexOf(item);

            if (index > -1) {
                let product = state.cartItems[index];
                state.cartItemCount -= product.quantity;

                state.cartItems.splice(index, 1);

                this.commit('savedata');
            }
        },
        SET_Stores (state, Stores) {
            state.Stores = Stores;
        },
        SET_Store (state, store) {
            state.store = store;
        },
        SET_Products (state, Product) {
            state.Product = Product;
        },
        SET_ProductID (state, ProductID) {
            state.ProductID = ProductID;
        },
        SET_Brands (state, Brands) {
            state.Brands = Brands;
        },
        SET_Categories (state, Categories) {
            state.Categories = Categories;
        },
        Update_Categories (state, items) {
            state.Categories.forEach((v) => {
                if (v.id == items.id) {
                    v = items;
                }
            });
        },
        // Add_Category (state, items) {
        //     let Categories = state.Categories.concat(items);
        //     state.Categories = Categories;
        // },
        // Delete_Category (state, itemsId) {
        //     let Categories = state.Categories.filter((v) => v.id != itemsId);
        //     state.Categories = Categories;
        // },
    },
    actions: {
        addToCart: (context, payload) => {
            context.commit('addToCart', payload);
        },
        removeItem: (context, payload) => {
            context.commit('removeItem', payload);
        },
        loadStores ({ commit }) {
            axios
                .get(`/api/stores/getAll?lang=${lang}`)
                .then((res) => {
                    console.warn('Store :', res.data.Stores);
                    let Stores = res.data.Stores;
                    commit('SET_Stores', Stores);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadstore ({ commit }, productId) {
            axios
                .get(`/api/stores/getById/${productId}?lang=${lang}`)
                .then((res) => {
                    console.warn('StorebyId :', res.data);
                    let store = res.data.Store;
                    commit('SET_Store', store);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadProducts ({ commit }) {
            axios
                .get(`/api/products/getAll?lang=${lang}`)
                .then((res) => {
                    console.warn('Product :', res.data.Products);
                    let Product = res.data.Products;
                    commit('SET_Products', Product);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadProduct ({ commit }, ProductID) {
            axios
                .get(`/api/products/getById/${ProductID}?lang=${lang}`)
                .then((res) => {
                    console.warn('productById :', res.data.product);
                    let ProductID = res.data.product;
                    commit('SET_ProductID', ProductID);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadBrands ({ commit }) {
            axios
                .get(`/api/brands/getAll?lang=${lang}`)
                .then((res) => {
                    console.warn('Brands :', res.data.Brand);
                    let Brands = res.data.Brand;
                    commit('SET_Brands', Brands);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadCategories ({ commit }) {
            axios
                .get(`/api/categories/getAll?lang=${lang}`)
                .then((res) => {
                    console.warn('Categories :', res.data.Category);
                    let Categories = res.data.Category;
                    commit('SET_Categories', Categories);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        UpdateCategory ({ commit }, items) {
            axios.put(
                `http://edalili.e-dalely.com/public/api/categories/update/${items.id}`,
                items
            );
            commit('Update_Categories', items);
            console.log(JSON.stringify(this.items));
        },
        // UpdateCategory ({ commit }, items) {
        //     axios
        //         .put(`/api/categories/update/${items.id}?lang=${lang}`, items)
        //         .then((res) => {
        //             console.warn('Categoriesdashedite :', res.data.Category);
        //             let newCategories = res.data.Category;
        //             commit('Update_Categories', newCategories);
        //             return newCategories;
        //         })
        //         .catch(function (error) {
        //             console.log('Error: ', error);
        //         });
        // },
        // CreateCategory ({ commit }, items) {
        //     axios
        //         .post(`/api/categories/create?lang=${lang}`, items)
        //         .then((res) => {
        //             console.warn('addCategoriesdash :', res.data.Category);
        //             let saveitems = res.data.Category.attributes;
        //             commit('Add_Category', saveitems);
        //         })
        //         .catch(function (error) {
        //             console.log('Error: ', error);
        //         });
        // },
        // async deleteCategory ({ commit }, items) {
        //     commit('Delete_Category', items.id);
        // },
    },
    getters: {
        avalibleStore: (state) => {
            let len = state.Product[0].store.length;
            return len - 1;
        },
        getStoreId: (state) => (id) => {
            return state.Stores.find((prod) => prod.id === id);
        },
    },
});
