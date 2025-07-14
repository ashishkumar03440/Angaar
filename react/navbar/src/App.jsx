import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from '../../routing/src/components/Navbar'
import data from './data'
import Tours from './Components/Tours'
import "./App.css"; // ✅ Make sure to import the CSS file

function App() {
    const [tours, setTour] = useState(data)

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </BrowserRouter>


    </div>
  )
}

export default App;
