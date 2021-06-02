import Head from "next/head";
import { ArrowNarrowLeftIcon, HomeIcon } from "@heroicons/react/solid";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";


const breadcrumbs = [
    { name: 'Jobs', href: '#', current: false },
    { name: 'Front End Developer', href: '#', current: false },
    { name: 'Applicants', href: '#', current: true },
];


function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Layout = ({ title, keywords, description, children }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
            </Head>

            <div className="min-h-screen bg-gray-100">
                <header className="bg-white shadow">
                    <Header/>
                </header>

                <main className="py-10">
                    {children}
                </main>
            </div>

            <Footer />

        </div>
    );
};

Layout.defaultProps = {
    title: 'DJ Events | Find the DJ events',
    description: 'Find the latest DJ events and any other musical events/parties',
    keywords: 'music, dj, edm, events',
};

export default Layout;
