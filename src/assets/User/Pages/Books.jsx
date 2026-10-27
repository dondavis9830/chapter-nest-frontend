import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { getAllBookAPI } from '../../../Services/APIServices'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'



export default function Books() {
  const [books,setBooks]=useState([])
  const [dummybooks,setDummyBooks]=useState([])
  const [search,setSearch]=useState('')
  const getAllBooks=async()=>{
    try{
      const res=await getAllBookAPI()
      console.log(res.data.books);
      setBooks(res.data.books)
      setDummyBooks(res.data.books)
    }
    catch(err){
      console.log(err);
    }
  }

  const filterBooks=useMemo(()=>{
    setBooks(dummybooks.filter(book=>book.title?.toLowerCase().includes(search.toLowerCase())))
  },[search])

  useEffect(()=>{getAllBooks()},[])

  return (
    <div>
          <Header/>
        {/* Title header */}
        <div className="">
          <section className="flex h-screen overflow-hidden">
            <div className="fixed left-0 top-31 h-screen w-65 border-r-2 ">
              {/* Sidebar content filter method */}
              <h1 className='bg-mist-400 text-2xl ps-2.5'>Filter by</h1>
              <div className='flex flex-col pt-3 px-3.5'>
                <div>
                   <input type="checkbox" id='all' /> <label  htmlFor="all"> All</label>
                </div>
                <div>
                  <input type="checkbox" id='history' /> <label  htmlFor="history"> History</label>
                </div>
                <div>
                  <input type="checkbox" id='fantasy' /> <label  htmlFor="fantasy"> Fantasy</label>
                </div>
                <div>
                  <input type="checkbox" id='programing' /> <label  htmlFor="programming"> Programming</label>
                </div>
                <div>
                  <input type="checkbox" id='self-help' /> <label  htmlFor="self-help"> Self-help</label>
                </div>
                <div>
                  <input type="checkbox" id='finance' /> <label  htmlFor="finance"> Finance</label>
                </div>
              </div>
              

            </div>

            <div className="ml-65 h-screen flex-1 overflow-hidden bg-amber-100">
              <nav className="sticky top-0 z-10 bg-white shadow-md">
                <div className="flex items-center justify-between px-10 py-5">
                  <h1 className="text-4xl font-bold text-gray-800"> Books Collection</h1>
                  <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Find from our collection..." className="w-100 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-teal-600" />
                </div>
              </nav>

              <main className="h-screen overflow-y-auto p-6">
                {/* Your book cards */}
              <section className='flex flex-1 flex-wrap justify-center gap-5 lg:justify-start'>
                {
                  books.length>0? 
                  books.map(item=>(
                    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-50">
                      <div className="relative h-60 m-2.5 overflow-hidden text-white rounded-md">
                        <img key={item} src={item.imageUrl} width={500} alt="card-image" className="h-full w-full object-cover" />
                      </div>
                      <div className="p-4">
                        <h6 key={item} className="mb-2 text-slate-800 text-lg font-semibold">
                          <Link to={`/books/${item._id}`} >{item.title}</Link>
                        </h6>
                        <p key={item} className="text-slate-600 leading-normal font-light">
                        {item.author}
                        </p>
                      </div>
                    </div>
                  ))
                  :
                  "No Books Found"
                }
              </section>

              </main>
            </div>
          </section>

        </div>    
      </div>
  )
}
