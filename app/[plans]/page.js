import React from 'react'
import { Plans } from '../../components'
import { useStore } from '../../store/store'
import StoreInitializer from '../../store/Storeinitializer'
import { SingleService } from '../../components/graphql/query'
import { serverClient } from '../../components'

export default async function Singleservice({ params }) {
    const { data } = await serverClient.query({ 
        query: SingleService,
        fetchPolicy: 'network-only',
        variables: { slug: params.plans } 
        })


    useStore.setState({ SingleService: data })


    return (
        <>
            <StoreInitializer SingleService={data} />
            <Plans />
        </>
    )
}
