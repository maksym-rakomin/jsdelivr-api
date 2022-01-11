<template>
  <v-overlay :value="isShowLoader">
    <v-progress-circular indeterminate size="64" />
  </v-overlay>
</template>

<script>
export default {
  props: {
    isShowLoader: {
      type: Boolean,
      default: false,
    },
  },
  name: 'Loader',
}
</script>
