import tailwindTypography from '@tailwindcss/typography'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  googleAnalytics: {
    id: 'UA-84608330-1'
  },
  loading: {
    color: 'black',
    height: '2px'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Santosh Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Santoshanand blog help developer to learn new technologies like Golang, Angular, gRPC, AWS, React.js, Vue.js etc' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    //https://google-analytics.nuxtjs.org/setup/
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Santosh Blog',
      lang: 'en'
    },
    meta: {
      name: "Santosh Blog",
    },
    icon: {
      fileName: "icon.png",
      source: '~/static/icon.png',
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography]
    }
  }
}
