import React from 'react'
import ContactForm from './contactForm'

const Contact = () => {
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="flex w-[90%] h-[90%]">
        <div className="flex-1 flex flex-col items-center justify-center max-lg:hidden bg-blue-gradient">
          <p className="text-[40px] font-bold text-dimWhite">MediXR Contact</p>
          <p className="text-[24px] text-dimWhite">Stay connected with us</p>
        </div>
        <div className="flex-1 h-[100%] bg-[#fff]">
            <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
