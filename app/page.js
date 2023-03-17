import { Herosection, Howitworks, Features, Pricing, Featured, Faq, serverClient } from '../components'
import {useStore} from '../store/store'
import StoreInitializer from '../store/Storeinitializer'
import {services} from '../components/graphql/query'


export default async function Home() {

const { data } = await serverClient.query({ query: services})

  useStore.setState({services:  data})

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