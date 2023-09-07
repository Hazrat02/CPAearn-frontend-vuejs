import Backgrounds from './components/others/Bgs.vue'
import Footer from './components/others/Footer.vue'
import Header from './components/others/Header.vue'
import Loading from './components/others/Loading.vue'
import MobileNav from './components/others/MobileNav.vue'
import GoogleAds from './components/earn/GoogleAds.vue'
import Modal from "./components/others/Modal.vue";



import {setloading,isLoading,setbackedUrl,isSidebar} from './utils/extra.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from 'vue3-particles'
import Notifications from '@kyvg/vue3-notification'
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";





// pinia store==============================
import { createPinia } from 'pinia';


// const userStore = useUserStore();
// userStore.loadUserFromLocalStorage();




// ==========package=============
//
import './assets/base.js';
import './assets/main.css';

// layouts
import AuthLayout from "./Layouts/AuthLayout.vue";
import HomeLayout from "./Layouts/HomeLayout.vue";
import DeshboarLayout from "./Layouts/DeshboarLayout.vue";




const app = createApp(App)
const pinia = createPinia();
app.use(router);

app.use(pinia);

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
app.component('DeshboarLayout', DeshboarLayout);
app.component('Carousel', Carousel);
app.component('Modal', Modal);
app.component('Navigation', Navigation);
app.component('Pagination', Pagination);
app.component('Slide', Slide);






// extra==========================================
app.config.globalProperties.$setLoading = setloading;
app.config.globalProperties.$isLoading = isLoading;
app.config.globalProperties.$isSidebar = isSidebar;
app.config.globalProperties.$setbackedUrl = setbackedUrl;

app.mount('#app')

