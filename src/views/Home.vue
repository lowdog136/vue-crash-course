<template>
  <div class="home">
    <PictureInTopAll />
    <MainBlock msg="Добро пожаловать на сайт SeverFans"/>
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
