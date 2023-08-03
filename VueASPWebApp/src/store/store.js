import DataClient from "../api/dataApi";
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
    async fetchStudents({ commit, state }) {
      const students = await DataClient.getAllData();
      commit("setStudents", students);
      commit("setStudentsWithoutFilter", students);
      if (state.studName !== "") {
        commit("filterStudents", state.studName);
      }
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
    async sortStudents({ commit, state }, { prop, asc }) {
      commit("setSort", prop, asc);
      const studentsTemp = state.studentsWithoutFilter;
      const stud = studentsTemp.sort(function(a, b) {
        if (asc) {
          return a[prop] < b[prop] ? -1 : a[prop] > b[prop] ? 1 : 0;
        }
        else {
          return b[prop] < a[prop] ? -1 : b[prop] > a[prop] ? 1 : 0;
        }
      });
      commit("setStudents", stud);
    },
    async filterStudents({ commit, state }, nameFilt) {
      commit("setFilt", nameFilt);
      const studentsWithoutFilter = state.studentsWithoutFilter;
      const studs = studentsWithoutFilter.filter(el =>
        el.Name.toLowerCase().includes(nameFilt.trim().toLowerCase())
      );
      commit("setStudents", studs);
    }
  },
  getters: {
    getAllStudents: state => state.students,
    getSortProperty: state => state.sortProperty,
    getSortAsc: state => state.sortAsc
  }
});