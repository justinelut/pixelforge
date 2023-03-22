"use client"
import { FaMobileAlt } from 'react-icons/fa'
import { useForm } from "react-hook-form";
import axios from 'axios'
import Error from './error'
import { useState } from 'react';
import { useStore } from '../../store/store';


export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [resError, setResError] = useState()
   

    const onSubmit = async (data, e) => {
        e.preventDefault()
        const results = await axios.post("/api/account/login", { email: data.email, password: data.password }).catch((error) => {
            if (error.response) {
                setResError(error.response.data);
            } else if (error.request) {
                setResError(error.request);
            } else {
                setResError('Error', error.message);
            }
        })
        useStore.setState({ loginToken: results.data.token, firstName: results.data.user.firstName, lastName: results.data.user.lastName })
    };
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-1 sm:mb-2">
                <label
                    htmlFor="email"
                    className="inline-block mb-1 font-medium"
                >
                    E-mail
                </label>
                <input
                    placeholder="john.doe@example.org"
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                    {...register("email", { required: true })}
                />

                {errors.email?.type === 'required' && <p className='text-red-700' role="alert">Email is required</p>}
            </div>

            <div className="mb-1 sm:mb-2">
                <label
                    htmlFor="email"
                    className="inline-block mb-1 font-medium"
                >
                    Password
                </label>
                <input
                    placeholder="password"
                    type="password"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="password"
                    name="password"
                    {...register("password", { required: true })}
                />
                {errors.password?.type === 'required' && <p className='text-red-700' role="alert">Password is required</p>}
            </div>

            <div className="mt-4 mb-2 sm:mb-4">
                {resError && resError.errors.map(err => (<Error message={err.message} />))}

                <button type="submit" className="bg-white inline-flex justify-center text-green-500 w-full h-12 px-4 py-2 border border-green-500 rounded-none">
                    Login
                    <FaMobileAlt className="mr-2 mt-2" />
                </button>
            </div>


            <p className="text-xs text-gray-600 sm:text-sm">
                We respect your privacy. Unsubscribe at any time.
            </p>
        </form>

    )
}