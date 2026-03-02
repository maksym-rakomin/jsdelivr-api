<template>
  <div class="show-detail-package text-center">
    <v-dialog v-model="dialog" :fullscreen="isFullscreenDialog" width="70%">
      <v-card>
        <v-card-title class="text-h5 bg-grey-lighten-2">
          Detailed information about the {{ getName }} package
        </v-card-title>

        <v-table class="show-detail-package__table">
          <tbody>
            <tr v-for="item in getParamsList" :key="item">
              <td class="show-detail-package__td">{{ item }}</td>
              <td class="show-detail-package__td">
                <ShowDialogsTableCell :data="getValue(item)" />
              </td>
            </tr>
          </tbody>
        </v-table>

        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" variant="text" @click="handleCloseDialog">
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useDisplay } from 'vuetify'
import ShowDialogsTableCell from '@/components/dialogs/showDialogsPackage/components/ShowDialogsTableCell.vue'

const props = defineProps({
  dialogData: {
    type: Object,
    default: () => ({}),
  },
})

const emit = defineEmits(['close-dialog'])

const { xs } = useDisplay()
const dialog = ref(false)

const getName = computed(() => props.dialogData?.package?.name || '')
const getParamsList = computed(
  () => Object.keys(props.dialogData?.package || {}) || [],
)
const isFullscreenDialog = computed(() => xs.value)

watch(
  () => props.dialogData,
  val => {
    dialog.value = Object.keys(val || {}).length > 0
  },
  { immediate: true },
)

const handleCloseDialog = () => {
  emit('close-dialog', {})
}

const getValue = item => props.dialogData.package[item]
</script>

<style lang="scss">
.show-detail-package {
  &__table {
    padding: 16px;
  }

  &__td {
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid $border-color-dark !important;
    cursor: default;
  }
}
</style>
