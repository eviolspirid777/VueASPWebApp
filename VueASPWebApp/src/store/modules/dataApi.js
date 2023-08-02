import axios from "axios";

const API_URL = "http://localhost:5000/api/department/";

const DataClient = {
  async getAllData() {
    return await axios.get(API_URL).then(response => response.data);
  },
  async deleteStudent(ID) {
    return axios.delete(API_URL + ID).then(response => response.data);
  },
  async postStudent(studentData) {
    return axios.post(API_URL, studentData).then(response => response.data);
  },
  async updateStudentData(studentData) {
    return axios.put(API_URL, studentData).then(response => response.data);
  }
};

export default DataClient;
