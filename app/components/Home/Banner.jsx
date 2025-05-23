import React from 'react'

const Banner = () => {
  return (
     <section className={`py-80 bg-[url(/banner.png)] bg-cover `}>
      
       <div className="container text-center">
            <h1 className='text-primary font-medium text-6xl'>Creative Studio</h1>
            <p className='text-secondary font-normal text-xl py-5'>We turn ideas into reality.</p>

        </div>
    </section>
  )
}

export default Banner