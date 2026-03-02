const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  lintOnSave: false,

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/_variables.scss";`,
      },
    },
  },

  publicPath: '/jsdelivr-api/',
})
