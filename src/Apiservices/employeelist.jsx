import axios from "axios";

const apiBase = "http://localhost:8080/Api/employees";

const productServices = {
  getAll() {
    return fetch(apiBase)
      .then((res) => res.json())
      .then((data) => data);
  },
  getById(id) {
    return axios.get(apiBase + `/${id}`).then((res) => res.data);
  },
  deleteById(id) {
    return axios
      .delete(apiBase + `/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  },
  create(data) {
    return axios
      .post(apiBase, data)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  },

  editById(id, changes) {
    return axios
      .put(
        `http://localhost:8080/Api/114f073f-1fa1-4289-98a6-f758f76c8bd0${id}`,
        changes
      )
      .then((response) => response.data);
  },
};

export default employeelist;
