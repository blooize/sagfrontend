import DefaultLayout from '@layouts/default'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


export default function PostLayout(props){
    return (
        <DefaultLayout>
            <Head>
                <title>{props.title}</title>
            </Head>
            <div className="flex flex-col">
                <section className="body-font overflow-hidden">
                        <div className="container px-5 py-24 mx-auto">
                            <article className="prose"> 
                                <h1 className="text-4xl mb-10 font-bold">{props.title}</h1>
                                <div className="" dangerouslySetInnerHTML={{__html:props.content}}/>
                            </article>
                        </div>
                </section>
            </div>

        </DefaultLayout>
    )
}