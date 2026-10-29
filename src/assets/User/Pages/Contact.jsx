import React from 'react'
import { useEffect, useState } from 'react'
import Header from '../Components/Header'

export default function Contact() {

const colors = ['#84cc16', '#f59e0b', '#ec4899', '#38bdf8', '#a78bfa']

const [color, setColor] = useState('#84cc16')

useEffect(() => {
  const interval = setInterval(() => {
    setColor(colors[Math.floor(Math.random() * colors.length)])
  }, 1000)
  return () => clearInterval(interval)
}, [])

  return (
    <div className="min-h-152 transition-colors duration-700 bg-slate-200">
      <Header/>
      {/* contact page */}
      <main className='grid grid-cols-2 py-10 px-50 shadow-3xl '>
        <div className='bg-cyan-950/80 px-5 rounded-l-2xl'>
          <h1 style={{ color }} className='text-6xl text-white p-2 font-bold text-start font-[Baskervville]' >Contact Us</h1>
          <p className=' text-white text-bold'>Fill up the form and our team will get back to within 24 hours</p>
          <div className='px-10 py-5'>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" required className="w-full bg-white rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600"/>
                <input type="email" placeholder="Your Email" required className="w-full bg-white rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600"/>
                <input type="text" placeholder="Subject" required className="w-full bg-white rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600" />
                <textarea placeholder="Your Message" rows="4" required className="w-full bg-white rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600" />
                <button type="submit" className="w-full rounded-lg bg-teal-600 py-3 font-semibold text-white transition hover:bg-teal-700" > Send Message </button>
              </form>
            
          </div>

        </div>
        <div className='bg-[url("https://static.vecteezy.com/system/resources/previews/000/453/432/original/vector-contact-us-background.jpg")] bg-cover bg-center bg-no-repeat min-h-130 rounded-r-2xl'>

        </div>
      </main>
    </div>
  )
}
