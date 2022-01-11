<template>
  <div class="search-input glassmorphism-box">
    <v-text-field
      v-model="searchLocal"
      label="Search..."
      hide-details="auto"
      @input="handleSearchInput"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    search: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    searchLocal: '',
  }),
  watch: {
    search: {
      handler(val) {
        this.searchLocal = val
      },
      immediate: true,
    },
  },
  methods: {
    handleSearchInput() {
      this.$emit('search-input', { search: this.searchLocal })
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
