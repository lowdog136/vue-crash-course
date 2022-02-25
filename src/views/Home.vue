<template>
  <div class="home">
    <PictureInTopAll />
    <MainBlock msg="Добро пожаловать на сайт SeverFans"/>
    <navbar />
  </div>
</template>

<script>
// @ is an alias to /src
import MainBlock from '@/components/MainBlock'
import PictureInTopAll from '@/components/PictureInTopAll'

export default {
  name: 'Home',
  components: {
    MainBlock, PictureInTopAll
  }
}
</script>
<style>
@import "~materialize-css/dist/css/materialize.css";

.home {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
