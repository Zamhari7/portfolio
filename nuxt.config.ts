export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    // Opsi-opsi Vite disini
    server: {
      fs: {
        allow: ['..'] // Contoh opsi untuk mengizinkan akses ke direktori di atas
      }
    }
  },

  // Global App headers: https://go.nuxtjs.dev/config-head
  app:{
    head: {
      title: 'zamsyafii : Programmer/Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'This is an awesome description of my Nuxt app',
        },
      ],
      link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: "stylesheet", href: "http://fonts.googleapis.com/css2?family=Jost:wght@300;400;600&display=swap"},
    { rel: "stylesheet", href: "/css/style-starter.css"},
  
    ],
    script: [
      { src: "/js/customjs1.js"},
      { src: "/js/theme-change.js"},
      { src: "/js/jquery-3.3.1.min.js"},
      { src: "/js/customjs2.js"},
      { src: "/js/owl.carousel.js"},
      { src: "/js/customjs3.js"},
      { src: "/js/jquery.magnific-popup.min.js"},
      { src: "/js/customjs4.js"},
      { src: "/js/jquery.waypoints.min.js"},
      { src: "/js/jquery.countup.js"},
      { src: "/js/customjs5.js"},
      { src: "/js/bootstrap.min.js"},
  
    ],
    },
  },
  
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: []
})
