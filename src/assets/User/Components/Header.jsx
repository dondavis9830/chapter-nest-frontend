import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


export default function Header() {
  const userToken=sessionStorage.getItem('userToken')

  const navigate=useNavigate()
  return (
    
    <div className='sticky top-0 z-100'>
      <Navbar fluid className='p-5'>
      <NavbarBrand >
        <img src="https://img.freepik.com/premium-vector/book-icons-flat-design-style_611881-699.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-4xl font-semibold dark:text-white">Chapter Nest</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <div className='flex justify-center items-center gap-4 me-2'>
          <FaInstagram className='text-2xl dark:text-white' />
          <FaFacebook className='text-2xl dark:text-white'/>
          <FaXTwitter className='text-2xl dark:text-white'/>
        </div>
        {
          userToken ?
          <div>
            <Button onClick={()=>navigate('/profile/1')}  >Profile</Button>
          </div>
          :
          <div>
            <Button onClick={()=>navigate('/login')}  >Login</Button>
          </div>
        }
      </div>
    </Navbar>
    <nav>
      <div className='flex justify-center gap-5 bg-mist-800 py-2'>
        <button onClick={()=>navigate('/')} className=' text-xl font-bold text-white'>HOME</button>
        <button onClick={()=>navigate('/books')} className=' text-xl font-bold text-white'>BOOKS</button>
        <button onClick={()=>navigate('/contact')} className=' text-xl font-bold text-white'>CONTACT</button>
      </div>
    </nav>
    </div>
  )
}
