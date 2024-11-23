import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:1080/api",
  withCredentials: true, // sending cookies with request
});
