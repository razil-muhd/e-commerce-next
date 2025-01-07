"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Closeeye from "@/components/svg/Closeeye";
import Openeye from "@/components/svg/Openeye";

const page = () => {
  const [show, setShow] = useState(false);
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
        <div className="bg-white w-72 h-30  md:w-96 md:h-96   absolute border rounded-xl ">
          <h1 className="text-center pt-10 text-xl md:text-2xl font-bold text-blue-400">
            Log in to your account
          </h1>
          <h2 className="text-center pt-1 text-xs">
            Please enter your details!...
          </h2>

          <form className="pt-10 flex flex-col gap-3 justify-center items-center p-6">
            <input
              type="email"
              placeholder="Email "
              className="border border-solid rounded-lg p-2 md:p-3 w-full text-start "
            />

            <div className="relative w-full">
              <input
                type={show ? "text" : "password"}
                placeholder="Password "
                className="border border-solid rounded-lg p-2 md:p-3 w-full text-start "
              />

              {show ? (
                <Closeeye  className="absolute top-3 right-2  cursor-pointer"     onClick={() => setShow(!show)}/>
              ) : (
                <Openeye
                  className="absolute top-3 right-2  cursor-pointer"
                  onClick={() => setShow(!show)}
                />
              )}
            </div>

            <button
              type="submit"
              className=" border border-solid bg-yellow-300 w-full rounded-lg p-1 md:p-2 "
            >
              Login
            </button>
            <h1 className="text-xs md:text-base">
              Don't have an account?
              <Link className="text-violet-500 font-bold" href={""}>
                Sign up
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
