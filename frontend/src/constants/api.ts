import axios from "axios";

export const API_BASE_URL = "http://localhost:3000/api";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
