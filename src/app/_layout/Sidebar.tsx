import React from 'react'
import Image from "next/image";
import Navsvg from '@/components/svg/Navsvg';

const Sidebar = () => {
  return (
    <div className='md:hidden'>
        <button >
          <Navsvg/>

        </button>
      
    </div>
  )
}

export default Sidebar
