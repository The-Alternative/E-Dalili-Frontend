import Vue from 'vue';
import VueRouter from 'vue-router';
/* import services */
import home from '../views/services/home.vue';
Vue.use(VueRouter);

const routes = [
    {
        path: '/addStore',
        name: 'addStore',
        component: () => import('../components/body/addStore'),
    },
    {
        path: '/visitStore/:id/:title/:workingHours',
        name: 'visitStore',
        component: () => import('../components/body/pages/visitStore'),
        props: true,
    },
    /* cart shop */
    {
        path: '/Cart',
        component: () => import('../components/cart/Cart.vue'),
        props: true,
    },
    /* ProductDetalis */
    {
        path: '/ProductDetalis/:id/:name/:long_des/:short_des/:price',
        component: () => import('../components/global/ProductDetalis.vue'),
        props: true,
    },
    {
        path: '/ProductDetailsStore/:id',
        component: () => import('../components/body/pages/ProductDetailsStore'),
        name: 'ProductDetailsStore',
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
        component: () => import('../views/services/products.vue'),
    },
    {
        path: '/company',
        name: 'company',
        component: () => import('../views/services/company.vue'),
    },
    {
        path: '/professional',
        name: 'professional',
        component: () => import('../views/services/professional.vue'),
    },
    {
        path: '/medic',
        name: 'medic',
        component: () => import('../views/services/medic.vue'),
    },
    {
        path: '/doctors',
        name: 'doctors',
        component: () => import('../views/services/doctors.vue'),
    },
    {
        path: '/resturants',
        name: 'resturants',
        component: () => import('../views/services/resturants.vue'),
    },
    {
        path: '/instrc',
        name: 'instrc',
        component: () => import('../views/services/instrc.vue'),
    },
    {
        path: '/stores',
        name: 'stores',
        component: () => import('../views/services/stores.vue'),
    },
    /* section */
    {
        path: '/festival',
        name: 'festival',
        component: () => import('../views/services/festival.vue'),
    },
    {
        path: '/buty',
        name: 'buty',
        component: () => import('../views/section/buty.vue'),
    },
    {
        path: '/mobile',
        name: 'mobile',
        component: () => import('../views/section/mobile.vue'),
    },
    {
        path: '/computer',
        name: 'computer',
        component: () => import('../views/section/computer.vue'),
    },
    {
        path: '/elctronic',
        name: 'elctronic',
        component: () => import('../views/section/elctronic.vue'),
    },
    {
        path: '/kitchen',
        name: 'kitchen',
        component: () => import('../views/section/kitchen.vue'),
    },
    {
        path: '/education',
        name: 'education',
        component: () => import('../views/section/education.vue'),
    },
    {
        path: '/furniture',
        name: 'furniture',
        component: () => import('../views/section/furniture.vue'),
    },
    {
        path: '/child',
        name: 'child',
        component: () => import('../views/section/child.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
