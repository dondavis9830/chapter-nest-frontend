import axiosInstance from "../API/axiosInstance";

export const registerAPI=async(reqBody)=>{
    return await axiosInstance.post('/api/register',reqBody) 
}

export const loginAPI=async(reqBody)=>{
    return await axiosInstance.post('/api/login',reqBody) 
}

export const getAllBookAPI=async()=>{
    return await axiosInstance.get('/api/getAllBook') 
}

export const getLatestBookAPI=async()=>{
    return await axiosInstance.get('/api/getLatestBook') 
}

export const viewBookDetailsAPI=async(id)=>{
    return await axiosInstance.get(`/api/view/${id}`)
}