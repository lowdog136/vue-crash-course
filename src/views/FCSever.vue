<template>
  <PictureInTopAll />
  <div class="content__fcSever">
      <div class="card">
        <a href="../views/Home.vue">
        <div class="card-image">
          <img src="../assets/fcsever_logo.png">
        </div>
        <div class="card-content">
          <p>Информация о клубе.</p>
        </div>
        <div class="card-action">
          Больше информации
        </div>
    </a>
      </div>

      <div class="card">
        <a href="../views/Home.vue">
        <div class="card-image">
          <img src="../assets/fcsever_logo.png">
        </div>
        <div class="card-content">
          <p>Стадион.</p>
        </div>
        <div class="card-action">
          Больше информации
        </div>
    </a>
      </div>

      <div class="card">
        <a href="../views/Home.vue">
          <div class="card-image">
            <img src="../assets/images/ssm_logo.jpg">
          </div>
          <div class="card-content">
            <p>Фанаты</p>
          </div>
          <div class="card-action">
            Больше информации
          </div>
        </a>
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
  .content__fcSever {
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

</style>
