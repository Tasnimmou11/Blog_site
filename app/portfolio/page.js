import Image from 'next/image'
import React from 'react'
import { CgSearch } from "react-icons/cg";
import { CiTwitter } from "react-icons/ci";
import { PiFacebookLogoBold } from "react-icons/pi";
import { AiOutlinePinterest } from "react-icons/ai";
import Link from 'next/link';
import { GoArrowLeft } from "react-icons/go";
import Comment from '../components/Portfolio/Comment';
import { GoArrowRight } from "react-icons/go";

const page = () => {
  return (
    <section>
        <div className='container '>
           <div className='flex justify-between my-8'>
            <div>
                <Image src="/portfolio.png" alt="portfolioimage" width={785} height={440} />
            <h1 className='font-medium text-4xl text-primary'>Balance is important in design</h1>
            <ul className='flex gap-2 font-medium py-3 text-sm text-primary'>
                <li>
                    <p>By Caliberthemes</p>
                </li>
                <li>
                    <p>/</p>
                </li>
                <li>
                    <p>In Inspirational</p>
                </li>
                <li>
                    <p>/</p>
                </li>
                <li>
                    <p>On 22 Sep 2019</p>
                </li>
            </ul>
            <p className='w-[778px] common_paragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante,
dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.Etiam
ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
</p>
<p className='w-[778px] common_paragraph py-7 '>Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.Etiam ultricies
nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
</p>
            </div>

<div >
    <div className='flex justify-between border border-[#E6E6E6] px-4 py-2'>
    <input
          type="text"
          placeholder="Search..."
          className="bg-transparent  focus:outline-none text-gray-700 placeholder-gray-400"
        />
        <button>
          <CgSearch className='text-primary text-lg ' />
        </button>
        </div>
        <h2 className='font-medium text-3xl pt-10 pb-4 border-b border-[#E6E6E6] text-primary'>Recent Posts</h2>
        <p className='common_paragraph pb-3 border-b border-[#E6E6E6]'>Balance is important in design</p>
        <p className='common_paragraph pb-3 border-b border-[#E6E6E6]'>Tips for organizing things</p>
        <p className='common_paragraph pb-3 border-b border-[#E6E6E6]'>The shades of grey</p>
        <p className='common_paragraph pb-3 border-b border-[#E6E6E6]'>Inspiration from nature</p>
        <h2 className='font-medium text-3xl pt-10 pb-4 border-b border-[#E6E6E6] text-primary'>Categories</h2>
        <p className='common_paragraph pb-3 border-b border-[#E6E6E6]'>Artificial</p>
        <p className='common_paragraph pb-3 border-b border-[#E6E6E6]'>Inspirational</p>
        <p className='common_paragraph pb-3 border-b border-[#E6E6E6]'>Intelligence</p>
        <p className='common_paragraph pb-3 border-b border-[#E6E6E6]'>Motivational</p>
        <h2 className='font-medium text-3xl pt-10 pb-4 border-b border-[#E6E6E6] text-primary'>Tags</h2>
        <div className='flex gap-2 my-2'>
            <button className='common_button'>Agency</button>
             <button className='common_button'>Creative</button>
             <button className='common_button'>Digital</button>
            </div>
        <div className='flex gap-2 my-2'>
            <button className='common_button'>Exceptional</button>
            <button className='common_button'>Media</button>
            <button className='common_button'>SEO</button>
        </div>
        <div className='flex gap-2'>
            <button className='common_button'>Minimal</button>
            <button className='common_button'>Photography</button>
            <button className='common_button'>Tips</button>
        </div>
</div>
</div>
          <h2 className='font-medium text-3xl text-primary'>The most important factor</h2>
          <p  className='w-80 common_paragraph py-5  pl-10'>Aenean sodales sem sed erat auctor semper
Cras dictum iaculis fringilla. Proin malesuada
Etiam sodales quam ac maximus sodales</p>  
        <p className='common_paragraph'>The most important factor</p>
        <div className='flex gap-2 my-10'>
            <button className='common_button'>Agency</button>
             <button className='common_button'>Creative</button>
             <button className='common_button'>Digital</button>
            </div>
            <div className='flex justify-between bg-[#F5F5F5]'>
                <h2 className='font-medium text-lg text-primary pl-5 py-4'>Share</h2>
                <div>
                    <ul className='flex items-center py-4 pr-5 gap-4 '>
                    <li>
                        <Link href="/"><PiFacebookLogoBold className='text-2xl text-primary' /></Link>
                    </li>
                    <li>
                        <Link href="/"><CiTwitter className='text-2xl  text-primary' /></Link>
                    </li>
                   
                    <li>
                        <Link href="/"><AiOutlinePinterest className='text-2xl  text-primary' /></Link>
                    </li>
                </ul>
                </div>
            </div >
            <h2 className='font-medium text-3xl text-primary border-b border-gray-300 py-4'>2 Comments</h2>
            {/* <div className='w-[778px] py-10 flex items-start gap-5 border-b border-gray-300'>
                <div>
                    <Image src="/profile.png" alt="profile_img" width={80} height={80} className='rounded-full'/>
                </div>
                <div className='flex flex-col'>
                    <h3 className='font-medium text-primary text-lg'>caliberthemes</h3>
                    <span className='font-regular text-sm text-primary'>September 22, 2019 at 9:43 am</span>
                    <p className='w-[675px] common_paragraph pt-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
Cum sociis Theme natoque penatibus et magnis dis parturient montes</p>
                    <button className='common_button text-primary mt-6 ml-auto '>Reply</button>
                </div>
                </div> */}
                <Comment/>
                 <Comment/>
                <div className='w-[778px]'>
                    <h2 className='font-medium text-3xl text-primary pt-20 pb-4 border-b border-gray-300'>
                        Leave a Reply
                    </h2>
                   
                    <form method="post" action="#">
    <div className="mb-4">
       <p className='common_paragraph py-4'>Your email address will not be published. Required fields are marked *</p>
      <input
        className="mt-1 p-2 w-full border border-gray-300 h-48 text-white"
        type="text"
      />
    </div>

    <div className='flex gap-4 '>
    
       <input
        className="mt-1 p-2 w-full border border-gray-300 rounded-md text-secondary"
        placeholder='Name'
        name="name"
        id="name"
        type="text"
      />
      <input
        className="mt-1 p-2 w-full border border-gray-300 rounded-md text-secondary"
        placeholder='Email'
        name="email"
        id="email"
        type="email"
      />
     <input
        className="mt-1 p-2 w-full  border border-gray-300 rounded-md text-secondary"
        placeholder='Website'
        name="website"
        id=""
        type="url"
      />

    </div>

    <div class="flex justify-start">
      <button
        className="hover:bg-primary hover:text-white text-base  border border-gray-300  text-primary px-5 py-3 font-medium mt-8 "
        type="submit"
      >
        Post Comment
      </button>
    </div>
  </form>
  {/* arrow */}
  <div className='py-14 flex justify-between'>
   <button className='flex gap-2 items-center hover:bg-primary hover:text-white   text-sm  text-primary  font-normal  py-2 px-3'>
        <GoArrowLeft />
       <span>PREV</span>
      </button>
      <button className='flex gap-2 items-center hover:bg-primary hover:text-white  text-sm  text-primary  font-normal  py-2 px-3'>
        <GoArrowRight />
       <span>PREV</span>
      </button>
    </div>
                </div>
                </div>
    </section>
  )
}


export default page



















