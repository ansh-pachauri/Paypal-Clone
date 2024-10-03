import React from 'react'
import Navbar from './Components/Navbar'

import ImageSclider from './Components/ImageSclider.jsx'
import Business from './Components/PaypalBusines.jsx'
import Cards from './Components/Card.jsx'
import Design from './Components/MobileDesign.jsx'
import Shop from './Components/Shop.jsx'
import './App.css'

function App() {


  return (
    <>
     <Navbar/>
     <ImageSclider/>
     <Business/>
     <Cards/>
     <Design/>
     <Shop/>
    </>
  )
}

export default App
