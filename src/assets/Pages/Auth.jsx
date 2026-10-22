import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

export default function Auth() {
  return (
    <div>
      <div className="bg-[url('https://static.vecteezy.com/system/resources/previews/036/594/463/large_2x/ai-generated-book-store-advertisment-background-with-copy-space-free-photo.jpg')] bg-cover bg-center bg-no-repeate h-152 w-70% pt-6">
        <div className="flex w-100 items-center justify-center p-8 ml-60 bg-emerald-100">
          <form className="w-full max-w-sm">
            <h1 className="mb-2 text-4xl font-bold text-gray-800">Welcome Back</h1>
            <p className="mb-4 ">Login to explore your next favorite book.</p>

            <label className="mb-2 block font-medium ">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="mb-3 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none bg-white focus:border-lime-600 focus:ring-2 focus:ring-lime-100"
            />

            <label className="mb-2 block font-medium ">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="mb-3 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none bg-white focus:border-lime-600 focus:ring-2 focus:ring-lime-100"
            />

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
            <Link>
              <div type="submit" className="mb-3 w-full rounded-lg py-3 font-semibold bg-lime-100 flex justify-center items-center gap-4" > <FcGoogle className='text-2xl'/> Sign in with google </div>
            </Link>
            <button type="submit" className="w-full rounded-lg bg-lime-700 py-3 font-semibold text-white transition hover:bg-lime-800" > Login </button>

            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="/register" className="font-semibold text-lime-700 hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
