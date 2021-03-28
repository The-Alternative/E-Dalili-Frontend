import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router/index';
import store from './store/Store';
import 'jquery';

import 'bootstrap';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'normalize.css';
import main from '../src/assets/css/main.css';
import '../public/fontawesome-free-5.15.1-web/css/all.css';

//const { JSDOM } = require( "jsdom" );
//const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
    router,
    store,
    main,
    render: (h) => h(App),
}).$mount('#app');
