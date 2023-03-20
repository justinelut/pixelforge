import {Herosection, Howitworks, Features, Pricing, Featured, Faq, serverClient } from '../components'
import {useStore} from '../store/store'
import StoreInitializer from '../store/Storeinitializer'
import {services} from '../components/graphql/query'

export const dynamic = 'force-dynamic'


export default async function Home() {

    const { data } = await serverClient.query({
        query: services, 
        fetchPolicy:'network-only',
        context: {
            fetchOptions: {
                next: { revalidate: 0 },
            },
        },
})

    const { Homepage } = await serverClient.query({
        query: services, 
        fetchPolicy:'network-only',
        context: {
            fetchOptions: {
                next: { revalidate: 0 },
            },
        },
})

  useStore.setState({services:  data, home: Homepage})

    return (
        <>
            <StoreInitializer services={data} />
            <Herosection />
            <Howitworks />
            <Featured data={data} />
            <Features />
            <Faq />
        </>
    )
}