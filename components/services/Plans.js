"use client"

import { useState } from 'react';
import {Basic, Advanced, Pro} from './plan'


export default function Plans(){
    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    return (
        <section className="pt-24 md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col justify-between lg:flex-row">
                <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            The quick, brown fox
                            <br className="hidden md:block" />
                            jumps over{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                a lazy dog
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae. explicabo.
                        </p>
                    </div>
                    <hr className="mb-6 border-gray-300" />
                    <div className="flex">
                        <a href="/" aria-label="Play Song" className="mr-3">
                            <div className="flex items-center justify-center w-10 h-10 text-white transition duration-300 transform rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 hover:scale-110">
                                <svg className="w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                                </svg>
                            </div>
                        </a>
                        <div className="flex flex-col">
                            <div className="text-sm font-semibold">
                                Rich the kid &amp; Famous Dex
                            </div>
                            <div className="text-xs text-gray-700">Rich Forever Intro</div>
                        </div>
                    </div>
                </div>
                <div className="px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-2/5">
                    <div className="mb-5 font-semibold">Choose A Plan</div>

                        <div className="flex flex-row items-center justify-center space-x-4 mb-2">
                            <button
                                className={`px-4 py-2 ${activeButton === 1 ? 'bg-blue-500 text-white' : 'bg-gray-500 text-gray-200'
                                    }`}
                                onClick={() => handleButtonClick(1)}
                            >
                                Basic
                            </button>
                            <button
                                className={`px-4 py-2 ${activeButton === 2 ? 'bg-green-500 text-white' : 'bg-gray-500 text-gray-200'
                                    }`}
                                onClick={() => handleButtonClick(2)}
                            >
                                Advanced
                            </button>
                            <button
                                className={`px-4 py-2 ${activeButton === 3 ? 'bg-red-500 text-white' : 'bg-gray-500 text-gray-200'
                                    }`}
                                onClick={() => handleButtonClick(3)}
                            >
                                Pro
                            </button>
                        </div>
                            {activeButton && (
                             <>
                                    {activeButton === 1 && (
                                      
                                          <Basic />
                                       
                                    )}
                                    {activeButton === 2 && (
                                       
                                          <Advanced />
                                       
                                    )}
                                    {activeButton === 3 && (
                                       
                                           <Pro />
                                       
                                    )}
                                </>
                            )}
                        
                    
                </div>
            </div>
        </div>
        </section>
    );
};