<template>
  <div class="hello">
    <h4>{{ msg }}</h4>
    <div class="hello_msg">
    <p class="text-flow">
      Cайт посвящен ФК "Север" г. Мурманск и его фанатам, год основания футбольного клуба 01/03/1961
      </p>
    </div>
  </div>
  <div class="mainimage">
    <img width="800" height="530" src="../assets/images/stad2card.jpg">
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainimage{
  background-color: #ffffff;
  max-width: 1000px;
  max-height: 430px;
  margin: 0 auto;
}
.hello_msg{
  background-color: #ffffff;
  max-width: 1000px;
  margin: 0 auto;
}
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
