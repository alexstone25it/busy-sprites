import axios from "axios";

export const axiosBase = axios.create({
  baseURL: "https://busy-sprites.firebaseio.com/",
  timeout: 3000
});
