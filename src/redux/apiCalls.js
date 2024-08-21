import { useNavigate } from "react-router-dom";
import { publicRequest } from "../requestMethods"
import { loginFailed, loginStart, loginSuccess, logout } from "./userRedux";

export const login = async(dispatch, user)=>{
    dispatch(loginStart())
    try{
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))

    }catch(err){
        dispatch(loginFailed())
    }
}

export const register = async(dispatch, user)=>{

    dispatch(loginStart())
    try{
        const res = await publicRequest.post("/auth/register", user)
        dispatch(loginSuccess(res.data))
        return true;

    }catch(err){
        dispatch(loginFailed())
    }
}


