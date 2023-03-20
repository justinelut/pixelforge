"use client"

import Image from 'next/image';
import { useRef } from 'react'
import { useStore } from "../store/store";


const Navbar = () => {
    const { firstName, loginToken } = useStore()
    const showMenu = useRef(null);

    function handleClick() {
        showMenu.current.classList.remove("hidden");
    }
    function closeMenu() {
        showMenu.current.classList.add("hidden");
    }

    const logout = () =>{
        useStore.persist.clearStorage()
        window.location.reload();
    }
    return (
        <>
            <nav className="fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10">
                <div className="flex items-center">
                    <Image src="/image/Logo_black.svg" alt="Logo" height={16} width={64} />
                </div>
                <ul className="font-montserrat items-center hidden md:flex">
                    <li className="mx-3">
                        <a className="growing-underline" href="howitworks">
                            How it works
                        </a>
                    </li>
                    <li className="growing-underline mx-3">
                        <a href="features">Features</a>
                    </li>
                    <li className="growing-underline mx-3">
                        <a href="pricing">Pricing</a>
                    </li>
                </ul>
                <div className="font-montserrat hidden md:block">
                    <button className="mr-6">{firstName && firstName ? "Hello " + firstName : "Login"}</button>

                    {loginToken && loginToken ? (<button onClick={logout} className="py-2 px-4 text-white bg-black rounded-3xl">Logout</button>) : (<button className="py-2 px-4 text-white bg-black rounded-3xl">Signup</button>)}

                </div>
                <div id="showMenu" onClick={handleClick} className="md:hidden">

                    <Image src="/image/logos/Menu.svg" alt="Menu icon" height={24} width={24} />
                </div>
            </nav>
            <div id='mobileNav' ref={showMenu} className="hidden px-4 py-6 fixed top-0 left-0 h-full w-full bg-secondary z-20 animate-fade-in-down">
                <div id="hideMenu" onClick={closeMenu} className="flex justify-end animate-fade-out-up">
                    <Image src="/image/logos/Cross.svg" alt="" height={64} width={64} />
                </div>
                <ul className="font-montserrat flex flex-col mx-8 my-24 items-center text-3xl">
                    <li className="my-6">
                        <a href="howitworks">How it works</a>
                    </li>
                    <li className="my-6">
                        <a href="features">Features</a>
                    </li>
                    <li className="my-6">
                        <a href="pricing">Pricing</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
