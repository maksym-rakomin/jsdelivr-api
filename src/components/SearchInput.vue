<template>
  <div class="search-input glassmorphism-box">
    <v-text-field
      v-model="searchLocal"
      label="Search..."
      hide-details="auto"
      variant="underlined"
      @update:model-value="handleSearchInput"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  search: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['search-input'])

const searchLocal = ref('')

watch(
  () => props.search,
  val => {
    searchLocal.value = val
  },
  { immediate: true },
)

const handleSearchInput = () => {
  emit('search-input', { search: searchLocal.value })
}
</script>

<style lang="scss">
.search-input {
  padding: 16px;
  margin-bottom: 32px;
}
</style>
