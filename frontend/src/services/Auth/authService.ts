import api from "../../constants/api";
import type { Login, RegisterType } from "../../types";

export const loginUser = async (data: Login) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};

export const registerUser = async (data: RegisterType) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};
