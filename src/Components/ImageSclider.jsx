import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';



const ImageSclider = () => {
  return (
    <div class="relative w-full">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        modules={[Navigation, Pagination]}
      >
        {/* First Slide */}
        <SwiperSlide>
          <div class="relative">
            <img
              src="https://www.paypalobjects.com/marketing/web23/in/home/hero-banner-desktop-1.jpg" // Replace with your image path
              alt="Slide 1"
              class="w-full h-auto object-cover"
            />
            <div class="absolute inset-0 flex items-start justify-start bg-transparent bg-opacity-50">
              <div class="text-left ml-[200px] mb-8 mt-[90px]">
                <h2 class="text-white text-5xl font-extrabold leading-tight">Secure payments.</h2>
                <h2 class="text-white text-5xl font-extrabold leading-relaxed ">Smooth shopping.</h2>
                <h5 class="text-white text-2xl font-lg mt-2 leading-tight">
                  More ways to pay and more places to 
                </h5>

                <h5 class="text-white text-2xl font-lg mt-2 leading-tight">
                  Send money quickly and easily
                </h5>

                <h5 class="text-white text-2xl font-lg mt-2 leading-tight">
                 around the globe.
                </h5>
                <div class="py-3 ">
                <button class="px-6 py-3 border-2 rounded-full test-sm font-semibold text-white">Sign Up</button>

                </div>
                
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide>
          <div class="relative">
            <img
              src="https://www.paypalobjects.com/marketing/web23/in/home/hero-banner-desktop-2.jpg" // Replace with your image path
              alt="Slide 2"
              class="w-full h-auto object-cover"
            />
            <div class="absolute inset-0 flex items-start justify-start bg-transparent bg-opacity-50">
              <div class="text-left ml-[200px] mb-8 mt-[90px]">
                <h2 class="text-white text-5xl font-extrabold ">Sell just about anywhere</h2>
                <h2 class="text-white text-5xl font-extrabold">in the world.</h2>

                <h5 class="text-white text-3xl font-lg mt-2 ">
                  Whether you have an online shop or need 
                </h5>

                <h5 class="text-white text-3xl font-lg mt-2 ">
                   to accept payments remotely, we can
                </h5>

                <h5 class="text-white text-3xl font-lg mt-2 ">
                  help you get paid fast.
                </h5>
                <div class="py-3  flex space-x-4 ">
                <button class="px-6 py-3 border-2 rounded-full test-sm font-semibold text-white">Sign Up</button>
                <button class="px-6 py-3 border-2 rounded-full test-sm font-semibold text-white">Contact Us</button>


                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
};

export default ImageSclider;