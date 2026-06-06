import axios from "axios";

const api = axios.create({
  baseURL: "https://didactic-spork-6p4wg94g9wjh4j5p-8000.app.github.dev/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("token");

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;