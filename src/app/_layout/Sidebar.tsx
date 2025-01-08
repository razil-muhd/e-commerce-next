'use client'
import React, { use, useState } from 'react'
import Image from "next/image";
import Navsvg from '@/components/svg/Navsvg';
import Link from 'next/link';


const Sidebar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
  
  ];
   const[open,setOpen]= useState(false)
  return (
    <div className='md:hidden  flex items-center '>
    <div>
        
          <Navsvg onClick={()=>setOpen(!open)}/>


      
    </div>
   { open&&( <div className='flex fixed inset-0 w-full h-full'>
        <div onClick={()=>setOpen(!open)} className='bg-transparent w-[50%]'>

        </div>
        <div className='bg-blue-400 w-[50%] pt-10 underline'>
        {navLinks.map((helo, index) => (
            <Link  href={helo.path} key={index}>
              <div className='flex flex-col px-2 items-center pt-2'>{helo.name}</div>
            </Link>
          ))}

        </div>

    </div>)}
    </div>
  )
}

export default Sidebar
