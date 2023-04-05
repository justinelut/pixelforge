import React from 'react'
import { DefaultTemplate } from 'payload/components/templates';
import { useLocation } from 'react-router-dom';
import Chat from './ui/Chat'

const ProjectDescription = ({ user }) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const projectId = searchParams.get('id');
   
    return (
        <DefaultTemplate>
            <Chat projectid={projectId} userid={user.id} usertype="client"/>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col lg:flex-row">
                    <div className="max-w-xl pr-16 mx-auto mb-10">
                        <h5 className="mb-6 text-3xl font-extrabold leading-none">
                            The quick, brown fox jumps over a lazy dog
                        </h5>
                        <p className="mb-6 text-gray-900">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut unde
                            omnis iste natus.
                        </p>
                    </div>
                    <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
                        <div className="max-w-md">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">The deep ocean</h6>
                            <p className="text-sm text-gray-700">
                                A flower in my garden, a mystery in my panties. Heart attack never
                                stopped old Big Bear. I didn't even know we were calling him Big
                                Bear.
                            </p>
                        </div>
                        <div className="max-w-md">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">When has justice</h6>
                            <p className="text-sm text-gray-700">
                                Rough pomfret lemon shark plownose chimaera southern sandfish
                                kokanee northern sea robin Antarctic cod. Yellow-and-black
                                triplefin.
                            </p>
                        </div>
                      
                    </div>
                </div>
            </div>
        </DefaultTemplate >

    );
};

export default ProjectDescription;