import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: false,
    blogs: []
}

const blogSlice = createSlice({
    name: "blog",
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
        getBlogsSuccess: (state, {payload}) => {
            state.loading = false
            state.error = false
            state.blogs = payload.data
        }
    }
})

export const {
    fetchStart,
    fetchFail,
    getBlogsSuccess
} = blogSlice.actions

export default blogSlice.reducer