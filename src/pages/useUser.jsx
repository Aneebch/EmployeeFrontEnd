import { useState } from "react";
import employeeServices from "../services/employeeServices";

const useUser = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const result = await employeeServices.getAllEmployee();
    setUsers(result);
  };

  const deleteUser = async (id) => {
    await employeeServices.deleteEmployee(id);
    loadUsers();
  };

  return [users, deleteUser, loadUsers];
};

export default useUser;