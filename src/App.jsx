import React from 'react'
import Nav from './assets/components/common/Nav/nav'
import { Route, Routes } from "react-router";

import Footer from './assets/components/common/footer/footer'
import ClientProject from './assets/components/common/Clients_project/ClientProject'
import Home from './assets/components/Home/Home'
import Blog from './assets/components/Blog/Blog'
import Aboutme from './assets/components/Aboutme/Aboutme';
import { BrowserRouter } from 'react-router-dom';
import Pages from './assets/components/pages/Pages';
import Portfolio from './assets/components/pages/Portfolio';
import Services from './assets/components/pages/Services';
import Contact from './assets/components/pages/Contact';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/team" element={<Blog />} />
        <Route path="/pages" element={<Pages />} />

        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact />} />



      </Routes>
      <Footer/> 

      </BrowserRouter>
      {/* <Home/>
      <Aboutme/>
      <ClientProject/> 
      <Services/>
      <Blog/>
      */}
    </div>
  )
}

export default App