<template>
  <div class="home">
    <PictureInTopAll />
    <MainBlock msg="Добро пожаловать на сайт SeverFans"/>
  </div>
<!--  Текст подвала править тут-->
  <div id="footer">
    <Footer msg="Создан в 2007" />
  </div>
</template>

<script>
// @ is an alias to /src
import MainBlock from '@/components/MainBlock'
import Footer from '@/components/Footer'
import PictureInTopAll from '@/components/PictureInTopAll'

export default {
  name: 'Home',
  components: {
    MainBlock, Footer, PictureInTopAll
  }
}
</script>
