import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  user: "",
  token: "",
  image: "",
  personalId: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.user = payload.user.username;
      state.image = payload.user.image;
      state.token = payload.token;
      state.personalId = payload.user._id;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.user = payload.data.username;
      state.image = payload.data.image;
      state.token = payload.token;
      state.personalId = payload.data._id;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.error = false;
      state.user = "";
      state.token = "";
      state.image = "";
      state.personalId = "";
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
