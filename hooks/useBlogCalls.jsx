import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
import { toastErrorNotify } from "@/helpers/ToastNotify"
import { fetchFail, fetchStart, getBlogsSuccess, getSingleBlogSuccess } from "@/redux/features/blogSlice"

const useBlogCalls = () => {
    const dispatch = useDispatch()
    const { axiosPublic, axiosWithToken } = useAxios()
    
    const getBlogs = async () => {
        dispatch(fetchStart())
        try {
            const { data } = await axiosPublic.get("/blogs")
            dispatch(getBlogsSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
        }
    }

    const getSingleBlog = async (id) => {
        dispatch(fetchStart())
        try {
            const { data } = await axiosWithToken.get(`/blogs/${id}`)
            dispatch(getSingleBlogSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
        }
    }

    const postLike = async (info) => {
        dispatch(fetchStart())
        try {
            await axiosWithToken.post(`/blogs/${info._id}/postLike`)
            getBlogs()
            getSingleBlog(info._id)
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastErrorNotify("Like işlemi başarısız")
        }
    }

    const postComment = async (info) => {
        dispatch(fetchStart())
        try {
            await axiosWithToken.post("/comments", info)
            getSingleBlog(info.blogId)
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastErrorNotify("Comment işlemi başarısız")
        }
    }

    const deleteComment = async (info) => {
        dispatch(fetchStart())
        try {
            await axiosWithToken.delete(`/comments/${info._id}`)
            getSingleBlog(info.blogId)
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastErrorNotify("Comment silme işlemi başarısız")
        }
    }

    return { 
        getBlogs, 
        getSingleBlog, 
        postLike, 
        postComment,
        deleteComment 
    }
}

export default useBlogCalls