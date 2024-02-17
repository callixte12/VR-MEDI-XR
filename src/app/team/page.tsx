'use client'

import logo from '@/assets/logo.png'
import picture from '@/assets/IMGL8932.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { StyledButton } from '@/widgets'
import { Team } from '@/components'

const Page = () => {
  return (
    <div className="bg-slate-100">
        <div className="bg-blur-1 bg-cover">
            <nav className="w-full md:px-4 lg:px-12 px-2 font-mono flex py-6 justify-between items-center navbar z-20">
                <Link href="/" className="flex gap-2 items-center">
                    <Image src={logo} alt="mediXR" className="w-[60px] h-[50px]" />
                    <h3 className="text-secondary font-bold text-4xl font-poppins">Medi<span className="text-primary font-extrabold">XR</span></h3>
                </Link>
                <div className="sm:flex hidden justify-end items-center gap-8">
                    <ul className="list-none flex flex-1 gap-8">
                        <li
                            className={`font-poppins font-normal cursor-pointer text-[16px]`}
                        >
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li
                            className={`font-poppins font-normal cursor-pointer text-[16px] text-primary font-semibold" : "text-secondary"`}
                        >
                            <Link href={'/team'}>Team</Link>
                        </li>
                    </ul>
                    <Link href={'/'}>
                        <StyledButton styles='px-4 py-2 text-[16px] font-bold text-white rounded-xl mb-2 bg-black-gradient' label='Contact Us' />
                    </Link>
                </div>
            </nav>
            <section className="relative flex flex-col gap-12 mt-6 items-center h-[100%] xxl:h-[90vh]">
                <h1 className="text-4xl">Our Team</h1>
                <Image src={picture} alt="Team" width={150} height={150} className="w-[100%] md:w-[90%] xl:w-[75%] h-[600px] xxl:h-[91%]" />
                <div className='absolute right-0 bottom-0 bg-white lg:w-[40%] w-[90%] xxl:pr-[100px] xxl:py-[150px] py-[50px] px-[50px]'>
                    <h3 className="text-primary font-poppins text-[32px] font-bold">MediXR Development</h3>
                    <p className="font-poppins">At MediXR our mission to create training simulation to help Medical students and Doctors save more lives. </p>
                    <button className="bg-primary rounded-full px-4 py-2 text-white mt-8">Meet the team</button>
                </div>
            </section>
        </div>
        <section id="teams" className="pt-8">
            <Team />
        </section>
    </div>
  )
}

export default Page
