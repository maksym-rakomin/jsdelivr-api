<template>
  <div class="page main">
    <v-container>
      <div class="main__item">
        <SearchInput @search-input="handleSearchInput" />

        <Table />
      </div>

      <Footer />
    </v-container>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import SearchInput from '@/components/SearchInput'
import Table from '@/components/Table'
export default {
  name: 'Main',
  components: { Table, SearchInput, Footer },
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
