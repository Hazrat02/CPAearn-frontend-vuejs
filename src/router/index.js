import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import WorkView from '../views/WorkView.vue'
import ServicesView from '../views/ServicesView.vue'
import RefferView from '../views/RefferView.vue'
import ContactView from '../views/ContactView.vue'
import WallateView from '../views/WallateView.vue'
import EarnView from '../views/EarnView.vue'
import VipView from '../views/VipView.vue'
import AboutView from '../views/AboutView.vue'
import DeshboardView from '../views/Deshboard/DeshboardView.vue'
import UserView from '../views/Deshboard/UserView.vue'
import AdminVipView from '../views/Deshboard/AdminVipView.vue'
import AdminWorkView from '../views/Deshboard/AdminWorkView.vue'
import AdminAskView from '../views/Deshboard/AdminAskView.vue'
import AdminPaymentView from '../views/Deshboard/AdminPaymentView.vue'
import AdminTransactionView from '../views/Deshboard/AdminTransactionView.vue'
// import HomeLayout from '../Layouts/HomeLayout.vue'
// import AuthLayout from '../Layouts/AuthLayout.vue'
import LoginComponent from '../components/Auth/Login.vue'
// import GoogleAds from '../components/earn/GoogleAds.vue'
import RegisterComponent from '../components/Auth/Register.vue'
import ForgetComponent from '../components/Auth/Forget.vue'
import authenticated from '../midleware/auth.js';
import { logout } from "../midleware/auth.js";
import { setloading } from '../utils/extra'
import axios from 'axios';



const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        // Layout:HomeLayout,
        // requiresAuth:'auth'
      },
      
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
      meta:{
        // Layout:HomeLayout,
      },
    },
    {
      path: '/login',
      name: 'login',
   
      component:LoginComponent,
      meta:{
      requiresGuest:true,
      },
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:RegisterComponent,
      meta:{
        requiresGuest:true,
      },
    },
    {
      path: '/forget',
      name: 'forget',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:ForgetComponent,
      meta:{
        // Layout:AuthLayout,
      },
    },
    {
      path: '/helpcenter',
      name: 'helpcenter',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:ServicesView,
      // meta:{
      //   requiresGuest:true,
      // },
    },
    {
      path: '/contact',
      name: 'contactUs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:ContactView,
      // meta:{
      //   requiresGuest:true,
      // },
    },
    {
      path: '/wallate',
      name: 'wallate',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:WallateView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/earning',
      name: 'earning',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:EarnView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/vip',
      name: 'vip',

      component:VipView,
      // meta:{
      //   requiresGuest:true,
      // },
    },
    {
      path: '/reffer',
      name: 'reffer',

      component:RefferView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/work/:id',
      name: 'work',

      component:WorkView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/deshboard',
      name: 'deshboard',

      component:DeshboardView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/deshboard/user',
      name: 'usermanage',

      component:UserView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/deshboard/vip',
      name: 'vipmanage',

      component:AdminVipView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/deshboard/work',
      name: 'workmanage',

      component:AdminWorkView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/deshboard/ask',
      name: 'askmanage',

      component:AdminAskView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/deshboard/payment',
      name: 'payment',

      component:AdminPaymentView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/deshboard/transaction',
      name: 'transaction',

      component:AdminTransactionView,
      meta:{
        requiresAuth:true,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },

})




router.beforeEach((to, from, next) => {
  // Function to check if the JWT token is expired
  function isTokenExpired(token) {
    const tokenData = JSON.parse(atob(token.split('.')[1]));
    const expirationTime = tokenData.exp * 1000; // Convert expiration time to milliseconds
    return Date.now() >= expirationTime;
  }
  const jwtToken = localStorage.getItem('token');
  if (jwtToken && isTokenExpired(jwtToken)) {
    // Clear the localStorage and redirect to the login page
    localStorage.removeItem('token');
    logout();
    next('/login');
  } else {
    // Allow navigation to the next route
    
  // Check if the route requires authentication and user is not authenticated
  if (to.meta.requiresAuth && !authenticated()) {
    // Redirect to login page or any other desired route
    next('/login');
  } else {
    // Check if the route requires a guest (unauthenticated user) and user is authenticated
    if (to.meta.requiresGuest && authenticated()) {
      next('/');
    } else {
      
      axios.defaults.baseURL='http://127.0.0.1:8000';
      axios.defaults.headers.common['Authorization']='bearer'+localStorage.getItem('token');
     

      next();
      setloading(true);
    
    }
  }
  }
})






export default router
