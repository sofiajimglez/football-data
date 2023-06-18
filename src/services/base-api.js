import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL || 'http://localhost:3000/api',
  headers: { 'X-Auth-Token': import.meta.env.VITE_API_AUTH_TOKEN }
});

http.interceptors.response.use(res => res.data);

export default http;