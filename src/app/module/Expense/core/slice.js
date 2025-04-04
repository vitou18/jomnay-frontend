import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expense: [],
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setExpense: (state, action) => {
      state.expense = action.payload;
    },
  },
});

export const { setExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
