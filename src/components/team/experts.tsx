'use client'

import Image from 'next/image'
import image from '@/assets/person_2.png'
import { experts } from '@/constants'
import { useInView } from 'react-intersection-observer'


const Experts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the component comes into view
  });
  return (
    <>
      <div className="h-[200px] xxl:h-[350px] bg-bg-7 bg-cover -mt-12"></div>
      <div className="bg-[#fff] flex flex-col justify-space-between items-center h-fit py-8 gap-6">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-primary text-[54px] font-bold">Our Experts</h1>
          <p className="font-poppins text-[18px]">Meet the people we work with behind the scenes</p>
        </div>
        <div className="flex flex-col gap-2 mt-12 justify-center items-center lg:w-[90%]">
          {
            experts.map((member, i) => (
              <div ref={ref} key={i} className={`${i%2 !== 0 ? `flex-row-reverse ${inView && 'features__card'}` : `${inView && 'features__card'}`} flex w-[95%] sm:w-[80%] xxl:w-[70%] gap-6`}>
                <div 
                  className="flex flex-col justify-center items-center gap-4 min-h-[200px] w-[250px] my-4 cursor-pointer">
                  <Image src={image} alt="" width={250} height={250} className="rounded-full h-[200px] w-[200px] object-contain flex items-center justify-center -mt-16" />
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-primary font-bold font-poppins">{member.name}</p>
                    <p className="text-[#000] font-poppins">{member.email}</p>
                  </div>
                </div>
                <div className={`${i%2 === 0 ? "border-r-[4px] border-primary" : "border-l-[4px] border-primary"} py-12 px-8 xxl:w-[50%] h-fit bg-white box-shadow rounded-[5px]`}>
                  <p className="text-primary text-[22px] font-bold font-poppins">About</p>
                  <p className="font-poppins">{member.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Experts
