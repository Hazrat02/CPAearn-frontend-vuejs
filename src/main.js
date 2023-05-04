import Background from './components/others/Bg.vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from "vue3-particles"




const app = createApp(App)

app.use(router)
app.use(Particles);
app.component('Bg', Background);
app.mount('#app')

