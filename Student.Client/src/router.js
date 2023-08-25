import Student from "./Student.vue";
import StudentInfo from "./ReadStudentInfo.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routers = new VueRouter({
  mode: "history",
  routes: [
    { name: "Home", path: "/", redirect: "Student" },
    { name: "Student", path: "/Student", component: Student },
    { name: "StudentInfo", path: "/StudentInfo/:studentId", component: StudentInfo }
  ]
});

export default routers;