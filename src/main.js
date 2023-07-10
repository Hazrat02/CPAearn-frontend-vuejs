import Backgrounds from './components/others/Bgs.vue'
import Footer from './components/others/Footer.vue'
import Header from './components/others/Header.vue'






import MobileNav from './components/others/MobileNav.vue'
import extra from './utils/extra.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from 'vue3-particles'
import Notifications from '@kyvg/vue3-notification'

import 'vue3-snotify/style';

// ==========package=============
import './assets/base.js';
import './assets/main.css';

import AuthLayout from "./Layouts/AuthLayout.vue";


const app = createApp(App)

app.use(router);
// app.provide('logout', logout);

app.config.globalProperties.$extrat = extra;
app.use(Notifications);
app.use(Particles);


app.component('Bgs', Backgrounds);
app.component('Footer', Footer);
app.component('Header', Header);
app.component('MobileNav', MobileNav);
app.component('AuthLayout', AuthLayout);
app.mount('#app')

