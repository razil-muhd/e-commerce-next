"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useCart } from "@mrvautin/react-shoppingcart";
const formschema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .regex(/^[A-Z]/, "Start with caps..."),
  email: z.string().email("Email is required"),
  phone: z
    .string()
    .nonempty({ message: "Mobile number is required" })
    .regex(/^\d+$/, { message: "Mobile number must contain only digits" })
    .length(10, "Must Contain 10 characters"),
  pincode: z
    .string()
    .regex(/^[1-9]\d{2}\s?\d{3}$/, { message: "Not correct." }),
  address: z.string().nonempty({ message: "Address is required" }),
});
type Tcheck = z.infer<typeof formschema>;

const Checkoutform = () => {
    const {items}=useCart();
    console.log("items:",items)

    const {
        register,
        handleSubmit,
        reset,
    
        formState: { errors,},
      } = useForm<Tcheck>({
        resolver: zodResolver(formschema),
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const onsubmit = async (data: Tcheck) => {
        reset();
      };
  return (
    <div>
         <form
            className="px-32 py-8  rounded-lg shadow-lg"
            onSubmit={handleSubmit(onsubmit)}
          >
            <div className="mb-6">
              <div className="flex gap-6">
                <div className="flex flex-col w-1/2">
                  <label className="text-lg font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-400 hover:border-blue-400 transition"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div className="flex flex-col w-1/2">
                  <label className="text-lg font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-400 hover:border-blue-400 transition"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-lg font-medium mb-2 block">Phone</label>
              <input
                type="text"
                placeholder="Enter phone number"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-blue-400 hover:border-blue-400 transition"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-red-500 mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="text-lg font-medium mb-2 block">Email</label>
              <input
                type="email"
                placeholder="Enter email address"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-blue-400 hover:border-blue-400 transition"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="text-lg font-medium mb-2 block">Address</label>
              <textarea
                placeholder="Enter address"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-blue-400 hover:border-blue-400 transition"
                {...register("address")}
              ></textarea>
              {errors.address && (
                <p className="text-red-500 mt-1">{errors.address.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="text-lg font-medium mb-2 block">Pincode</label>
              <input
                type="text"
                placeholder="Enter your pin code"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-blue-400 hover:border-blue-400 transition"
                {...register("pincode")}
              />
              {errors.pincode && (
                <p className="text-red-500 mt-1">{errors.pincode.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="text-lg font-medium mb-2 block">
                Country/Region
              </label>
              <select className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-blue-400 hover:border-blue-400 transition">
                <option>India</option>
                <option>Pakistan</option>
                <option>UAE</option>
                <option>Sri Lanka</option>
                <option>Bangladesh</option>
                <option>USA</option>
                <option>Egypt</option>
              </select>
            </div>

            <div>
              <button className="w-full bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 hover:shadow-lg transition">
                Complete Order
              </button>
            </div>
          </form>
      
    </div>
  )
}

export default Checkoutform
