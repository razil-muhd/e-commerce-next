import Image from 'next/image'
import React from 'react'


const Header = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login' },
    { name: 'New', path: '/new' },
  ];
  return (
    <div className='fixed z-[80] inset-x-0'>
      <div className="bg-blue-400 w-full  flex justify-between px-20  py-7 shadow-xl  border-b-2">
        <h1 className=' text-white font-bold text-[25px] '>E-COMMERCE</h1>
        <div className='flex  gap-12  text-white  text-lg font-bold
          '>
          {navLinks.map((helo, index) => (
            <h2 key={index}>
              <a href={helo.path}>{helo.name}</a>
            </h2>
          ))}
          <div className='relative size-6'>
            <Image src='/svg/cart.svg' alt="cart" fill />
            <div className='absolute rounded-full size-4 bg-white flex justify-center items-center top-[-5px] right-[-8]'>
              <p className='text-blue-400 text-[0.75rem] font-semibold'>0</p>

            </div>
          </div>

        </div>

      </div>
    </div>

  )
}

export default Header
