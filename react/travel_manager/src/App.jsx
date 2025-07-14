import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data'
import Tours from './components/Tours'
function App() {
  const [tours, setTour] = useState(data)

function BtnHandler(id){
    const newTours = tours.filter(tours=>tours.id !== id);
    setTour(newTours);

  }
  return (
   <div>            
    <Tours tours = {tours}  BtnHandler = {BtnHandler}/>
</div>
  )
}

export default App;
