import Image from 'next/image'
import React from 'react'

const Comment = () => {
  return (
   <div className='w-[778px] py-10 flex items-start gap-5 border-b border-gray-300'>
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
               </div>
  
)
}

export default Comment