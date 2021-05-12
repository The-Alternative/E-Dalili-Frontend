import Vue from 'vue';
import VueRouter from 'vue-router';
/* import services */

Vue.use(VueRouter);

const routes = [
    {
        path: '/bodySection/:id/:name',
        name: 'bodySection',
        component: () => import('../components/body/pages/bodySection'),
    },
    {
        path: '/addStore',
        name: 'addStore',
        component: () => import('../components/body/addStore'),
    },
    {
        path: '/visitStore/:id',
        name: 'visitStore',
        component: () => import('../components/body/pages/visitStore'),
        props: true,
    },
    /* cart shop */
    {
        path: '/Cart/:id',
        component: () => import('../components/cart/Cart.vue'),
        props: true,
    },
    /* ProductDetalis */
    {
        path: '/ProductDetalis/:id/:ip',
        name: 'ProductDetails',
        component: () => import('../components/global/ProductDetalis.vue'),
        props: true,
    },
    {
        path: '/ListView/:id/:name/:short_des',
        component: () => import('../components/global/ListView.vue'),
        props: true,
    },
    {
        path: '/ProductDetailsStore',
        component: () => import('../components/body/pages/ProductDetailsStore'),
        name: 'ProductDetailsStore',
        props: true,
    },
    /* services or section */
    {
        path: '/',
        name: 'home',
        component: () => import('../views/section/home.vue'),
    },
    {
        path: '/festival',
        name: 'festival',
        component: () => import('../views/section/festival.vue'),
    },
    {
        path: '/products',
        name: 'products',
        component: () => import('../views/section/products.vue'),
    },
    {
        path: '/company',
        name: 'company',
        component: () => import('../views/section/company.vue'),
    },
    {
        path: '/professional',
        name: 'professional',
        component: () => import('../views/section/professional.vue'),
    },
    {
        path: '/medic',
        name: 'medic',
        component: () => import('../views/section/medic.vue'),
    },
    {
        path: '/doctors',
        name: 'doctors',
        component: () => import('../views/section/doctors.vue'),
    },
    {
        path: '/resturants',
        name: 'resturants',
        component: () => import('../views/section/resturants.vue'),
    },
    {
        path: '/instrc',
        name: 'instrc',
        component: () => import('../views/section/instrc.vue'),
    },
    {
        path: '/stores',
        name: 'stores',
        component: () => import('../views/section/stores.vue'),
    },
    /* Categories */
    {
        path: '/buty',
        name: 'buty',
        component: () => import('../views/categories/buty.vue'),
    },
    {
        path: '/mobile',
        name: 'mobile',
        component: () => import('../views/categories/mobile.vue'),
    },
    {
        path: '/computer',
        name: 'computer',
        component: () => import('../views/categories/computer.vue'),
    },
    {
        path: '/elctronic',
        name: 'elctronic',
        component: () => import('../views/categories/elctronic.vue'),
    },
    {
        path: '/kitchen',
        name: 'kitchen',
        component: () => import('../views/categories/kitchen.vue'),
    },
    {
        path: '/education',
        name: 'education',
        component: () => import('../views/categories/education.vue'),
    },
    {
        path: '/furniture',
        name: 'furniture',
        component: () => import('../views/categories/furniture.vue'),
    },
    {
        path: '/child',
        name: 'child',
        component: () => import('../views/categories/child.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
