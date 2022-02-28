<template>
  <div class="app">
    <PictureInTopAll />
    <div class="my-blockqoute">
      <h5>О фанатах </h5>
      <img  width="200" height="200" src="../assets/fcsever_logo.png"><br>
      Центральный стадион профсоюзов — главная спортивная арена города Мурманска. Находится в центре города между улицами Челюскинцев, Карла Маркса, Профсоюзов и проспектом Ленина. Вмещает 13 400 зрителей <br>
      <br><br>
      Материал из Википедии — свободной энциклопедии.
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
.my-blockqoute {
  margin: 20px 0;
  padding-left: 1.5rem;
  border-left: 5px solid #8a0000;
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;
}
.img-page {
  max-width: 200px;
  max-height: 100px;
}
</style>
