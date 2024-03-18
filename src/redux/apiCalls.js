

import axios from "axios"
import { LoginFailure, LoginStart, LoginSuccess } from "./authSlice";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
// login api calling .
export const loginApi = async (dispatch, user) => {
    dispatch(LoginStart());
    try {
        const res = await axios.post("/auth/login", user);
        dispatch(LoginSuccess(res.data))
        console.log(res.data)
        localStorage.setItem("auth", res?.data?.others?._id)
        if (res.data.success) {
            message.success(res.data.message);
            window.location.replace("/");
            
        }else{
            message.error(res.data.message);

        }

    } catch (err) {
        dispatch(LoginFailure())
        console.log(err)
        if (err) {
            message.error("something went wrong !")
        }
    }
}

// Register api calling 
export const RegisterApi = async (dispatch, user) => {

    try {
        const res = await axios.post("/auth/register", user);
        if (res.data) {
            message.success("Registration successfully ")
        }


    } catch (err) {
        if (err) {
            message.error("something went wrong !")
        }

    }
}


export const userRequest = axios.create({
    baseURL: "/"
});