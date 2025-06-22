import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    title: "Read Professional Beauty Tips",
    description: "Pamper yourself with flawless manicures and premium nail care.",
    button: "SEE OUR SERVICES",
    image: "/slide_2.jpg",
  },
  {
    title: "Welcome to SubhyaMackOvvers",
    description: "Discover elegance and perfection with our premium range of makeup essentials...",
    button: "BOOK NOW",
    image: "/slide_01.jpg",
  },
];

const HeroSlider = () => {
  return (
    <div className="relative w-full h-[550px] overflow-hidden mt-0">

      <Swiper
        navigation={{
          nextEl: ".next-button",
          prevEl: ".prev-button",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        modules={[Navigation, Autoplay]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="  w-full h-full bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className=" absolute inset-0 bg-black/10"></div>

              {/* Content box that touches left and bottom edges */}
              <div className="pt-16 absolute bottom-0 left-0 bg-white/90 p-12 shadow-lg max-w-lg  text-gray-800 z-10 w-[400px] h-[300px] flex flex-col justify-center">
                <div className="mb-8">
                  <h1 className="text-3xl font-bold mb-4 leading-tight">{slide.title}</h1>
                  <p className="text-base text-gray-600 leading-relaxed mb-6">{slide.description}</p>
                </div>
                <button className="bg-pink-600 hover:bg-pink-700 hover:scale-105 text-white mb-6 px-6 py-3 rounded-3xl transition-all duration-300 self-start font-semibold text-sm">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-10 right-10 z-20 flex space-x-4">
        <button className="prev-button bg-pink-600 text-white hover:scale-110 p-3 rounded-md h-10 flex items-center justify-center shadow text-2xl">
          &#8592;
        </button>
        <button className="next-button bg-pink-600 text-white hover:scale-110 p-3 rounded-md h-10 flex items-center justify-center shadow text-2xl">
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;