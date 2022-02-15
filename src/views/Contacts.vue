<template>
  <div class="app">
    <PictureInTopAll />
    <blockquote > 
      <h5>Cвязаться со мной: </h5>
        Напишите мне на e-mail: lowdog{одинтришесть}@gmail.com <br>
        Я обязательно отвечу.<br>
        Приятного вам дня.
    </blockquote>
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