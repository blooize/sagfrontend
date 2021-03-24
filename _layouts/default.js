import Head from 'next/head'
import Footer from '@includes/footer'
import { Navbar } from '../components/Navbar'


export default function DefaultLayout(props){
    return (
        <main>
            <div className="">
                <Head>
                    <title>{props.title}</title>
                    <meta name='description' content={props.description}/>
                    <link rel='icon' href='/static/sagfav.png' />
                    <link rel='stylesheet' href='/style.css'/>
                </Head>
                <Navbar/>
                {props.children}
            </div>

        </main>
    )
}