import { FaMobileAlt } from 'react-icons/fa'

export default function Payment(){


    return(
        
                <form>
            <div className="mb-1 sm:mb-2">
                Pay with mpesa
            </div>
                    <div className="mb-1 sm:mb-2">
                        <label
                            htmlFor="email"
                            className="inline-block mb-1 font-medium"
                        >
                           Phone number
                        </label>
                        <input
                            placeholder="Phone number"
                            required
                            type="number"
                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            id="phonenumber"
                            name="phonenumber"
                        />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                        <button type="submit" className="bg-white inline-flex justify-center text-green-500 w-full h-12 px-4 py-2 border border-green-500 rounded-none">
                            <FaMobileAlt className="mr-2" />
                            Pay with M-Pesa
                        </button>
                    </div>


                    <p className="text-xs text-gray-600 sm:text-sm">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </form>
        
    )
}