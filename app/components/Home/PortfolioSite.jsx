import Image from 'next/image'
import React from 'react'

const PortfolioSite = () => {
  return (
    <section className='py-10'>
        <div className="container">
            <ul className='flex justify-center items-center gap-2 text-base text-primary font-regular'>
                <li>
                    <p>All</p>
                </li>
                <li>
                    <p>/ </p>
                </li>
                <li>
                    <p>Branding</p>
                </li>
                <li>
                    <p>/ </p>
                </li>
                <li>
                    <p>Illustration</p>
                </li>
                <li>
                    <p>/</p>
                </li>
                <li>
                    <p>Logo</p>
                </li>
            </ul>
            <div className='grid grid-cols-3 gap-7 mt-10'>
                <Image src="/brand1.png"alt='brand1' width={350} height={291} layout='responsive'/>
                 <Image src="/brand2.png"alt='brand2' width={350} height={291}  layout='responsive' />
                <Image src="/brand3.png"alt='brand3' width={350} height={291}  layout='responsive'/>
                <Image src="/brand4.png"alt='brand4' width={350} height={291}  layout='responsive'/>
                <Image src="/brand5.png"alt='brand5' width={350} height={291}  layout='responsive'/>
                <Image src="/brand6.png"alt='brand6' width={350} height={291}  layout='responsive'/>
                <Image src="/brand7.png"alt='brand7' width={350} height={291}  layout='responsive'/>
                <Image src="/brand8.png"alt='brand8' width={350} height={291} layout='responsive'/>
                <Image src="/brand9.png"alt='brand9' width={350} height={291}  layout='responsive'/>

                  
            </div>
            
        </div>
    </section>
  )
}

export default PortfolioSite