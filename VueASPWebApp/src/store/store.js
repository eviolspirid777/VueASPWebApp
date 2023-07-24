import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    students: [],
  },
  mutations: {
    addStudent(state, studentData) {
      state.students.push(studentData);
    },
    setStudents(state, students) {
      state.students = students;
    },
  },
  actions: {
  async addStudent({ commit }, studentData) {
      commit('addStudent', studentData);
      return axios.post("http://localhost:5000/api/department/", studentData).then((response) => {
        return response.data;
      });
    },
  async fetchStudents({ commit }) {
      return axios.get("http://localhost:5000/api/department/").then((response) => {
        const students = response.data;
        commit('setStudents', students);
        return students;
      });
    },
  async deleteStudent({ commit }, ID) {
      return axios.delete("http://localhost:5000/api/department/" + ID).then((response) => {
        alert(response.data);
        return commit('fetchStudents');
      });
    },
  },
  getters: {
    getAllStudents: state => state.students,
  },
});
