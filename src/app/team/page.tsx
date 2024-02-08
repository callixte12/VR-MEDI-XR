'use client'

import { StyledButton } from '@/widgets'
import logo from '@/assets/logo.png'
import picture from '@/assets/IMGL8932.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { Team } from '@/components'

const Page = () => {
  return (
    <div>
        <div className="bg-blur-1 bg-cover">
            <nav className="w-full md:px-4 lg:px-12 px-2 font-mono flex py-6 justify-between items-center navbar z-20">
                <div className="flex gap-2 items-center">
                    <Image src={logo} alt="mediXR" className="w-[60px] h-[50px]" />
                    <h3 className="text-secondary font-bold text-4xl font-poppins">Medi<span className="text-primary font-extrabold">XR</span></h3>
                </div>

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
                            <Link href={'/'}>Team</Link>
                        </li>
                    </ul>
                    <StyledButton styles='px-4 py-2 text-[16px] font-bold text-white rounded-xl mb-2 bg-black-gradient' label='Contact Us' />
                </div>
            </nav>
            <section className="relative flex flex-col gap-12 mt-6 items-center">
                <h1 className="text-4xl">Our Team</h1>
                <Image src={picture} alt="Team" width={150} height={150} className="w-[100%] md:w-[90%] xl:w-[75%] h-[600px]" />
                <div className='absolute right-0 bottom-0 bg-white lg:w-[40%] w-[90%] py-[50px] px-[50px]'>
                    <h3 className="text-primary font-poppins text-[24px] font-bold">MediXR Development </h3>
                    <p className="font-poppins">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, suscipit accusantium. Aspernatur, a enim est consectetur sequi amet placeat ipsam quis pariatur nisi eius, distinctio doloremque maxime rem minima accusantium!</p>
                    <button className="bg-primary rounded-full px-4 py-2 text-white mt-8">Meet the team</button>
                </div>
            </section>
        </div>
        <section id="teams">
            <Team />
        </section>
    </div>
  )
}

export default Page
