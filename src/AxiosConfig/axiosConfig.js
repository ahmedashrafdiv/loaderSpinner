import axios from "axios";
import { changeLoader } from "../Store/Slices/loader";
import store from "../Store/Store";

const axiosConfig = axios.create({
  baseURL: "https://api.sampleapis.com",
});

axiosConfig.interceptors.request.use(
  (config) => {
    store.dispatch(changeLoader(true));
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosConfig.interceptors.response.use(
  (res) => {
    store.dispatch(changeLoader(false));
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosConfig;
