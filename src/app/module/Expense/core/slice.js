import { createSlice } from "@reduxjs/toolkit";

const initExpense = {
  category: "",
  amount: 0,
  date: "",
};

const initialState = {
  expense: [],
  expenseInfo: initExpense,
  expenseDetails: {},
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setExpense: (state, action) => {
      state.expense = action.payload;
    },
    setExpenseInfo: (state, action) => {
      const data = action.payload;

      state.expenseInfo[data.name] = data.value;
    },
    resetExpenseInfo: (state) => {
      state.expenseInfo = initExpense;
    },
    setExpenseDetails: (state, action) => {
      state.expenseDetails = action.payload;
    },
  },
});

export const {
  setExpense,
  setExpenseInfo,
  resetExpenseInfo,
  setExpenseDetails,
} = expenseSlice.actions;

export default expenseSlice.reducer;
