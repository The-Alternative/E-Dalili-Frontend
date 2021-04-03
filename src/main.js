import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router/index';
import store from './store/Store';

//libraries
import VueI18n from 'vue-i18n';
import axios from 'axios';
import 'jquery';
import VueLazyload from 'vue-lazyload';
import 'bootstrap';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'normalize.css';
import i18n from './js/i18n';
// import i18n from './js/i18n';
import main from '../src/assets/css/main.css';
import '../public/fontawesome-free-5.15.1-web/css/all.css';

const lang = localStorage.getItem('lang') || 'en';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueLazyload);
Vue.use(VueI18n);

// axios.defaults.baseURL='http://edalili.e-dalely.com';
axios.defaults.headers['Accept-Language'] = lang;

new Vue({
    router,
    store,
    main,
    i18n,
    render: (h) => h(App),
}).$mount('#app');
