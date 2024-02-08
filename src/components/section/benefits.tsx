import { benefits } from '@/constants'
import Image from 'next/image'

const Benefits = () => {
  return (
    <div>
      <div className="h-[200px] bg-bg-7 bg-cover -mt-12"></div>
      <div className="flex flex-col gap-6 bg-[#fff]">
        <div className="flex flex-col justify-center items-center bg-white">
          <h1 className="text-black-gradient text-[48px] font-bold">Benefits</h1>
          <p className="font-poppins text-[18px]">Meet the people behing our growing success</p>
        </div>
        <div className="flex flex-wrap mx-auto gap-6 justify-center">
          {benefits.map((benefit, i) => (
              <div key={i} className="flex flex-col w-[350px] h-[350px] gap-6 items-center justify-center border rounded-xl">
                  <Image src={benefit.image} alt="" width={100} height={100} className="h-[200px] w-[200px]" />
                    <p className="w-[100%] font-poppins text-center px-4">
                        {benefit.benefit}
                    </p>
              </div>
          ))}
        </div>
      </div>
      <div className="h-[300px] bg-bg-6 bg-cover -mt-8"></div>
    </div>
  )
}

export default Benefits
