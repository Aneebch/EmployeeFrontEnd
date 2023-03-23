import axios from "axios";

const baseURL = "http://localhost:8080/api";

const employeeServices = {
  getAllEmployee: async () => {
    const result = await axios.get(`${baseURL}/employees`);
    return result.data;
  },
  getEmployeeById: async (id) => {
    const result = await axios.get(`${baseURL}/employees/${id}`);
    return result.data;
  },
  addEmployee: async (user) => {
    const result = await axios.post(`${baseURL}/employees`, user);
    return result.data;
  },
  updateEmployee: async (id, user) => {
    const result = await axios.put(`${baseURL}/employees/${id}`, user);
    return result.data;
  },
  deleteEmployee: async (id) => {
    await axios.delete(`${baseURL}/employees/${id}`);
  },
};

export default employeeServices;