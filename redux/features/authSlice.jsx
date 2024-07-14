import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  user: "",
  token: "",
  image: "",
  personalId: "",
  email: "",
  bio: "",
  firstName: "",
  lastName: ""
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
      state.email = payload.user.email;
      state.bio = payload.user.bio;
      state.firstName = payload.user.firstName;
      state.lastName = payload.user.lastName;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.user = payload.data.username;
      state.image = payload.data.image;
      state.token = payload.token;
      state.personalId = payload.data._id;
      state.email = payload.data.email;
      state.bio = payload.data.bio;
      state.firstName = payload.data.firstName;
      state.lastName = payload.data.lastName;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.error = false;
      state.user = "";
      state.token = "";
      state.image = "";
      state.personalId = "";
      state.email = "";
      state.bio = "";
      state.firstName = "";
      state.lastName = "";
    }
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
