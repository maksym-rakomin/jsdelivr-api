module.exports = {
  lintOnSave: false,

  transpileDependencies: ['vuetify'],

  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/assets/styles/_variables.sass"',
      },
    },
  },
}
