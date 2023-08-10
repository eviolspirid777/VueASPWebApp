import Student from "./Student.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/Student", component: Student }
];

const routers = new VueRouter({
  mode: "history",
  routes: routes
});

export default routers;