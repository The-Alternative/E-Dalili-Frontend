import Vue from 'vue';
import UserLocation from '../pages/UserLocation';
import Stores from '../view/Stores';

Vue.component(
    'whatsapp-store',
    require('../components/componentBody/whatsapp-store').default
);
Vue.component(
    'location-store',
    require('../components/componentBody/location-store').default
);
Vue.component(
    'phone-store',
    require('../components/componentBody/phone-store').default
);
Vue.component(
    'btnvisit-store',
    require('../components/componentBody/btnvisit-store').default
);
Vue.component('UserLocation', require('../pages/UserLocation'));
Vue.component('Stores', require('../view/Stores'));

export default [
    { path: '/location', component: UserLocation },
    { path: '/', component: Stores },
];
