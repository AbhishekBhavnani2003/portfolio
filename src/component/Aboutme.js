import React from 'react'
import Myimage from '../images/profileimage-nobg.png'
import Myimage1 from '../images/profileimage.jpg'
import Footer from './Footer'


function Aboutme() {
    return (
        <>
            <div >
                <section className="pt-10 overflow-hidden  md:pt-0 sm:pt-16 2xl:pt-16" style={{ backgroundColor: '#011627', paddingBottom: '30px', overflow: 'hidden' }}>
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid items-center grid-cols-1 md:grid-cols-2 ">

                            <div className='mt-10' style={{ color: '#E5E9F0' }}>
                                <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
                                    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600">
                                        🚀 Passionate MERN Stack Developer
                                    </h1>

                                    <p className="text-lg leading-relaxed mb-4" style={{ color: '#E5E9F0' }}>
                                        Hey there! I'm <span className="font-semibold">Abhishek Bhavnani</span>, a MERN Stack Developer based in <span className="font-semibold">Ahmedabad, Gujarat</span>. I’m passionate about building powerful, interactive web applications that solve real-world problems and deliver seamless user experiences.
                                    </p>

                                    <p className="text-lg leading-relaxed mb-4" style={{ color: '#E5E9F0' }}>
                                        With hands-on expertise in the MERN stack—<span className="font-medium">MongoDB, Express.js, React, and Node.js</span>—I develop full-stack solutions, from designing responsive front-end interfaces to implementing robust back-end functionality. I thrive in high-energy environments like hackathons, where I enjoy pushing the limits of what code can achieve.
                                    </p>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-500">👨‍💻 Tech Stack</h2>
                                    <ul className="list-disc list-inside space-y-1 text-lg" style={{ color: '#E5E9F0' }}>
                                        <li><span className="font-medium">Frontend:</span> React.js, Redux, HTML, CSS, Tailwind CSS, Material-UI (MUI), WebSocket</li>
                                        <li><span className="font-medium">Backend:</span> Node.js, Express.js, Redis, Cron Jobs, WebSocket, JWT, OAuth, Cloudinary, Winston</li>
                                        <li><span className="font-medium">Payment Gateway:</span> Razorpay</li>
                                        <li><span className="font-medium">Database:</span> MongoDB, SQL</li>
                                        <li><span className="font-medium">DevOps:</span> Kafka, Docker</li>
                                        <li><span className="font-medium">Hosting:</span> Render, Netlify, Vercel, Vps</li>
                                    </ul>

                                    <p className="text-lg leading-relaxed mt-6 mb-4" style={{ color: '#E5E9F0' }}>
                                        💼 Currently working as a <span className="font-semibold">MERN Stack Developer</span>, I'm open to freelance projects and collaboration opportunities where I can apply my skills to create meaningful digital products.
                                    </p>

                                    <p className="text-lg leading-relaxed" style={{ color: '#E5E9F0' }}>
                                        🍴 And a fun fact: I’m always on the hunt for <span className="italic">Ahmedabad’s best street food spots!</span>
                                    </p>
                                </div>



                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
                                    <button style={{ margin: '15px' }} className="mt-10 bg-transparent hover:bg-Slate-900 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-white rounded" onClick={() => window.location.href = '/contact'}>
                                        Contact Now
                                    </button>
                                    {/* <button style={{ margin: '15px' }} className="mt-10 bg-transparent hover:bg-Slate-900 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-white rounded"
                                        onClick={() => window.open('https://drive.google.com/file/d/1NdnkYWaqmH_D1MoxrSMu1rk8fGH58LFP/view?usp=sharing', '_blank')}>
                                        Download CV
                                    </button> */}
                                    <a href="/project">
                                        <button style={{ margin: '15px' }} className="mt-10 bg-transparent hover:bg-Slate-900 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-white rounded" >
                                            View Projects
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <div className="relative " >

                                <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src=
                                    {Myimage1} style={{ border: '2px transparent', borderRadius: '50%', ...(window.innerWidth <= 768 && { marginTop: '30px' }) }} alt="" />
                            </div>



                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Aboutme