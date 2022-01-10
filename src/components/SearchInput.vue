<template>
  <div>
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

<style scoped></style>
