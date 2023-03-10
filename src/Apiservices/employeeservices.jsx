import axios from "axios";
import employeelist from "./employeelist";

const apiFavs = "http://localhost:8080/Api/employees";

const favoriteServices = {
  getAll() {
    return fetch(apiFavs)
      .then((res) => res.json())
      .then((data) => data);
  },
  getById(id) {
    return axios.get(apiFavs + `/${id}`).then((res) => res.data);
  },
};

export default employeelist;
