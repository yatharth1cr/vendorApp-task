import axios from "axios";

console.log(
  "API URL:",
  import.meta.env.VITE_API_URL || "https://vendorapp-task.onrender.com"
);
const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL || "https://vendorapp-task.onrender.com",
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
