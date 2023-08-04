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
      const students = await DataClient.getAllData(state.studName, state.sortProperty, state.sortAsc || undefined);
      commit("setStudents", students);
      commit("setStudentsWithoutFilter", students);
      return students;
    },
    async deleteStudent({ commit }, ID) {
      await DataClient.deleteStudent(ID);
      commit("fetchStudents");
    },
    async updateStudent({ dispatch }, studentData) {
      DataClient.updateStudentData(studentData);
      dispatch("fetchStudents");
      return;
    },
    async sortStudents({ commit, state }, { prop, asc }) {
      commit("setSort", { prop, asc });
      const sortBy = state.sortProperty;
      const sortAsc = state.sortAsc;
      const students = await DataClient.getAllData("", sortBy, sortAsc);
      commit("setStudents", students);
    },
    async filterStudents({ commit, state }, nameFilt) {
      commit("setFilt", nameFilt);
      const filter = state.studName;
      const sortBy = state.sortProperty;
      const sortAsc = state.sortAsc;
      const students = await DataClient.getAllData(filter, sortBy, sortAsc);
      commit("setStudents", students);
    }
  },
  getters: {
    getAllStudents: state => state.students,
    getSortProperty: state => state.sortProperty,
    getSortAsc: state => state.sortAsc
  }
});