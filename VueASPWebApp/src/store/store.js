import DataClient from "../api/dataApi";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    students: [],
    studName: "",
    sortProperty: "",
    sortProperty2: "",
    sortProperty3: "",
    sortAsc: ""
  },
  mutations: {
    addStudent(state, studentData) {
      state.students.push(studentData);
    },
    setStudents(state, students) {
      state.students = students;
    },
    setSort(state, { prop, prop2, prop3, asc }) {
      state.sortProperty = prop;
      state.sortProperty2 = prop2;
      state.sortProperty3 = prop3;
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
      const students = await DataClient.getAllData(state.studName, state.sortProperty, state.sortProperty2, state.sortProperty3, state.sortAsc || undefined);
      commit("setStudents", students);
      return students;
    },
    async deleteStudent({ dispatch }, ID) {
      await DataClient.deleteStudent(ID);
      dispatch("fetchStudents");
    },
    async updateStudent({ dispatch }, studentData) {
      DataClient.updateStudentData(studentData);
      dispatch("fetchStudents");
      return;
    },
    async sortStudents({ commit, state }, { prop, prop2, prop3, asc }) {
      commit("setSort", { prop, prop2, prop3, asc });
      const sortBy = state.sortProperty;
      const sortBy2 = state.sortProperty2;
      const sortBy3 = state.sortProperty3;
      const sortAsc = state.sortAsc;
      const students = await DataClient.getAllData("", sortBy, sortBy2, sortBy3, sortAsc);
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