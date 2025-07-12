import api from "../../constants/api";
import type { Login } from "../../types";

export const loginUser = async (data: Login) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};
