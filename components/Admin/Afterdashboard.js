import React from 'react';

function Dashboard() {
    return (
        <section className="relative pb-20 overflow-hidden">
            <div className="relative container px-4 mx-auto">
                <div className="max-w-xl xl:max-w-4xl">
                    <h1 className="font-heading text-5xl xs:text-6xl md:text-8xl xl:text-10xl font-bold text-gray-900 mb-8 sm:mb-14">
                        <span>A content creation platform</span>
                        <span className="font-serif italic"> PixeLAbs Inc</span>
                    </h1>
                    <div className="md:flex mb-14 max-w-xs sm:max-w-sm md:max-w-none">
                        <div className="mb-6 md:mb-0 md:mr-8 pt-3">
                            <svg width="84" height="10" viewbox="0 0 84 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4.25C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75L1 4.25ZM84 5.00001L76.5 0.669879L76.5 9.33013L84 5.00001ZM1 5.75L77.25 5.75001L77.25 4.25001L1 4.25L1 5.75Z" fill="#1E254C"></path>
                            </svg>
                        </div>
                        <div className="max-w-md">
                            <p className="md:text-xl text-gray-900 font-semibold">We help you push&apos; Your business to&nbsp;the limit of&apos; the modern world</p>
                        </div>
                    </div>
                </div>
                <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
                        <div class="text-center md:border-r">
                            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">144K</h6>
                            <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                                Downloads
                            </p>
                        </div>
                        <div class="text-center md:border-r">
                            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">12.9K</h6>
                            <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                                Subscribers
                            </p>
                        </div>
                        <div class="text-center md:border-r">
                            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">48.3K</h6>
                            <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                                Users
                            </p>
                        </div>
                        <div class="text-center">
                            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">24.5K</h6>
                            <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                                Cookies
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dashboard