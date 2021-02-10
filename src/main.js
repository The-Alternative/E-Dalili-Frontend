import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router'
import router from "./router";
import store from "./store/Store";
import "bootstrap";
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "normalize.css";
import "../public/fontawesome-free-5.15.1-web/css/all.css";

/* import '../semantic/dist/semantic.min.css' */

Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");






