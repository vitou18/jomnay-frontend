import { createSlice } from "@reduxjs/toolkit";

const initIncome = {
  category: "",
  amount: 0,
  date: new Date().toISOString().split("T")[0],
};

const initialState = {
  income: [],
  incomeInfo: initIncome,
  incomeDetails: {},
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
    setIncomeDetails: (state, action) => {
      state.incomeDetails = action.payload;
    },
    setIncomeDetailsInfo: (state, action) => {
      const { name, value } = action.payload;
      state.incomeDetails[name] = value;
    },
  },
});

export const {
  setIncome,
  setIncomeInfo,
  resetIncomeInfo,
  setIncomeDetails,
  setIncomeDetailsInfo,
} = incomeSlice.actions;

export default incomeSlice.reducer;
