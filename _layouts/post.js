import DefaultLayout from '@layouts/default'
import Head from 'next/head'

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
                                <div dangerouslySetInnerHTML={{__html:props.content}}/>
                            </article>
                        </div>
                </section>
            </div>

        </DefaultLayout>
    )
}