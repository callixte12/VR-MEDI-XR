'use client'

import team from '@/assets/IMGL8816.jpg'
import styles from '@/style'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const CompanyDescription = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  return (
    <div className="relative xl:-mt-[390px] 2xl:-mt-[500px] z-20">
        <div className="h-[500px] 2xl:h-[500px] bg-cover bg-bg-3"></div>
        <div className="z-10 bg-white lg:flex-col h-[600px] max-md:h-[800px] max-sm:-mt-28 max-sm:gap-8 sm:px-12 px-6">
            <div className="flex max-lg:flex-col gap-12 items-center justify-center">
                <div className="flex-1">
                  <motion.div
                    initial={false}
                    animate={
                      isLoaded && isInView
                        ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                        : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                    }
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setIsInView(true)}
                  >
                    <Image src={team} alt="team" width={300} height={300} onLoad={() => setIsLoaded(true)} />
                  </motion.div>
                </div>
                
                <div className="flex-1 lg:pl-12">
                    <p className="font-poppins mb-4 font-semibold xl:text-[50px] text-center text-[40px] text-gradient xs:leading-[76.8px] leading-[66.8px] w-full">What MediXR does?</p>
                    <p className={styles.paragraph}>MediXR is training future Expert Doctors and Medical students through use of advance technologies such as Virtual Reality and Augmented Reality</p>
                </div>
            </div>
        </div>
        <div className="h-[200px] bg-bg-6 bg-cover -mt-12"></div>
    </div>
  )
}

export default CompanyDescription

