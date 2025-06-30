import dotenv from "dotenv";
dotenv.config();
import axios from "axios";

console.log(
  "API URL:",
  process.env.REACT_APP_API_URL || "http://localhost:5000"
);
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000",
  withCredentials: true,
});

export const fetchUser = () => api.get("/auth/user");
export const loginGoogle = () =>
  (window.location = `${api.defaults.baseURL}/auth/google`);
export const logout = () => api.get("/auth/logout");
export const getVendors = () => api.get("/vendors");

export const createVendor = (data) => api.post("/vendors", data);
export const updateVendor = (id, data) => api.put(`/vendors/${id}`, data);
export const deleteVendor = (id) => api.delete(`/vendors/${id}`);

export default api;
