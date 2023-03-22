import { Herosection, Howitworks, Features, Pricing, Featured, Faq, serverClient } from '../components'
import { useStore } from '../store/store'
import StoreInitializer from '../store/Storeinitializer'
import { services, home } from '../components/graphql/query'

export const dynamic = 'force-dynamic'


export default async function Home() {

    const { data } = await serverClient.query({
        query: services,
        fetchPolicy: 'network-only',
        context: {
            fetchOptions: {
                next: { revalidate: 0 },
            },
        },
    })

    const Homepage = await serverClient.query({
        query: home,
        fetchPolicy: 'network-only',
        context: {
            fetchOptions: {
                next: { revalidate: 0 },
            },
        },
    })

    useStore.setState({ services: data, home: Homepage.data })

    return (
        <>
            <StoreInitializer services={data} home={Homepage.data} />
            <Herosection />
            <Howitworks />
            <Featured />
            <Features />
            <Faq />
        </>
    )
}