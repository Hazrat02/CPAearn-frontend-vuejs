import Background from './components/others/Bg.vue'
import MobileNav from './components/others/MobileNav.vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from 'vue3-particles'
// import Vue3Notification from '@kyvg/vue3-notification'
import Notifications from '@kyvg/vue3-notification'
// import { notify } from 'vue3-notify'
// import Toast from 'vue-toastification'
// import snotify from 'vue3-snotify';
import 'vue3-snotify/style';
// const b = require('vue3-snotify');


const app = createApp(App)
// app.use(b);
app.use(router);

app.use(Notifications);
app.use(Particles);
// app.use(Toast)

// app.use(notify);
app.component('Bg', Background);
app.component('MobileNav', MobileNav);
app.mount('#app')

