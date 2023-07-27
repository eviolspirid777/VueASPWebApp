import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import { API_URL } from "./modules/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    students: []
  },
  mutations: {
    addStudent(state, studentData) {
      state.students.push(studentData);
    },
    setStudents(state, students) {
      state.students = students;
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
        commit("setStudents", students);
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
    }
  },
  getters: {
    getAllStudents: state => state.students
  }
});