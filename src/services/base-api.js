import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL || 'http://localhost:3000/api', // Set the base URL for API requests
  headers: { 'X-Auth-Token': import.meta.env.VITE_API_AUTH_TOKEN } // Set the authentication token header
});

// Add an interceptor to the HTTP client to process the response data
http.interceptors.response.use(res => res.data);

export default http;