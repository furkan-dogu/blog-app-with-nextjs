import axios from 'axios'
import { useSelector } from 'react-redux'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const useAxios = () => {
    const { token } = useSelector(state => state.auth)

    const axiosPublic = axios.create({
        baseURL: BASE_URL
    })

    const axiosWithToken = axios.create({
        baseURL: BASE_URL,
        headers: { Authorization: `Token ${token}` }
    })

    return { axiosPublic, axiosWithToken }
}

export default useAxios