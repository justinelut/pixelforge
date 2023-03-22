"use client"
import { useState } from 'react';
import { Signup, Login } from '../'
import { useStore } from '../../store/store';
import Payment from "./Payment"

export default function Checkout() {
    const [showLogin, setShowLogin] = useState(true);
    const { loginToken, purchasedService } = useStore()

    const handleLinkClick = (e) => {
        e.preventDefault()
        setShowLogin(!showLogin);
    };



    return (
        <section className="pt-24 md:mt-0 md:h-screen md:text-left bg-secondary">
            {purchasedService && purchasedService.Services.docs.map(purchase =>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col justify-between lg:flex-row">
                        <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                    <span className="inline-block text-deep-purple-accent-400">
                                        {purchase.name}
                                    </span>
                                </h2>
                                <p className="text-base text-gray-700 md:text-lg">
                                    {purchase.description}
                                </p>
                            </div>
                            <hr className="mb-6 border-gray-300" />
                            <div className="flex">
                                <div className="flex flex-col">
                                    <div className="text-sm font-semibold">
                                        To finish the purchase process, Login or create an account.
                                        <br></br>
                                        <b>If you have already logged in, proceed with payment by entering your 
                                            phone number and generating payment procedure.
                                        </b>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10 lg:mb-10 md:mb-10">

                                {loginToken && loginToken ? (<Payment plans={purchase.plans} name={purchase.name} id={purchase.id}/>) : (
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
            )}
        </section>
    );
};