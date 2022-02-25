<template>
  <nav>
    <div class="nav-wrapper">
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/FCSever">ФК Север</router-link></li>
        <li><router-link to="/Archive">Архив</router-link></li>
        <li><router-link to="/Contacts">Контакты</router-link></li>
        <li><router-link to="/AboutSite">О сайте</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.nav-wrapper {
background-color: #ad0000;
max-width: 1000px;
margin: 0 auto;
}
</style>
