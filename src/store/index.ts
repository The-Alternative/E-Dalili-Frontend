/* 
import axios from 'axios';
import {
  createStore,
  MutationTree,
  ActionContext,
  ActionTree,
  GetterTree,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  createLogger
} from "vuex";
const cartItems = window.localStorage.getItem('cartItems');
const cartItemCount = window.localStorage.getItem('cartItemCount');
const lang = window.localStorage.getItem('lang');
//declare state
export type State = { 
    counter: number,
    Stores: string[],
    store: null,
    Sections: string[],
    Product: string[],
    ProductID: null,
    Brand: string[],
    Brands: string[],
    Categories: string[],
    CategoryID: null,
    priceArray: string[], 
    cartItemCount: number,
    cartItems: string[],
    lang:string,
    count:number,

    };

//set state
const state: State = {
      count: 0,
      counter: 0,
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
      cartItemCount: cartItemCount ? JSON.parse(cartItemCount) : 0,
      cartItems: cartItems ? JSON.parse(cartItems) : [],
      lang: ''
    };

// mutations and action enums

export enum MutationTypes {
  INC_COUNTER = "SET_COUNTER",
  SET_Stores = "SET_Stores",
  SET_Store = "SET_Store",
  SET_Products = "SET_Products",
  SET_ProductID = "SET_ProductID",
  SET_Brands = "SET_Brands",
  SET_Categories = "SET_Categories",
  SET_CategoryID = "SET_CategoryID",
}



//Mutation Types 
export type Mutations<S = State> = {
  [MutationTypes.INC_COUNTER](state: S, payload: number): void;
  [MutationTypes.SET_Stores](state: S, Stores: string[]): void;
  [MutationTypes.SET_Store](state: S, store: null): void;
  [MutationTypes.SET_Products](state: State, Product: string[]): void;
  [MutationTypes.SET_ProductID](state: S, ProductID: null): void;
  [MutationTypes.SET_Brands](state: S, Brands: string[]): void;
  [MutationTypes.SET_Categories](state: S, Categories: string[]): void;
  [MutationTypes.SET_CategoryID](state: S, CategoryID: null): void;
};

//define mutations
const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.INC_COUNTER](state: State, payload: number) {
    state.counter += payload;
  },
  [MutationTypes.SET_Stores](state: State, Stores: string[]) {
    state.Stores = Stores;
  },
  [MutationTypes.SET_Store](state: State, store: null) {
    state.store = store;
  },
  [MutationTypes.SET_Products](state: State, Product: string[]) {
    state.Product = Product;
  },
  [MutationTypes.SET_ProductID](state: State, ProductID: null) {
    state.ProductID = ProductID
  },
  [MutationTypes.SET_Brands](state: State, Brands: string[]) {
    state.Brands = Brands;
  },
  [MutationTypes.SET_Categories](state: State, Categories: string[]) {
    state.Categories = Categories;
  },
  [MutationTypes.SET_CategoryID](state: State, CategoryID: null) {
    state.CategoryID = CategoryID;
  }
};

//actions
export enum ActionTypes {
  INC_COUNTER = "SET_COUNTER",
  SET_Stores = "SET_Stores",
  SET_Store = "SET_Store",
  SET_Products = "SET_Products",
  SET_ProductID = "SET_ProductID",
  SET_Brands = "SET_Brands",
  SET_Categories = "SET_Categories",
  SET_CategoryID = "SET_CategoryID",
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

// actions interface

export interface Actions {
  [ActionTypes.INC_COUNTER]({ commit }: AugmentedActionContext,payload: number): void;
  [ActionTypes.SET_Stores]({ commit }: AugmentedActionContext, Stores: string[]): void;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.INC_COUNTER]({ commit }, payload: number) {commit(MutationTypes.INC_COUNTER, payload);},
  [ActionTypes.SET_Stores]({ commit },Stores: string[]) {commit(MutationTypes.SET_Stores, Stores);},

};

// Getters types
export type Getters = {
  doubleCounter(state: State): number;
  loadStores(state: State): string[];
};

//getters

export const getters: GetterTree<State, State> & Getters = {
  doubleCounter: state => {
    console.log("state", state.counter);
    return state.counter * 2;
  },
  loadStores(state:State): Promise<any> {
    return axios.get(`/api/stores/getAll?lang=${lang}`)
    .then((res) => {
         console.warn('Store :', res.data.Stores);
         state.Stores = res.data.Stores;
      
     }) .catch(function (error) {
      console.log('Error: ', error);
  });
  
  },
  const val = await axios
  .get<Array<Book & { body: string }>>(
    `https://jsonplaceholder.typicode.com/posts`
  )
  .then(res => res.data.map(
    ({ body, ...props }) => Object.assign({ content: body }, props)
  ));
 
};

//setup store type
export type Store = Omit<
  VuexStore<State>,
  "commit" | "getters" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

export const store = createStore({
  state,
  mutations,
  actions,
  getters,
  plugins: [createLogger()]
});

export function useStore() {
  return store as Store;
}
// export const store = createStore({
//   state,
//   mutations: {
//     increment(state, payload) {
//       state.counter++;
//     }
//   },
//   actions: {
//     increment({ commit }) {
//       commit("increment");
//     }
//   },

//   getters: {
//     counter(state) {
//       return state.counter;
//     }
//   },
//   modules: {}
// });
*/
