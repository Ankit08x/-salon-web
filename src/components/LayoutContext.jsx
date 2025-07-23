import React, { createContext, useContext, useState, useEffect } from 'react';

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [isSidebarLayout, setIsSidebarLayout] = useState(false);

  useEffect(() => {
    const checkZoomLevel = () => {
      const zoom = window.devicePixelRatio;
      setIsSidebarLayout(zoom < 1); 
    };

    checkZoomLevel();
    window.addEventListener('resize', checkZoomLevel);

    return () => window.removeEventListener('resize', checkZoomLevel);
  }, []);

  return (
    <LayoutContext.Provider value={{ isSidebarLayout, setIsSidebarLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => useContext(LayoutContext);

