import axios from "axios";

export const reqLogin = (payload) => axios.post("/auth/login", payload);
