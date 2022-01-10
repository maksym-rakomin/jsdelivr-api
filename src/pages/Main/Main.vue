<template>
  <div class="page main">
    <v-container>
      <SearchInput @search-input="handleSearchInput" />

      <Footer />
    </v-container>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import SearchInput from '@/components/SearchInput'
export default {
  name: 'Main',
  components: { SearchInput, Footer },
  data: () => ({
    value: 'test',
  }),
  methods: {
    handleSearchInput({ search }) {
      console.log(search)
    },
  },
}
</script>

<style lang="scss">
.main {
  .container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
}
</style>
