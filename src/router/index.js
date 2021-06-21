import Vue from 'vue';
import VueRouter from 'vue-router';
/* import services */
import DashboardLayout from "../views/pages/Layout/DashboardLayout.vue";

import Dashboard from "../views/pages/Dashboard.vue";
// Products
import AllProducts from "../views/pages/Product/View/AllProducts.vue";
import NewProduct from "../views/pages/Product/View/NewProduct.vue";
import EditProduct from "../views/pages/Product/View/EditProduct.vue";
// Stores
import AllStores from "../views/pages/Store/View/AllStores.vue";
import NewStore from "../views/pages/Store/View/NewStore.vue";
import EditStore from "../views/pages/Store/View/EditStore.vue";
// Ctegories
import AllCategories from "../views/pages/Categories/View/AllCategories.vue";
import NewCategory from "../views/pages/Categories/View/NewCategory.vue";
import EditCategory from "../views/pages/Categories/View/EditCategory.vue";
// Brands
import AllBrands from "../views/pages/Brands/View/AllBrands.vue";
import NewBrand from "../views/pages/Brands/View/NewBrand.vue";
import EditBrand from "../views/pages/Brands/View/EditBrand.vue";
// Store Products
import StoreProducts from "../views/pages/Product_Store/View/StoreProducts.vue";
import NewProductStor from "../views/pages/Product_Store/View/NewProductStor.vue";
import EditProductStor from "../views/pages/Product_Store/View/EditProductStor.vue";
//Doctors
import AllDoctors from "../views/pages/Doctor/View/AllDoctors.vue";
import NewDoctors from "../views/pages/Doctor/View/NewDoctors.vue";
import EditDoctors from "../views/pages/Doctor/View/EditDoctors.vue";
//Restaurant
import AllRestaurant from "../views/pages/Restaurant/View/restaurants/AllRestaurant.vue";
import NewRestaurant from "../views/pages/Restaurant/View/restaurants/NewRestaurant.vue";
import EditRestaurant from "../views/pages/Restaurant/View/restaurants/EditRestaurant.vue";
//Restaurant meals
import AllMeals from "../views/pages/Restaurant/View/Meals/AllMeals.vue"
import NewMeals from "../views/pages/Restaurant/View/Meals/NewMeals.vue";
import EditMeals from "../views/pages/Restaurant/View/Meals/EditMeals.vue";
//Restaurant users
import AllUsers from "../views/pages/Restaurant/View/Users/AllUsers.vue"
import NewUser from "../views/pages/Restaurant/View/Users/NewUser.vue";
import EditUser from "../views/pages/Restaurant/View/Users/EditUser.vue";
//Restauran Menus
import AllMenu from "../views/pages/Restaurant/View/Menus/AllMenu.vue"
import NewMenu from "../views/pages/Restaurant/View/Menus/NewMenu.vue";
import EditMenu from "../views/pages/Restaurant/View/Menus/EditMenu.vue";
// Offer 
import allOffers from "../views/pages/Offers/View/allOffers.vue";
Vue.use(VueRouter);

const routes = [
    // Sign
    {
        path: '/',
        name: 'sign',
        component: () => import('../views/sign'),
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
        path: '/home',
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
    //restaurant
    {
        path: '/visit_restaurant/:id/:title',
        name: 'visitRestaurant',
        component: () =>
            import('../components/body/restaurant/visitRestaurant.vue'),
        params: true,
    },
    // Dashboard
 {
    path: "/",
    component:  DashboardLayout ,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      // Products
      {
        path: "allproducts",
        name: "All Products",
        component: AllProducts,
      },

      {
        path: "newproduct",
        name: "New Product",
        component: NewProduct,
      },

      {
        path: "products/:id",
        name: "Products",
        component: EditProduct,
      },
      // Stores
      {
        path: "allstores",
        name: "All Stores",
        component: AllStores,
      },
      {
        path: "newstore",
        name: "New Store",
        component: NewStore,
      },
      {
        path: "stores/:id",
        name: "Stores",
        component: EditStore,
      },
      // Stores => Products
      {
        path: "store/:id/Products",
        name: "Store/Products",
        component: StoreProducts,
      },
      {
        path: "/store/:id/newproduct",
        name: "New Product in_Store",
        component: NewProductStor,
      },
      {
        path: "/store/:id/product/:id_product",
        name: "Edit Product in Store",
        component: EditProductStor,
      },
      // Categories
      {
        path: "allcategories",
        name: "allCategories",
        component: AllCategories,
      },
      {
        path: "editcategory/:id",
        name: "EditCategory",
        component: EditCategory,
      },
      {
        path: "newcategory",
        name: "NewCategory",
        component: NewCategory,
      },
      // Brands
      {
        path: "allbrands",
        name: "allBrands",
        component: AllBrands,
      },
      {
        path: "newbrand",
        name: "newbrand",
        component: NewBrand,
      },
      {
        path: "editbrand/:id",
        name: "editbrand",
        component: EditBrand,
      },
      // Doctors
      {
        path: "alldoctors",
        name: "allDoctors",
        component: AllDoctors,
      },
      {
        path: "newdoctor",
        name: "newdoctor",
        component: NewDoctors,
      },
      {
        path: "editdoctors/:id",
        name: "editdoctors",
        component: EditDoctors,
      },
      //Restaurant
      {
        path: "allrestaurant",
        name: "AllRestaurant",
        component: AllRestaurant,
      },
      {
        path: "newrestaurant",
        name: "NewRestaurant",
        component: NewRestaurant,
      },
      {
        path: "editrestaurant",
        name: "EditRestaurant",
        component: EditRestaurant,
      },
      // Restaurant meals
      {
        path: "allmeals",
        name: "AllMeals",
        component: AllMeals,
      },
      {
        path: "newmeals",
        name: "NewMeals",
        component: NewMeals,
      },
      {
        path: "editmeals",
        name: "EditMeals",
        component: EditMeals,
      },
        //Restaurant user
      {
        path: "allusers",
        name: "AllUsers",
        component: AllUsers,
      },
      {
        path: "newuser",
        name: "NewUser",
        component: NewUser,
      },
      {
        path: "edituser",
        name: "EditUser",
        component: EditUser,
      },
        //Restaurant Menu
      {
        path: "allmenus",
        name: "AllMenu",
        component: AllMenu,
      },
      {
        path: "newmenu",
        name: "NewMenu",
        component: NewMenu,
      },
      {
        path: "editmenu",
        name: "EditMenu",
        component: EditMenu,
      },
      // Offers 
      {
      path: "allOffers",
      name: "All Offers",
      component: allOffers,
      }
    ],
  },
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
