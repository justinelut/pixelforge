import Link from 'next/link'
import { serialize } from '../../utilities/JsonToHtml'
import FormatDay from '../../utilities/DateFormatter'
import Image from 'next/image'
import Share from './share'

export default function Post({ post }) {
    const url = 'https://justinedev.verixr.com/blog'
    return (
        <div className="w-full bg-white pt-24">
            {post && post.Blogs.docs.map((blog, key) => (
                <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-beige-800 dark:text-gray-50" key={key}>
                    <Share url={url + "/" +blog.slug} title={blog.title}/>
                   
                    <div className="w-full mx-auto space-y-4 text-center">

                        
                        <h1 className="text-4xl font-bold leading-tight md:text-5xl">{blog.title}</h1>
                        <Image src={blog.image.url} alt={blog.title} width={800} height={300} />
                        <div className="flex items-center justify-between text-base font-medium dark:text-gray-400 mb-4">
                            <div className="flex items-center">
                                <span className="mr-2">by</span>
                                <a rel="noopener noreferrer" href="#" target="_blank" className="underline dark:text-violet-400">
                                    <span itemprop="name">{blog.createdBy.firstName + ' ' + blog.createdBy.lastName}</span>
                                </a>
                            </div>
                            <time datetime={FormatDay(blog.updatedAt)} className="text-gray-500 dark:text-gray-400 text-base font-medium">{FormatDay(blog.updatedAt)}</time>
                        </div>

                    </div>
                    <div className="dark:text-gray-100">
                        {serialize(blog.content)}
                    </div>
                    <div className="pt-12 border-t dark:border-gray-700">
                        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                            <img src={blog.createdBy.profilephoto.sizes.profile.url} alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                            <div className="flex flex-col">
                                <h4 className="text-lg font-semibold">{blog.createdBy.firstName + ' ' + blog.createdBy.lastName}</h4>
                                <p className="dark:text-gray-400">{blog.createdBy.aboutme}</p>
                            </div>
                        </div>
                    </div>
                </article>
            ))}

        </div>
    )
}

