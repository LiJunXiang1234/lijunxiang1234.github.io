// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/']
    }
  },
  app: {
    head: {
      title: '李俊祥 - 前端开发工程师',
      meta: [
        {
          name: 'description',
          content: '李俊祥的个人主页与前端开发求职作品集。'
        }
      ]
    }
  }
})
