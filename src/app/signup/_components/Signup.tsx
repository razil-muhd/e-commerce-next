"use client";
import React, { useState } from "react";
import Closeeye from "@/components/svg/Closeeye";
import Openeye from "@/components/svg/Openeye";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
 const Sign = z.object({
      name:z.string().min(1,"Name is required").regex(/^[A-Z]/,"Start with caps ok.."),
      email:z.string().email("Invalid"),
      password: z.string().min(8, "Password is required atleast 8 character").max(10,"maximum 10 character") .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).(?=.*[0-9]).*$/,
        "Password must include at least one uppercase letter, one lowercase letter,one number, and one special character",
      ),
      confirmpassword:z.string()

     

 })
 .refine((data) => data.password === data.confirmpassword, {
  message: "Passwords don't match",
  path: ["confirmpassword"],
});
 type TSign = z.infer<typeof Sign >
const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isSubmitting,isSubmitSuccessful },
  } = useForm<TSign>({
    resolver:zodResolver(Sign)
  });
  const [show, setShow] = useState(false);
  const onsubmit = async (data: TSign) => {
    console.log("submitted data:", data);
        reset()
        setShow(false)
    

  };

  return (
    <div>
      <form
        className="pt-10 flex flex-col gap-3   p-6"
        onSubmit={handleSubmit(onsubmit)}
      >
        <input
          type="text"
          placeholder="Name"
          className="border border-solid rounded-lg p-2 md:p-3 w-full text-start "
          {...register("name")}
        />
        {errors.name && errors.name.message}
        <input
          type="email"
          placeholder="Email "
          className="border border-solid rounded-lg p-2 md:p-3 w-full text-start "
          {...register("email")}
        />
         {errors.email && errors.email.message}

        <div className="relative w-full">
          <input
            type={show ? "text" : "password"}
            placeholder="Password "
            className="border border-solid rounded-lg p-2 md:p-3 w-full text-start "
            {...register("password")}
          />
           {errors.password && errors.password.message}

          {show ? (
            <Openeye
              className="absolute top-3 right-2  cursor-pointer"
              onClick={() => setShow(!show)}
            />
          ) : (
            <Closeeye
              className="absolute top-3 right-2  cursor-pointer"
              onClick={() => setShow(!show)}
            />
          )}
        </div>
        <input
          placeholder="Confirm password"
          type="password"
          className="border border-solid rounded-lg p-2 md:p-3 w-full text-start "
          {...register("confirmpassword")}
        
        />
           {errors.confirmpassword && errors.confirmpassword.message}

        <button disabled={isSubmitting}
          type="submit"
          className=" border border-solid bg-yellow-300 w-full rounded-lg p-1 md:p-2  text-white text-lg md:text-xl font-semibold"
        >
          Sign Up
        </button>
        <h1 className="text-xs md:text-base">
          Already have an account?
          <Link
            href="/login"
            className="text-violet-500 font-bold underline"
            type="button"
          >
            Login
          </Link>
        </h1>
      </form>
    </div>
  );
};

export default Signup;
