import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="pt-[5.244rem] ">
         <div className="relative h-screen ">
          <Image src="/images/contactbp.jpg" alt='helo' fill className="object-top"  />
         <div className=" flex flex-col items-center p">
            <div className="absolute text-center pt-52 pl-64 ">
           <h1 className="text-black text-3xl">CONTACT US</h1>
           <h2 className="text-black text-3xl">You can customize it further based on your purpose or audience. </h2>
           <div className="pt-10 flex gap-32 text-center px-80">
             <h2>ADDRESS</h2>
             <h2>CALL</h2>
             <h2>E-MAIL</h2>
           </div>
         </div>
         </div>

       </div>
       
    </div>
  );
};

export default page;
