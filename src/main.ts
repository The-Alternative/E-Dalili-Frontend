import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/Store';
import i18n from './js/i18n';
import axios from 'axios';

import 'animate.css';
import 'vue-lazyload';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'normalize.css';
import '../public/fontawesome-free-5.15.1-web/css/all.css';

require('./store/subscriber');
//  axios.defaults.headers['Accept-Language'] = lang;
//  const string(lang) = localStorage.getItem('lang') || 'en';
//  document.documentElement.lang = lang;
axios.defaults.baseURL = 'http://edalili.e-dalely.com/public';

const app = createApp(App).use(store).use(router, axios).use(i18n);

app.config.globalProperties.axios = axios;

app.mount('#app');
