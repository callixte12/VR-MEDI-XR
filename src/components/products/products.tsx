'use client'

import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { productFeatures } from '@/constants'
import Image from 'next/image'
import image from '@/assets/benefit_1.png'
import { useInView } from 'react-intersection-observer'

export const fadeIn = (direction: string, type: string, delay: number, duration: number) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    }
}

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the component comes into view
  });
  return (
    <div className="flex flex-col items-center justify-center h-fit py-12 px-8 gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h3 className="text-[60px] font-bold text-white">Product</h3>
        <p className="text-dimWhite max-w-[1200px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur or sit amet, consectetur</p>
      </div>
      <motion.div className="flex max-w-[1800px] justify-around flex-wrap gap-4 xxl:gap-12">
        {productFeatures.map((product, i) => (
          <div ref={ref} className={`${inView && 'product_card__animation'}`}>
            <Tilt className={`
              ${(i == 0 || i == 4) ? "xl:mt-48" : (i == 1 || i == 3) && "xl:mt-24"} 
              
              xs:w-[250px] flex flex-col justify-center items-center h-[300px] w-[230px] bg-black-gradient-3 my-4 box-shadow rounded-xl transition duration-500 cursor-pointer`} key={i}>
                <motion.div
                    ref={ref}
                    variants={fadeIn("right", "spring", i * 0.5, 0.75)}
                    className="w-full rounded-[20px] flex flex-col justify-center items-center gap-4"
                >
                    <Image src={image} alt="" width={150} height={150} className="h-[120px] w-[120px] object-contain flex items-center justify-center" />
                    <div className="px-6 flex items-center flex-col">
                        <h3 className='text-white text-[16px] font-bold text-center'>
                            {product.title}
                        </h3>
                        <h3 className='text-white text-[12px] text-center'>
                            {product.description}
                        </h3>
                    </div>
                </motion.div>
            </Tilt>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Products

// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from 'react-vertical-timeline-component'
// import { motion } from 'framer-motion'
// import 'react-vertical-timeline-component/style.min.css'
// import { styles } from '../styles'
// import { experiences } from '../constants'
// import { SectionWrapper } from '../hoc'
// import { textVariant } from '../utils/motion'

// const ExperienceCard = ({ experience }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background: "#0057BD",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "7px solid  #232631" }}
//       date={experience.date}
//       iconStyle={{ background: experience.iconBg }}
//       icon={
//         <div className='flex justify-center items-center w-full h-full'>
//           <img
//             src={experience.icon}
//             alt={experience.company_name}
//             className='w-[60%] h-[60%] object-contain'
//           />
//         </div>
//       }
//     >
//       <div>
//         <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
//         <p
//           className='text-secondary text-[16px] font-semibold'
//           style={{ margin: 0 }}
//         >
//           {experience.company_name}
//         </p>
//       </div>

//       <ul className='mt-5 list-disc ml-5 space-y-2'>
//         {experience.points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className='text-white-100 text-[14px] pl-1 tracking-wider'
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   )
// }

// const Experience = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} text-center`}>
//           What I have done so far
//         </p>
//         <h2 className={`${styles.sectionHeadText} text-center`}>
//           Work Experience.
//         </h2>
//       </motion.div>

//       <div className='mt-20 flex flex-col'>
//         <VerticalTimeline>
//           {experiences.map((experience, index) => (
//             <ExperienceCard
//               key={`experience-${index}`}
//               experience={experience}
//             />
//           ))}
//         </VerticalTimeline>
//       </div>
//     </>
//   )
// }

// export default SectionWrapper(Experience, "work")
