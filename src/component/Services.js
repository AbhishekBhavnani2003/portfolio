import React from 'react'
import P1 from '../images/p1.jpg'
import P2 from '../images/p2.jpg'
import P3 from '../images/p3.jpg'
import P4 from '../images/p4.jpg'
import Footer from './Footer'


function Services() {
    return (
        <>
        <div>
            <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">
                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">

                            <div>


                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-white">
                                        End-to-End Web Application Development:
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-300">
                                        I provide comprehensive web application development services using the MERN stack. From conceptualization to deployment, I ensure the creation of scalable, secure, and responsive web applications tailored to meet the unique needs of each client.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img loading="lazy" width="647" height="486"
                                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    style={{ color: "transparent" }} src={P1} />
                            </div>
                        </div>
                    </div>
                </div>



                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                            <div>

                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-white">
                                        UI/UX Design Integration:
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-300">
                                        Leveraging my expertise in both MERN stack development and UI/UX design, I offer seamless integration of captivating user interfaces with robust backend functionalities. My focus is on creating intuitive, user-friendly experiences for both web and mobile applications.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                    style={{ color: "transparent" }} src={P2} />
                            </div>
                        </div>
                    </div>
                </div>



                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                            <div>

                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-white">
                                        E-commerce Solutions Development:
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-300">
                                        Specializing in e-commerce development using the MERN stack, I build dynamic platforms and integrate essential e-commerce functionalities into existing websites. Clients benefit from features such as secure online payments, extensive product catalogs, and efficient order management systems.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img loading="lazy" width="646" height="485"
                                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    style={{ color: "transparent" }}
                                    src={P3}/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                            <div>

                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-white">
                                        Migration and Upgradation Services:
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-300">
                                        I provide migration services to assist clients in seamlessly transitioning their existing applications or websites to the MERN stack. Additionally, I offer upgradation services to ensure that MERN stack applications remain at the forefront of technology, equipped with the latest features and security patches.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                    style={{ color: "transparent" }} src={P4} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Services