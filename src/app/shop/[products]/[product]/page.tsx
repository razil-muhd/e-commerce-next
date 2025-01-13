import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="lg:py-[10.944rem] lg:px-20 md:px-10 md:py-[5.944rem]">
<div className='flex'>
        <div className='relative w-[500px] h-[500px] '>
           <Image src={"/images/FP-1.jpg"}  alt='loafer' fill/>
         
    
        </div>
        <div className='flex flex-col px-10 gap-6'>
            <h1 className='text-4xl'>Loafer</h1>
            <h1  className='text-2xl font-bold' >$100</h1>
            <h1>Brand Name</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi dolores quo, voluptate ex necessitatibus nihil esse at. Sapiente eaque quo sit similique sunt voluptate! Natus velit facilis laudantium aut sed.gftrfdfrede</p>
            <button className='border border-solid bg-sky-600 text-white  w-20 rounded-lg p-1'>Buy Now</button>
        </div>
</div>
    </div>
  )
}

export default page
