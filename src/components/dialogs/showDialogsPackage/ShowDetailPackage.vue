<template>
  <div class="show-detail-package text-center">
    <v-dialog v-model="dialog" :fullscreen="isFullscreenDialog" width="70%">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Detailed information about the {{ getName }} package
        </v-card-title>

        <v-simple-table class="show-detail-package__table">
          <template v-slot:default>
            <tbody>
              <tr v-for="item in getParamsList" :key="item">
                <td class="show-detail-package__td">{{ item }}</td>
                <td class="show-detail-package__td">
                  <ShowDialogsTableCell :data="getValue(item)" />
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="handleCloseDialog"> Ok </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ShowDialogsTableCell from '@/components/dialogs/showDialogsPackage/components/ShowDialogsTableCell'
export default {
  name: 'ShowDetailPackage',
  components: { ShowDialogsTableCell },
  props: {
    dialogData: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    dialog: true,
  }),
  computed: {
    getName() {
      return this.dialogData?.package?.name || ''
    },
    getParamsList() {
      return Object.keys(this.dialogData?.package || {}) || []
    },
    isFullscreenDialog() {
      return this.$vuetify.breakpoint.xs
    },
  },
  watch: {
    dialogData: {
      handler(val) {
        this.dialog = Object.keys(val).length > 0
      },
      immediate: true,
    },
  },
  methods: {
    handleCloseDialog() {
      this.$emit('close-dialog', {})
    },
    getValue(item) {
      return this.dialogData.package[item]
    },
  },
}
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
