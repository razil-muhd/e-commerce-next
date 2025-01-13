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
    <div className='fixed z-[80] inset-x-0 flex '>
      <div className="bg-blue-400 w-full  flex justify-between items-center px-4 py-3 md:px-10 md:py-7 shadow-xl  border-b-2">
        <Link href={"/"} className=' text-white font-bold  text-xs md:text-lg   '>E-COMMERCE</Link>
        <div className='flex gap-5 md:gap-8  text-white  text-lg font-bold   items-center '>
         
          {navLinks.map((helo, index) => (
            <Link  href={helo.path} key={index}>
              <div className='hidden md:block'>{helo.name}</div>
            </Link>
          ))}
         
          <h2 className='text-xs md:text-lg'>
              <a className='' href="/login">Login</a>
            </h2>
          <div className='relative size-4 md:size-6 top-[0.125rem] px-3 flex items-center'>
            <Image src='/svg/cart.svg' alt="cart" fill />
            <div className='absolute rounded-full size-3 top-[-5px] right-[-5] md:size-4 bg-white flex justify-center items-center md:top-[-5px] md:right-[-8]'>
              <p className='text-blue-400 text-[0.75rem] font-semibold'>0</p>

            </div>
            
          </div>
          <Sidebar/>
       

        </div >
    
  
        
        
        
         

      </div>
    </div>

  )
}

export default Header
