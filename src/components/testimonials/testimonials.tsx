'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Testimonials = () => {

    const slides = [
        {
        rating: 1,
        quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
        author: "Michael Scott",
        role: "Software Developer, B&B",
        image: ''
        },
        {
        rating: 3,
        quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
        author: "M Scott",
        role: "Software Developer, B&B",
        image: ''
        },
        {
        rating: 4,
        quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
        author: "Michael S",
        role: "Software Developer, B&B",
        image: ''
        },
        {
        rating: 4,
        quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
        author: "Michael S",
        role: "Software Developer, B&B",
        image: ''
        },
        {
        rating: 4,
        quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
        author: "Michael S",
        role: "Software Developer, B&B",
        image: ''
        },
        // Add more slides as needed
    ]

  return (
    <section className="bg-gray-50">
      <div className="mx-2 w-[100%] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="flex flex-col justify-center text-center lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              What do our Clients say?
            </h2>
            <p className="mt-4 text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat
              harum porro optio fugit a culpa sunt id!
            </p>
            <div className="swiper-controler justify-center items-center h-[70px] w-[100%] lg:mt-12 lg:gap-4">
              <button
                aria-label="Previous slide"
                onClick={() => {}}
                className="rounded-full border border-primary p-8 text-primary transition hover:bg-primary hover:text-white swiper-button-prev"
              >
                <ChevronLeftIcon className="text-primary hover:text-white w-6 h-6" />
              </button>
              <button
                aria-label="Next slide"
                onClick={() => {}}
                className="rounded-full border border-primary p-8 text-primary transition hover:bg-primary hover:text-white swiper-button-next"
              >
                <ChevronRightIcon className="text-primary hover:text-white w-6 h-6" />
              </button>
              <div className="swiper-pagination flex gap-[6px] justify-center"></div>
            </div>
          </div>
          <div className="md:-mx-4 lg:col-span-2 lg:mx-0">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: '.swiper-pagination', clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                enabled: true,  
              }}
              breakpoints={{
                  640: {
                  slidesPerView: 1
                  },
                  700: {
                    slidesPerView: 2
                  },
                  1024: {
                    slidesPerView: 3
                  }
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
                {slides.map((slide, i) => (
                  <SwiperSlide key={i}>
                    <div className="w-[400px] max-sm:w-[97%] rounded-xl box-shadow bg-white">
                          <blockquote className="flex h-full flex-col justify-between shadow-sm p-8 lg:py-8 lg:px-12">
                              <div>
                                <h3 className="text-black-gradient text-[80px] -mb-12 font-poppins">&quot;</h3>
                                <div className="mt-4">
                                    <p className="text-[16px]">{slide.quote}</p>
                                </div>
                              </div>
                              <footer className="flex mt-4 text-sm font-medium text-gray-700 sm:mt-6 items-center gap-4">
                                <div className={`flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#002fff35]`}>
                                  <Image src="" alt="star" className="w-[50%] h-[50%] object-contain" />
                                </div>
                                  <div>
                                      <p className="mt-4 leading-relaxed font-bold text-primary text-[18px]">{slide.author}</p>
                                      {slide.role}
                                      <div className="flex mt-2">
                                          {[1,2,3,4,5].map((i) => <StarIcon key={i} className={`w-[20px] aspect-square ${i <= slide.rating ? 'text-primary' : 'text-slate-300' }`} /> )} 
                                      </div>
                                  </div>
                              </footer>
                          </blockquote>
                        </div>
                  </SwiperSlide>
                ))}
            </Swiper>  
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
