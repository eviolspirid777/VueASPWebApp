import axios from "axios";

const API_URL = "http://localhost:5000/api/department/";

const DataClient = {
  async getAllData() {
    const response = await axios.get(API_URL);
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
    const response = axios.put(API_URL, studentData);
    return response.data;
  }
};

export default DataClient;