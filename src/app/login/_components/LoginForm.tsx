"use client";
import React, { useState } from "react";
import Closeeye from "@/components/svg/Closeeye";
import Openeye from "@/components/svg/Openeye";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email("Email is required"),
  password: z.string().min(8, "Password is required atleast 8 character").max(10,"maximum 10 character") .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).(?=.*[0-9]).*$/,
    "Password must include at least one uppercase letter, one lowercase letter,one number, and one special character",
  )
});
type Tlogin = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    
    formState: { errors,isSubmitting },
  } = useForm<Tlogin>({
    resolver: zodResolver(loginSchema),
  });
  const [show, setShow] = useState(false);
  const onsubmit = async (data: Tlogin) => {
    console.log("submitted data:", data);
    reset()
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="pt-10 flex flex-col gap-3   p-6"
      >
        <input
          type="email"
          {...register("email")}
          placeholder="Email "
          className="border border-solid rounded-lg p-2 md:p-3 w-full text-start "
        />
        {errors && <p className="text-start text-red-600">{errors.email?.message}</p>}

        <div className="relative w-full">
          <input
            type={show ? "text" : "password"}
            {...register("password")}
            placeholder="Password "
            className="border border-solid rounded-lg p-2 md:p-3 w-full text-start "
          />
          {errors && <p className="text-red-600">{errors.password?.message}</p> }
          {show ? (
            <Closeeye
              className="absolute top-3 right-2  cursor-pointer"
              onClick={() => setShow(!show)}
            />
          ) : (
            <Openeye
              className="absolute top-3 right-2  cursor-pointer"
              onClick={() => setShow(!show)}
            />
          )}
        </div>

        <button disabled={isSubmitting}
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
  );
};

export default LoginForm;
