import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: false,
    blogs: [],
    singleBlog: [],
    current: null,
    totalPages: null,
    categories: [],
    myBlogs: []
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
            state.current = payload.details.pages.current
            state.totalPages = payload.details.pages.total
        },
        getSingleBlogSuccess: (state, {payload}) => {
            state.loading = false
            state.error = false
            state.singleBlog = payload.data
        },
        getCategoriesSuccess: (state, {payload}) => {
            state.loading = false
            state.error = false
            state.categories = payload.data
        },
        getMyBlogsSuccess: (state, {payload}) => {
            state.loading = false
            state.error = false
            state.myBlogs = payload.data
        }
    }
})

export const {
    fetchStart,
    fetchFail,
    getBlogsSuccess,
    getSingleBlogSuccess,
    getCategoriesSuccess,
    getMyBlogsSuccess
} = blogSlice.actions

export default blogSlice.reducer