import React, { useState, useEffect } from 'react';

import Img1 from '../assets/C-img1.png';
import Img2 from '../assets/S-img2.png';  
import Img3 from '../assets/B-img3.png';
import Img4 from '../assets/B-img4.png';
import Img5 from '../assets/C-img5.png';
import Img6 from '../assets/B-.png';
import Img7 from '../assets/M-img7.png';
import Img8 from '../assets/N-img8.png';




const BeautyGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState([]);

  const galleryImages = [
    {
      id: 1,
      src: Img1,
      alt: 'Bridal Makeup Transformation',
      title: 'Bridal Elegance'
    },
    {
      id: 2,
      src: Img2,
      alt: 'Evening Glam Look',
      title: 'Evening Glam'
    },
    {
      id: 3,
      src: Img3,
      alt: 'Natural Beauty Enhancement',
      title: 'Natural Glow'
    },
    {
      id: 4,
      src: Img4,
      alt: 'Professional Headshot Makeup',
      title: 'Professional Look'
    },
    {
      id: 5,
      src: Img5,
      alt: 'Smokey Eye Artistry',
      title: 'Smokey Artistry'
    },
    {
      id: 6,
      src: Img6,
      alt: 'Bold Glamour Look',
      title: 'Bold Glamour'
    },
    {
      id: 7,
      src: Img7,
      alt: 'Soft Romantic Style',
      title: 'Romantic Softness'
    },
    {
      id: 8,
      src: Img8,
      alt: 'Classic Hollywood Glam',
      title: 'Hollywood Glam'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      galleryImages.forEach((_, index) => {
        setTimeout(() => {
          setVisibleImages(prev => [...prev, index]);
        }, index * 150);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 py-12 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <div className="relative inline-block">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-4">
            Our
            <span className="relative ml-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400">
              Gallery
            </span>
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
        </div>
        <p className="text-gray-600 text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
          Discover the artistry of transformation through our curated collection of beauty makeovers
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative group cursor-pointer transition-all duration-700 transform ${
                visibleImages.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              } ${
                index === 0 || index === 6 
                  ? 'md:col-span-2 lg:col-span-1' 
                  : ''
              } ${
                index === 2 || index === 4 
                  ? 'lg:row-span-1' 
                  : ''
              }`}
              onClick={() => openModal(image)}
            >
              {/* Glassmorphism container */}
              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 bg-white/10 backdrop-blur-sm border border-white/20">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
                  <div className="absolute top-4 left-4 w-6 h-6 bg-pink-400/30 backdrop-blur-sm rounded-full border border-pink-300/50 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110"></div>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 border border-white/30 shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-600">Click to view details</p>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-rose-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white hover:bg-white/30 transition-colors duration-300 flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal content */}
            <div className="p-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain rounded-2xl"
              />
              <div className="mt-2 text-center">
                <h3 className="text-2xl font-light text-white mb-2">{selectedImage.title}</h3>
                <p className="text-white/80">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Decorative elements */}
      <div className="fixed top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
};

export default BeautyGallery;