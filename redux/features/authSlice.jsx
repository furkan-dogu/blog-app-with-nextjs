import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: false,
    user: "",
    token: "",
    image: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.loading = true
            state.error = false
        },
        fetchFail: (state) => {
            state.loading = false
            state.error = true
        },
        loginSuccess: (state, { payload }) => {
            state.loading = false
            state.error = false
            state.user = payload.user.username
            state.image = payload.user.image
            state.token = payload.token
        },
        registerSuccess: (state, { payload }) => {
            state.loading = false
            state.error = false
            state.user = payload.data.username
            state.image = payload.data.image
            state.token = payload.token
        },
        logoutSuccess: (state) => {
            state.loading = false
            state.error = false
            state.user = ""
            state.token = ""
            state.image = ""
        }
    }
})

export const {
    fetchStart,
    fetchFail,
    loginSuccess,
    registerSuccess,
    logoutSuccess
} = authSlice.actions

export default authSlice.reducer