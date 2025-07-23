import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeroSlider from './components/HeroSlider';
import ServiceGallery from './components/ServiceGallery';
import Header from './components/Header';
import { LayoutProvider, useLayoutContext } from './components/LayoutContext';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BlogPostCard from './components/BlogPostCard';
import Testimonials from './components/Testimonials';
import AppointmentForm from './components/AppointmentForm';
import About from './components/About';
import OurServices from './components/OurServices';
import BeautyGallery from './components/GalleryReal';
import NewServices from './components/NewService';
import ScrollToTop from './components/ScrollToTop';


function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <BeautyGallery />
      <NewServices/>
      <ServiceGallery />
      <BlogPostCard />
      <Testimonials />
      
    </>
  );
}

function MainContent() {
  const { isSidebarLayout } = useLayoutContext();
  
  return (
    <div
    //className={`${isSidebarLayout ? 'ml-96' : ''} transition-all duration-300`}
     >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact-us" element={<Contact />} />
        <Route path="/App" element={<AppointmentForm />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/OurServices" element={<OurServices />} />
        <Route path="/GalleryReal" element={<BeautyGallery />} />
        <Route path="/NewServices" element={<NewServices />} />
        

      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LayoutProvider>
      <Router>
        <ScrollToTop />
        <Header/>
        <MainContent />
        
      </Router>
    </LayoutProvider>
  );
}

export default App;