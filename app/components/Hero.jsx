"use client"
import Image from 'next/image'
import React from 'react'
import {TypeAnimation} from 'react-type-animation';
import overflow from '../../public/overflow2.jpg'



export default function Hero() {
  return (
   <section>
    <div className='grid grid-cols-1 lg:grid-cols-12'>
     <div className='col-span-7 place-self-center text-center sm:text-left'>
         <h1 className='text-white mb-4 text-4xl sm:text-5xl  lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello,I'm {""}</span>
          <br />
          <TypeAnimation
            sequence={[
                '  Claudel',
                1000,
                'Web Developer',
                1000, 
                'Mobile Developer',
                1000,
                'UI/Ux Designer',
                1000,
            ]}
            wrapper="span"
            speed={50} 
            repeat={Infinity}/>
          
         </h1>
          <p className='text-[#ADB7BE]  text-base sm:text-lg lg:text-xl mb-6 '>
            Self taught front-end developer who is able to realise project from the ground up.
            I'm well versed in key languages and i'm able to design,code and deploy in an organised and efficient manner
          </p>
          
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0 '>
          <div >
            <Image src={overflow}
           className='rounded-full '
            alt='logo'
            width='{300}' 
            height='{300}'/> 

          </div>

        </div>
     </div>
   </section>
  )
}
