import React from 'react';
import Bimg from '../images/bharatbuzz.png'
import Eimg from '../images/ethernotes.png'
import Fimg from '../images/flipkart.png'
import Simg from '../images/sensorysight.png'
import Timg from '../images/textmagics.png' 
import Qimg from '../images/techtriva.png'
import Cimg from '../images/castfit.png'
import Kimg from '../images/Kalam.png'
import Footer from './Footer.js' 

const projectsData = [
  {
    id: 1,
    imgUrl: Cimg,
    title: "CastFit",
    description: "Castfit is a dynamic job portal application built using the MERN stack, designed specifically for casting teams. It facilitates seamless job postings, applicant management, and real-time updates, enabling efficient casting operations and streamlined communication between casting professionals and applicants. ",
    link: "https://github.com/AbhishekBhavnani2003/JobPortal"
  },
  {
    id: 2,
    imgUrl: Kimg,
    title: "Kalam",
    description: "Kalam is a versatile blogging platform that offers enriching content on travel, literature, food, and more, allowing you to join a vibrant community of storytellers and enthusiasts. This web application, built using React.js, Tailwind CSS, Material UI, Node.js, Express.js, and MongoDB, ensures a seamless and engaging user experience. ",
    link: "https://github.com/AbhishekBhavnani2003/Kalam-frontend"
  },
  {
    id: 3,
    imgUrl: Fimg,
    title: "Flipkart Clone",
    description: "This Flipkart clone, developed as part of my internship, is a full-stack application integrated with a database, encompassing a wide range of functionalities from user authentication (login/signup) to product ordering. ",
    link: "https://github.com/AbhishekBhavnani2003/TWSIP_TASK3_Flipkart-Clone"
  },
  {
    id: 4,
    imgUrl: Bimg,
    title: "BharatBuzz",
    description: "Bharatbuzz is a real-time news web app powered by ReactJS, Bootstrap, and NewsAPI. Offering diverse news categories, in-depth insights, and a seamless user experience across devices. Stay informed with the latest updates effortlessly.",
    link : "https://github.com/AbhishekBhavnani2003/BharatBuzz-Newsapp"
  },
  {
    id: 5,
    imgUrl: Eimg,
    title: "EtherNotes",
    description: "EtherNotes is a MERN-powered cloud notebook built with ReactJS, Bootstrap, NodeJS, ExpressJS, and MongoDB. Enjoy real-time syncing, cross-platform accessibility, and robust security measures. Customize your note-taking experience and reduce eye strain with Dark Mode.",
    link : 'https://github.com/AbhishekBhavnani2003/EtherNotes'
  } ,
  {
    id: 6,
    imgUrl:Qimg,
    title: "TechTriva",
    description: "TechTrivia is a MERN-powered quiz web app covering 9 tech fields. Enjoy real-time syncing, cross-platform accessibility, and a robust security. Customize your quiz experience and track your progress effortlessly.",
    link : "https://github.com/AbhishekBhavnani2003/quiz"
  } ,
  {
    id: 7,
    imgUrl: Simg,
    title: "SensorySight",
    description: "SensorySphere is a Tailwind CSS and ReactJS-driven website redesign for Ksham Innovation Pvt. Ltd.'s Web Development Hackathon. Redesigned with new pages like Testimonials and Product showcases, focusing on frontend development with creativity and functionality. Explore on Github .",
    link : "https://github.com/AbhishekBhavnani2003/ksham-Innovation"
  } , 
  {
    id: 8,
    imgUrl: Timg,
    title: "TextMagics",
    description: " TextMagics is a React-based text conversion app enabling users to transform text into bold, uppercase, lowercase, and more. It provides options to copy and share the resulting text, along with word and character count, and a preview of the converted text. Explore on Github .",
    link : "https://github.com/AbhishekBhavnani2003/TextMagics"
  } 
];

function Projects() {
  return (
    <>
    <div style={{backgroundColor:'#011627' , overflow:'hidden' }}>
      <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <p className="mr-10 text-4xl font-bold leading-none text-gray-100 md:text-5xl" style={{fontSize:'15px' , cursor:'default' , padding:'5px' , lineHeight:'1.5'} }>
          This page includes some of the basic projects that I made during the first 3 years of my engineering...
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          {projectsData.map(project => (
            <div key={project.id} className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
              <img src={project.imgUrl} alt="Card img" className="object-cover object-center w-full h-48" />
              <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                  <div>
                    <h1  className="block mb-4 text-2xl font-black leading-tight " style={{cursor:'default'}}>{project.title}</h1>
                    <p className="mb-4"  style={{cursor:'default'}}>{project.description}</p>
                  </div>
                  <div>
                    <a href={project.link}className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600" target='/'>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default Projects;
