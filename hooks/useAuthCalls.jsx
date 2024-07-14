import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "@/redux/features/authSlice";
import { toastErrorNotify, toastSuccessNotify } from "@/helpers/ToastNotify";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { axiosPublic, axiosWithToken } = useAxios();

  const login = async (info, fromEdit = false) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/auth/login", info);
      dispatch(loginSuccess(data));
      if (!fromEdit) {
          router.back();
          toastSuccessNotify("The login process is successful.");
      }
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify("The login process failed.");
    }
  };

  const register = async (info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/users", info);
      dispatch(registerSuccess(data));
      toastSuccessNotify("The register process is successful.");
      router.push("/");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(
        `The register process failed. ${error.response.data.message}`
      );
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.get("auth/logout");
      dispatch(logoutSuccess());
      toastSuccessNotify("The logout process is successful.");
      router.push("/");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify("The logout process failed.");
    }
  };

  const updateUser = async (info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`users/${info._id}`, info);
      login(info, true); 
      toastSuccessNotify("Changing user information is successful.");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify("Changing user information failed.");
    }
  };

  return { login, register, logout, updateUser };
};

export default useAuthCalls;
