import _ from "lodash";
import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import { API_URL } from "./modules/api";

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
    setSort(state, { prop, asc }) {
      state.sortProperty = prop;
      state.sortAsc = asc;
    },
    setFilter(state, studName) {
      state.studName = studName;
    }
  },
  actions: {
    async addStudent({ commit }, studentData) {
      commit("addStudent", studentData);
      return axios.post(API_URL, studentData).then(response => {
        return response.data;
      });
    },
    async fetchStudents({ commit }) {
      return axios.get(API_URL).then(response => {
        const students = response.data;
        const studentsWithoutFilter = response.data;
        commit("setStudents", students);
        commit("setStudents", studentsWithoutFilter);
        return students;
      });
    },
    async deleteStudent({ commit }, ID) {
      return axios.delete(API_URL + ID).then(response => {
        alert(response.data);
        return commit("fetchStudents");
      });
    },
    async updateStudent({ commit }, studentData) {
      return axios.put(API_URL, studentData).then(response => {
        alert(response.data);
        commit("fetchStudents");
        return response.data;
      });
    },
    async sortStudents({ commit }, { prop, asc }) {
      const response = await axios.get(API_URL);
      const studentsTemp = response.data;
      const sortedStudents = _.orderBy(studentsTemp, [prop], [asc ? "asc" : "desc"]);
      commit("setStudents", sortedStudents);
    },
    async filterStudents(ctx, nameFilt) {
      ctx.commit("setFilter", nameFilt);
      const response = await axios.get(API_URL);
      const students = response.data.filter(function(el) {
        return el.Name.toString().toLowerCase().includes(nameFilt.toString().trim().toLowerCase());
      });
      ctx.commit("setStudents", students);
    }
  },
  getters: {
    getAllStudents: state => state.students,
    getSortProperty: state => state.sortProperty,
    getSortAsc: state => state.sortAsc
  }
});