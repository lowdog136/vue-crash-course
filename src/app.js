import Vue from 'vue'
import VueSilentbox from ‘vue-silentbox’

Vue.use(VueSilentbox)

const app = new Vue({
  el: ‘#webapp’,
data: {
  gallery: [
    {
      src: '',
      description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
      alt: 'Blue starry night photo.',
      thumbnailWidth: '220px'
    },
    {
      src: 'images/image003.jpg',
      description: 'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
      alt: 'Low angle photo of pine trees.',
      thumbnailWidth: '220px'
    },
  ]}
})
