import React from "react";
import Image from "next/image";
import Location from "@/components/svg/Location";
import Callsvg from "@/components/svg/Callsvg";
import Mail from "@/components/svg/Mail";

const page = () => {
  return (
    <div className="pt-[4.944rem]">
      <div className="relative h-screen">
        <Image
          src="/images/cbd.jpg"
          alt="Contact Background"
          fill
          className="object-top"
        />
          <Image
          src="/images/cbp.jpg"
          alt="Contact Background"
          fill
          className="object-top md:hidden"
        />
        <div className="flex flex-col items-center">
          <div className="relative flex flex-col items-center text-center pt-36 px-4 w-full">
            <h1 className="text-black  sm:text-2xl md:text-3xl font-black">
              CONTACT US
            </h1>
            <h2 className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl pt-4 pb-6">
              You can customize it further based on your purpose or audience.
            </h2>

            <div className="flex flex-col lg:flex-row  gap-8 lg:gap-14 bg-white/70 p-5 lg:p-12 border rounded-xl w-fit  ">
              <div className="flex  gap-4">
                <Location />
                <div className="flex flex-col">
                  <h1 className="font-bold text-sm sm:text-base text-left">Address</h1>
                  <p className="text-xs sm:text-sm text-left">
                    4-158/9 5th Cross Road, Secunderabad 500094, TS, IND
                  </p>
                </div>
              </div>

              <div className="flex  gap-4">
                <div className="">
                  {" "}
                  <Callsvg />
                </div>
                <div className="flex-col">
                  <h1 className="font-bold text-sm sm:text-base text-left">Call</h1>
                  <p className="text-xs sm:text-sm text-left">98 95 177 36</p>
                </div>
              </div>

              <div className="flex  gap-4">
                <Mail />
                <div className="flex-col">
                  <h1 className="font-bold text-sm sm:text-base text-left">Mail</h1>
                  <p className="text-xs sm:text-sm text-left">ecommerce@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
