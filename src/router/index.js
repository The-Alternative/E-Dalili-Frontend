import Vue from 'vue';
import UserLocation from '../pages/UserLocation';
import Stores from '../views/services/Stores';

Vue.component(
    'whatsapp-store',
    require('../components/body/whatsapp-store').default
);
Vue.component(
    'location-store',
    require('../components/body/location-store').default
);
Vue.component('phone-store', require('../components/body/phone-store').default);
Vue.component(
    'btnvisit-store',
    require('../components/body/btnvisit-store').default
);
Vue.component('UserLocation', require('../pages/UserLocation'));
Vue.component('Stores', require('../views/services/Stores'));

export default [
    { path: '/location', component: UserLocation },
    { path: '/', component: Stores },
];
