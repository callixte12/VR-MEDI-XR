import person from '@/assets/IMGL9169-removebg-preview.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="flex xl:flex-row flex-col gap-2 max-lg:gap-12 mt-40 min-h-[600px] h-fit relative max-w-[1500px] mx-auto">
      <div className="flex-1 pt-36 sm:px-12 px-6 pb-12 space-y-12">
        <div className="mb-4">
            <p className="text-[45px] max-md:text-[28px] text-black-gradient">Welcome to</p>
            <p className="text-[130px] font-poppins max-lg:text-[100px] max-md:text-[80px] font-extrabold text-gradient lg:-mt-12 -mt-4">MediXR</p>
            <p className="text-[20px] max-lg:text-[20px] max-md:text-[18px] -mt-4">Transforming Healthcare with the Reality of Tomorrow:<br /> Meet mediXR, where Augmented and Virtual Reality redefine the future of medical innovation.</p>
        </div>
      </div>
      <div className="xl:flex-[1] flex justify-end items-center w-full max-lg:pb-8">
        <div className="relative xl:w-full w-[90%] xl:h-full z-10 h-[500px] max-md:h-[300px]">
          <Image src={person} alt="Person One" width={700} height={700} className="object-contain -mt-36 rounded-xl" />
        </div>
        <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round w-[100%] h-[400px] sm:h-[700px] overflow-hidden" />
      </div>
    </div>
  )
}

export default Hero
