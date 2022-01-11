<template>
  <div class="pagination glassmorphism-box">
    <v-pagination
      circle
      :value="currentPage"
      :length="totalPage"
      :total-visible="9"
      @input="handleSetPage"
    />
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Number,
      default: 0,
    },
  },
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
