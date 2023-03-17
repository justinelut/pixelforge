"use client"
import { useStore } from "../store/store";
import Image from 'next/image'
import Link from 'next/link'

export default function Featured() {
const {services} = useStore()
   
    return (
        <section className="bg-secondary">

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
           
          
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">

                {services && services.Services.docs.map(service => (
                        
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <Image
                        src={service.image.sizes.card.url}
                        className="object-cover w-full h-64"
                        width={service.image.sizes.card.width}
                        height={service.image.sizes.card.height}
                        alt=""
                    />
                    <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                            <a
                                href="/"
                                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                aria-label="Category"
                                title="traveling"
                            >
                               {service.name}
                            </a>
                            <span className="text-gray-600">— 28 Dec 2020</span>
                        </p>
                        <div className="font-montserrat font-bold text-4xl mb-4">
                            KSH {service.plans[0].price}<span className="font-normal text-base"></span>
                        </div>

                        <p className="mb-2 text-gray-700">
                           {service.description}
                        </p>
                           
                        <div className="font-montserrat mt-3">
                            <Link href={service.slug} className="w-full bg-inherit px-4 py-4 font-bold border-2 border-black border-solid text-black-500 mr-2 mb-2">
                                Purchase
                            </Link>
                        </div>

                    </div>
                </div>
                ))}

           </div>
         </div>
</section>
       
    );
};