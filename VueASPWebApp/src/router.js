import Home from "./Home.vue";
import Student from "./Student.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/Home", component: Home },
  { path: "/Student", component: Student }
];

const routers = new VueRouter({
  mode: "history",
  routes: routes
});

export default routers;