import Vue from "vue";
import VueRouter from "vue-router";
// import services
import instrc from "../views/services/instrc.vue";
import company from "../views/services/company.vue";
import professional from "../views/services/professional.vue";
import medic from "../views/services/medic.vue";
import doctors from "../views/services/doctors.vue";
import resturants from "../views/services/resturants.vue";
import products from "../views/services/products.vue";
import stores from "../views/services/stores.vue";
import festival from "../views/services/festival.vue";
// import section
import allsection from "../views/section/allsection.vue";
import buty from "../views/section/buty.vue";
import market from "../views/section/market.vue";
import mobile from "../views/section/mobile.vue";

Vue.use(VueRouter);

const routes = [
  // services
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
