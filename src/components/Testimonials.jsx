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
    <section className="w-full min-h-screen bg-pink-50 py-16 px-4 sm:px-6 lg:px-12 2xl:px-24 transition-all duration-300">
      <div className="max-w-screen-xl mx-auto">
        
        {/* Matching Section Header */}
        <div className="flex items-start gap-3 mb-12">
          <div className="w-[4px] min-h-[100px] bg-gradient-to-b from-pink-500 to-purple-500 rounded-sm" />
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-gray-500 italic text-base sm:text-lg mt-1">
              Hear from our happy customers across the globe.
            </p>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 h-full flex flex-col justify-between transition-all duration-300">
                <p className="text-gray-700 italic text-sm sm:text-base mb-6">
                  “{item.text}”
                </p>
                <div className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-full border-4 border-pink-500 hover:scale-105 transition-transform duration-300 mb-3"
                  />
                  <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                  <span className="text-sm text-gray-500">{item.position}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
