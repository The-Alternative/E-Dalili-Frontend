/* 
 import axios from "axios";
import { createStore } from "vuex";
import router from "@/router"; //shortcut to src

import jeson from '@/jeson/MOCK_DATA.json';
// import data from '@/jeson/data';
const cartItems = window.localStorage.getItem('cartItems');
const cartItemCount = window.localStorage.getItem('cartItemCount');
const lang = window.localStorage.getItem('lang');
 
 
const store = createStore ({
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
        CategoryID: null,
        priceArray: [],
        ////////////////
        // Product: jeson[0].Products,
        // stores: data.stores,
        // restaurants: data.restaurants,
        lastStores: jeson[0].lastStores,
        brands: jeson[0].brands,
        categories: jeson[0].categories,
        cartItemCount: cartItemCount ? JSON.parse(cartItemCount) : 0,
        cartItems: cartItems ? JSON.parse(cartItems) : [],
        
    },

  getters: {
    humanLoginError(state: any) {
      return state.loginError || "";
    },
    avalibleStore: (state) => {
        const len = state.Product[0].store.length;
        return len - 1;
    },
    getStoreId: (state) => (id) => {
        return state.Stores.find((prod) => prod.id === id);
    },
  }, 

  mutations: {
    loggedIn(state: any, payload) {
      state.loggedIn = true;
      state.loginError = null;
      state.username = payload.username || "";

      router.push("/");
    },

    loggedOut(state: any) {
      state.loggedIn = false;
      router.push("/login");
    },

    loginError(state: any, payload) {
      state.loginError = payload;
    },
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
        const index = state.cartItems.indexOf(item);

        if (index > -1) {
            const product = state.cartItems[index];
            state.cartItemCount -= product.quantity;

            state.cartItems.splice(index, 1);

            this.commit('savedata');
        }
    },
    SET_Stores(state, Stores) {
        state.Stores = Stores;
    },
    SET_Store(state, store) {
        state.store = store;
    },
    SET_Products(state, Product) {
        state.Product = Product;
    },
    SET_ProductID(state, ProductID) {
        state.ProductID = ProductID;
    },
    SET_Brands(state, Brands) {
        state.Brands = Brands;
    },
    SET_Categories(state, Categories) {
        state.Categories = Categories;
    },
    SET_CategoryID(state, CategoryID) {
        state.CategoryID = CategoryID;
    },
     Delete_Category(state, itemsId) {
        let Categories = state.Categories.filter((v) => v.id != itemsId);
        state.Categories = Categories;
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
            .get(`/api/stores/getAll?lang=${lang}`)
            .then((res) => {
                console.warn('Store :', res.data.Stores);
                const Stores = res.data.Stores;
                commit('SET_Stores', Stores);
            })
            .catch(function (error) {
                console.log('Error: ', error);
            });
    },
    loadstore({ commit }, productId) {
        axios
            .get(`/api/stores/getById/${productId}?lang=${lang}`)
            .then((res) => {
                console.warn('StorebyId :', res.data);
                const store = res.data.Store;
                commit('SET_Store', store);
            })
            .catch(function (error) {
                console.log('Error: ', error);
            });
    },
    loadProducts({ commit }) {
        axios
            .get(`/api/products/getAll?lang=${lang}`)
            .then((res) => {
                console.warn('Product :', res.data.Products);
                const Product = res.data.Products;
                commit('SET_Products', Product);
            })
            .catch(function (error) {
                console.log('Error: ', error);
            });
    },
    loadProduct({ commit }, ProductID) {
        axios
            .get(`/api/products/getById/${ProductID}?lang=${lang}`)
            .then((res) => {
                console.warn('productById :', res.data.product);
                const ProductID = res.data.product;
                commit('SET_ProductID', ProductID);
            })
            .catch(function (error) {
                console.log('Error: ', error);
            });
    },
    loadBrands({ commit }) {
        axios
            .get(`/api/brands/getAll?lang=${lang}`)
            .then((res) => {
                console.warn('Brands :', res.data.Brand);
                const Brands = res.data.Brand;
                commit('SET_Brands', Brands);
            })
            .catch(function (error) {
                console.log('Error: ', error);
            });
    },
    loadCategories({ commit }) {
        axios
            .get(`/api/categories/getAll?lang=${lang}`)
            .then((res) => {
                console.warn('Categories :', res.data.Category);
                const Categories = res.data.Category;
                commit('SET_Categories', Categories);
            })
            .catch(function (error) {
                console.log('Error: ', error);
            });
    },
    loadCategory({ commit }, CategoryID) {
        axios
            .get(`/api/categories/getById/${CategoryID}?lang=${lang}`)
            .then((res) => {
                console.warn('CategoryID :', res.data.Category);
                const CategoryID = res.data.Category;
                commit('SET_CategoryID', CategoryID);
            })
            .catch(function (error) {
                console.log('Error: ', error);
            });
    },
    async deleteCategory({ commit }, items) {
        axios.put(
            `http://edalili.e-dalely.com/public/api/categories/trash/${items.id}`,
            commit('Delete_Category', items.id)
        );
    },
    async login({ commit }, payload) {
      commit("changeAppLoadingState", true);

      const formData = new FormData();
      formData.append("username", payload.name);
      formData.append("password", payload.pwd);

      axios({
        method: "post",
        url: "/auth/login",
        data: formData
      })
        .then(response => {
          commit("loggedIn", { username: response.data.name });
          commit("changeAppLoadingState", false);
        })
        .catch(error => {
          commit("loginError", error.response.data || "GENERAL_ERROR");
          commit("changeAppLoadingState", false);
        });
    },

    async logout({ dispatch, commit }) {
      axios({
        method: "post",
        url: "/auth/logout"
      })
        .then(response => {
          commit("clearNavigationState");
          commit("loggedOut");
        })
        .catch(error => {
          commit("clearNavigationState");
          commit("loggedOut");
        });
    },
    
  }
});

export default store;
*/
