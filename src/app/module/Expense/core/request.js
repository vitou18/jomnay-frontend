import axios from "axios";

export const reqGetExpense = () => axios.get("/expense");

export const reqCreateExpense = (payload) =>
  axios.post("/expense/add", payload);

export const reqDeleteExpense = (id) => axios.delete(`/expense/delete/${id}`);
