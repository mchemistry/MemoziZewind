import { meta } from './config/app.config'

export default {
  server: {
    port: 8000, // default: 3000
    host: '192.168.1.4', // default: localhost
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: `%s | ${meta.title}`,
    title: `${meta.title}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'author', content: `${meta.email}` },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, user-scalable=no',
      },
      {
        hid: 'description',
        name: 'description',
        content: `${meta.description}`,
      },
    ],
    script: [
      {
        src: 'https://unpkg.com/css-doodle@0.8.5/css-doodle.min.js',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/styles/css/main.css', 'aos/dist/aos.css'],
  watch: ['assets'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/vue-scroll.js',
    { src: '~/plugins/text-emoji.js', mode: 'client' },
    { src: '~/plugins/aos.js', mode: 'client' },
    { src: '~/plugins/gallery', mode: 'client' },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  webfontloader: {
    google: {
      families: [
        'Baloo+Tamma+2:wght@400;500;600;700;800&display=swap',
        'Raleway&display=swap',
      ],
    },
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: false,
    },
    treeShake: true,
    theme: {
      dark: true,
      options: {
        customProperties: true,
      },
      themes: {
        dark: {
          primary: '#161122',
          accent: '#212121',
          secondary: '#f0a30e',
          info: '#5081F9',
          warning: '#ECB241',
          error: '#F85940',
          success: '#4BB42E',
          anchor: '#FF7070',
          background: '#212121',
          light: '#c4c4c4',
          none: '#ffff00',
          element: '#f0a30e',
        },
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
    },
  },
}
