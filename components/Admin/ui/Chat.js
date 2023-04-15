import React, { useRef, useState, useEffect } from 'react'
import "./chat.css"
import axios from 'axios'
import { useForm } from "react-hook-form";
import useSWR, { useSWRConfig } from 'swr'
import { fetcher } from '../../api/fetchdata'
import qs from 'qs'



export default function Chat({ admin, projectid, userid, usertype, userdetails, user, canAccessAdmin }) {
   const { register, handleSubmit, reset } = useForm();
   const [resError, setResError] = useState()
   const [success, setSuccess] = useState()
   const messagesRef = useRef(null);
   const { mutate } = useSWRConfig()



   const query = {
      projectid: {
         equals: projectid
      }
   }

   const stringifiedQuery = qs.stringify({
      limit: null,
      sort: 'createdAt',
      where: query
   }, { addQueryPrefix: true })

   const { isLoading, data } = useSWR(`/api/messages${stringifiedQuery}`, fetcher)


   const sendmessage = async (data, e) => {
      e.preventDefault()
      const results = await axios.post("/api/messages", {
         message: data.message,
         projectid: projectid,
         userid: userid,
         usertype: usertype

      }).catch((error) => {
         if (error.response) {
            setResError(error.response.data);
         } else if (error.request) {
            setResError(error.request);
         } else {
            setResError('Error', error.message);
         }
      })
      if (results.data.message) {
         setSuccess(results.data.message)
         mutate(`/api/messages${stringifiedQuery}`)
      }
      reset()
   }

   const handleKeyPress = (event) => {
      if (event.key === "Enter") {
         handleSubmit(sendmessage);
      }
   };


   useEffect(() => {
      messagesRef.current.scrollIntoView()
   }, [success, data])

   return (
      <>
         <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
            <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
               <div className="relative flex items-center space-x-4">
                  <div className="flex flex-col leading-tight">

                     {
                        userdetails && userdetails.data.docs.map((user, index)=>(
                           <>
                              <div key={index} className="text-2xl mt-1 flex items-center">
                                 <span className="text-gray-700 mr-3">{user.firstName + ' ' + user.lastName}</span>
                              </div>
                              <span className="text-lg text-gray-600">{user.roles[0]}</span>
                           </>
                        ))
                     }
                  </div>
               </div>
            </div>
            <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">

               {isLoading ? ("Loading") : (
                  data.data.docs.map(message => (
                     <div className="chat-message">
                        <div className={`${message.usertype == 'user' ? 'flex items-end' : 'flex items-end justify-end'}`}>
                           <div className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${message.usertype == 'user' ? 'order-2 items-start' : 'order-1 items-end'}`}>
                              <div><span className={`px-4 py-2 rounded-lg inline-block text-xl ${message.usertype == 'user' ? 'rounded-bl-none bg-gray-300 text-gray-600' : 'rounded-br-none bg-blue-600 text-white'}`}>{message.message}</span></div>
                           </div>
                        </div>
                     </div>
                  ))
               )}
               <div ref={messagesRef}></div>
            </div>
            <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
               <form onSubmit={handleSubmit(sendmessage)} >
                  <div className="relative flex">
                    
                     <input type="text" name="message" placeholder="Write your message!" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
                        {...register("message", { required: true })}
                        onKeyDown={handleKeyPress}
                     ></input>

                     <div className="flex items-center sm:absolute right-0 inset-y-0">
                        <button type="submit" className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                           <span className="font-bold">Send</span>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                              
                           </svg>
                        </button>
                     </div>


                  </div>
               </form>
            </div>
         </div>
      </>
   )
}