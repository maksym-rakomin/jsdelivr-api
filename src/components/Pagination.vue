<template>
  <div class="pagination glassmorphism-box">
    <v-pagination
      rounded="circle"
      :model-value="currentPage"
      :length="totalPage"
      :total-visible="9"
      @update:model-value="handleSetPage"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  currentPage: {
    type: Number,
    default: 1,
  },
  totalPage: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['change-page'])

const handleSetPage = page => {
  emit('change-page', { page })
}
</script>

<style lang="scss">
.pagination {
  padding: 16px;
  margin-bottom: 32px;
}
</style>
