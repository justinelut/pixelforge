import Link from 'next/link'

export default function Page() {
    return (
        <div className="w-full bg-white pt-24">
            <main className="relative mx-auto px-4 md:px-10 md:max-w-screen-md">
                <div className="top-20 mb-10 w-full max-w-xs lg:max-w-none lg:w-56 lg:rounded-md lg:border lg:bg-white lg:px-6 lg:py-6 lg:shadow-md lg:absolute lg:-left-56">
                    <div className="pb-2 text-xl font-medium text-orange-600">Table of Contents</div>
                    <hr className="h-1 w-10 bg-orange-600" />
                    <div className="mt-4">
                        <div className="mb-3">
                            <Link href="#section-one" className="mb-1 text-sm font-medium text-orange-600 hover:text-orange-600">
                                Section One
                            </Link>
                        </div>
                        <div className="mb-3">
                            <Link href="#section-two" className="mb-1 text-sm font-medium text-gray-600 hover:text-orange-600">
                                Section Two
                            </Link>
                        </div>
                        <div className="mb-3">
                            <a className="mb-1 text-sm font-medium text-gray-600 hover:text-orange-600" href="#">How to get Stuff Done</a>
                        </div>
                        <div className="mb-3">
                            <a className="mb-1 text-sm font-medium text-gray-600 hover:text-orange-600" href="#">Lorem ipsum dolor</a>
                        </div>
                        <div className="mb-3">
                            <a className="mb-1 text-sm font-medium text-gray-600 hover:text-orange-600" href="#">Are Aliens tiny?</a>
                        </div>
                        <div className="mb-3">
                            <a className="mb-1 text-sm font-medium text-gray-600 hover:text-orange-600" href="#">Ipsum Dolor</a>
                        </div>
                    </div>
                </div>
                <article className="text-gray-800">
                    <h2 id="section-one" className="mb-4 text-3xl font-bold">Section One</h2>
                    <p className="mb-10 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quae asperiores error hic minima dicta. Assumenda, enim. Voluptate facere
                        ea eveniet quaerat neque ipsam iste corrupti sapiente sed! Temporibus, magni?</p>
                    <h2 id="section-one" className="mb-4 text-3xl font-bold">Section One</h2>
                    <p className="mb-10 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quae asperiores error hic minima dicta. Assumenda, enim. Voluptate facere
                        ea eveniet quaerat neque ipsam iste corrupti sapiente sed! Temporibus, magni?</p>
                    <h2 id="section-one" className="mb-4 text-3xl font-bold">Section One</h2>
                    <p className="mb-10 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quae asperiores error hic minima dicta. Assumenda, enim. Voluptate facere
                        ea eveniet quaerat neque ipsam iste corrupti sapiente sed! Temporibus, magni?</p>
                </article>
            </main>
        </div>

    )
}