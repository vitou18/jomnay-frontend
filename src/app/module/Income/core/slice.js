import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  income: [],
};

const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    setIncome: (state, action) => {
      state.income = action.payload;
    },
  },
});

export const { setIncome } = incomeSlice.actions;

export default incomeSlice.reducer;
