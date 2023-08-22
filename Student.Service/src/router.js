import Student from "./Student.vue";
import StudentInfo from "./ReadStudentInfo.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { name: "Student", path: "/Student", component: Student },
  { name: "StudentInfo", path: "/StudentInfo/:studentId", component: StudentInfo }
];

const routers = new VueRouter({
  mode: "history",
  routes: routes
});

export default routers;