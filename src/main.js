import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueYandexMetrika from 'vue-yandex-metrika'

createApp(App).use(router).mount('#app')
createApp(VueYandexMetrika, {
  id: 30739543,
  router: router,
  env: process.env.NODE_ENV
  // other options
})
