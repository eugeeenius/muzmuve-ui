export default defineNuxtConfig({
  modules: [
    '@nuxt/devtools',
    '@invictus.codes/nuxt-vuetify'
  ],
  vuetify: {
    moduleOptions: {
      treeshaking: true,
      useIconCDN: false,
    }
  }
})
