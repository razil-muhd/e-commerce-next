import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <div className="bg-slate-100 flex flex-col md:flex-row justify-between px-5  text-black font-bold w-full ">
                <div className="text-center ">
                    <h1 className="text-lg  py-10 ml-5">E-Commerce</h1>
                </div>

               
                <div className="mt-6 ">
                    <h1 className="text-base  text-center ">Links</h1>
                    <div className="py-3 text-center ">
                        <Link className="font-light hover:text-blue-500 block" href="..">Login</Link>
                        <Link className="font-light hover:text-blue-500 block" href="..">Contact</Link>
                        <Link className="font-light hover:text-blue-500 block" href="..">Shop</Link>
                    </div>
                </div>


                <div className="mt-6 ">
                    <h1 className="text-base  text-center ">Get in Touch</h1>
                    <p className="font-light py-3 text-sm  text-center ">
                        Address: Fort Road Near City Centre New Bustand<br />
                        Kannur<br />
                        ph: 98 567 45 432<br />
                        mail: ecommerce@gmail.com
                    </p>
                    <div className="flex justify-center  gap-2 py-2">
                        <div className="h-8 w-8 relative">
                            <Link href=".."><Image src="/svg/insta.svg" alt="Instagram" fill /></Link>
                        </div>
                        <div className="h-8 w-8 relative ">
                            <Link href=".."><Image src="/svg/fb.svg" alt="Facebook" fill /></Link>
                        </div>
                        <div className="h-8 w-8 relative">
                            <Link href=".."><Image src="/svg/whatsapp.svg" alt="WhatsApp" fill  /></Link>
                        </div>
                    </div>
                </div>
            </div>

         
            <div className="bg-white w-full flex justify-center">
                <h1 className="py-3 text-xs ">
                    Crafted by Razil
                </h1>
            </div>
        </div>
    );
};

export default Footer;
