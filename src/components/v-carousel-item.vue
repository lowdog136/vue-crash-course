<template>
  <div class="v-carousel-item">
    <img :src=" require('../assets/image/' + item_data.img )">
  </div>
</template>

<script>
export default {
  name: 'v-carousel-item',
  props: {
    item_data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>
