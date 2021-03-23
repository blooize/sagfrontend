import Head from 'next/head'
import Footer from '@includes/footer'
import { Navbar } from '../components/Navbar'


export default function DefaultLayout(props){
    return (
        <main>
            <div className="bg-blue-400">
                <Head>
                    <title>{props.title}</title>
                    <meta name='description' content={props.description}/>
                    <link rel='icon' href='/favicon.ico' />
                    <link rel='stylesheet' href='/style.css'/>
                </Head>
                <Navbar/>
                {props.children}
                <Footer/>
            </div>

        </main>
    )
}