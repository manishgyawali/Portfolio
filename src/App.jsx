import React from 'react'
import { Route, Routes } from "react-router";

import Blog from './components/Blog/Blog'
import Aboutme from './components/Aboutme/Aboutme';
import { BrowserRouter } from 'react-router-dom';
import Pages from './components/pages/Pages';
import Portfolio from './components/pages/Portfolio';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Pricing from './components/pages/Pricing';
import Nav from './components/common/Nav/Nav';
import Footer from './components/common/Footer/Footer';
import ClientProject from './components/common/Client_project/Clientproject';
import Home from './components/Home/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/pricing" element={<Pricing />} />

        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact />} />



      </Routes>
      <Footer/> 

      </BrowserRouter>
      <Home/>
      <Aboutme/>
      <ClientProject/> 
      <Services/>
      <Blog/>
     
    </div>
  )
}

export default App