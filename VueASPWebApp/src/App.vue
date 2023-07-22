<template>
  <div id="app" class="container">
    <h3 class="d-flex justify-content-center">
      Vue.js + postgreSQL + Web API
    </h3>
    <h5 class="d-flex justify-content-center">
      Управление студентами
    </h5>
    <nav class="navbar navbar-expand-sm bg-light navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item m-1">
          <router-link class="btn btn-light btn-outline-primary" to="/Home">Домой</router-link>
        </li>
        <li class="nav-item m-1">
          <router-link class="btn btn-light btn-outline-primary" to="/Student">Студенты</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-router@3.5.2/dist/vue-router.min.js"></script>
<script src="home.js"></script>
<script src="student.js"></script>
<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './Home.vue';
import Student from './Student.vue';
Vue.use(VueRouter);
const routes = [
  { path: '/Home', component: Home },
  { path: '/Student', component: Student }
];
const router = new VueRouter({
  mode:'history',
  routes:routes
});
export default {
  name: 'App',
  router: router
};
</script>

<style>
 @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css');
</style>