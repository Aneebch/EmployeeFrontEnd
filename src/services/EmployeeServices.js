import axios from "axios";

const url = "http://localhost:8080/api/employees";

const employeeServices = {
  getAllEmployee() {
    return axios
      .get(url)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  },

  getEmployeeById() {
    return axios
      .get(url + `/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  },
};

export default employeeServices;
