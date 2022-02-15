<template>
<navbar />
  <div class="content">
    <router-view/>
  </div>
  <div class="footer">
    <Footer msg="Создан в 2007" />
  </div>
</template>

<script>
import Footer from './components/FooterNew.vue'
import navbar from './components/Navbar.vue'

export default {
  components: {
    Footer, navbar
  }
}
</script>

<style>
@import "~materialize-css/dist/css/materialize.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #440202;
}

#nav {
  padding: 30px;
  background-color: aliceblue;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #8d0000;
}

.content {
  min-height: calc(100vh - 150px);
}
</style>