import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router/index';

// Css
import main from '../src/assets/css/main.css';
// js
import store from './store/Store';
import i18n from './js/i18n';
//libraries
import 'animate.css';
import VueI18n from 'vue-i18n';
import axios from 'axios';
import 'jquery';
import VueLazyload from 'vue-lazyload';
import 'bootstrap';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'normalize.css';
import '../public/fontawesome-free-5.15.1-web/css/all.css';

const lang = localStorage.getItem('lang') || 'en';
document.documentElement.lang = lang;
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueLazyload);
Vue.use(VueI18n);
axios.defaults.baseURL = 'http://edalili.e-dalely.com/public';
axios.defaults.headers['Accept-Language'] = lang;

new Vue({
    main,
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount('#app');
