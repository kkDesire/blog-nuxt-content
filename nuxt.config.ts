// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxt/ui", "@nuxt/eslint"],
  eslint: {
    config: {
      stylistic: {
        semi: false,
        indent: 2, // 4 or 'tab',
        quotes: "single"
      }
    }
  }
})