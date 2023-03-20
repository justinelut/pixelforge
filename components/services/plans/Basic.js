"use client"

import { useState } from 'react';
import { currency } from '../../../utilities/Currency'
import Link from 'next/link'

export default function Plans({ plans, slug }) {

    const [selectedPlan, setSelectedPlan] = useState(plans[0]);

    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
    };

    return (
        <div>
            <div className="flex justify-center">
                {plans && plans.map((plan) => (
                    <button
                        key={plan.name}
                        className={`${plan.name === selectedPlan.name
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700'
                            } mx-2 px-4 py-2 rounded`}
                        onClick={() => handlePlanSelect(plan)}
                    >
                        {plan.name}
                    </button>
                ))}
            </div>

            <div className="mt-8">
                <div className="p-8 bg-gray-900 rounded">
                    <div className="mb-4 text-center">
                        <p className="text-xl font-medium tracking-wide text-white">
                            {selectedPlan.name} Plan
                        </p>
                        <div className="flex items-center justify-center">
                            <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                                {currency.format(selectedPlan.price)}
                            </p>
                        </div>
                    </div>
                    <ul class="mb-8 space-y-2">

                        {selectedPlan.details.map(detail => (
                            <li class="flex items-center">
                                <div class="mr-3">
                                    <svg
                                        class="w-4 h-4 text-teal-accent-400"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                    >
                                        <polyline
                                            fill="none"
                                            stroke="currentColor"
                                            points="6,12 10,16 18,8"
                                        />
                                        <circle
                                            cx="12"
                                            cy="12"
                                            fill="none"
                                            r="11"
                                            stroke="currentColor"
                                        />
                                    </svg>
                                </div>
                                <p class="font-medium text-gray-300">{detail.Details}</p>
                            </li>
                        ))}

                    </ul>

                    <Link
                        href={slug && slug + `/checkout?p=${selectedPlan.type}&s=${slug}`}
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white-900 transition duration-200 rounded shadow-md bg-blue-500 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
                    >
                        Get {selectedPlan.name} Plan Now
                    </Link>
                </div>
                <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
                <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
                <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
            </div>


        </div>
    );
};


