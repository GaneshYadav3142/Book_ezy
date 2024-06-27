import Image from 'next/image'
import React from 'react'

const Navbar = () => {

  
  return (
    <div className='w-full bg-pink-300 roboto'>
      <div className='flex items-center'>
        <div className=' w-[50%] p-1 lg:ml-48 m-3'>Bookezy</div>
        <div className='w-[50%] flex gap-3'>
            <span className='m-2 p-2 lg:block hidden'>INR</span>
            <span className='m-2 p-1 lg:block hidden'> 
                <Image width={100} height={100} src="https://t-cf.bstatic.com/design-assets/assets/v3.117.2/images-flags/In@3x.png" alt="country" className='w-6 rounded-full'/>
            </span>
            <span className=''></span>
            <span className='p-2 m-2 lg:block hidden'>List your property</span>
            <span className='m-2 p-2 lg:block hidden'>Login</span>
            <span className='m-2 ml-0 p-2 lg:block hidden'>Register</span>
        </div>
      </div>
      <div className='lg:flex items-center gap-10 lg:ml-44 p-3'>
        <div className='m-1 p-1 rounded-full'>
       <span>Stays</span>
       </div>
       <div  className='m-1 p-1 rounded-full'>
       <span>Flights</span>
       </div>
       <div  className='m-1 p-1 rounded-full'>
       <span>Flight+Hotel</span>
       </div>
       <div  className='m-1 p-1 rounded-full'>
       <span>Car rentals</span>
       </div>
       <div  className='m-1 p-1 rounded-full'>
       <span>Attractions</span>
       </div>
       <div  className='m-1 p-1 rounded-full' >
       <span>Airport taxis</span>
       </div>
      </div>
    </div>
  )
}

export default Navbar