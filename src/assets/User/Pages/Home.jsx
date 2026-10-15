import { Button } from "flowbite-react";
import React from 'react'
import Header from "../Components/Header";

export default function Home() {
  return (
    <div>
        <header className="bg-[url('https://static.vecteezy.com/system/resources/thumbnails/051/266/432/small_2x/a-library-with-many-books-on-shelves-and-a-table-photo.jpg')] bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center">
          <div className=" font-bold bg-white/50 max-w-3xl min-h-44 rounded-xl flex flex-col justify-center p-5 -mt-20">
            <h1 className="md:text-4xl text-black "> <span className="rounded-full text-2xl md:text-6xl text-lime-700 ">“</span> A Little Escape Between the Pages. <span className="rounded-full text-2xl md:text-6xl text-lime-700 ">”</span> </h1>
            <p className="text-center my-4">Step into a world of imagination, knowledge, and unforgettable stories.</p>
            <div className="flex justify-center">
              <input type="text" placeholder="Search by Book Name,Auther" className="bg-white border-b-amber-400 p-3 rounded-full outline-2 active:outline-amber-300 w-9/12"/>
            </div>
          </div>
        </header>

        <section className="m-2  rounded-xl">
          <img className="md:block hidden" src="https://www.bookswagon.com/images/promotionimages/web/booksofmonth.jpg?v=35.7" alt="" />

          {/* explore latest collection */}
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-3xl my-3">Explore Our Latest Collection</h1>
            {/* maping from collections */}


            <button className="bg-rose-600 p-2 rounded-xl w-44 text-white font-bold">Explore More</button>
          </div>
        </section>
        {/* Feactured Authers */}
        <section className="flex flex-col justify-center">
          <h1 className="font-bol text-3xl">Feactured Authers</h1>
        </section>
      
    </div>
  )
}
