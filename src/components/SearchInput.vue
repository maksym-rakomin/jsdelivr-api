<template>
  <div class="search-input glassmorphism-box">
    <v-text-field
      v-model="search"
      hide-details="auto"
      @input="handleSearchInput"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data: () => ({
    search: '',
  }),
  methods: {
    handleSearchInput() {
      this.$emit('search-input', { search: this.search })
    },
  },
}
</script>

<style lang="scss">
.search-input {
  padding: 16px;
  margin-bottom: 32px;
}
</style>
