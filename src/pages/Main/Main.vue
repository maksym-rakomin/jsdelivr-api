<template>
  <div class="page main">
    <v-container>
      <div class="main__item">
        <SearchInput :search="searchText" @search-input="handleSearchInput" />

        <v-fade-transition>
          <Table
            v-show="isShowTable"
            :itemList="packagesList"
            @set-current-item="handleSetCurrentItem"
          />
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

      <ShowDetailPackage
        :dialog-data="currentItem"
        @close-dialog="handleSetCurrentItem"
      />
    </v-container>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { debounce } from '@/core/helpers'
import Footer from '@/components/Footer.vue'
import Loader from '@/components/Loader.vue'
import Pagination from '@/components/Pagination.vue'
import SearchInput from '@/components/SearchInput.vue'
import ShowDetailPackage from '@/components/dialogs/showDialogsPackage/ShowDetailPackage.vue'
import Table from '@/components/Table.vue'

const store = useStore()

const currentItem = ref({})

// Vuex Getters
const packagesList = computed(() => store.getters.getPackagesList)
const searchText = computed(() => store.getters.getSearchText)
const pagination = computed(() => store.getters.getPagination)
const isLoading = computed(() => store.getters.getIsLoading)

const actualSearchText = computed({
  get: () => searchText.value,
  set: val => store.commit('setSearchText', val),
})

const isShowTable = computed(() => packagesList.value.length > 0)
const isShowPagination = computed(
  () =>
    isShowTable.value &&
    pagination.value.totalPage * pagination.value.perPage >
      pagination.value.perPage,
)

// Vuex Actions & Mutations
const fetchPackagesList = () => store.dispatch('fetchPackagesList')
const setCurrentPage = page => store.commit('setCurrentPage', page)

const fetchPackages = debounce(fetchPackagesList, 700)

const handleSearchInput = ({ search }) => {
  actualSearchText.value = search

  if (pagination.value.currentPage !== 1) {
    setCurrentPage(1)
  }
  fetchPackages()
}

const handleChangePage = ({ page }) => {
  setCurrentPage(page)
  fetchPackages()
}

const handleSetCurrentItem = item => {
  currentItem.value = item || {}
}

onMounted(() => {
  fetchPackagesList()
})
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
