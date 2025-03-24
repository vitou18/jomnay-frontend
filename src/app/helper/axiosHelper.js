import axios from "axios";

export const setUpAxios = () => {
  axios.defaults.baseURL = "http://localhost:8000/api/v1/";

  axios.interceptors.request.use(function (config) {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  }),
    function (error) {
      return Promise.reject(error);
    };
};
