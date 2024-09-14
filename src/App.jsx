import React from 'react'
import Nav from './assets/components/common/Nav/nav'
import Footer from './assets/components/common/footer/footer'
import ClientProject from './assets/components/common/Clients_project/ClientProject'
import Services from './assets/components/Services/Services'
import Home from './assets/components/Home/Home'

const App = () => {
  return (
    <div>
      <Nav/>
      <Home/>
      <ClientProject/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App