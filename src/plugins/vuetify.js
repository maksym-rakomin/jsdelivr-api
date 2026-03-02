import IconTelegram from '@/components/customIcons/IconTelegram.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    values: {
      telegram: {
        component: IconTelegram,
      },
    },
  },
})
