import DataClient from "../api/dataApi";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    students: [],
    studName: "",
    sortName: "",
    sortAsc: true
  },
  mutations: {
    addStudent(state, studentData) {
      state.students.push(studentData);
    },
    setStudents(state, students) {
      state.students = students;
    },
    setSort(state, { name, asc }) {
      state.sortName = name;
      state.sortAsc = asc;
    },
    setFiltration(state, studName) {
      state.studName = studName;
    }
  },
  actions: {
    async addStudent({ commit }, studentData) {
      commit("addStudent", studentData);
      await DataClient.postStudent(studentData);
    },
    async fetchStudents({ commit }) {
      const students = await DataClient.getAllData();
      commit("setStudents", students);
      return students;
    },
    async deleteStudent({ dispatch }, ID) {
      await DataClient.deleteStudent(ID);
      dispatch("fetchStudents");
    },
    async updateStudent(state, studentData) {
      await DataClient.updateStudentData(studentData);
      return;
    },
    async sortStudents({ commit, state }, { name, asc }) {
      commit("setSort", { name, asc });
      const sortByParam = state.sortName;
      const sortAsc = state.sortAsc;
      const students = await DataClient.getAllData("", sortByParam, sortAsc);
      commit("setStudents", students);
    },
    async filterStudents({ commit, state }, nameFilt) {
      commit("setFiltration", nameFilt);
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