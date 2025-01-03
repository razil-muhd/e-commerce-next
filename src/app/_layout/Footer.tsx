import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <div className="bg-slate-100 flex flex-col md:flex-row justify-between px-5 sm:px-10 md:px-20 py-6 md:py-3 text-black font-bold w-full">
                <div className="text-center md:text-left">
                    <h1 className="text-lg md:text-xl py-2">E-Commerce</h1>
                </div>

               
                <div className="mt-6 md:mt-0">
                    <h1 className="text-base md:text-lg text-center md:text-left">Links</h1>
                    <div className="py-3 text-center md:text-left">
                        <Link className="font-light hover:text-blue-500 block" href="..">Login</Link>
                        <Link className="font-light hover:text-blue-500 block" href="..">Contact</Link>
                        <Link className="font-light hover:text-blue-500 block" href="..">Shop</Link>
                    </div>
                </div>


                <div className="mt-6 md:mt-0">
                    <h1 className="text-base md:text-lg text-center md:text-left">Get in Touch</h1>
                    <p className="font-light py-3 text-sm md:text-base text-center md:text-left">
                        Address: Fort Road Near City Centre New Bustand<br />
                        Kannur<br />
                        ph: 98 567 45 432<br />
                        mail: ecommerce@gmail.com
                    </p>
                    <div className="flex justify-center md:justify-start gap-4 py-3">
                        <div className="h-8 w-8 relative">
                            <Link href=".."><Image src="/svg/insta.svg" alt="Instagram" fill /></Link>
                        </div>
                        <div className="h-8 w-8 relative">
                            <Link href=".."><Image src="/svg/fb.svg" alt="Facebook" fill /></Link>
                        </div>
                        <div className="h-8 w-8 relative">
                            <Link href=".."><Image src="/svg/whatsapp.svg" alt="WhatsApp" fill /></Link>
                        </div>
                    </div>
                </div>
            </div>

         
            <div className="bg-white w-full flex justify-center">
                <h1 className="py-3 text-xs md:text-sm">
                    Crafted by Razil
                </h1>
            </div>
        </div>
    );
};

export default Footer;
