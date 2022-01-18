<template>
  <div class="home">
    <PictureInTopAll />
    <h3>Cтраница о истории сайта severfans.ru </h3>
      Сайт был основан в 2007 году. Точную дату не вспомнить, но судя по Wayback Machine  - 25 мая.<br>
      Наверно эта дата и будет считаться датой начала. Хотя по факту все начиналось раньше. <br>
      Как и клуб, как и объединение болельщиков (хулсы, ультрас) сайт имеет свою историю. <br>
      О ней и будет ниже.
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
