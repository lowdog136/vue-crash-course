<template>
  <div class="app">
    <PictureInTopAll />
    <carousel />

  </div>
</template>

<script>
// @ is an alias to /src
import PictureInTopAll from '@/components/PictureInTopAll'
import carousel from '../components/carousel.vue'

export default {
  name: 'Home',
  components: {
    PictureInTopAll, carousel
  }
}
</script>

<style>
#content {
  margin-left: auto;
  margin-right: auto;
  width: 40em
}
</style>