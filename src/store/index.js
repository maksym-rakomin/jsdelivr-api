import Vue from 'vue'
import Vuex from 'vuex'

import packagesApi from '@/api/packages'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packagesList: [],
    searchText: '',
    currentPage: 1,
    perPage: 10,
    totalPackages: 0,
    isLoading: false,
  },
  getters: {
    getPackagesList: state => state.packagesList,
    getSearchText: state => state.searchText,
    getPagination: ({ currentPage, perPage, totalPackages }) => ({
      currentPage,
      perPage,
      totalPage: Math.floor(totalPackages / perPage),
    }),
    getIsLoading: state => state.isLoading,
  },
  mutations: {
    setPackagesList(state, payload) {
      state.packagesList = payload
    },
    setSearchText(state, payload) {
      state.searchText = payload
    },
    setTotalPackages(state, payload) {
      state.totalPackages = payload
    },
    setCurrentPage(state, payload) {
      state.currentPage = payload
    },
    setloading(state, payload) {
      state.isLoading = payload
    },
  },
  actions: {
    fetchPackagesList({ commit, state }) {
      const requestData = {
        from: state.currentPage * state.perPage,
        size: state.perPage,
        text: state.searchText,
      }

      commit('setloading', true)

      packagesApi
        .get(requestData)
        .then(response => {
          commit('setPackagesList', response?.data?.objects ?? [])
          commit('setTotalPackages', response?.data?.total ?? 0)
        })
        .catch(error => console.error(error.message))
        .finally(() => commit('setloading', false))
    },
  },
})
