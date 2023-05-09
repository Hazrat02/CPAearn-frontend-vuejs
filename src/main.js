import Background from './components/others/Bg.vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from 'vue3-particles'
// import Vue3Notification from '@kyvg/vue3-notification'
import Notifications from '@kyvg/vue3-notification'
// import { notify } from 'vue3-notify'
// import Toast from 'vue-toastification'



const app = createApp(App)

app.use(router);

app.use(Notifications);
app.use(Particles);
// app.use(Toast)

// app.use(notify);
app.component('Bg', Background);
app.mount('#app')

