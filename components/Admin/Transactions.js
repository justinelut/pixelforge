import React from 'react';
import { DefaultTemplate } from 'payload/components/templates';
import { useConfig } from 'payload/components/utilities';
import TransactionUi from './ui/TransactionUi'
import useSWR from 'swr'
import { adminfetcher } from '../api/fetchdata'
import qs from 'qs'


const CustomMinimalRoute = ({ user, canAccessAdmin }) => {
    const { routes: { admin: adminRoute } } = useConfig();


    const query = {
        userId: {
            equals: user && user.id
        }
    }

    const stringifiedQuery = qs.stringify({
        limit: null,
        where: query
    }, { addQueryPrefix: true })


    const { isLoading, data } = useSWR(`/api/payments${stringifiedQuery}`, adminfetcher)

    return (
        <DefaultTemplate>
            <div className="px-2 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-2 lg:py-10">
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">

                    {isLoading ? "Loading" : (
                        data.data.docs.map(receipt=>(
                            <div class="relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white shadow-md">
                                <TransactionUi Transactiondate={receipt.TransactionDate} amount={receipt.Amount} reference={receipt.MpesaReceiptNumber} phoneNumber={receipt.PhoneNumber} />
                            </div>
                        ))
                    )}
                   
                </div>
                </div>
        </DefaultTemplate>
    );
};

export default CustomMinimalRoute;