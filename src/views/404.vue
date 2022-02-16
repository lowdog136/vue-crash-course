<template>
  <div class="app">
    <PictureInTopAll />
    <blockquote >
      <h5>Страница не найдена </h5>
      Введенная вами страница не была найдена.
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
