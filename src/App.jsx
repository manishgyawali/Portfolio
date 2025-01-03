import React from 'react'
import { Route, Routes } from "react-router";
import './index.css'; // Make sure Tailwind CSS is imported
import '@fontsource/montserrat'; 
// In your App.jsx
import '@fontsource/playfair-display';
import Blog from './components/Blog/Blog'
import Aboutme from './components/Aboutme/Aboutme';
import { BrowserRouter } from 'react-router-dom';
import Pages from './components/pages/Pages';
import Portfolio from './components/pages/Portfolio';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Nav from './components/common/Nav/Nav';
import Footer from './components/common/Footer/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import BlogP from './components/pages/Blog';
import Bloghome from './components/pages/Bloghome';
import RoomRentalSystem from './components/pages/ProjectsDetails/RoomRentalSystem';
import { EducationWebsite } from './components/pages/ProjectsDetails/EducationWebsite';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogP />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/bloghome" element={<Bloghome />} />


        <Route path="/projects/1" element={<RoomRentalSystem />} />
        <Route path="/projects/2" element={<EducationWebsite />} />

      </Routes>
      <Footer/> 

      </BrowserRouter>
      
     
    </div>
  )
}

export default App