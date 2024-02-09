'use client'

import team from '@/assets/IMGL8816.jpg'
import { fadeIn } from '@/utils/motion'
import { Accordion } from '@/widgets'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const CompanyDescription = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  return (
    <motion.div className="relative mt-24 max-lg:mt-[250px] z-20" variants={fadeIn("right", "spring", 0.5, 0.75)}>
        <div className="z-10 bg-white lg:flex-col h-fit min-h-[450px] max-md:h-[900px] max-sm:gap-8 sm:px-12 px-6">
            <div className="flex max-lg:flex-col gap-4 items-center justify-center lg:px-20">
                <div className="flex-1">
                  <motion.div
                    initial={false}
                    animate={
                      isLoaded && isInView
                        ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                        : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                    }
                    transition={{ duration: 2, delay: 1 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setIsInView(true)}
                  >
                    <Image src={team} alt="team" width={400} height={300} onLoad={() => setIsLoaded(true)} className='w-[600px]' />
                  </motion.div>
                </div>
                
                <div className="flex-1 lg:pl-12 w-[100%]">
                    <Accordion />
                </div>
            </div>
        </div>
        <div className="h-[200px] bg-bg-6 bg-cover -mt-8"></div>
    </motion.div>
  )
}

export default CompanyDescription

