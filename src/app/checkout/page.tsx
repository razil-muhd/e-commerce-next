'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
 const formschema = z.object({
     name:z.string().min(1,"Name is required").regex(/^[A-Z]/,"Start with caps..."),
     email: z.string().email("Email is required"),
    

 })
 type Tcheck = z.infer<typeof formschema>;

const page = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Tcheck>({
    resolver: zodResolver(formschema),
  });
  const onsubmit = async (data:Tcheck ) => {
    reset();
  };
  return (
    <div className="md:pt-[4.944rem] sm:pt-[2.455rem]  pb-2  ">
      <h1 className=" text-2xl font-semibold px-32 py-10 ">Billing details</h1>
      <div className="grid grid-cols-2">
        <div className="flex ">
          <form className="px-32 " onSubmit={handleSubmit(onsubmit)}>
            <div className="flex gap-32 ">
              <h1>First Name</h1>
              <h1>Last Name</h1>
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Enter Name"
                className="
                    border border-solid border-black"
                {...register("name")}
              />
                       
              <input
                type="text"
                placeholder="Enter Last Name"
                className="border border-solid border-black"
             
              />
          
            </div>
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            <div>
              <h1 className="pt-3"> Phone</h1>
              <input
                type="text"
                placeholder="Enter phone number"
                className="border border-solid border-black w-full"
               
              ></input>
            </div>
            <div>
              <h1 className="pt-3"> Email</h1>
              <input
                type="email"
                placeholder="Enter email address"
                className="border border-solid border-black w-full"
                {...register("email")}
              />
                 {errors.email && <p className="text-red-400">errors.email.message</p>}
            </div>
            <div>
              <h1 className="pt-3"> Address</h1>
              <textarea
                placeholder="Enter address"
                className="border border-solid border-black w-full "
              ></textarea>
            </div>
            <div>
              <h1 className="pt-3"> pincode</h1>
              <input
                type="text"
                placeholder="Enter your pin code"
                className="border border-solid border-black w-full"
            
              ></input>
            </div>
            <div>
              <h1 className="pt-3"> Country/Region</h1>
              <select className="border border-solid border-black w-full ">
                <option>India</option>
                <option>Pakisthan</option>
                <option>Uae</option>
                <option>Sri lanka</option>
                <option>Bangladesh</option>
                <option>Usa</option>
                <option>Egypt</option>
              </select>
            </div>
            <div className="pt-3">
              <button className="border border-solid border-black w-full  bg-blue-400 text-white">
                Complete Order
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-between px-9">
          <div>
            <h1 className="text-2xl font-semibold">Product</h1>
            <h1>Shipping</h1>
            <h1>Sub Total</h1>
            <h1>Total</h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Sub Total</h1>
            <h1>0</h1>
            <h1>0</h1>
            <h1>0</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
