import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideBarShow: true,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sideBarShow = !state.sideBarShow;
    },
  },
});

export const { toggleSidebar } = layoutSlice.actions;
export default layoutSlice.reducer;
