import React from 'react'
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import './ProfilePage.css'
import Header from '../Components/Header';


export default function ProfilePage() {

  return (
    <div className=''>
          <Header/>

      {/* header part */}
      <div className='linear-gradient-l from:bg- h-35 relative bg-black flex justify-center items-center'>
        <div className='md:w-38 md:h-38 w-30 h-30 rounded-full absolute left-30 md:-bottom-16 shadow-lg bg-amber-700 flex justify-center items-center '>
          <div className='md:w-35 md:h-35 w-28 h-28 bg-white flex justify-center items-center rounded-full overflow-hidden'>
            <img src="https://th.bing.com/th/id/OIP.7rmrXPmCj0PYE-kSH9swIgHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
          </div>
        </div>
      </div>
      <div className='container mx-auto flex justify-end mt-5'>
        <button className='bg-sky-400 px-2 py-1 font-bold rounded-sm'>Edit</button>
      </div>

      {/* main section tab */}
      <div className="flex justify-center items-center mt-20 container mx-auto">
        <Tabs aria-label="Default tabs" variant="default" className="w-250">
          <TabItem active title="Upload Book" icon={HiUserCircle}>
            <div className="p-5 bg-sky-200 w-full">
            <h1 className="text-3xl my-3 font-bold text-center">Upload Book Details</h1>
      
              <div className="grid grid-cols-12 gap-4 mt-4">
                <div className="col-span-6">
                  <input type="text" placeholder="Book Title" className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1" />
                  <input type="text" placeholder="Auther" className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1" />
                  <input type="text" placeholder="Book Cover Image URL" className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1" />
                  <input type="text" placeholder="Total Page" className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1" />
                  <input type="text" placeholder="Original Price" className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1" />
                  <input type="text" placeholder="Discount price" className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1" />
                  <textarea name="" id="" placeholder='Astract'  className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1"></textarea>
                </div>

                <div className="col-span-6">
                  <input type="text" placeholder="Publisher" className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1" />
                  <input type="text" placeholder="ISBN" className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1" />
                  <input type="text" placeholder="Language" className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1" />
                  <input type="text" placeholder="Categoury" className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1" />
                </div>
              </div>
              <div className='flex justify-end items-center gap-5'>
                <button className='bg-sky-400 px-2 py-1 font-bold rounded-sm'>Reset</button>
                <button className='bg-amber-400 px-2 py-1 font-bold rounded-sm'>Submit</button>
              </div>
            </div>
          </TabItem>

          <TabItem title="Upload Book Status" icon={MdDashboard}>
            <div className="p-5 bg-sky-200 w-full">

            </div>
          </TabItem>

          <TabItem title="Purchase History" icon={HiAdjustments}>
            <div className="p-5 bg-sky-200 w-full">

            </div>
          </TabItem>

        </Tabs>
      </div>

      
    </div>
  )
}
