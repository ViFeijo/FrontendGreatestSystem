import axios from "axios";

const api = axios.create({
  baseURL: "http://56.124.126.184:3010",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
