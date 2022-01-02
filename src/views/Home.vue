<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.jpg">
    <MainBlock msg="Добро пожаловать на сайт SeverFans"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainBlock from '@/components/MainBlock'

export default {
  name: 'Home',
  components: {
    MainBlock
  }
}
</script>
