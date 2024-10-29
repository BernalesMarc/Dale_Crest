import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Program from './components/Programs' 
import Events from './components/Events' 
import Teacher from './components/Teachers'
import AboutUs from './components/AboutUs'
import CallToAction from './components/CallToAction'
import ContactUs from './components/ContactUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
    
    <Navbar />
    <Hero />
    <Program />
    <Events />
    <Teacher/>
    <AboutUs/>
    <CallToAction/>
    <ContactUs/>
    <Testimonials/>
    <Footer/>

  </div>
  )
}

export default App

