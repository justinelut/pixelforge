"use client"
import React from 'react'
import './../Constants'
import { AppText } from './../Constants'
import './../assets'
import { homeImage } from './../assets'
import './Home.css'
import Typewriter from 'typewriter-effect';
import Image from 'next/image'
import Link from 'next/link'
import DownloadButton from './FileDownload';


const Home = ({featured, iam, resume}) => {
  return (
    
    <div className='flex p-[20px] md:px-20 justify-between flex-col md:flex-row'>
      <div className='flex w-full flex-row  justify-end'>
        <div className='flex w-full flex-col  items-start content-end'>
          <h1 className='text-[35px] md:text-[40px] font-bold '>{AppText.hello}</h1>
          <div className='flex'>
            <h1 className='text-[35px]  md:text-[40px] font-bold mr-3'>{AppText.Iam}</h1>
            <Typewriter
              options={{
                strings: iam && iam.map(item => item.Skills),
                autoStart: true,
                loop: true,
              }}
              className="text-lg md:text-2xl"
            />
          </div>
          <DownloadButton pdfUrl={resume && resume.url} fileName="resume.pdf" text="Download Resume" className="my-[20px]" />
        </div>
      </div>
      <div className=' w-full flex justify-center'>
        <Image src={featured && featured.sizes.card.url} className="w-full md:w-[300px]" />
      </div>
      <div className="my-10">
        {/* contents below */}
      </div>
    </div>


  )
}

export default Home