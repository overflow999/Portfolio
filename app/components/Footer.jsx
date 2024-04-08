import React from "react";
import logo from '../../public/logo2.png'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Link href={"/"}> 
        <Image src={logo} alt="Logo"  className='rounded-full  w-20 h-20 opacity-50'/> 
      </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;