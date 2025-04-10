import axios from "axios";

export const reqGetReport = () => axios.get("/report");

export const reqDownloadReport = () =>
  axios.get("/report/download", {
    responseType: "blob",
  });
