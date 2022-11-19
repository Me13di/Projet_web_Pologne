/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import router from './router'
import { createPinia } from "pinia"
const pinia = createPinia()


const app = createApp(App).use(pinia).use(router)

registerPlugins(app)

app.mount('#app')
