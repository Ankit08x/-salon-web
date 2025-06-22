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
      <header className=" fixed top-0 left-0 h-full w-80 z-50 bg-gradient-to-b from-pink-600 to-cyan-500/90 shadow-2xl">
        <div className="flex flex-col h-full text-white">
          <div className="flex flex-col items-center py-8 border-b border-white/20">
            <img src={logo} alt="Logo" className="h-20 w-20 rounded-full object-cover mb-4" />
            <h1 className="text-2xl font-extrabold text-center">SubhyaMakeOvvers</h1>
            
          </div>
          <nav className="flex-1 py-8">
            <ul className="space-y-0 px-0">
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.link;
                return (
                  <li key={index} className="relative">
                    <Link
                      to={item.link}
                      className="flex items-center py-1.5 px-4 transition-all duration-300 relative justify-end text-white text-sm"
                    >

                      <div className={`absolute left-0 top-0 bottom-0 transition-all duration-300 ${
                        isActive 
                          ? 'w-2 bg-white shadow-lg' 
                          : 'w-1 bg-white/70 hover:bg-white'
                      }`}></div>
                      
                     
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-20 h-px bg-white/40"></div>
                      
                      <span className="mr-4 text-right font-bold">{item.name.toUpperCase()}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="border-t border-white/20 p-6 space-y-4 text-sm text-white">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white">
                <span className="text-lg">📞</span> 
                <span className="font-medium">+91 6854 6456</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <span className="text-lg">✉</span> 
                <span className="font-medium">subhyamakeovvers@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <span className="text-lg">📍</span> 
                <span className="font-medium">Jaipur, India</span>
              </div>
            </div>
            <div className="text-sm text-white font-medium">
              <p><strong>Mo-Fr:</strong> 10am-4pm</p>
              <p><strong>Sa:</strong> 9am-2pm | <strong>Su:</strong> Closed</p>
            </div>
            <div className="flex justify-center space-x-6 text-2xl pt-2">
              <a href="#" className="text-white hover:text-pink-300 transition-colors transform hover:scale-110">🌐</a>
              <a href="#" className="text-white hover:text-pink-300 transition-colors transform hover:scale-110">📘</a>
              <a href="#" className="text-white hover:text-pink-300 transition-colors transform hover:scale-110">🐦</a>
              <a href="#" className="text-white hover:text-pink-300 transition-colors transform hover:scale-110">▶</a>
            </div>
          </div>
        </div>
      </header>
    );
  }

   return (
    <header className=" w-full absolute top-0 left-0 z-50 bg-transparent">
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
                          className="flex items-center text-white px-8 py-2 transition-all duration-300 text-lg relative font-bold"
                          onClick={() => setMenuOpen(false)}
                        >
                         
                          <div className="absolute right-40 top-1/2 transform -translate-y-2/6 w-60 h-px bg-white/40"></div>
                          
                          <span className="mr-4 text-sm tracking-wide font-semibold mx-60 ">{item.name.toUpperCase()}</span>
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
                      className="flex items-center py-2 px-8 text-white text-lg transition-all duration-300 relative font-bold"
                    >
                      <div className={`absolute left-0 top-0 bottom-0 transition-all duration-300 ${
                        isActive 
                          ? 'w-2 bg-white shadow-lg' 
                          : 'w-1 bg-white/70 hover:bg-white'
                      }`}></div>
                      
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-20 h-px bg-white/40"></div>
                      
                      <span className="flex-1 text-center ml-4 font-bold">{item.name.toUpperCase()}</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        /* Remove any transforms or transitions that might affect logo/title */
        .header-logo-title {
          transform: translate(-50%, 0) !important;
          transition: none !important;
        }
      `}</style>
    </header>
  );
};

export default Header;