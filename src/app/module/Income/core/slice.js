import { createSlice } from "@reduxjs/toolkit";

const initIncome = {
  category: "",
  amount: 0,
  date: "",
};

const initialState = {
  income: [],
  incomeInfo: initIncome,
};

const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    setIncome: (state, action) => {
      state.income = action.payload;
    },
    setIncomeInfo: (state, action) => {
      const data = action.payload;
      state.incomeInfo[data.name] = data.value;
    },
    resetIncomeInfo: (state) => {
      state.incomeInfo = initIncome;
    },
  },
});

export const { setIncome, setIncomeInfo, resetIncomeInfo } =
  incomeSlice.actions;

export default incomeSlice.reducer;
