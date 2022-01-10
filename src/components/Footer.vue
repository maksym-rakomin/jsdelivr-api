<template>
  <div class="footer glassmorphism-box">
    <v-footer>
      <v-card color="transparent">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="text-h5" v-text="'Maksym Rakomin'" />

            <v-card-subtitle v-text="'Frontend Developer'" />

            <v-card-actions>
              <v-btn
                v-for="item in socialLinks"
                :key="item.id"
                :href="item.link"
                target="_blank"
                class="mx-2"
                fab
                small
                color="grey lighten-5"
              >
                <v-icon dark> {{ item.icon }} </v-icon>
              </v-btn>
            </v-card-actions>
          </div>

          <v-avatar class="ma-3" size="125" tile>
            <v-img :src="require('@/assets/images/photo.jpeg')" />
          </v-avatar>
        </div>
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
}
</script>

<style lang="scss">
.footer {
  .theme--light.v-image {
    border-radius: 10px;
  }
}
</style>
