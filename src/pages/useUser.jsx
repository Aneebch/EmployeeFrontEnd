import axios from "axios";
import { useState } from "react";
import employeeServices from "../services/employeeServices";

const useUser = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const result = await employeeServices.getAllEmployee();
    setUsers(result);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/api/employees/${id}`);
    loadUsers();
  };

  return [users, deleteUser, loadUsers];
};

export default useUser;