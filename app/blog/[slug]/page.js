import { PostDetail, serverClient } from '../../../components'
import { blogPost } from '../../../components/graphql/query'



export default async function Post({params}) {
    const { data } = await serverClient.query({
        query: blogPost,
        variables: { slug: params.slug }
    })
    return (
        <PostDetail post={data} />
    )
}