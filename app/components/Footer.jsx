import Link from 'next/link'
import React from 'react'
import { CiTwitter } from "react-icons/ci";
import { PiFacebookLogoBold } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { AiOutlinePinterest } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className='bg-primary'>
        <div className="container ">
            <div className='flex justify-between py-9'>
                <p className='text-white'>© 2020 CaliberThemes</p>
                <ul className='flex gap-4 justify-around'>
                    <li>
                        <Link href="/"><PiFacebookLogoBold className='text-3xl text-white' /></Link>
                    </li>
                    <li>
                        <Link href="/"><CiTwitter className='text-3xl  text-white' /></Link>
                    </li>
                    <li>
                        <Link href="/"><TbWorld className='text-3xl  text-white' /></Link>
                    </li>
                    <li>
                        <Link href="/"><AiOutlinePinterest className='text-3xl  text-white' /></Link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer