import { createApp } from '@vue/compat'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)

app.use(VueCookies)
app.config.globalProperties.$cookies.config('1h')

app.use(BootstrapVue)
app.use(router)
app.mount('#app')
