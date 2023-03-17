"use client"
import Image from 'next/image';
import Link from 'next/link'
import { useStore } from "../store/store";

const HeroSection = () => {
    const {home} = useStore()
    return (
        <section className="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
            <div className="md:flex-1 md:mr-10">
                <h1 className="font-pt-serif text-5xl font-bold mb-7">
                    A headline for your{' '}

                    {/* {home && home.map(hom=>(
                        <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
                            {home.headline}
                        </span>
                    ))} */}
                   
                </h1>
                <p className="font-pt-serif font-normal mb-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum
                    tempore consectetur voluptas, cumque nobis laboriosam voluptatem.
                </p>
                <div className="font-montserrat">
                    <Link href="/services" className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
                        Services
                    </Link>
                    <Link href="/contactus" className="px-6 py-4 border-2 border-black border-solid rounded-lg">
                        Contact us
                    </Link>
                </div>
            </div>
            <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
                <div className="relative">
                    <Image src="/image/Highlight1.svg" alt="highlight" width={100} height={50} />
                </div>
                <Image src="/image/MacBook Pro.png" alt="Macbook" width={1000} height={667} />
                <div className="relative">
                    <Image src="/image/Highlight2.svg" alt="highlight2" width={100} height={50} />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
