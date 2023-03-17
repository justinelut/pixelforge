"use client"
import { useForm } from "react-hook-form";
import axios from 'axios'
import { FaMobileAlt, } from 'react-icons/fa'

export default function Signup() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data, e) => {
        e.preventDefault()
        const results = await axios.post("/api/account", {
            firstName: data.firstname,
            lastName: data.lastname,
            roles: ["client"],
            email: data.email,
            password: data.password
        })
        console.log(results)

    };


    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-1 sm:mb-2">
                <label
                    htmlFor="firstName"
                    className="inline-block mb-1 font-medium"
                >
                    First name
                </label>
                <input
                    placeholder="John"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="firstName"
                    name="firstname"
                    {...register("firstname")}
                />
            </div>
            <div className="mb-1 sm:mb-2">
                <label
                    htmlFor="lastName"
                    className="inline-block mb-1 font-medium"
                >
                    Last name
                </label>
                <input
                    placeholder="Doe"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="lastName"
                    name="lastname"
                    {...register("lastname")}
                />
            </div>
            <div className="mb-1 sm:mb-2">
                <label
                    htmlFor="email"
                    className="inline-block mb-1 font-medium"
                >
                    E-mail
                </label>
                <input
                    placeholder="john.doe@example.org"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                    {...register("email")}
                />
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
                    required
                    type="password"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="password"
                    name="password"
                    {...register("password")}
                />
            </div>
            <div className="mt-4 mb-2 sm:mb-4">
                <button type="submit" className="bg-white inline-flex justify-center text-green-500 w-full h-12 px-4 py-2 border border-green-500 rounded-none">
                    Signup
                    <FaMobileAlt className="mr-2 mt-2" />
                </button>
            </div>


            <p className="text-xs text-gray-600 sm:text-sm">
                We respect your privacy. Unsubscribe at any time.
            </p>
        </form>

    )
}