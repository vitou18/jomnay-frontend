import { createSlice } from "@reduxjs/toolkit";

const initUser = {
  email: "mengvuthvitou18@gmail.com",
  password: "18#2025Lt",
};

const initialState = {
  login: initUser,
  profile: JSON.parse(localStorage.getItem("user") ?? "{}"),
  accessToken: localStorage.getItem("access_token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      localStorage.setItem("access_token", action.payload);
    },

    setProfile: (state, action) => {
      state.profile = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    setLogin: (state, action) => {
      const data = action.payload;

      state.login[data.name] = data.value;
    },

    setLogout: (state) => {
      state.accessToken = null;
      state.profile = {};
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
    },
  },
});

export const { setAccessToken, setProfile, setLogin, setLogout } =
  authSlice.actions;

export default authSlice.reducer;
