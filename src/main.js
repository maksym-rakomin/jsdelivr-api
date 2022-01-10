import App from './App.vue'
import Vue from 'vue'
import store from './store'
import vuetify from './plugins/vuetify'

import '@/assets/styles/main.sass'

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
