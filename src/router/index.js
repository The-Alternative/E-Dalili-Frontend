import Vue from 'vue';
import VueRouter from 'vue-router';
/* import services */
import home from '../views/services/home.vue';
import stores from '../views/services/stores.vue';
import instrc from '../views/services/instrc.vue';
import company from '../views/services/company.vue';
import professional from '../views/services/professional.vue';
import medic from '../views/services/medic.vue';
import doctors from '../views/services/doctors.vue';
import resturants from '../views/services/resturants.vue';
import products from '../views/services/products.vue';
import festival from '../views/services/festival.vue';
/* import section */
import buty from '../views/section/buty.vue';
import mobile from '../views/section/mobile.vue';
import computer from '../views/section/computer.vue';
import elctronic from '../views/section/elctronic.vue';
import kitchen from '../views/section/kitchen.vue';
import education from '../views/section/education.vue';
import furniture from '../views/section/furniture.vue';
import child from '../views/section/child.vue';
/* import cartshop */
import ProductDetalis from '../components/global/ProductDetalis.vue';
import Cart from '../components/cart/Cart.vue';

import UserLocation from '../pages/UserLocation';
import visitStore from '../pages/visitStore';

Vue.use(VueRouter);

const routes = [
    {
        path: '/location',
        component: UserLocation,
    },
    {
        path: '/visitStore/:id/:title',
        name:'visitStore',
        component:visitStore,
        props: true,
    },
    /* cart shop */
    {
        path: '/Cart',
        component: Cart,
        props: true,
    },
    /* ProductDetalis */
    {
        path: '/ProductDetalis/:id/:title/:description/:price',
        component: ProductDetalis,
        props: true,
    },
    /* services */

    {
        path: '/',
        name: 'home',
        component: home,
    },
    {
        path: '/products',
        name: 'products',
        component: products,
    },
    {
        path: '/company',
        name: 'company',
        component: company,
    },
    {
        path: '/professional',
        name: 'professional',
        component: professional,
    },
    {
        path: '/medic',
        name: 'medic',
        component: medic,
    },
    {
        path: '/doctors',
        name: 'doctors',
        component: doctors,
    },
    {
        path: '/resturants',
        name: 'resturants',
        component: resturants,
    },
    {
        path: '/instrc',
        name: 'instrc',
        component: instrc,
    },
    {
        path: '/stores',
        name: 'stores',
        component: stores,
    },
    /* section */
    {
        path: '/festival',
        name: 'festival',
        component: festival,
    },
    {
        path: '/buty',
        name: 'buty',
        component: buty,
    },
    {
        path: '/mobile',
        name: 'mobile',
        component: mobile,
    },
    {
        path: '/computer',
        name: 'computer',
        component: computer,
    },
    {
        path: '/elctronic',
        name: 'elctronic',
        component: elctronic,
    },
    {
        path: '/kitchen',
        name: 'kitchen',
        component: kitchen,
    },
    {
        path: '/education',
        name: 'education',
        component: education,
    },
    {
        path: '/furniture',
        name: 'furniture',
        component: furniture,
    },
    {
        path: '/child',
        name: 'child',
        component: child,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
