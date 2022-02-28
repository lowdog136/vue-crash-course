<template>
  <div class="app">
    <PictureInTopAll />
    <div class="card-content2">
      <div class="card">
        <div class="card-image">
          <img src="../assets/fcsever_logo.png">
        </div>
        <div class="card-content">
          <p>О клубе</p>
        </div>
        <div class="card-action">
          <router-link to="HistoryClub">Больше информации</router-link>
        </div>
      </div>

      <div class="card">
        <div class="card-image">
          <img src="../assets/fcsever_logo.png">
        </div>
        <div class="card-content">
          <p>Стадион</p>
        </div>
        <div class="card-action">
          <router-link to="Stadium">Больше информации</router-link>
        </div>
      </div>

      <div class="card">
        <div class="card-image">
          <img src="../assets/fcsever_logo.png">
        </div>
        <div class="card-content">
          <p>Фанаты</p>
        </div>
        <div class="card-action">
          <router-link to="AboutFans">Больше информации</router-link>
        </div>
      </div>

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

<style scoped>
.card-content2 {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  min-width: 600px;
  margin-top: 25px;
}
.card {
  max-width: 180px;
  min-width: 180px;
  height: 345px;
  border-radius: 8px;
  transition: all 0.2s;
  cursor: pointer;
}
.card:hover {
  transform: scale(1.1);
}
.card-image {
  max-width: 180px;
  max-height: 180px;
}
.card-action {
  color: #0909cc;
  margin-right: 0px;
}
a {
  color: #1f1c1c;
}
</style>
