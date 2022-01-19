<template>
  <div class="footer">
    <h4>{{ msg }}</h4>
    <h8>{{date}}</h8>
  </div>
</template>

<!-- Настройка времени переменная Date -->
<script>
export default {
  data: () => ({
    date: new Date()
  }),
  name: 'footer_word',
  props: {
    msg: String
  },
  mounted () {
    setInterval(() => {
      this.date = new Date()
    }, 1000)
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
