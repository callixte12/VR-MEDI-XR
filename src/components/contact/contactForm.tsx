'use client'

import React, { useState } from 'react'

const ContactForm = () => {
  const [errorMessage, setErrorMessage] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [request, setRequest] = useState("demo")
    const [description, setDescription] = useState("")

    const editCategory = async (e: { preventDefault: () => void }) => {
        
    }

    const resetError = () => {
        setErrorMessage("")
    }

  return (
    <div>
      <div className="h-[100%] my-12">
        <div className="flex justify-center items-center h-[100%]">
            <div className="flex flex-col h-fit bg-white w-[100%]">
                <div>
                    <div className="flex flex-col items-center justify-center py-8">
                        <h1 className="text-primary font-poppins font-bold text-[3rem] max-sm:text-[1.5rem]">Request a Demo</h1>
                        <p className="text-center">Let us know what you need</p>
                    </div>
                    <div>
                        <form onSubmit={editCategory} encType="multipart/form-data">
                            <div className="mx-8">
                                <div className={`${!errorMessage && "hidden"} bg-red-100 rounded-[5px] h-fit py-4 px-4 mb-6 text-red-500`}>
                                    <span className="text-red-600 font-bold">Error: </span>{errorMessage}
                                </div>
                                <div className='flex gap-2'>
                                    <input 
                                        placeholder="First Name"
                                        className="input_2"
                                        type="text"
                                        onChange={(e) => setFirstName(e.target.value)}
                                        onClick={resetError}
                                        value={firstName}
                                        name="first name"
                                    />
                                    <input 
                                        placeholder="Last Name"
                                        className="input_2"
                                        type="text"
                                        onChange={(e) => setLastName(e.target.value)}
                                        onClick={resetError}
                                        value={lastName}
                                        name="last name"
                                    />
                                </div>
                                <input 
                                    placeholder="Email"
                                    className="input_2"
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                    onClick={resetError}
                                    value={email}
                                    name="email"
                                />
                                <div className="mb-4">
                                    <label htmlFor="request_type" className="ml-4 mb-8 text-[16px] text-gray-400">Request type</label>
                                    <select className="input_2 px-4">
                                        <option value="demo" onChange={() => setRequest("demo")}>Demo</option>
                                        <option value="query" onChange={() => setRequest("query")}>Query</option>
                                        <option value="support" onChange={() => setRequest("support")}>Support</option>
                                    </select>
                                </div>
                                <textarea 
                                    placeholder="Description"
                                    className="input_3 w-[100%] h-[130px] py-2"
                                    onChange={(e) => setDescription(e.target.value)}
                                    onClick={resetError}
                                    value={description}
                                    name="description"
                                    
                                />
                                <button
                                    type="submit"
                                    className="mt-8 bg-blue-gradient w-[100%] py-4 rounded-[5px] text-white text-[18px] font-semibold"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ContactForm
