<template>
  <div class="pagination glassmorphism-box">
    <v-pagination :value="4" :length="15" @input="handleSetPage" />
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  methods: {
    handleSetPage(page) {
      this.$emit('change-page', { page })
    },
  },
}
</script>

<style lang="scss">
.pagination {
  padding: 16px;
  margin-bottom: 32px;
}
</style>
