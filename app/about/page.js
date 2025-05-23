import React from 'react'
import AboutBanner from '../components/About/AboutBanner'
import Image from 'next/image'
import AboutPng from '../components/About/AboutPng'

const page = () => {
  return (
    <section className=''>
        <div className='pb-20'>
          <AboutBanner/>
        </div>
       
            <div className='container'>
        <h1 className='font-medium text-4xl text-primary'>About Me</h1>
        <p className='font-regular text-lg text-secondary pt-6 pb-12 w-[1100px]' >I’m a Product designer currently working as freelancer. I’m from Iceland but my work is essentially in Sydney. Specialized in graphic,
webdesign and interface design. I’ve been working as a designer for six years. I’ve Completed my education from most popular universities.
Learning is the essential part of my life. I take on freelance projects that pique my interest. Outside of my work, I enjoy good food and the
outdoors games with friends and relatives. I also spend my spare time in libraries.</p>
        <div className='flex gap-7 pb-20'>
            <AboutPng/>
            <AboutPng/>
            <AboutPng/>
            <AboutPng/>
        </div>
        <h1 className='font-medium text-4xl text-primary '>Education / Experiences</h1>
        <div className='flex gap-20'>
            <div className='pt-8'>
            <h4 className='font-medium text-base text-primary'>2015 - 2016</h4>
            <p className='font-regular text-sm text-secondary border-b pb-4 boreder-[#F3F3F3]'>I am a graduate of the design at the Newyork University</p>
        </div>
       <div className='pt-8'>
            <h4 className='font-medium text-base text-primary'>2015 - 2016</h4>
            <p className='font-regular text-sm text-secondary  border-b pb-4 boreder-[#F3F3F3]'>I am a graduate of the design at the Newyork University</p>
        </div>
        </div>

        <div className='flex gap-20'>
            <div className='pt-8'>
            <h4 className='font-medium text-base text-primary'>2014 - 2015</h4>
            <p className='font-regular text-sm text-secondary '>I am a computer graduate at the California State University.</p>
        </div>
       <div className='pt-8'>
            <h4 className='font-medium text-base text-primary'>2016 - 2017</h4>
            <p className='font-regular text-sm text-secondary  '>I enjoyed working at converse studio as a product designer.</p>
        </div>
        </div>
        <div className='py-16 my-20 flex  justify-around bg-[#F3F3F3]'>
            <h1 className='font-medium text-5xl text-primary'>Let’s work together!</h1>
            <button className='font-medium text-base bg-primary text-white py-5 px-9'>GET IN TOUCH</button>
        </div>
       </div>
        

    </section>
  )
}

export default page