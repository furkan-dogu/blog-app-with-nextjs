import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
import { toastErrorNotify } from "@/helpers/ToastNotify"
import { 
    fetchFail, 
    fetchStart, 
    getBlogsSuccess, 
    getSingleBlogSuccess,
    getCategoriesSuccess,
    getMyBlogsSuccess,
    getAllBlogsSuccess
} from "@/redux/features/blogSlice"
import { useRouter } from "next/navigation"

const useBlogCalls = () => {
    const dispatch = useDispatch()
    const { axiosPublic, axiosWithToken } = useAxios()
    const router = useRouter()
    
    const getBlogs = async (page) => {
        dispatch(fetchStart())
        try {
            const { data } = await axiosPublic.get(`/blogs?limit=5&page=${page}`)
            dispatch(getBlogsSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastErrorNotify("Blog data not available")
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
            toastErrorNotify("Blog data not available")
        }
    }

    const postLike = async (info, page) => {
        dispatch(fetchStart())
        try {
            await axiosWithToken.post(`/blogs/${info._id}/postLike`)
            page ? getBlogs(page) : getSingleBlog(info._id)
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastErrorNotify("Like failed")
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
            toastErrorNotify("Comment operation failed")
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
            toastErrorNotify("Comment deletion failed")
        }
    }

    const updateComment = async (info) => {
        dispatch(fetchStart())
        try {
            await axiosWithToken.put(`/comments/${info._id}`, info)
            getSingleBlog(info.blogId)
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastErrorNotify("Comment edit failed")
        }
    }

    const postBlog = async (info, page) => {
        dispatch(fetchStart())
        try {
            await axiosWithToken.post("/blogs", info)
            getBlogs(page)
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastErrorNotify("Blog creation process failed")
        }
    }

    const getCategories = async () => {
        dispatch(fetchStart())
        try {
            const { data } = await axiosWithToken.get("/categories")
            dispatch(getCategoriesSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
        }
    }

    const getMyBlogs = async (userId) => {
        dispatch(fetchStart())
        try {
            const { data } = await axiosWithToken.get(`/blogs?author=${userId}`)
            dispatch(getMyBlogsSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastErrorNotify("The process to pull my blog data failed")
        }
    }

    const deleteBlog = async (id) => {
        dispatch(fetchFail())
        try {
            await axiosWithToken.delete(`/blogs/${id}`)	
            router.push("/my-blogs")
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastErrorNotify("Blog deletion failed")
        }
    }

    const updateBlog = async (info) => {
        dispatch(fetchFail())
        try {
            await axiosWithToken.put(`/blogs/${info._id}`, info)
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastErrorNotify("Blog edit failed")
        }
    }

    const getAllBlog = async () => {
        dispatch(fetchStart())
        try {
            const { data } = await axiosWithToken.get("/blogs?limit=1000")
            dispatch(getAllBlogsSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
        }
    }

    return { 
        getBlogs, 
        getSingleBlog, 
        postLike, 
        postComment,
        deleteComment,
        updateComment,
        postBlog,
        getCategories,
        getMyBlogs,
        deleteBlog,
        updateBlog,
        getAllBlog 
    }
}

export default useBlogCalls