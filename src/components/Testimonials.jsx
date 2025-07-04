import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const testimonials = [
  {
    name: "Sandra Olson",
    position: "Pharmacist",
    text: "Eye shadow is a pigmented powder/cream used to accentuate the eye area...",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Donna Kittrell",
    position: "Pharmacist",
    text: "Face powder sets foundation and under eye concealer, giving it a matte finish...",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Angela Chambers",
    position: "Pharmacist",
    text: "Most modern barbershops have special barber chairs and equipment for washing hair...",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    name: "Thomas Wadsworth",
    position: "Receptionist",
    text: "Bronzer gives skin a bit of color and contours the face for sharper definition...",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
];

const TestimonialSlider = () => {
  return (
    <div className="uto  pb-12 pt-4 bg-gray-100">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1100,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-4  max-w-md bg-gray-200 shadow-inner rounded-md mx-2 text-center w-auto h-[300px] flex flex-col justify-between">
              <p className="pt-2 text-gray-600 italic mb-4">{item.text}</p>
              <div className="pb-8 flex flex-col items-center mt-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 border-x-4 border-y-4 hover:scale-110  duration-300 border-pink-600 rounded-full mb-2" />
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
