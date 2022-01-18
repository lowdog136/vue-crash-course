<template>
  <div id="nav">
    <router-link to="/">Главная</router-link> |
    <router-link to="/FCSever">ФК Север</router-link> |
    <router-link to="/Archive">Архив</router-link> |
    <router-link to="/Contacts">Контакты</router-link> |
    <router-link to="/AboutSite">О сайте</router-link>
  </div>
  <div class="content">
    <router-view/>
  </div>
  <div class="footer">
    <Footer msg="Создан в 2007" />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  components: {
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #261818;
}

#nav {
  padding: 30px;
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
