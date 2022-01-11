<template>
  <div class="page main">
    <v-container>
      <div class="main__item">
        <SearchInput :search="searchText" @search-input="handleSearchInput" />

        <v-fade-transition>
          <Table v-show="isShowTable" :itemList="packagesList" />
        </v-fade-transition>

        <v-fade-transition>
          <Pagination
            v-show="isShowPagination"
            :currentPage="pagination.currentPage"
            :totalPage="pagination.totalPage"
            @change-page="handleChangePage"
          />
        </v-fade-transition>
      </div>

      <Loader :is-show-loader="isLoading" />

      <Footer />
    </v-container>
  </div>
</template>

<script>
import { debounce } from '@/core/helpers'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import Pagination from '@/components/Pagination'
import SearchInput from '@/components/SearchInput'
import Table from '@/components/Table'
export default {
  name: 'Main',
  components: { Loader, Pagination, Table, SearchInput, Footer },
  data: () => ({
    value: 'test',
  }),
  computed: {
    ...mapGetters({
      packagesList: 'getPackagesList',
      searchText: 'getSearchText',
      pagination: 'getPagination',
      isLoading: 'getIsLoading',
    }),
    actualSearchText: {
      get() {
        return this.searchText
      },
      set(val) {
        this.setSearchText(val)
      },
    },
    isShowTable() {
      return this.packagesList.length > 0
    },
    isShowPagination() {
      console.log()

      return (
        this.isShowTable &&
        this.pagination.totalPage * this.pagination.perPage >
          this.pagination.perPage
      )
    },
  },
  mounted() {
    this.fetchPackagesList()
  },
  methods: {
    ...mapActions({ fetchPackagesList: 'fetchPackagesList' }),
    ...mapMutations({
      setSearchText: 'setSearchText',
      setCurrentPage: 'setCurrentPage',
    }),
    handleSearchInput({ search }) {
      this.actualSearchText = search
      debounce(this.fetchPackagesList, 700)
    },
    handleChangePage({ page }) {
      this.setCurrentPage(page)
      debounce(this.fetchPackagesList, 700)
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
