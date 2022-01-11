import IconTelegram from '@/components/customIcons/IconTelegram'
import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
    values: {
      telegram: {
        component: IconTelegram,
      },
    },
  },
})
