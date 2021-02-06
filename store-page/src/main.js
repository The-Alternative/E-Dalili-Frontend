import Vue from 'vue';
import VueGeolocation from 'vue-browser-geolocation';
import * as VueGoogleMaps from 'vue2-google-maps';
import SuiVue from 'semantic-ui-vue';
// import '../semantic/dist/semantic.min.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

import VueRouter from 'vue-router';
import Routes from './router/routes';

import App from './App.vue';
import './css/StyleStore.css';
import './js/Store.js';

Vue.config.productionTip = false;

Vue.use(VueGeolocation);
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDjjb4f0kJ19pYIRiosKb-MOofau97t80A',
    },
    installComponents: false,
});

Vue.use(SuiVue);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode: 'history',
});

new Vue({
    render: (h) => h(App),
    router: router,
}).$mount('#app');
