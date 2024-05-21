// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-primevue',
  ],
  primevue: {
    /* Options */
  },
  vite: {
    optimizeDeps: {
      include: ['vue'],
    }
  },
})
