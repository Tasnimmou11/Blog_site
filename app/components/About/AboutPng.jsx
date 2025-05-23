import Image from 'next/image'
import React from 'react'

const AboutPng = () => {
  return (
    <div className='bg-[#F3F3F3] py-16 px-24'>
                <Image src="/aboutpng1.png" alt='aboutpng1'width={40} height={40} className='pl-4'/>
                <p className='font-medium text-lg text-primary text-center pt-4'>Branding</p>
            </div>
  )
}

export default AboutPng