import Backgrounds from './components/others/Bgs.vue'
import Footer from './components/others/Footer.vue'
import Header from './components/others/Header.vue'
import Loading from './components/others/Loading.vue'
import MobileNav from './components/others/MobileNav.vue'
import GoogleAds from './components/earn/GoogleAds.vue'
import axios from 'axios';
// axios.defaults.bas

axios.defaults.headers.common['Authorization']='bearer'+localStorage.getItem('token');




import {setloading,isLoading} from './utils/extra.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from 'vue3-particles'
import Notifications from '@kyvg/vue3-notification'
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import 'vue3-snotify/style';

// import Trend from "vuetrend"



// ==========package=============
import './assets/base.js';
import './assets/main.css';

// layouts
import AuthLayout from "./Layouts/AuthLayout.vue";
import HomeLayout from "./Layouts/HomeLayout.vue";




const app = createApp(App)
app.use(router);
app.use(Notifications);
app.use(Particles);
// Vue.use(Trend)
// =================component=============
app.component('Bgs', Backgrounds);
app.component('Footer', Footer);
app.component('Header', Header);
app.component('MobileNav', MobileNav);
app.component('Loading', Loading);
app.component('GoogleAds', GoogleAds);
app.component('AuthLayout', AuthLayout);
app.component('HomeLayout', HomeLayout);
app.component('Carousel', Carousel);
app.component('Navigation', Navigation);
app.component('Pagination', Pagination);
app.component('Slide', Slide);






// extra==========================================
app.config.globalProperties.$setLoading = setloading;
app.config.globalProperties.$isLoading = isLoading;

app.mount('#app')

