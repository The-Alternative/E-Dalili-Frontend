import Vue from "vue";
import VueGeolocation from 'vue-browser-geolocation';
import * as VueGoogleMaps from 'vue2-google-maps';
import SuiVue from 'semantic-ui-vue';
import App from "./App.vue";
import VueRouter from 'vue-router'
import router from "./router/index";
import store from "./store/Store";
import './js/body';
import "bootstrap";
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "normalize.css";
import "../public/fontawesome-free-5.15.1-web/css/all.css";

Vue.config.productionTip = false;
Vue.use(VueGeolocation);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDjjb4f0kJ19pYIRiosKb-MOofau97t80A',
  },
  installComponents: false,
});

Vue.use(SuiVue);
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");






