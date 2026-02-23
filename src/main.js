// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Bootstrap Icons (if you're using bi-* icons)
import 'bootstrap-icons/font/bootstrap-icons.css'

// Bootstrap JS (for dropdowns, modals, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)
app.use(router)
app.mount('#app')