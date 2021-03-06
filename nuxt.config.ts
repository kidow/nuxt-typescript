import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: ['element-ui/lib/theme-chalk/index.css'],
  plugins: ['@/plugins/element-ui.ts', '@/plugins/axios.ts'],
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  axios: {},
  build: {
    transpile: [/^element-ui/],
    extend() {}
  }
}

export default config
