import { createSlice } from "@reduxjs/toolkit";

const initUser = {
  email: "mengvuthvitou18@gmail.com",
  password: "18#2025Lt",
};

const createUser = {
  fullName: "",
  email: "",
  password: "",
};

const initialState = {
  login: initUser,
  profile: JSON.parse(localStorage.getItem("user") ?? "{}"),
  accessToken: localStorage.getItem("access_token"),
  register: createUser,
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

    setRegister: (state, action) => {
      const data = action.payload;

      state.register[data.name] = data.value;
    },
  },
});

export const { setAccessToken, setProfile, setLogin, setLogout, setRegister } =
  authSlice.actions;

export default authSlice.reducer;
