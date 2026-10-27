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

      <section>
        {
          book &&
          <div className='flex p-5 border-2 rounded-lg m-3 gap-4'>
            <div className='relative w-52'>
              <img src={book.imageUrl} alt="" />
            </div>
            <div>
              <h1 className='font-bold'>{book.title}</h1>
              <h1>{book.author}</h1>
              <div className='grid grid-cols-3 gap-4'>
                <div className='col-1'>
                  <h1>Publisher:{book.publisher}</h1>
                  <h1>Category:{book.category}</h1>
                  <h1>Seller:{book?.seller}</h1>
                </div>
                <div>
                  <h1>Language:{book.language}</h1>
                  <h1>ISBN:{book.isbn}</h1>
                </div>
                <div>
                  <h1>No.Of Pages:{book.noofpages}</h1>
                  <h1>ISBN:{book.price}</h1>
                </div>
              </div>
              <p>Abstract:{book.abstract}</p>
              <div className='flex justify-end gap-5 mt-2'>
                <button className='bg-sky-800 w-10 rounded-sm '>Back</button>
                <button className='w-20 flex justify-center items-center bg-emerald-800 rounded-sm'>Buy <BiRupee/> {book.dprice}</button>
              </div>
            </div>
            
          </div>
        }
      </section>

    </div>
  )
}
