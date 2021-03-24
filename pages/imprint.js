import DefaultLayout from '@layouts/default'

export default function Imprint(){
    return(
    <DefaultLayout>
    <div className="container min-h-screen justify-center items-center text-center mx-auto"> 
        <h1 className="text-teal-400 text-5xl font-semibold">
            Legal Disclosure
        </h1>
        <p className="mt-10">
            Information in accordance with Section 5 TMG <br/>
            <br/>
            Simon Schmitt <br/>
            Giessener Str. 18 <br/>
            35415 Pohlheim <br/>        
        </p>
        <h2 className="text-3xl font-medium">Contact Information</h2>
        <p className="">
            Telephone: (+49) 157 88974682 <br/>
        </p>
        <p className="">Email: <a href="mailto:sls@sls.wtf">sls@sls.wtf</a>
        </p>
        <br/>
        <h1 className="font-medium text-3xl">
            Disclaimer
        </h1>
        <br/>
        <h1 className="text-2xl">Accountability for content</h1>
        <p className="">
            The contents of our pages have been created with the utmost care.
            However, we cannot guarantee the contents' accuracy, completeness or topicality.
            According to statutory provisions,
            we are furthermore responsible for our own content on these web pages.
            In this matter, please note that we are not obliged to monitor the transmitted or saved information of third parties,
            or investigate circumstances pointing to illegal activity.
            Our obligations to remove or block the use of information under generally
            applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
        </p>
        <br/>
        <h1 className="text-2xl">Accountability for links</h1>
        <p className="">
            Responsibility for the content of external links (to web pages of third parties)
            lies solely with the operators of the linked pages.
            No violations were evident to us at the time of linking.
            Should any legal infringement become known to us, 
            we will remove the respective link immediately.
        </p>
        <br/>
        <h1 className="text-2xl">Copyright</h1>
        <p className="">
            Our web pages and their contents are subject to German copyright law. 
            Unless expressly permitted by law, every form of utilizing, 
            reproducing or processing works subject to copyright protection on 
            our web pages requires the prior consent of the respective owner of the rights. 
            Individual reproductions of a work are only allowed for private use. 
            The materials from these pages are copyrighted and any unauthorized 
            use may violate copyright laws.
            Quelle: Übersetzungsdienst translate-24h.de
        </p>
        <br/>
    </div>
    </DefaultLayout>
)
}