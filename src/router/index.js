import Vue from 'vue';
import VueRouter from 'vue-router';
/* import services */

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        component: () => import('../components/Admin/Login.vue'),
    },
    {
        path: '/signup',
        component: () => import('../components/Admin/Signup.vue'),
    },
    {
        path: '/forgotpassword',
        component: () => import('../components/Admin/ForgetPassword.vue'),
    },
    {
        path: '/',
        component: () => import('../components/Admin/loginSettingPage.vue'),
    },
    {
        path: '/addStore',
        name: 'addStore',
        component: () => import('../components/body/addStore'),
    },
    {
        path: '/visitStore/:id/:title',
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
        path: '/ProductDetalis/:id',
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
        path: '/ProductDetailsStore/:title/:id_store/:id',
        component: () => import('../components/body/pages/ProductDetailsStore'),
        name: 'ProductDetailsStore',
        props: true,
    },
    /* services or section */
    {
        path: '/allSection',
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
    /* dashboard */
    {
        path: '/main_dash',
        name: 'main_dash',
        component: () => import('../Dashboard/view/main_dash.vue'),
    }, 
    {
        path: '/product_dash',
        name: 'product_dash',
        component: () => import('../Dashboard/view/product_dash.vue'),
    }, 
    {
        path: '/categories_dash',
        name: 'categories_dash',
        component: () => import('../Dashboard/view/categories_dash.vue'),
    }, 
    {
        path: '/brand_dash',
        name: 'brand_dash',
        component: () => import('../Dashboard/view/brand_dash.vue'),
    },
    {
        path: '/new_product',
        name: 'new_product',
        component: () => import('../Dashboard/view/new_product.vue'),
    }
    
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
