import DataClient from "../api/dataApi";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    students: [],
    cities: [],
    studName: "",
    sortName: "",
    sortAsc: true
  },
  mutations: {
    addStudent(state, studentData) {
      state.students.push(studentData);
    },
    addCity(state, City) {
      state.cities.push(City);
    },
    setStudents(state, students) {
      state.students = students;
    },
    setCities(state, cities) {
      state.cities = cities;
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
    async addStudent({ dispatch }, studentData) {
      await DataClient.postStudent(studentData);
      await dispatch("refreshStudents");
    },
    async addCity({ dispatch }, city) {
      await DataClient.postCity(city);
      await dispatch("refreshStudents");
    },
    async refreshStudents({ commit }) {
      const students = await DataClient.getAllData();
      commit("setStudents", students);
      return students;
    },
    async refreshCities({ commit }) {
      const cities = await DataClient.getAllCities();
      commit("setCities", cities);
      return cities;
    },
    async deleteStudent({ dispatch }, ID) {
      await DataClient.deleteStudent(ID);
      dispatch("refreshStudents");
    },
    async deleteCity(state, ID) {
      await DataClient.deleteCity(ID);
      state.dispatch("refreshCities");
    },
    async updateStudent(state, studentData) {
      await DataClient.updateStudentData(studentData);
      return;
    },
    async updateCity(state, city) {
      await DataClient.updateCityData(city);
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
    allCities: state => state.cities,
    allStudents: state => state.students,
    sortProperty: state => state.sortProperty,
    sortAsc: state => state.sortAsc
  }
});