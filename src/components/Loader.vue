<template>
  <v-overlay :model-value="isShowLoader" class="align-center justify-center">
    <v-progress-circular indeterminate size="64" />
  </v-overlay>
</template>

<script setup>
defineProps({
  isShowLoader: {
    type: Boolean,
    default: false,
  },
})
</script>
