import Image from 'next/image'
import React, { useState } from 'react'
import Image1 from '@public/images/bga.jpg'
import image2 from '@public/images/sld2.png'
import image3 from '@public/images/sld3.png'
import cn from '../utils/tailwind'

const gallery = [
     {
          image: Image1,
          text: {
               heading: "NEW YEAR OFFER",
               subheading: "25% Discount",
               description: "We anticipate your desires and deliver  what matters most to you."


          }
     },
     {
          image: image2,
          text: {
               heading: "HAPPY NEW YEAR",
               subheading: "MEGA OFFERS",
               description: "Celebrate this new year with  us"


          }
     },
     {
          image: image3,
          text: {
               heading: "HAPPY 2025",
               subheading: "ONLY FOR YOU",
               description: "Lets begin this yearwith new trends.."

}
     }

]
const Slide = () => {
     const [slide, setSlide] = useState(0);
     const totalimages = gallery.length
     const next = ()=>{
          if( slide == totalimages-1){
               setSlide(0)
          }
          else
          {
               setSlide(slide+1)
          }

     }
     const prev = ()=>{
          if(slide == 0){
           setSlide( totalimages-1)

 }
          else{
               setSlide(slide-1)

          }

     }
     return (
          <div className={cn('relative h-[30rem] w-full flex items-center',{'justify-center':slide==1})}>
               <Image className='object-cover' src={gallery.at(slide)!.image} alt='slide' fill />
               <div className='text-black absolute text-4xl  flex justify-between w-full px-3  z-50'>
                    <button  onClick={prev}>{"<"}</button>
                    <button  onClick={next}>{">"}</button>
               </div>
          <div className='text-black relative  px-20 '>
                    <h2 className='text-2xl font-semibold transition-transform duration-300'>{gallery.at(0)!.text.heading}</h2>
                    <h1 className='text-6xl font-bold'>{gallery.at(slide)!.text.subheading}</h1>
                    <p className='text-xl font-semibold'>  {gallery.at(slide)!.text.description}</p>
                    <div className='py-3'>
                         <button className='border-solid hover:border-dotted rounded-md border-2 bg-blue-400 text-white p-3  font-semibold '>SHOP NOW</button>
                    </div>
               </div>
          </div>
     )
}

export default Slide
