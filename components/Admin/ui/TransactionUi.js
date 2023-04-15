import React from 'react'
import { FaPrint } from 'react-icons/fa';
import FormatDay from '../../../utilities/DateFormatter';

const BillingCard = ({ amount, reference, phoneNumber, Transactiondate }) => {
    return (
        <div className="bg-gradient-to-b from-indigo-700 to-purple-800 rounded-lg shadow-md p-4 sm:p-4 ">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-white text-lg sm:text-2xl font-bold">Your Purchase</h2>
                <button className="bg-white rounded-md text-indigo-700 px-2 py-1 sm:px-4 sm:py-2 flex items-center hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                    <FaPrint className="mr-1 sm:mr-2" />
                    <span className="hidden sm:inline-block">Print Receipt</span>
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="bg-white rounded-lg p-4 sm:p-6 text-center mb-4 sm:mb-0">
                    <p className="text-gray-600 text-xs sm:text-sm font-medium mb-2 sm:mb-4">Total Amount</p>
                    <p className="text-indigo-700 text-xl sm:text-4xl font-bold">${amount}</p>
                </div>
                <div className="bg-white rounded-lg p-4 sm:p-6 text-center">
                    <p className="text-gray-600 text-xs sm:text-sm font-medium mb-2 sm:mb-4">Reference Number</p>
                    <p className="text-indigo-700 text-base sm:text-2xl font-bold">{reference}</p>
                </div>
                <div className="bg-white rounded-lg p-4 sm:p-6 text-center mb-4 sm:mb-0">
                    <p className="text-gray-600 text-xs sm:text-sm font-medium mb-2 sm:mb-4">Phone Number</p>
                    <p className="text-indigo-700 text-base sm:text-2xl font-bold">{phoneNumber}</p>
                </div>
                <div className="bg-white rounded-lg p-4 sm:p-6 text-center mb-4 sm:mb-0">
                    <p className="text-gray-600 text-xs sm:text-sm font-medium mb-2 sm:mb-4">Transaction Date</p>
                    <p className="text-indigo-700 text-base sm:text-2xl font-bold">{FormatDay(Transactiondate)}</p>
                </div>
            </div>
        </div>
    );
};

export default BillingCard;
