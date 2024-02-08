'use client'

import { useState } from 'react'
import Image from 'next/image'
import image from '@/assets/person_2.png'
import { team } from '@/constants'
import TeamModal from './teamModal'


const Teams = () => {
  const [showForm, setShowForm] = useState<number | null>(null)
  return (
    <>
      <div className="h-[200px] bg-bg-7 bg-cover -mt-12"></div>
      <div className="bg-[#fff] flex flex-col justify-space-between items-center h-fit py-8 gap-6">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-black-gradient text-[48px] font-bold">Our Team</h1>
          <p className="font-poppins text-[18px]">Meet the people we work with behind the scenes</p>
        </div>
        <div className="flex flex-wrap gap-4 max-w-[1050px]">
          {
            team.map((member, i) => (
              <div key={i} onClick={() => setShowForm(i)}>
                <div 
                  className="flex flex-col justify-center items-center gap-12 h-[300px] w-[250px] bg-black-gradient-3 my-4 box-shadow rounded-xl hover:scale-110 transition duration-500 cursor-pointer">
                  <Image src={image} alt="" width={150} height={150} className="bg-[#00000033] rounded-full h-[120px] w-[120px] object-contain flex items-center justify-center" />
                  <div>
                    <TeamModal isOpen={showForm == i} member={member} closeModal={() => setShowForm(null)} />
                    <p className="text-white font-bold">{member.name}</p>
                    <p className="text-dimWhite font-bold">{member.email}</p>
                    <p className="text-dimWhite font-bold">{member.role}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Teams
