<template>
  <div class="home">
    <PictureInTopAll />
    <h3>Фото </h3>
    <ul>
      <li><a href="AboutClub.vue" rel="noopener">О клубе</a></li>
      <li><a href="Stadium.vue" rel="noopener">Стадион</a></li>
      <li><a href="AboutFans.vue" rel="noopener">Фанаты</a></li>
    </ul>
    <h3>Видео</h3>
    <ul>
      <li><a href="AboutClub.vue" rel="noopener">О клубе</a></li>
      <li><a href="Stadium.vue" rel="noopener">Стадион</a></li>
      <li><a href="AboutFans.vue" rel="noopener">Фанаты</a></li>
    </ul>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #650404;
}
</style>
