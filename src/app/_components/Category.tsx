import React from 'react'
import Image from 'next/image'

const Category = () => {
  return (
    <div>
      <div>
        <h1 className='text-center font-semibold text-3xl font-sans pt-5'>Categories</h1>
        <h2 className='text-center font-medium text-2xl font-serif pt-3'>These are our Categories</h2>
      </div>
      <div className="grid grid-cols-3 gap-4 py-3 px-3">
 
        <div className="col-span-1">
          <div className="relative w-full h-[450px]">
            <Image
              src="/images/Men.jpg"
              alt="Men"
              className="object-top  rounded-lg"
              fill
            />
          </div>
        </div>

      
        <div className="col-span-1">
          <div className="relative w-full h-[450px]">
            <Image
              src="/images/Woman.jpg"
              alt="Woman"
              className="object-cover object-top rounded-lg"
              fill
            />
          </div>
        </div>
            <div  className="col-span-1 grid grid-rows-2 gap-4">
            <div className="relative w-full h-[250px]">
            <Image
              src="/images/Shoes.jpg"
              alt="Shoes"
              className=" object-top rounded-lg"
              fill
            />
            </div>
             <div className="relative w-full h-[250px]">
            <Image
              src="/images/Kids.jpg"
              alt="Kids"
              className=" object-top"
               layout='fill'
            />
        
          </div>
            </div>

          

    
      </div>
    </div>
  );
};

export default Category;
   


