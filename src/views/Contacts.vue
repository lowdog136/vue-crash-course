<template>
  <div class="app">
    <PictureInTopAll />
    <div class="my-blockqoute">
      <h5>Cвязаться со мной: </h5>
        Напишите мне на e-mail: lowdog{одинтришесть}@gmail.com <br>
        Я обязательно отвечу.<br>
        Приятного вам дня.
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
</style>
