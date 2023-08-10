<template>
  <div
    id="app"
    class="container"
  >
    <h3 class="d-flex justify-content-center">
      Vue.js + postgreSQL + Web API
    </h3>
    <h5 class="d-flex justify-content-center">
      Управление студентами
    </h5>
    <Student />
  </div>
</template>

<script>
import Home from "./Home.vue";
import Student from "./Student.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/Home", component: Home },
  { path: "/Student", component: Student }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

export default {
  name: "App",
  components: {
    Student
  },
  router: router
};
</script>

<style>
  @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css');
</style>