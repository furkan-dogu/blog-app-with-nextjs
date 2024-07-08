import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
import { toastErrorNotify, toastSuccessNotify } from "@/helpers/ToastNotify"
import { fetchFail, fetchStart, getBlogsSuccess } from "@/redux/features/blogSlice"

const useBlogCalls = () => {
    const dispatch = useDispatch()
    const router = useRouter()
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

    return { getBlogs }
}

export default useBlogCalls