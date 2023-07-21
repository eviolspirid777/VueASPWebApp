import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    students: [],
    ID: 0,
    Name: '',
    Surname: '',
    Patron: '',
    Faculty: '',
    Specialty: '',
    Course: '',
    Group: '',
    City: '',
    PostalCode: '',
    Street: '',
    Phone: '',
    Email: ''
  },
  mutations: {
    addStudent(state, studentData) {
      state.students.push(studentData);
    },
  },
  actions: {
    addStudent({ commit }, studentData) {
      commit('addStudent', studentData);
    },
  },
  getters: {
    getAllStudents: state => state.students,
  },
});