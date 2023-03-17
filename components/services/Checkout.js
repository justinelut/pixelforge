"use client"
import { useState } from 'react';
import { Signup, Login } from '../'
import { useStore } from '../../store/store';
import Payment from "./Payment"

export default function Checkout() {
    const [showLogin, setShowLogin] = useState(true);
    const {loginToken} = useStore()

    const handleLinkClick = (e) => {
        e.preventDefault()
        setShowLogin(!showLogin);
    };

    return (
        <section className="pt-24 md:mt-0 md:h-screen md:text-left bg-secondary">
         
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

                    <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                        <div className="bg-white rounded shadow-2xl p-7 sm:p-10">

                            {loginToken && loginToken ? (<Payment />) : (
                                <>

                                    <h3 className="mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">
                                        <div className="flex justify-center mt-4">
                                            {showLogin ? (<><div className="text-sm mx-2 text-green-300 py-2 px-4 focus:outline-none">Dont have an account ?</div><button className="mx-2 text-green py-2 px-4 rounded-full hover:bg-gray-200 focus:outline-none" onClick={() => setShowLogin(false)}>
                                                Signup
                                            </button> </>) : (<><div className="text-sm mx-2 text-green-300 py-2 px-4 focus:outline-none">Have an account ?</div><button className="mx-2 text-green-300 py-2 px-4 rounded-full hover:bg-gray-200 focus:outline-none" onClick={handleLinkClick}>
                                                Login
                                            </button></>)}


                                        </div>
                                    </h3>
                                    {showLogin ? <Login /> : <Signup />}
                                </>
                            )}

                            
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};