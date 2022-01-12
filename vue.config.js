module.exports = {
  lintOnSave: false,

  transpileDependencies: ['vuetify'],

  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/styles/_variables.scss";',
      },
    },
  },

  publicPath: '/jsdelivr-api/',
}
