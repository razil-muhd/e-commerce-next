import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <div className="bg-slate-100   flex justify-between   px-20  py-3 text-black font-bold ">
                <h1 className='py-12'>E-Commerce</h1>
                <div>
                    <h1>Links</h1>
                     <div className='py-3'>
                    <Link className="font-light hover:text-blue-500 " href='..'>Login</Link><br />
                    <Link className="font-light  hover:text-blue-500" href='..'>Contact</Link><br />
                    <Link className="font-light  hover:text-blue-500" href='..'>Shop</Link>
                    </div>
                </div>
                <div>
                    <h1>Get in Touch</h1>
                    <p className="font-light py-3">Address: Fort Road Near City Centre New Bustand<br />
                        Kannur<br />
                        ph:98 567 45 432<br />
                        mail:ecommerce@gmail.com</p>
                        <div className='flex gap-8 py-5'>
                    <div className='h-12 w-10 relative'> <Link href=".."><Image  src='/svg/insta.svg' alt="fb" fill/></Link></div>
                    <div className='h-12 w-10 relative'><Link href=".."><Image  src='/svg/fb.svg' alt="fb" fill/></Link></div>
                    <div className='h-12 w-10 relative'><Link href=".."><Image  src='/svg/whatsapp.svg' alt="fb" fill/></Link></div>
                    </div>
                </div>
            </div>
            <div className='bg-white w-[100%] flex justify-center'>
                 <h1 className='py-3 text-sm'>
                    Crafted by Razil
                 </h1>

            </div>

        </div>
        


    )
}

export default Footer
