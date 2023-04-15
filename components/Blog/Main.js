"use client"
import axios from 'axios'
import useSWR from 'swr'
import Image from 'next/image'
import Link from 'next/link'
import FormatDay from '../../utilities/DateFormatter'
import { ComponentsAnimations } from '../'

import { fetcher } from '../api/fetchdata'
import { HashLoading } from '../'

export default function Blog() {

    const { isLoading, data } = useSWR("/api/blog", fetcher)
    const load = [0, 1, 2, 3, 4, 5]

    return (
        <section className="pt-24 md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">


                    {isLoading ? (
                        load && load.map(l => (
                            <ComponentsAnimations>
                                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                                    <HashLoading />
                                </div>
                            </ ComponentsAnimations>
                        ))
                    ) : (
                        <>
                            {data && data.data.docs.map(blog => (
                                <ComponentsAnimations>
                                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                                        <a href="/" aria-label="Article">

                                            <Image
                                                src={blog.image.sizes.card.url}
                                                className="object-cover w-full h-64 rounded"
                                                alt={blog.title}
                                                width={blog.image.sizes.card.width}
                                                height={blog.image.sizes.card.height}
                                            />
                                        </a>
                                        <div className="py-5 p-5">
                                            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                                                {FormatDay(blog.updatedAt)}
                                            </p>
                                            <Link
                                                href={"/blog/" + blog.slug}
                                                aria-label="Article"
                                                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                            >
                                                <p className="text-2xl font-bold leading-5">{blog.title}</p>
                                            </Link>
                                            <p className="mb-4 text-gray-700">
                                                {blog.featured}
                                            </p>
                                        </div>
                                    </div>
                                </ ComponentsAnimations>
                            ))}
                        </>

                    )}

                </div>
            </div>
        </section>
    );
};