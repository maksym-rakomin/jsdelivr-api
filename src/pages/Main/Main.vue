<template>
  <div class="page main">
    <v-container>
      <div class="main__item">
        <SearchInput @search-input="handleSearchInput" />

        <Table />

        <Pagination />
      </div>

      <Footer />
    </v-container>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Pagination from '@/components/Pagination'
import SearchInput from '@/components/SearchInput'
import Table from '@/components/Table'
export default {
  name: 'Main',
  components: { Pagination, Table, SearchInput, Footer },
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
