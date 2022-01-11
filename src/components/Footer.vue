<template>
  <div class="footer glassmorphism-box">
    <v-footer :padless="isExtraSmallScreen">
      <v-card color="transparent">
        <v-col class="d-flex flex-no-wrap justify-space-between">
          <v-row no-gutters>
            <v-col order="2" order-sm="1" cols="12" sm="8">
              <v-card-title class="text-h5" v-text="'Maksym Rakomin'" />

              <v-card-subtitle v-text="'Frontend Developer'" />

              <v-card-actions class="flex-wrap footer__card-actions">
                <v-btn
                  v-for="item in socialLinks"
                  :key="item.id"
                  :href="item.link"
                  target="_blank"
                  class="mx-0"
                  fab
                  small
                  color="grey lighten-5"
                >
                  <v-icon dark> {{ item.icon }} </v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>

            <v-col
              order="1"
              order-sm="2"
              :class="['d-flex', getAvatarAlignment]"
              cols="12"
              sm="4"
            >
              <v-avatar class="ma-3 flex-wrap" size="125" tile>
                <v-img :src="require('@/assets/images/photo.jpeg')" />
              </v-avatar>
            </v-col>
          </v-row>
        </v-col>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
import { socialLinks } from '@/constants/socialLinks'

export default {
  name: 'Footer',
  data: () => ({
    socialLinks,
  }),
  computed: {
    isExtraSmallScreen() {
      console.log(this.$vuetify.breakpoint, this.$vuetify.breakpoint.xs)

      return this.$vuetify.breakpoint.xs
    },
    getAvatarAlignment() {
      return this.isExtraSmallScreen ? 'justify-start' : 'justify-end'
    },
  },
}
</script>

<style lang="scss">
.footer {
  .theme--light.v-image {
    border-radius: 10px;
  }

  &__card-actions {
    gap: 16px;
  }
}
</style>
