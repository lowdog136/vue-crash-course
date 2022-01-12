<template>
  <div class="home">
    <img alt="ssm logo" src="../assets/logo.jpg">
    <h3>Связаться со мной можно через email: <br>
      lowdogодинтришестьсобакагмайлдотком</h3>

  </div>
  <!--  Текст подвала править тут-->
  <div id="footer">
    <Footer msg="Создан в 2007" />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: {
    Footer
  }
}
</script>
