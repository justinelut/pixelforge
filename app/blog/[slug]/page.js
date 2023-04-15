import { PostDetail, serverClient } from '../../../components'
import { blogPost } from '../../../components/graphql/query'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }) {
    const { data } = await serverClient.query({
        query: blogPost,
        variables: { slug: params.slug }
    })
    const post = data && data.Blogs.docs[0]

    if (post) {
        return {
            title: post.title,
            description: post.featured,
            openGraph: {
                title: post.title,
                images: post.image.sizes.feature.url
            },
        }
    }

}



export default async function Post({ params }) {
    const { data } = await serverClient.query({
        query: blogPost,
        variables: { slug: params.slug }
    })
    return (
        <PostDetail post={data} />
    )
}