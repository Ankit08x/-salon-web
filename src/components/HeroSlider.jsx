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
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-white to-purple-100">
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
            <div className="relative w-full min-h-screen flex items-center justify-center">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.6] z-0"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-300/30 via-purple-300/20 to-white/10 backdrop-blur-[2px] z-0"></div>

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 animate-fade-up">
                {/* Text Block */}
                <div className="text-center lg:text-left w-full lg:w-1/2 space-y-6">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-md">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 drop-shadow">
                    {slide.description}
                  </p>
                  <button className="mt-4 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white text-sm sm:text-base font-medium rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                    {slide.button}
                  </button>
                </div>

                {/* Image Card */}
                <div className="w-full lg:w-1/2 hidden sm:block animate-fade-in">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-auto max-h-[500px] rounded-2xl shadow-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="absolute bottom-6 right-6 z-20 flex space-x-4">
        <button className="prev-button bg-white/80 hover:bg-pink-400 hover:text-white text-pink-600 p-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110">
          &#8592;
        </button>
        <button className="next-button bg-white/80 hover:bg-pink-400 hover:text-white text-pink-600 p-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110">
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
