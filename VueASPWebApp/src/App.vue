<template>
  <div id="app" class="container">
    <h3 class="d-flex justify-content-center">
      Vue.js + postgreSQL + Web API
    </h3>
    <h5 class="d-flex justify-content-center">
      Students Management Portal
    </h5>
    <nav class="navbar navbar-expand-sm bg-light navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item m-1">
          <router-link class="btn btn-light btn-outline-primary" to="/home">Домой</router-link>
        </li>
        <li class="nav-item m-1">
          <router-link class="btn btn-light btn-outline-primary" to="/student">Студенты</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
import routers from './router'; // Импорт роутера из файла router.js

export default {
  name: 'App',
  router: routers // Подключение роутера к компоненту
};
</script>

<style>
 @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css');
</style>