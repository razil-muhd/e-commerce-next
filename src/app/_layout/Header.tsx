"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import Cart from "../_components/Cart";
import { usePathname, useRouter } from "next/navigation";
import { getSession, signOut } from "next-auth/react";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];

  const router = useRouter();
  const pathname = usePathname();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
     const token = async () => {
      const session = await getSession();
      if(session?.accessToken){
        setAccessToken(session?.accessToken);
      }
     };
     token()
  }, [pathname]); 

  const handleLogout = async () => {
    await signOut({ redirect: false }); 
 
    setAccessToken(null);
    router.push("/");
    setTimeout(() => {
      router.refresh();
    }, 100);
  };
  return (
    <nav className="fixed z-[80] inset-x-0 flex">
      <div className="bg-blue-400 w-full flex justify-between items-center px-4 py-3 md:px-10 md:py-7 shadow-xl border-b-2">
        <Link href={"/"} className="text-white font-bold text-xs md:text-lg">
          E-COMMERCE
        </Link>
        <div className="flex gap-5 md:gap-8 text-white text-lg font-bold items-center">
          {navLinks.map((helo, index) => (
            <Link href={helo.path} key={index}>
              <div className="hidden md:block">{helo.name}</div>
            </Link>
          ))}

          {accessToken ? (
            <button
              onClick={handleLogout}
              className="text-xs md:text-lg cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <Link href="/login" className="text-xs md:text-lg">
              Login
            </Link>
          )}
          <Cart />
          <Sidebar />
        </div>
      </div>
    </nav>
  );
};

export default Header;
