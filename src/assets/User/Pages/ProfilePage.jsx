import React from 'react'
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import './ProfilePage.css'
import Header from '../Components/Header';
import { BiRupee } from "react-icons/bi";
import { useState } from 'react';
import { addBookAPI } from '../../../Services/APIServices';


export default function ProfilePage() {
  const book={
  "title": 'The Alchemist',
  "author": 'Paulo Coelho',
  "imageUrl": 'https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg',
  "price": '299',
  'abstract': 'A philosophical novel about following dreams and listening to one\'s heart.',
  "status": 'pending',
  }

  const [bookDetails,setBookDetails]=useState({
    title:"",
    author:"",
    imageURL:"",
    price:"",
    discountPrice:"",
    abstract:"",
    category:"",
    uploadImages:[],
    language:"",
    ISBN:"",
    publisher:'',
    totalPage:""
  })

  const [preview,setPreview]=useState('')
  const [previewList,setPreviewList]=useState([])

  console.log(bookDetails);
  
  const submitBookDetails=async()=>{
    console.log(bookDetails);
    // try{
    //   const res=await addBookAPI(bookDetails)
    //   console.log(res);
    // }
    // catch(err){
    //   console.log(err);
    // }
  }

  const handleUploadImages=(e)=>{
    console.log(e.target.files[0]);
    const imageFile=e.target.files[0]
    const dummyImage=bookDetails.uploadImages
    setBookDetails({...bookDetails,uploadImages:dummyImage})
    const image_url=URL.createObjectURL(imageFile)
    console.log(image_url);
    setPreview(image_url)
    const dummyArray=previewList
    dummyArray.push(image_url)
    setPreviewList(dummyArray)
  }

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
                  <input onChange={(e)=>setBookDetails({...bookDetails,title:e.target.value})} type="text" placeholder="Book Title" className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1" />
                  <input onChange={(e)=>setBookDetails({...bookDetails,author:e.target.value})} type="text" placeholder="Auther" className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1" />
                  <input onChange={(e)=>setBookDetails({...bookDetails,imageURL:e.target.value})} type="text" placeholder="Book Cover Image URL" className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1" />
                  <input onChange={(e)=>setBookDetails({...bookDetails,totalPage:e.target.value})} type="text" placeholder="Total Page" className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1" />
                  <input onChange={(e)=>setBookDetails({...bookDetails,price:e.target.value})} type="text" placeholder="Original Price" className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1" />
                  <input onChange={(e)=>setBookDetails({...bookDetails,discountPrice:e.target.value})} type="text" placeholder="Discount price" className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1" />
                  <textarea  onChange={(e)=>setBookDetails({...bookDetails,abstract:e.target.value})} name="" id="" placeholder='Astract'  className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1"></textarea>
                </div>

                <div className="col-span-6">
                  <input onChange={(e)=>setBookDetails({...bookDetails,publisher:e.target.value})} type="text" placeholder="Publisher" className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1" />
                  <input onChange={(e)=>setBookDetails({...bookDetails,ISBN:e.target.value})} type="text" placeholder="ISBN" className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1" />
                  <input onChange={(e)=>setBookDetails({...bookDetails,language:e.target.value})} type="text" placeholder="Language" className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1" />
                  <input onChange={(e)=>setBookDetails({...bookDetails,category:e.target.value})} type="text" placeholder="Categoury" className="w-full rounded-lg bg-amber-50 p-2 outline-none mb-1" />
                  <div className='flex items-center '>
                    {
                     previewList.length==0 &&
                      <label htmlFor="upload_image" className='mt-2 font-bold'> 
                        <input id='upload_image' type="file" hidden onChange={(e)=>handleUploadImages(e)}/>
                        <h1 className='border-2 rounded-sm py-1 px-2 bg-cyan-300'>choose file</h1>
                        {/* <img width={50} src={"https://static.vecteezy.com/system/resources/previews/039/601/061/original/upload-picture-in-computer-illustration-vector.jpg"} alt="" /> */}
                      </label>
                    }
                  </div>
                  <div className='flex mt-3 items-center'>
                    {
                      preview && previewList.map((item)=>(
                          <img src={item} width={100} alt="" className='px-1' />
                        ))
                      // </div>
                    }
                  {/* </div>
                  <div className='flex items-center justify-center'> */}
                    {
                      previewList.length>0 && previewList.length<3 &&
                      <label htmlFor="upload_image" className='ps-3' > 
                        <input id='upload_image' type="file" hidden onChange={(e)=>handleUploadImages(e)}/>
                        <img width={30} src={"https://cdn-icons-png.flaticon.com/512/4174/4174487.png"} alt="" />
                      </label>
                    }
                   
                  </div>
                </div>
              </div>
              <div className='flex justify-end items-center gap-5'>
                <button className='bg-sky-400 px-2 py-1 font-bold rounded-sm'>Reset</button>
                <button onClick={submitBookDetails} className='bg-amber-400 px-2 py-1 font-bold rounded-sm'>Submit</button>
              </div>
            </div>
          </TabItem>

          <TabItem title="Upload Book Status" icon={MdDashboard}>
            <div className="p-5 bg-sky-200 w-full">
              <div className='flex justify-center items-center rounded-lg gap-4 '>
                         <div className='flex shadow-2xl p-10 bg-white rounded-xl'>
                           <div className='relative w-72'>
                            <img src={book.imageUrl} alt="book front page" />
                          </div>
                          <div className='my-auto'>
                            <h1 className='font-bold text-4xl'>{book.title}</h1>
                            <h1 className='text-sky-800 text-2xl mt-1 font-bold'>{book.author}</h1>
                            <div className='flex justify-start items-center text-sky-800 text-2xl'>
                              <BiRupee/>
                              <h1 className=' mt-1 font-bold '> {book.price}</h1>
                            </div>
                            <hr className='my-3' />
                            <p className='text-xl mt-2'>Abstract: <span className='font-bold'>{book.abstract}</span></p>
                            <hr className='my-3' />
                            <div className='flex justify-between gap-5 mt-2'>
                              <img width={100} src="https://st.depositphotos.com/1186248/2153/i/950/depositphotos_21538099-stock-photo-pending-review-stamp.jpg" alt="" />
                              <button className='bg-red-800 h-10 rounded-sm text-white text-xl px-2 py-1'>Delete</button>
                            </div>
                          </div>
                         </div>
                          
              </div>
            </div>
          </TabItem>

          <TabItem title="Purchase History" icon={HiAdjustments}>
            <div className="p-5 bg-sky-200 w-full">
              <div className='flex justify-center items-center rounded-lg gap-4 '>
                <div className='flex shadow-2xl p-10 bg-white rounded-xl'>
                  <div className='relative w-72'>
                    <img src={book.imageUrl} alt="book front page" />
                  </div>
                  <div className='my-auto'>
                    <h1 className='font-bold text-4xl'>{book.title}</h1>
                    <h1 className='text-sky-800 text-2xl mt-1 font-bold'>{book.author}</h1>
                    <div className='flex justify-start items-center text-sky-800 text-2xl'>
                      <BiRupee/>
                      <h1 className=' mt-1 font-bold '> {book.price}</h1>
                    </div>
                      <hr className='my-3' />
                      <p className='text-xl mt-2'>Abstract: <span className='font-bold'>{book.abstract}</span></p>
                      <hr className='my-3' />
                      <div className='flex justify-between gap-5 mt-2'>
                      <img width={100} src="" alt="" />
                    </div>
                  </div>
                </div>        
              </div>
            </div>
          </TabItem>

        </Tabs>
      </div>

      
    </div>
  )
}
