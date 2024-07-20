import axios from "axios";

var axiosInstance = axios.create({});

axiosInstance.defaults.baseURL = "https://fakestoreapi.com/"



axiosInstance.interceptors.request.use(
  function (config) {
    return config;

  },
  function (error) {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  }
);
export default axiosInstance;
