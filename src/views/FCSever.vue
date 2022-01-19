<template>
  <PictureInTopAll />
  <div class="row">
    <div class="col s11 m2">
      <div class="card">
        <div class="card-image">
          <img src="../assets/fcsever_logo.png">
          <span class="card-title">FC Sever</span>
        </div>
        <div class="card-content">
          <p>Информация о клубе.</p>
        </div>
        <div class="card-action">
          <a href="../views/Home.vue">Больше информации</a>
        </div>
      </div>
    </div>
    <div class="col s11 m2">
      <div class="card">
        <div class="card-image">
          <img src="../assets/fcsever_logo.png">
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>Стадион.</p>
        </div>
        <div class="card-action">
          <a href="../views/Home.vue">Больше информации</a>
        </div>
      </div>
    </div>
    <div class="col s11 m2">
      <div class="card">
        <div class="card-image">
          <img src="../assets/images/ssm_logo.jpg">
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>Фанаты</p>
        </div>
        <div class="card-action">
          <a href="../views/Home.vue">Больше информации</a>
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
