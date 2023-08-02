import DataClient from "./modules/dataApi";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    students: [],
    studentsWithoutFilter: [],
    studName: "",
    sortProperty: "",
    sortAsc: ""
  },
  mutations: {
    addStudent(state, studentData) {
      state.students.push(studentData);
    },
    setStudents(state, students) {
      state.students = students;
    },
    setStudentsWithoutFilter(state, studData) {
      state.studentsWithoutFilter = studData;
    },
    setSort(state, { prop, asc }) {
      state.sortProperty = prop;
      state.sortAsc = asc;
    },
    setFilt(state, studName) {
      state.studName = studName;
    }
  },
  actions: {
    async addStudent({ commit }, studentData) {
      commit("addStudent", studentData);
      DataClient.postStudent(studentData);
    },
    async fetchStudents({ commit }) {
      const students = await DataClient.getAllData();
      const studentsWithoutFilter = await DataClient.getAllData();
      commit("setStudents", students);
      commit("setStudentsWithoutFilter", studentsWithoutFilter);
      return students;
    },
    async deleteStudent({ commit }, ID) {
      await DataClient.deleteStudent(ID);
      commit("fetchStudents");
    },
    async updateStudent({ commit }, studentData) {
      DataClient.updateStudentData(studentData);
      commit("fetchStudents");
      return;
    },
    async sortStudents({ commit }, { prop, asc }) { //исправленная функция
      let studentsTemp = await DataClient.getAllData();
      const stud = studentsTemp.sort(function(a, b) {
        if (asc) {
          return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
        }
        else {
          return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
        }
      });
      commit("setStudents", stud);
    },
    async filterStudents(ctx, nameFilt) {
      ctx.commit("setFilt", nameFilt); //присваиваем и nameFilt
      let StudentsWithoutFilter = await DataClient.getAllData();
      let studs = StudentsWithoutFilter.filter(
        function(el) {
          return el.Name.toString().toLowerCase().includes(
            nameFilt.toString().trim().toLowerCase()
          );
        });
      ctx.commit("setStudents", studs);
    }
  },
  getters: {
    getAllStudents: state => state.students,
    getSortProperty: state => state.sortProperty,
    getSortAsc: state => state.sortAsc
  }
});