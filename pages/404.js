import Link from 'next/link'

const NotFoundPage = () => {
    return (
        <div className="min-w-screen min-h-screen bg-white flex items-center p-5 lg:p-20 overflow-hidden relative">
            <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                <div className="max-w-md">
                    <div className="text-7xl font-dark font-bold">404</div>
                    <p className="text-2xl md:text-3xl font-light leading-normal mt-3">Sorry we couldn't find this page. </p>
                    <p className="mb-8 mt-2">But dont worry, you can find plenty of other things on our homepage.</p>

                    <Link href={'/'}>
                        <a className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">Back to homepage</a>
                    </Link>

                </div>
                <div className="max-w-lg">
                    <img src="https://flipstore.withun.link/images/404.png" className="w-64 h-64" />
                </div>


                    <div className="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"/>
                    <div className="w-96 h-full bg-indigo-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"/>



            </div>
        </div>
    );
};

export default NotFoundPage;
