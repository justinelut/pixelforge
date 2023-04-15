"use client"

import React from 'react'
import './../assets'
import Image from 'next/image'
const AboutMe = (params) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
          <div className="max-h-96 md:h-screen">
            <Image className="w-screen h-screen object-cover object-top" src={params && params.myphoto.url} width={params && params.myphoto.width} height={params && params.myphoto.height}/>
          </div>
          <div className="flex bg-gray-100 p-10">
            <div className="mb-auto mt-auto max-w-lg">
              <h1 className="text-3xl uppercase">{params && params.myname}</h1>
              <p className="font-semibold mb-5">{params && params.mytitle}</p>
              <p>{params && params.myheadline}</p>
              <button className="bg-black rounded-md py-3 px-7 mt-6 text-white">Email Me</button>
            </div>
          </div>
        </div>
      </div>

      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">

            {
              params && params.othertitles.map((othertitle, index) => (
                <div key={index} className="w-full md:w-1/2 xl:w-1/3 px-4">
                  <div className="bg-white rounded-lg overflow-hidden mb-10">
                    <Image
                      src={othertitle.titleimage.sizes.card.url}
                      alt="image"
                      className="w-full"
                      width={othertitle.titleimage.sizes.card.width}
                      height={othertitle.titleimage.sizes.card.height}
                    />
                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                      <h3>
                        <a
                          href="javascript:void(0)"
                          className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                          {othertitle.title}
                        </a>
                      </h3>
                      <p className="text-base text-body-color leading-relaxed mb-7">
                        {
                          othertitle.description
                        }
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

    </>
  )
}

export default AboutMe