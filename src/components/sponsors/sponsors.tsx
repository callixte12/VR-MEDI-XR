import { sponsors } from '@/constants'
import React from 'react'
import Image from 'next/image'

const Sponsors = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-[100%] h-[370px] bg-white">
        <h3 className="text-primary mb-4 text-[50px] mt-8" style={{ fontWeight: 900 }}>Our Sponsors</h3>
        <div className="slider">
          <div className="slide-track">
            {sponsors.map((sponsor, index) => (
                <div key={index} className="slide">
                    <Image src={sponsor} alt={`sponsor ${index}`} width={150} height={100} className="w-[220px]" />
                </div>
            ))}
            {sponsors.map((sponsor, index) => (
                <div key={index} className="slide">
                    <Image src={sponsor} alt={`sponsor ${index}`} width={150} height={100} className="w-[220px]" />
                </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Sponsors
