import React from "react";
import Image from "next/image";
import Signup from "./_components/Signup";

const page = () => {
  return (
    <div className="md:pt-[4.944rem] sm:pt-[2.455rem] ">
      <div className="relative h-screen flex items-center justify-center w-full">
        <Image
          src="/images/loginbg.jpg"
          alt="login Background"
          fill
          className="object-cover "
        />
        <Image
          src="/images/loginbgphn.jpg"
          alt="login Background"
          fill
          className="object-bottom md:hidden"
        />
        <div className="bg-white w-72   md:w-96 absolute border rounded-xl ">
          <h1 className="text-center pt-10 text-xl md:text-2xl font-bold text-blue-400">
            Sign Up
          </h1>
          <h2 className="text-center pt-1 text-xs">
            Create your account!...
          </h2>
          <Signup/>
        </div>
      </div>
    </div>
  );
};

export default page;
