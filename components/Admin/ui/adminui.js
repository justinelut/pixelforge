import React, { useState } from 'react';
import { currency } from '../../../utilities/Currency'
import { adminfetcher } from '../../api/fetchdata'
import qs from 'qs'
import { FaCheckCircle, FaWrench, FaCog, FaExclamationCircle } from 'react-icons/fa';
import { IoIosChatbubbles } from 'react-icons/io';
import { Link } from 'react-router-dom';
import useSWR, { useSWRConfig } from 'swr'
import axios from 'axios'




export default function ProductComponent(props) {
    const { mutate } = useSWRConfig()

  

    const stringifiedQuery = qs.stringify({
        limit: null,
    }, { addQueryPrefix: true })

    const toggleStatus = async ({ projectvalue, statusvalue }) => {
        if (statusvalue == 'pending') {
            const updateCompletion = await axios.patch("/api/projects/" + projectvalue,
                {
                    iscomplete: 'false',
                    status: 'inprogress'
                })
            if (updateCompletion)
                mutate(`/api/projects${stringifiedQuery}`)
        } else {
            const updateCompletion = await axios.patch("/api/projects/" + projectvalue,
                {
                    iscomplete: 'false',
                    status: 'pending'
                })
            if (updateCompletion)
                mutate(`/api/projects${stringifiedQuery}`)
        }
    };

    const toggleCompletion = async ({projectvalue, statusvalue}) => {

        if (statusvalue == 'true'){
            const updateCompletion = await axios.patch("/api/projects/" + projectvalue,
                {
                    iscomplete: 'false',
                    status: 'pending'
                })
            if (updateCompletion)
                mutate(`/api/projects${stringifiedQuery}`)
        }else{
            const updateCompletion = await axios.patch("/api/projects/" + projectvalue,
                {
                    iscomplete: 'true',
                    status: 'pending'
                })
            if (updateCompletion)
                mutate(`/api/projects${stringifiedQuery}`)
        }
        
    };

  


    const { isLoading, data } = useSWR(`/api/projects${stringifiedQuery}`, adminfetcher)

    return (
        <>
            {
                isLoading ? 'loading' : (
                        data.data.docs.map(project => (
                            <div class="relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white shadow-md">
                                <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-md shadow-md p-6 lg:p-8 xl:p-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-2xl md:text-3xl text-white font-bold">{project.service}</h2>
                                        {project.iscomplete == 'true' ? (
                                            <FaCheckCircle className="text-4xl md:text-5xl text-green-500" />
                                        ) : (
                                                project.status == 'pending' ? (
                                                <FaExclamationCircle className="text-4xl md:text-5xl text-yellow-500" />
                                            ) : (
                                                <FaCog className="text-4xl md:text-5xl text-blue-500" />
                                            )
                                        )
                                        }
                                    </div>
                                    <p className="text-base md:text-lg text-white mb-4">
                                        Status: <span className="font-medium text-yellow-200">
                                            {project.iscomplete == 'true' ? (
                                                "Completed"
                                            ) : (
                                                project.status == 'pending' ? (
                                                    'Pending'
                                                ) : (
                                                    'In progress...'
                                                )
                                            )
                                            }
                                        </span>
                                    </p>
                                    <p className="text-base md:text-lg text-white mb-8">
                                        Amount: <span className="font-medium text-yellow-200">{currency.format(project.amountpayed)}</span>
                                    </p>
                                       <button
                                        onClick={() => toggleStatus({projectvalue: project.id, statusvalue: project.status})}
                                        className={`w-full bg-${project.iscomplete == 'true' ? 'green' : 'white'} text-${project.iscomplete == 'true' ? 'white' : 'purple-500'} py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 xl:py-5 xl:px-10 rounded-md flex items-center justify-center border-2 border-purple-500 hover:bg-purple-500 hover:text-white`}
                                    >
                                        <span className="text-sm md:text-base lg:text-lg xl:text-xl font-medium">
                                            {
                                                project.iscomplete == 'true' ? (
                                                    'Set in progress'
                                                )
                                                :
                                                (
                                                    project.status == 'pending' ? 'Set in progress' : 'Inprogress ...'
                                                )
                                            }
                                        </span>
                                        {project.iscomplete == 'true' ? (
                                            <FaExclamationCircle className="text-base md:text-lg ml-2" />
                                            
                                        ) : (
                                              project.status == 'pending' ? (
                                                <FaExclamationCircle className="text-base md:text-lg ml-2" />
                                              )
                                              :
                                              (
                                                <FaCheckCircle className = "text-base md:text-lg ml-2" />
                                              )
                                                
                                        )}
                                    </button>
                                        <button
                                        onClick={() => toggleCompletion({ projectvalue: project.id, statusvalue: project.iscomplete })}
                                        className={`w-full bg-${project.iscomplete == 'true' ? 'green' : 'white'} text-${project.iscomplete == 'true' ? 'white' : 'purple-500'} py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 xl:py-5 xl:px-10 rounded-md flex items-center justify-center border-2 border-purple-500 hover:bg-purple-500 hover:text-white`}
                                        >
                                            <span className="text-sm md:text-base lg:text-lg xl:text-xl font-medium">
                                            {project.iscomplete == 'true' ? 'Completed' : 'Complete'}
                                            </span>
                                            {project.iscomplete == 'true' ? (
                                                <FaCheckCircle className="text-base md:text-lg ml-2" />
                                            ) : (
                                                <FaExclamationCircle className="text-base md:text-lg ml-2" />
                                            )}
                                        </button>

                                    <Link to={`${props.admin}/purchased/${project.type}?id=${project.id}`} className="bg-white text-purple-500 py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 xl:py-5 xl:px-10 rounded-md flex items-center justify-center border-2 border-purple-500 hover:bg-purple-500 hover:text-white">
                                        <IoIosChatbubbles className="text-xl md:text-2xl mr-2" />
                                        <span className="text-sm md:text-base lg:text-lg xl:text-xl font-medium">
                                            Chat
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ))
            )
        
       }
        </>

    );
}


