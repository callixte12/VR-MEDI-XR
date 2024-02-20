import React from 'react'
import Image from 'next/image'
import person_1 from '@/assets/person_2.png'
import { GrLinkedin } from 'react-icons/gr'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

const TeamDescription = ({ member }: { member: any }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-6 items-center">
        <Image src={person_1} alt="" width={80} height={80} className="bg-[#00000033] rounded-full h-[100px] w-[100px] object-contain flex items-center justify-center" />
        <div className="flex flex-col">
            <h2 className="text-primary text-[28px] font-extrabold">{member.name}</h2>
            <p className="text-[14px] font-bold text-[#494949]">{member.email}</p>
            <p className="text-[14px] font-bold text-[#494949]">{member.role}</p>
            <div className='flex gap-2 m-2'>
              <Link href=''>
                <GrLinkedin className='w-[22px] h-[22px]' />
              </Link>
              <Link href=''>
                <FaGithub className='w-[22px] h-[22px]' />
              </Link>
            </div>
        </div>
      </div>
      <hr />
      <div>
        {member.description}
      </div>
    </div>
  )
}

export default TeamDescription
