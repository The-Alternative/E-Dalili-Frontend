import Vue from "vue";
import VueRouter from "vue-router";
import UserLocation from '../pages/UserLocation';
import stores from "../views/services/stores.vue";
// import services
import instrc from "../views/services/instrc.vue";
import company from "../views/services/company.vue";
import professional from "../views/services/professional.vue";
import medic from "../views/services/medic.vue";
import doctors from "../views/services/doctors.vue";
import resturants from "../views/services/resturants.vue";
import products from "../views/services/products.vue";
import festival from "../views/services/festival.vue";
// import section
import allsection from "../views/section/allsection.vue";
import buty from "../views/section/buty.vue";
import market from "../views/section/market.vue";
import mobile from "../views/section/mobile.vue";
import computer from "../views/section/computer.vue";
import elctronic from "../views/section/elctronic.vue";
import kitchen from "../views/section/kitchen.vue";
import education from "../views/section/education.vue";
import furniture from "../views/section/furniture.vue";
import child from "../views/section/child.vue";
import ProductDetalis from "../components/global/ProductDetalis.vue";
import Cart from "../components/cart/Cart.vue";

Vue.use(VueRouter);
Vue.component(
  'whatsapp-store',
  require('@/components/body/whatsapp-store').default
);
Vue.component(
  'location-store',
  require('@/components/body/location-store').default
);
Vue.component(
  'phone-store',
  require('@/components/body/phone-store').default
);
Vue.component(
  'btnvisit-store',
  require('@/components/body/btnvisit-store').default
);
Vue.component('UserLocation', require('@/pages/UserLocation'));
Vue.component('stores', require('@/views/services/stores.vue'));

const routes = [
// cart shop
  {
    path: "/Cart",
    component: Cart,
    props:true
  },
  // ProductDetalis
  {
    path: "/ProductDetalis/:id/:title/:description/:price",
    component: ProductDetalis,
    props:true
  },
  // services
  {
    path: '/location', component: UserLocation 
  },
  
  {
    path: "/",
    name: "products",
    component: products
  },
  {
    path: "/company",
    name: "company",
    component: company
  },
  {
    path: "/professional",
    name: "professional",
    component: professional
  },
  {
    path: "/medic",
    name: "medic",
    component: medic
  },
  {
    path: "/doctors",
    name: "doctors",
    component: doctors
  },
  {
    path: "/resturants",
    name: "resturants",
    component: resturants
  },
  {
    path: "/instrc",
    name: "instrc",
    component: instrc
  },
  {
    path: "/stores",
    name: "stores",
    component: stores
  },
  {
    path: "/allsection",
    name: "allsection",
    component: allsection
  },
  // section
  {
    path: "/festival",
    name: "festival",
    component: festival
  },
  {
    path: "/buty",
    name: "buty",
    component: buty
  },
  {
    path: "/market",
    name: "market",
    component: market
  },
  {
    path: "/mobile",
    name: "mobile",
    component: mobile
  },
  {
    path: "/computer",
    name: "computer",
    component: computer
  },
  {
    path: "/elctronic",
    name: "elctronic",
    component: elctronic
  },
  {
    path: "/kitchen",
    name: "kitchen",
    component: kitchen
  },
  {
    path: "/education",
    name: "education",
    component: education
  },
  {
    path: "/furniture",
    name: "furniture",
    component: furniture
  },
  {
    path: "/child",
    name: "child",
    component: child
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
