<template>
  <div id="nav">
    <router-link to="/">Главная</router-link> |
    <router-link to="/AboutClub">О клубе</router-link> |
    <router-link to="/AboutFans">О фанатах</router-link> |
    <router-link to="/AboutSite">О сайте</router-link> |
    <router-link to="/Foto">Фото</router-link> |
    <router-link to="/Video">Видео</router-link> |
    <router-link to="/Contacts">Контакты</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
