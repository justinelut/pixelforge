"use client"
import React, { useState } from 'react'
import { AppText, portfolio } from '../Constants'
import SectionHeading from '../Shared/SectionHeading';
import { robo } from './../assets/index'
import Image from 'next/image'
import { featuredAnimations } from '../../'
import { motion, AnimatePresence } from 'framer-motion'


const Portfolio = (params) => {
    const [portfolioList, setPortfolioList] = useState(params && params.myprojects);
    const filterPortfolio = (e) => {
        const result = params && params.myprojects.filter(item => item.myportfoliotype.toLowerCase() == e.target.value.toLowerCase());
        setPortfolioList(result)
    }


    return (
        <motion.div initial="initial" animate="animate" className='mt-5 flex justify-center flex-col'>
            <div className='flex flex-row px-6 md:px-0 items-center justify-center'>
                <SectionHeading firstTitle={AppText.Creative} secondTitle={AppText.Portfolio} />
                <Image src={robo} className="w-[70px] ml-5 animate-bounce" />
            </div>
            <div className='flex flex-row justify-evenly gap-2 px-4 md:px-72'>

                {
                    params && params.myprojects.map((type, index) => (
                        <button value={type.myportfoliotype} onClick={filterPortfolio} key={index} className='border-purple-600 border-2 
      text-purple-600 focus:text-white
      active:bg-purple-500 p-1 px-4 rounded-md
      focus:ring-violet-300 focus:bg-purple-600 focus:ring '>{type.myportfoliotype}</button>
                    ))
                }

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    md:px-24 lg:px-48 p-4 '>
                {portfolioList && portfolioList.map((item, index) => (
                    // <AnimatePresence>
                        <motion.div variants={featuredAnimations} transition={{ duration: 1, delay: index === 0 ? 0 : index * 0.2 }} key={index} className='p-2 flex flex-col m-2 rounded-lg bg-purple-100
        transition-all ease-in-out group hover:scale-110'>
                            <Image src={item.portfolioimage.sizes.card.url} width={item.portfolioimage.sizes.card.width} height={item.portfolioimage.sizes.card.height} className="h-[180px] object-cover rounded-lg" />
                            <h1 className='text-[14px] group-hover:scale-110 mt-2 text-center  font-bold'>{item.portfoliotitle}</h1>
                            <h1 className='text-[12px] text-gray-500 px-6 pb-3'>{item.portfoliodesc}</h1>
                        </motion.div>
                    // </AnimatePresence>
                ))}
            </div>
        </motion.div>

    )
}

export default Portfolio