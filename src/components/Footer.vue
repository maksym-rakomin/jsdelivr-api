<template>
  <div class="footer glassmorphism-box">
    <v-footer :padless="isExtraSmallScreen">
      <v-card color="transparent" class="w-100" elevation="0">
        <v-row
          no-gutters
          class="d-flex flex-no-wrap justify-space-between w-100"
        >
          <v-col order="2" order-sm="1" cols="12" sm="8">
            <v-card-title class="text-h5">Maksym Rakomin</v-card-title>
            <v-card-subtitle>Frontend Developer</v-card-subtitle>

            <v-card-actions class="flex-wrap footer__card-actions">
              <v-btn
                v-for="item in socialLinks"
                :key="item.id"
                :href="item.link"
                target="_blank"
                class="mx-0"
                icon
                size="small"
                color="grey-lighten-5"
              >
                <v-icon dark>{{ item.icon }}</v-icon>
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
            <v-avatar class="ma-3 flex-wrap" size="125" rounded="0">
              <v-img :src="photo" />
            </v-avatar>
          </v-col>
        </v-row>
      </v-card>
    </v-footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { socialLinks } from '@/constants/socialLinks'
import photo from '@/assets/images/photo.jpeg'

const { xs } = useDisplay()

const isExtraSmallScreen = computed(() => xs.value)
const getAvatarAlignment = computed(() =>
  isExtraSmallScreen.value ? 'justify-start' : 'justify-end',
)
</script>

<style lang="scss">
.footer {
  .v-theme--light.v-img {
    border-radius: 10px;
  }

  &__card-actions {
    gap: 16px;
  }
}
</style>
