import React from 'react'
import Image from 'next/image'
import person_1 from '@/assets/person_2.png'
import { GrLinkedin } from 'react-icons/gr'
import { FaGithub, FaMobile, FaMobileAlt } from 'react-icons/fa'
import Link from 'next/link'

const TeamDescription = ({ member }: { member: any }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-6 items-center">
        <Image src={member.imageUrl} alt="" width={80} height={80} className="bg-[#00000033] rounded-full h-[100px] w-[100px] object-contain flex items-center justify-center" />
        <div className="flex flex-col">
            <h2 className="text-primary text-[24px] font-extrabold">{member.name}</h2>
            <p className="text-[14px] font-bold text-[#494949]">{member.email}</p>
            <p className="text-[14px] font-bold text-[#494949]">{member.role}</p>
            <div className='flex gap-2 mt-2'>
              <Link href={member.linkedin}>
                <GrLinkedin className='w-[20px] h-[20px]' />
              </Link>
              {/* <Link href={member.github}>
                <FaGithub className='w-[20px] h-[20px]' />
              </Link> */}
              <div className='flex'>
                <FaMobileAlt className='w-[20px] h-[20px]' />
                <span className='text-[14px]'> +{member.tel}</span>
              </div>
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
