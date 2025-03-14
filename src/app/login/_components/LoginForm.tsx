"use client";
import React, { useState } from "react";
import Closeeye from "@/components/svg/Closeeye";
import Openeye from "@/components/svg/Openeye";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
// import { FrontendHome } from "@/api/Api";
// import Cookies from "js-cookie";
import { signIn } from "next-auth/react";

const loginSchema = z.object({
  email: z.string().email("Email is required"),
  password: z
    .string()
    .min(8, "Password is required atleast 8 character")
    .max(10, "maximum 10 character")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).(?=.*[0-9]).*$/,
      "Password must include at least one uppercase letter, one lowercase letter,one number, and one special character"
    ),
});
type Tlogin = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitting },
  } = useForm<Tlogin>({
    resolver: zodResolver(loginSchema),
  });
  const [show, setShow] = useState(false);
  const router = useRouter();
  const onsubmit = async (data: Tlogin) => {
    // try{
    //   const login = await FrontendHome.LoginApi(data)

    //     if(login.data.success){
    //       window.localStorage.setItem("accesstoken", login.data.accessToken)
    //       window.localStorage.setItem("userData",JSON.stringify (login.data.userData))
    //       Cookies.set("accessToken",login.data.accessToken)
    //       toast.success('login succesfull');
    //       const checkout = localStorage.getItem("checkout")
    //       if(checkout){
    //         localStorage.removeItem("checkout")
    //         router.push("/checkout")
    //       }else{
    //         router.push("/")
    //       }

    //       router.refresh();
    //     }
    //  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //  }catch(errors:any){
    //   console.log("object",errors)

    //   toast.error(errors.response.data);

    // }

    try {
      console.log("working..", data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const signedIn = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      if (signedIn?.ok) {
        toast.success("login succesfull")
        const checkout = localStorage.getItem("checkout");
        if(checkout){
                  localStorage.removeItem("checkout")
                  router.push("/checkout")
                }else{
                  router.push("/")
                }
      
                router.refresh();
              }
      
      
      
    } catch (errors: any) {
      console.log("object::::::", errors);
      // toast.error(errors.response.data)
    }
    reset();
    setShow(false);
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
        {errors && (
          <p className="text-start text-red-600">{errors.email?.message}</p>
        )}

        <div className="relative w-full">
          <input
            type={show ? "text" : "password"}
            {...register("password")}
            placeholder="Password "
            className="border border-solid rounded-lg p-2 md:p-3 w-full text-start "
          />
          {errors && <p className="text-red-600">{errors.password?.message}</p>}
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

        <button
          disabled={isSubmitting}
          type="submit"
          className=" border border-solid bg-yellow-300 w-full rounded-lg p-1 md:p-2  text-white text-lg md:text-xl font-semibold"
        >
          Login
        </button>
        <h1 className="text-xs md:text-base">
          Don&apos;t have an account?
          <Link
            href="/signup"
            className="text-violet-500 font-bold underline"
            type="button"
          >
            Sign up
          </Link>
        </h1>
      </form>
    </div>
  );
};

export default LoginForm;
