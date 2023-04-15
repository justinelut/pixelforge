//import NextDynamic  from 'next/dynamic'
import { Herosection, serverClient, Howitworks, Features, Faq, Featured } from '../components'
import { useStore } from '../store/store'
import StoreInitializer from '../store/Storeinitializer'
import { services, home } from '../components/graphql/query'



//const { Featured } = NextDynamic(() => import('../components'))



export async function generateMetadata() {
    const data = await serverClient.query({
        query: home,
        fetchPolicy: 'network-only',
        context: {
            fetchOptions: {
                next: { revalidate: 0 },
            },
        },
    })

    const homepage = data && data.data.Homes.docs[0]

    if (homepage) {
        return {
            title: homepage.headline,
            description: homepage.subheadline,
            openGraph: {
                title: homepage.headline,
                image: homepage.image.url
            },
        }
    }
}

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
            <Featured />
            <Howitworks />
            <Features />
            <Faq />
        </>
    )
}