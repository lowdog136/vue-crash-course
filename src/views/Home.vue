<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.jpg">
    <MainBlock msg="Добро пожаловать на сайт SeverFans"/>
  </div>;
  <div id="footer">
    <Footer msg="Создан в 2007" />
  </div>
</template>

<script>
// @ is an alias to /src
import MainBlock from '@/components/MainBlock'
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: {
    MainBlock, Footer
  }
}
</script>
