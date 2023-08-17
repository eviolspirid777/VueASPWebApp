import axios from "axios";

const API_URL = "http://localhost:5000/api/student/";

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
  async deleteStudent(ID) {
    const response = await axios.delete(API_URL + ID);
    return response.data;
  },
  async postStudent(studentData) {
    const response = await axios.post(API_URL, studentData);
    return response.data;
  },
  async updateStudentData(studentData) {
    const response = await axios.put(API_URL, studentData);
    return response.data;
  }
};

export default DataClient;
