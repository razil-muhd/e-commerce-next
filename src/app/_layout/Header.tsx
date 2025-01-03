import Image from 'next/image'
import React from 'react'
import Sidebar from './Sidebar';
import Link from 'next/link';


const Header = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
  
  ];
  return (
    <div className='fixed z-[80] inset-x-0'>
      <div className="bg-blue-400 w-full  flex justify-between px-20  py-7 shadow-xl  border-b-2">
        <h1 className=' text-white font-bold text-[25px] '>E-COMMERCE</h1>
        <div className='flex  gap-12  text-white  text-lg font-bold  '>
         
          {navLinks.map((helo, index) => (
            <Link  href={helo.path} key={index}>
              <div className='hidden md:block'>{helo.name}</div>
            </Link>
          ))}
         
          <h2 >
              <a href="">Login</a>
            </h2>
          <div className='relative size-6'>
            <Image src='/svg/cart.svg' alt="cart" fill />
            <div className='absolute rounded-full size-4 bg-white flex justify-center items-center top-[-5px] right-[-8]'>
              <p className='text-blue-400 text-[0.75rem] font-semibold'>0</p>

            </div>
          </div>

        </div>
        
         <Sidebar/>
         

      </div>
    </div>

  )
}

export default Header
