import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './style.css'
import "preline/preline";

createApp(App).use(router).mount('#app')
