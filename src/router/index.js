import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import HomeLayout from '../Layouts/HomeLayout.vue'
import AuthLayout from '../Layouts/AuthLayout.vue'
import LoginComponent from '../components/Auth/Login.vue'
import RegisterComponent from '../components/Auth/Register.vue'
import ForgetComponent from '../components/Auth/Forget.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        Layout:HomeLayout,
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
        Layout:HomeLayout,
      },
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:LoginComponent,
      meta:{
        Layout:AuthLayout,
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
        Layout:AuthLayout,
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
        Layout:AuthLayout,
      },
    }
  ]
})

export default router
