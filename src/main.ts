import './assets/main.css'

import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import router from './router'
import { setupDependencies } from './container'

const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin)

setupDependencies(app)

app.mount('#app')
