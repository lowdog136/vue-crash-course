<template>
  <div class="app">
    <PictureInTopAll />
    <div class="my-blockqoute">
      <h5>Cтраница о истории сайта severfans.ru </h5>
      Сайт был основан в 2007 году. <br>
      Точную дату не вспомнить, но судя по Wayback Machine  - 25 мая.
      Наверно эта дата и будет считаться датой начала. Хотя по факту все начиналось раньше.<br>
      Как клуб, объединение болельщиков (хулсы, ультрас) - этот сайт имеет свою историю. <br>
      О ней и будет ниже.
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PictureInTopAll from '@/components/PictureInTopAll'

export default {
  name: 'Home',
  components: {
    PictureInTopAll
  }
}
</script>

<style scoped>
.my-blockqoute {
  margin: 20px 0;
  padding-left: 1.5rem;
  border-left: 5px solid #8a0000;
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;
}
</style>
