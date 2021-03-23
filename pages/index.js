import DefaultLayout from '@layouts/default'
import Link from 'next/link'
import { getConfig, getAllPosts } from '@api'

export default function Blog(props){
    return (
        <DefaultLayout title={props.title} description={props.description}>
        <section className="body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="text-3xl font-bold mb-10">List of posts:</h1>
                    <ul>
                        {props.posts.map(function(post, idx){
                            return (
                                <li className="text-xl my-10" key={idx}>
                                    <div>
                                        <a>{post.title}</a>
                                        <br/>
                                        <Link href={'/posts/'+post.slug}>
                                            <a className="text-sm text-blue-500 inline-flex items-center mt-4">Read about it -></a>
                                        </Link>
                                    </div>

                                </li>
                            )
                        })}
                    </ul>
            </div>
        </section>


        </DefaultLayout>
    )
} 

export async function getStaticProps(){
    const config = await getConfig()
    const allPosts = await getAllPosts()

    return {
        props: {
            posts: allPosts,
            title: config.title,
            description: config.description
        }
    }
}