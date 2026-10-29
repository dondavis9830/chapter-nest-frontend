import React, { useEffect,useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { viewBookDetailsAPI } from '../../../Services/APIServices';
import { BiRupee } from "react-icons/bi";
export default function View() {
  const {id}=useParams()
  const [book,setBook]=useState({})
  const getData=async()=>{
    try{
      const res=await viewBookDetailsAPI(id)
      console.log(res.data.view);
      setBook(res.data.view)
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{getData()},[])
  
  return (
    <div>
      <Header/>

      <section className='bg-mist-300'>
        {
          book &&
          <div className='flex justify-center items-center py-24 rounded-lg gap-4 '>
           <div className='flex shadow-2xl p-10 bg-white rounded-xl'>
             <div className='relative w-72'>
              <img src={book.imageUrl} alt="book front page" />
            </div>
            <div className='my-auto'>
              <h1 className='font-bold text-4xl'>{book.title}</h1>
              <h1 className='text-sky-800 text-2xl mt-1 font-bold'>{book.author}</h1>
              <hr className='my-3' />
              <div className='grid grid-cols-3 gap-6'>
                <div className=''>
                  <h1 className='text-xl'>Publisher: <span className='font-bold'>{book.publisher}</span></h1>
                  <h1 className='text-xl'>Category: <span className='font-bold'>{book.category}</span></h1>
                  <h1 className='text-xl'>Seller: <span className='font-bold'>{book?.seller}</span></h1>
                </div>
                <div>
                  <h1 className='text-xl'>Language: <span className='font-bold'>{book.language}</span></h1>
                  <h1 className='text-xl'>ISBN: <span className='font-bold'>{book.isbn}</span></h1>
                </div>
                <div>
                  <h1 className='text-xl'>No.Of Pages: <span className='font-bold'>{book.noofpages}</span></h1>
                  <h1 className='text-xl'>Price: <span className='font-bold'>{book.price}</span></h1>
                </div>
              </div>
              <p className='text-xl mt-2'>Abstract: <span className='font-bold'>{book.abstract}</span></p>
              <hr className='my-3' />
              <div className='flex justify-end gap-5 mt-2'>
                <button className='bg-sky-800  rounded-sm text-white text-xl px-2 py-1'>Back</button>
                <button className=' flex justify-center items-center bg-emerald-800 rounded-sm text-white px-2 py-1 text-xl'>Buy <BiRupee/> {book.dprice}</button>
              </div>
            </div>
           </div>
            
          </div>
        }
      </section>

    </div>
  )
}
