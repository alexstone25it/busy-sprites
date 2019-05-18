import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://busy-sprites.firebaseio.com/",
  timeout: 3000
});

export default axiosInstance;
