import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from '../../Services/APIServices';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

export default function Auth({insideRegister}) {
  console.log(insideRegister);   //value:true -- (props)
  const navigate=useNavigate()
  const [userDetails,setUserDetails]=useState({
    username:'',
    email:'',
    password:''
  })

  
  const handleRegister=async()=>{
    try{
      const res=await registerAPI(userDetails)
      console.log(res);
    }
    catch(err){
      console.log(err);
    }
  }

  const handleLogin=async()=>{
    try{
      const res=await loginAPI(userDetails)
      console.log(res);
      if(res.status==200){
      sessionStorage.setItem('user',JSON.stringify(res.data.existingUser))
      sessionStorage.setItem('userToken',res.data.token)
      }
      navigate('/')
    }
    catch(err){
      console.log(err);
    }
  }
  
  return (
    <div>
      <div className="bg-[url('https://static.vecteezy.com/system/resources/previews/036/594/463/large_2x/ai-generated-book-store-advertisment-background-with-copy-space-free-photo.jpg')] bg-cover bg-center bg-no-repeate h-152 w-70% pt-6">
        <div className="flex w-100 items-center justify-center p-8 ml-60 bg-emerald-100">
          <form className="w-full max-w-sm">
            <h1 className="mb-2 text-4xl font-bold text-gray-800">Welcome Back</h1>
            <p className="mb-4 ">Login to explore your next favorite book.</p>
            {
              insideRegister && 
              <div>
                <label className="mb-2 block font-medium ">UserName</label>
                  <input
              onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})}
              type="text"
              placeholder="Enter your usernmae"
              required
              className="mb-3 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none bg-white focus:border-lime-600 focus:ring-2 focus:ring-lime-100"
            />
              </div>

              

            }

            <label className="mb-2 block font-medium ">Email Address</label>
            <input
              onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}
              type="email"
              placeholder="Enter your email"
              required
              className="mb-3 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none bg-white focus:border-lime-600 focus:ring-2 focus:ring-lime-100"
            />

            <label className="mb-2 block font-medium ">Password</label>
            <input
              onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}
              type="password"
              placeholder="Enter your password"
              required
              className="mb-3 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none bg-white focus:border-lime-600 focus:ring-2 focus:ring-lime-100"
            />

           {
            insideRegister?
            <div>

            <div className="mb-3 flex items-center gap-3">
              <hr className="flex-1 border" />
              <span className="text-sm">OR</span>
              <hr className="flex-1 border" />
            </div>

            <button onClick={handleRegister} type="button" className="w-full rounded-lg bg-lime-700 py-3 font-semibold text-white transition hover:bg-lime-800" > Register </button>

            <p className="mt-6 text-center text-sm text-gray-600">
              You have an account?{' '}
              <Link to={'/login'} className="font-semibold text-lime-700 hover:underline">
                Login
              </Link>
            </p>
            </div>
            :
            <div>
               <div className="mb-3 flex justify-end">
              <a href="/forgot-password" className="text-sm text-lime-700 hover:underline">
                Forgot password?
              </a>
            </div>

            <div className="mb-3 flex items-center gap-3">
              <hr className="flex-1 border" />
              <span className="text-sm">OR</span>
              <hr className="flex-1 border" />
            </div>

           <div className='my-2'>
             <GoogleLogin
               onSuccess={credentialResponse => {
                 console.log(credentialResponse);
                 let decode=jwtDecode(credentialResponse.credential)
                 console.log(decode);
               }}
               onError={() => {
                 console.log('Login Failed');
               }}
             />
           </div>

            <button onClick={handleLogin} type="button" className="w-full rounded-lg bg-lime-700 py-3 font-semibold text-white transition hover:bg-lime-800" > Login </button>

            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to={'/register'} className="font-semibold text-lime-700 hover:underline">
                Register
              </Link>
            </p>
            </div>
           }
          </form>
        </div>
      </div>
    </div>
  )
}
