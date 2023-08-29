import axios from "axios";

const API_URL = "http://localhost:5000/api/student/";
const API_CITIES = "http://localhost:5000/api/student/cities/";

const DataClient = {
  async getAllData(filter = "", sortByParam = "", sortAsc = true) {
    const response = await axios.get(API_URL, {
      params: {
        sortByParam,
        sortAsc,
        filter
      }
    });
    return response.data;
  },
  async getAllCities() {
    const response = await axios.get(API_CITIES);
    return response.data;
  },
  async deleteStudent(ID) {
    const response = await axios.delete(API_URL + ID);
    return response.data;
  },
  async deleteCity(ID) {
    const response = await axios.delete(API_CITIES + ID);
    return response.data;
  },
  async postStudent(studentData) {
    const response = await axios.post(API_URL, studentData);
    return response.data;
  },
  async postCity(City) {
    const response = await axios.post(API_CITIES, City);
    return response.data;
  },
  async updateStudentData(studentData) {
    const response = await axios.put(API_URL, studentData);
    return response.data;
  },
  async updateCityData(city) {
    const response = await axios.put(API_CITIES, city);
    return response.data;
  }
};

export default DataClient;
