import React from 'react';
import {
  FaCut,
  FaSpa,
  FaPumpSoap,
  FaMagic,
  FaBath,
  FaLeaf
} from 'react-icons/fa';

const services = [
  {
    title: "Clean Face",
    img: "/img1.jpg",
    description: "Custom Haircut suiting your face type.",
    icon: <FaMagic size={40} className="text-white" />
  },
  {
    title: "Hair Cut",
    img: "/img2.jpg",
    description: "Using only premium and herbal products.",
    icon: <FaCut size={40} className="text-white" />
  },
  {
    title: "Barber",
    img: "/img5.jpg",
    description: "Get smooth, shiny, and healthy hair.",
    icon: <FaPumpSoap size={40} className="text-white" />
  },
  {
    title: "Massages",
    img: "/img4.jpg",
    description: "Relaxing massages for mind and body.",
    icon: <FaSpa size={40} className="text-white" />
  },
  {
    title: "Body Treatments",
    img: "/img3.jpg",
    description: "Affordable Packages for glowing skin.",
    icon: <FaBath size={40} className="text-white" />
  },
  {
    title: "Aromatherapy",
    img: "/img6.jpg",
    description: "Therapeutic oils for relaxation.",
    icon: <FaLeaf size={40} className="text-white" />
  }
];

const ServiceGallery = () => {
  return (
    <section className="w-full bg-pink-50 py-16 px-4 sm:px-6 lg:px-12 2xl:px-24 transition-all duration-300">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div className="flex items-start gap-3 mb-12">
          <div className="w-[4px] min-h-[100px] bg-gradient-to-b from-pink-500 to-purple-500 rounded-sm" />
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Our Gallery Services
            </h2>
            <p className="text-gray-500 italic text-base sm:text-lg mt-1">
              Our salon offers a wide variety of beauty & self-care treatments.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 animate-fadeIn"
            >
              {/* Image */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Icon + Title Overlay */}
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-10 transition-all duration-300">
                <div className="mb-2">{service.icon}</div>
                <h3 className="text-white text-lg font-semibold">{service.title}</h3>
              </div>

              {/* Description Hover Overlay */}
              <div className="absolute inset-0 bg-pink-600 bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-500 flex items-center justify-center p-6 text-center z-20">
                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceGallery;
