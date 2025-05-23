import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
   <nav className='py-10'>
    <div className="container flex justify-between  bg-white">
        <div className=''>
           <Image src="/logo.png"width={50} height={200} alt='logo'/>
        </div>
        <ul className='flex items-center gap-8 text-xl font-semibold'>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio </Link>
          </li>
          




        </ul>
    </div>
   </nav>
  )
}

export default Navbar