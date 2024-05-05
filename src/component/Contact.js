import React from 'react'
import FormfacadeEmbed from "@formfacade/embed-react";
import Footer from './Footer.js'

function Contact() {
    return (
        <>
        <div style={{ backgroundColor: '#011627' , paddingBottom:'30px'}}>
            <div className="flex flex-wrap items-center justify-between mb-8">
                <p className="mr-10 text-4xl font-bold leading-none text-gray-100 md:text-5xl" style={{ fontSize: '15px', cursor: 'default', padding: '5px', lineHeight: '1.5', marginTop: '20px', textAlign: 'center', marginLeft: '20px' }}>
                    Fill this form or simply drop an email on abhishekbhavnani2003@gmail.com
                </p>
            </div>

            <FormfacadeEmbed

                formFacadeURL="https://formfacade.com/include/107625562391909637334/form/1FAIpQLSdyRRTACk5fq_LZUZYvbwRe7UkO62PuHXJc3bnMSQJ-SCqNew/classic.js/?div=ff-compose"

                onSubmitForm={() => console.log('Form submitted')}

            />
        </div>
        <Footer/>
        </>
    )
}

export default Contact