import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'

import '@/assets/styles/main.scss'

const app = createApp(App)

app.use(store)
app.use(vuetify)

app.mount('#app')
