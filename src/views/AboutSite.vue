<template>
  <div class="app">
    <PictureInTopAll />
    <h5>Cтраница о истории сайта severfans.ru </h5>
    <div id="content" style="text-align: left">
      Сайт был основан в 2007 году. Точную дату не вспомнить, но судя по Wayback Machine  - 25 мая.
      Наверно эта дата и будет считаться датой начала. Хотя по факту все начиналось раньше.<br>
      Как клуб, объединение болельщиков (хулсы, ультрас) - этот сайт имеет свою историю.<br>
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

<style>
#content {
  margin-left: auto;
  margin-right: auto;
  width: 40em
}
</style>
