import axiosInstance from "../API/axiosInstance";

export const registerAPI=async(reqBody)=>{
    return await axiosInstance.post('/api/register',reqBody) 
}

export const loginAPI=async(reqBody)=>{
    return await axiosInstance.post('/api/login',reqBody) 
}