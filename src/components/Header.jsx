import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import { useLayoutContext } from './LayoutContext';
import logo from './newlogo.png';
import bgImg from './bg-image.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isSidebarLayout } = useLayoutContext();
  const location = useLocation();

  const handleResize = () => {
    const zoomLevel = Math.round((window.devicePixelRatio || 1) * 100);
    console.log('Current Zoom Level:', zoomLevel + '%');
    
    if (zoomLevel >= 100) {
      setIsMobile(true);   
    } else {
      setIsMobile(false);  
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Our Services', link: '/OurServices' },
    { name: 'Gallery', link: '#' },
    { name: 'About Us', link: '/About-Us' },
    { name: 'Contact Us', link: '/Contact-Us' },
    { name: 'Book Appointment', link: '/App' },
  ];

  
  if (isSidebarLayout) {
    return (
      <header className="fixed top-0 left-0 h-full  z-50 bg-gradient-to-b from-pink-600 to-cyan-500/90 shadow-2xl">
        <div className="flex flex-col h-full text-white">
          <div className="flex flex-col items-center py-8 border-b border-white/20">
            <img src={logo} alt="Logo" className="h-20 w-20 rounded-full object-cover mb-4" />
            <h1 className="text-2xl font-extrabold text-center">SubhyaMakeOvvers</h1>
          </div>
          <nav className="flex-1 py-8">
            <ul className="space-y-0 px-0">
              {menuItems.map((item, index, text) => {
                const isActive = location.pathname === item.link;
                return (
                  <li key={index} className="relative">
                    <Link
                      to={item.link}
                      className="flex items-center py-1 px-2 transition-all duration-200 relative justify-end text-white text-x1  hover:font-extrabold hover:scale-105   "
                    >
                      <div className={`absolute left-0 top-0 bottom-0 transition-all duration-300 ${
                        isActive 
                          ? 'w-2 bg-white shadow-lg' 
                          : 'w-1 bg-white/70 hover:bg-white group-hover:w-1.5'
                      }`}></div>
                       
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-36 h-px bg-white/40 group-hover:bg-white/60"></div>
                      
                      <span className="mr-4 text-rghit font-bold transition-all duration-300 group-hover:text-lg group-hover:font-extrabold">{item.name.toUpperCase()}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="border-t border-white/20 p-6 space-y-4 text-sm text-white">
          
            <div className="grid grid-cols-2 gap-4 text-xs">
           
              <div className="space-y-3">
              
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <span className="font-bold text-xs">+91 9847-2933</span>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <span className="font-bold text-xs break-all">example@example.com</span>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="text-xs">
                    <p className="font-bold">BeautySpot</p>
                    <p className="text-white/90 text-xs">9015 Sunset Boulevard</p>
                    <p className="text-white/90 text-xs">CA 90069</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-3">
                {/* Hours */}
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="text-xs">
                    <p className="font-bold">Mo - Fr:</p>
                    <p className="text-white/90">10am - 4pm</p>
                    <p className="font-bold">Sa:</p>
                    <p className="text-white/90">9am - 2pm</p>
                    <p className="font-bold">Su:</p>
                    <p className="text-white/90">Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media Icons - Full Width Below */}
            <div className="flex justify-center space-x-4 pt-4">
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all transform hover:scale-110">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all transform hover:scale-110">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.1.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.749-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all transform hover:scale-110">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all transform hover:scale-110">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }

   return (
    <header className="w-full absolute top-0 left-0 z-50 bg-transparent">
      <div className={`relative text-center w-full flex flex-col items-center justify-center text-white z-40 transition-all duration-700 ease-in-out ${
        menuOpen ? 'min-h-[600px]' : 'min-h-[200px]'
      }`}>

        <div 
          className={`absolute inset-0 bg-cover bg-center z-[-2] transition-all duration-700 ${
            menuOpen ? 'h-full' : ''
          }`} 
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-cyan-500/80 to-pink-600/95 backdrop-blur-sm z-[-1] transition-all duration-700 ${
            menuOpen ? 'h-full' : ''
          }`}
        ></div>

        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
          <img src={logo} alt="Center Logo" className="h-20 w-20 rounded-full object-cover mb-2 mx-auto" />
          <div className="text-center">
            <h1 className="text-4xl font-extrabold whitespace-nowrap">SubhyaMakeOvvers</h1>
          </div>
        </div>

        {isMobile ? (
          <>
            <div
              className="absolute top-5 right-6 z-50 cursor-pointer transition-transform duration-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className={`space-y-1 transform transition-all duration-300 ${menuOpen ? 'rotate-45' : ''}`}>
                <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'transform rotate-90 translate-y-1.5' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'transform -rotate-90 -translate-y-1.5' : ''}`}></span>
              </div>
            </div>

            {menuOpen && (
              <div className="absolute top-[280px] left-0 right-0 w-full z-30 px-8">
                <div className="space-y-0 pt-4">
                  {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.link;
                    return (
                      <div key={index} className="relative">
                        <Link
                          to={item.link}
                          className="flex items-center text-white px-8 py-2 transition-all duration-300 text-lg relative font-bold hover:scale-105 hover:font-extrabold group"
                          onClick={() => setMenuOpen(false)}
                        >
                          <div className="absolute right-40 top-1/2 transform -translate-y-2/6 w-60 h-px bg-white/40 group-hover:bg-white/60"></div>
                          <span className="mr-4 text-sm tracking-wide font-semibold mx-60 transition-all duration-300 group-hover:text-base group-hover:font-extrabold">{item.name.toUpperCase()}</span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="absolute bottom-10 w-full max-w-2xl px-8 z-30">
            <div className="space-y-0">
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.link;
                return (
                  <div key={index} className="relative">
                    <Link
                      to={item.link}
                      className="flex items-center py-2 px-8 text-white text-lg transition-all duration-300 relative font-bold hover:scale-105 hover:font-extrabold group transform-gpu"
                    >
                      <div className={`absolute left-0 top-0 bottom-0 transition-all duration-300 ${
                        isActive 
                          ? 'w-2 bg-white shadow-lg' 
                          : 'w-1 bg-white/70  hover:bg-white group-hover:w-1.5'
                      }`}></div>
                      
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-20 h-px bg-white/40 group-hover:bg-white/60 transition-all duration-300"></div>
                      
                      <span className="flex-1 text-center ml-4 font-bold transition-all duration-300 group-hover:text-xl group-hover:font-extrabold">{item.name.toUpperCase()}</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .header-logo-title {
          transform: translate(-50%, 0) !important;
          transition: none !important;
        }
      `}</style>
    </header>
  );
};

export default Header;