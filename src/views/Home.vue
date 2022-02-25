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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #440202;
}
.home {
  background-color: #ad0000;
  max-width: 1000px;
  max-height: 200px;
  margin: 0 auto;
}
</style>
