import React from 'react';
import {
  FaHeart,
  FaCut,
  FaSpa,
  FaMagic,
  FaLeaf,
  FaHandHoldingHeart,
} from 'react-icons/fa';

const services = [
  {
    title: 'Cosmetics',
    description:
      'Cosmetics are substances or products used to enhance or alter the appearance of the face or body.',
    image: 'https://demo.lsvr.sk/html/beautyspot/images/service_01.jpg',
    icon: <FaMagic className="text-xl" />,
  },
  {
    title: 'Hairdressing',
    description:
      'Hairdressing is an occupation dating back thousands of years. Ancient art drawings and paintings have been discovered.',
    image: 'https://demo.lsvr.sk/html/beautyspot/images/service_02.jpg',
    icon: <FaCut className="text-xl" />,
  },
  {
    title: 'Barber',
    description:
      'A barber’s main job is to cut, style, groom and shave men’s and boys’ hair and beard.',
    image: 'https://demo.lsvr.sk/html/beautyspot/images/service_03.jpg',
    icon: <FaHandHoldingHeart className="text-xl" />,
  },
  {
    title: 'Massages',
    description:
      'Massage is the manipulation of soft tissues using hands, fingers, or elbows.',
    image: 'https://demo.lsvr.sk/html/beautyspot/images/service_04.jpg',
    icon: <FaSpa className="text-xl" />,
  },
  {
    title: 'Body Treatments',
    description:
      'A manicure is a cosmetic beauty treatment for the fingernails and hands.',
    image: 'https://demo.lsvr.sk/html/beautyspot/images/service_05.jpg',
    icon: <FaLeaf className="text-xl" />,
  },
  {
    title: 'Aromatherapy',
    description:
      'Aromatherapy uses essential oils and other aroma compounds to improve mood and health.',
    image: 'https://demo.lsvr.sk/html/beautyspot/images/gallery_01.jpg',
    icon: <FaHeart className="text-xl" />,
  },
];

const OurServices = () => {
  return (
    <div className="py-10 px-4 md:px-12 lg:px-24 bg-white">
      <h2 className="text-5xl font-bold text-gray-800 mb-12">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded shadow hover:shadow-2xl transition duration-300"
          >
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-t"
              />
              <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-pink-600 text-white rounded-full p-3 flex items-center justify-center shadow-lg">
                {service.icon}
              </div>
            </div>
            <div className="pt-10 pb-6 px-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{service.description}</p>
              <button className="text-sm font-medium text-pink-500 hover:underline">
                More info
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
