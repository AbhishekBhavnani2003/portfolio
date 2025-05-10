import React from 'react'
import Myimage from '../images/profileimage.jpg'
import { TypeAnimation } from 'react-type-animation';
import Footer from './Footer';

function Intro() {
  return (
    <>
      <div>
        <section className="text-gray-700 body-font overflow-hidden bg-white" style={{ backgroundColor: '#011627', color: '#E5E9F0' }}>
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img alt="myphoto" className="lg:w-1/3 w-full object-cover object-center rounded border border-gray-200" src={Myimage} style={{
                ...(window.innerWidth <= 768 && { marginTop: '30px' })
              }} />
              <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style={{ textAlign: 'justify' }}>
                <h2 className="text-sm title-font text-gray-50 tracking-widest" style={{ borderBottom: '2px solid grey', paddingBottom: '20px', marginBottom: '5px' }}>Web Developer</h2>
                <TypeAnimation
                  sequence={[
                    'Abhishek Bhavnani ',
                    1000,
                    'Abhishek Bhavnani ',
                    1000,
                    'Abhishek Bhavnani ',
                    1000,
                  ]}
                  speed={30}
                  style={{ fontSize: '2em', fontFamily: 'sans-serif' }}
                  repeat={Infinity}
                />
                <p className="leading-relaxed mt-2">Looking to build dynamic web applications with the MERN (MongoDB, Express.js, React.js, Node.js) stack? Look no further! As a skilled web developer proficient in MERN technologies, I specialize in crafting interactive and scalable solutions tailored to your needs. Let's collaborate to bring your digital vision to life!</p>

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
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Intro
