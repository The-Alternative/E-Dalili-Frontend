import Vue from 'vue';
import App from './App.vue';
import './css/StyleStore.css';
import './js/Store.js';

Vue.config.productionTip = false;

Vue.component(
    'whatsapp-store',
    require('./components/componentBody/whatsapp-store').default
);
Vue.component(
    'location-store',
    require('./components/componentBody/location-store').default
);
Vue.component(
    'phone-store',
    require('./components/componentBody/phone-store').default
);
Vue.component(
    'btnvisit-store',
    require('./components/componentBody/btnvisit-store').default
);

new Vue({
    render: (h) => h(App),
}).$mount('#app');
