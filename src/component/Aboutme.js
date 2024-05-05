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
                                <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl" style={{ paddingBottom: '5px' }}>Hey 👋 I am <br />
                                    <br className="block sm:hidden" />Abhishek Bhavnani
                                </h2>
                                <p className="max-w-xl mt-3 text-xl leading-relaxed md:mt-8" style={{ textAlign: 'justify' }}>
                                    Hey there! I'm Abhishek Bhavnani, a third-year student pursuing Computer Science and Engineering at Gujarat Technological University in Ahmedabad. 🎓 My passion lies in web development, and I thrive on crafting innovative solutions in the digital realm.
                                    <br /><br />
                                    My expertise lies in MERN stack development, where I leverage technologies like MongoDB, Express.js, React, and Node.js to create dynamic and interactive web experiences. From front-end design to back-end functionality, I enjoy every aspect of the development process. As a hackathon enthusiast, I thrive on intensive coding to tackle real-world challenges, optimizing user experiences and building scalable applications.
                                    <br /><br />
                                    Currently, I'm on the lookout for internship opportunities and freelance projects to further enhance my skills and contribute to impactful initiatives. Living in the vibrant city of Ahmedabad, I'm surrounded by inspiration and a thriving tech community that motivates me to push boundaries and pursue excellence in my craft.
                                    <br /><br />
                                    Oh, and fun fact about me: I'm always on the hunt for the best street food spots in town! 🌟
                                </p>


                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
                                    <button style={{ margin: '15px' }} className="mt-10 bg-transparent hover:bg-Slate-900 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-white rounded" onClick={() => window.location.href = '/contact'}>
                                        Contact Now
                                    </button>
                                    <button style={{ margin: '15px' }} className="mt-10 bg-transparent hover:bg-Slate-900 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-white rounded"
                                        onClick={() => window.open('https://drive.google.com/file/d/1NdnkYWaqmH_D1MoxrSMu1rk8fGH58LFP/view?usp=sharing', '_blank')}>
                                        Download CV
                                    </button>
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