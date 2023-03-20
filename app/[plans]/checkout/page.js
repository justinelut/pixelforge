import { Checkout } from '../../../components'
import { useStore } from '../../../store/store'
import StoreInitializer from '../../../store/Storeinitializer'
import { SingleService } from '../../../components/graphql/query'
import { serverClient } from '../../../components'

export default async function Payment(params) {
  console.log(params.searchParams)
  const { data } = await serverClient.query({ query: SingleService, variables: { slug: params.searchParams.s } })


  useStore.setState({ SingleService: data })
  return (
    <div>
      <StoreInitializer SingleService={data} />
      <Checkout data={data} />
    </div>
  )
}
