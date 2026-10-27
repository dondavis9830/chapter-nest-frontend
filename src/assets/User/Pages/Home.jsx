import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import Header from '../Components/Header';
import { getLatestBookAPI } from '../../../Services/APIServices';


export default function Home() {
  const [latestBooks,setLatestBooks]=useState([])
  const getLatestBooks=async()=>{
    try{
      const res=await getLatestBookAPI()
      console.log(res.data.latestBook);
      setLatestBooks(res.data.latestBook)
      
    }
    catch(err){
      console.log(err);
      
    }
  }
  useEffect(()=>{getLatestBooks()},[])
  const headingRef = useRef(null)
  useEffect(() => {
    const animation = gsap.fromTo(
      headingRef.current.children,
      { y: -60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'bounce.out',
        repeat: -1,
        repeatDelay: 5
      }
    )
    return () => animation.kill()
  }, [])

  const navigate=useNavigate()
  return (
    <div>
    <Header/>
        <header className="bg-[url('https://static.vecteezy.com/system/resources/thumbnails/051/266/432/small_2x/a-library-with-many-books-on-shelves-and-a-table-photo.jpg')] bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center">
          <div className=" font-bold bg-white/50 max-w-3xl min-h-44 rounded-xl flex flex-col justify-center p-5 -mt-20">
            <h1 ref={headingRef} className="md:text-4xl text-black overflow-hidden">
              <span className="inline-block text-2xl md:text-6xl text-lime-700">“</span>{' '}
                {['A', 'Little', 'Escape', 'Between', 'the', 'Pages.'].map((word, i) => (
                  <span key={i} className="inline-block mr-2">
                  {word}
                  </span>
                ))}
              <span className="inline-block text-2xl md:text-6xl text-lime-700">”</span>
            </h1>
            <p className="text-center text-xl my-4 " style={{ fontFamily: "'Dancing Script', cursive" }}>Step into a world of imagination, knowledge, and unforgettable stories.</p>
            <div className="flex justify-center">
              <input type="text" placeholder="Search by Book or Auther Name" className="bg-white border-gray-300 p-3 rounded-lg outline-2 active:outline-amber-300 w-9/12"/>
            </div>
          </div>
        </header>

        <section className="p-2 rounded-xl">
          <img className="md:block hidden my-2" src="https://www.bookswagon.com/images/promotionimages/web/booksofmonth.jpg?v=35.7" alt="" />
          <div>
            <img src="https://www.bookswagon.com/bannerimages/70_inr.jpg?v=36.7" alt="" />
          </div>

          {/* explore latest collection */}
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-3xl my-3 font-bold">Explore Our Latest Collection</h1>
            {/* maping from collections */}
               <section className='flex flex-1 flex-wrap justify-center gap-5 lg:justify-start'>
        {
            latestBooks.length>0? 
            latestBooks.map(item=>(
                            <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-50">
  <div className="relative h-60 m-2.5 overflow-hidden text-white rounded-md">
    <img key={item} src={item.imageUrl} width={500} alt="card-image" className="h-full w-full object-cover" />
  </div>
  <div className="p-4">
    <h6 key={item} className="mb-2 text-slate-800 text-xl font-semibold">
    {item.title}
    </h6>
    <p key={item} className="text-slate-600 leading-normal font-light">
    {item.author}
    </p>
  </div>
</div>
            ))
            :
            "no Books"
        }

      </section>


            <button onClick={()=>navigate('/books')} className="bg-rose-600 p-2 rounded-xl w-44 text-white font-bold">Explore More</button>
          </div>
        </section>

        {/* Feactured Authers */}
        <section className="flex flex-col justify-center items-center">
          <h1 className="font-bol text-3xl font-bold">Feactured Authers</h1>

        </section>

        {/* Testimonials  */}
        <section className="flex flex-col justify-center items-center">
          <h1 className="font-bol text-3xl font-bold">Customer feadback</h1>

        </section>

        {/* News Letter  */}
        <section className=" px-6 py-12 text-center bg-fuchsia-200">
          <h2 className="mb-3 text-3xl font-bold">Subscribe to Our Newsletter</h2>
          <p className="mb-6">Get the latest updates and exclusive offers delivered to your inbox.</p>
          <form className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1 rounded-lg px-4 py-3 bg-white text-gray-900 outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button type="submit" className="rounded-lg bg-teal-600 px-6 py-3 font-semibold transition hover:bg-teal-700">Subscribe</button>
          </form>
        </section>

        {/* contact section
        <section className="bg-gray-50 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold ">Contact Us</h2>
              <p className="mt-2 ">We’d love to hear from you. Get in touch with us!</p>
            </div>

            <div className="grid gap-10 rounded-2xl bg-white p-8 shadow-lg md:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800">Get in Touch</h3>
                <p className="">Have questions or suggestions? Send us a message.</p>
                <p className="">📍 <span className="font-medium">Address:</span>Thrissur, Kerala, India</p>
                <p className="">📧 <span className="font-medium">Email:</span> chapternest@gmail.com</p>
                <p className="">📞 <span className="font-medium">Phone:</span> +91 95445 98386</p>
              </div>

              <form className="space-y-4">
                <input type="text" placeholder="Your Name" required className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600"/>
                <input type="email" placeholder="Your Email" required className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600"/>
                <input type="text" placeholder="Subject" required className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600" />
                <textarea placeholder="Your Message" rows="4" required className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600" />
                <button type="submit" className="w-full rounded-lg bg-teal-600 py-3 font-semibold text-white transition hover:bg-teal-700" > Send Message </button>
              </form>
            </div>
          </div>
        </section> */}

        {/* footer section */}
        <footer className="bg-gray-900 text-white px-6 py-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-lime-500">Chapter Nest</h2>
              <p className="mt-3 text-gray-400">
                A little escape between the pages.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-lime-500">Home</a></li>
                <li><a href="/books" className="hover:text-lime-500">Books</a></li>
                <li><a href="/about" className="hover:text-lime-500">About Us</a></li>
                <li><a href="/contact" className="hover:text-lime-500">Contact</a></li>
              </ul>
            </div>
        
            <div>
              <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
              <p className="text-gray-400 mb-3">
                Discover your next favorite read with us.
              </p>
              <a
                href="mailto:chapternest@gmail.com"
                className="text-lime-500 hover:text-lime-400"
              >
                chapternest@gmail.com
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-5 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Chapter Nest. All rights reserved.
          </div>
        </footer>

    </div>
  )
}
