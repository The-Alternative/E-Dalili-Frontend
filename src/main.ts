import { createApp } from 'vue';
import App from './App.vue';
 import router from './router/index';
 import store from './store/index';
// import 'animate.css';
// import 'jquery';
// import 'vue-lazyload';
// import 'bootstrap';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// import 'normalize.css';
// import '../public/fontawesome-free-5.15.1-web/css/all.css';
// // Css

// js

// import i18n from './js/i18n';
// //libraries
// import VueI18n from 'vue-i18n';
// import axios from 'axios';


// const lang = localStorage.getItem('lang') || 'en';
// document.documentElement.lang = lang;

// App.use(VueI18n);
// axios.defaults.baseURL = 'http://edalili.e-dalely.com/public';
// axios.defaults.headers['Accept-Language'] = lang;
createApp(App)
 .use(router)
 .use(store)
// .use(BootstrapVue)
// .use(IconsPlugin)
.mount('#app');
