import React from 'react'
import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './components/parent'

function App() {
  const user={
    name : "Ashish",
    email : "Ashishakauamr@gmail.com",
    role:"data science  intern "


  }
  return (
    <div className="min-h-screen bg-grey-100 flex items-center justify-center p-6">
      <Parent user_for_parent = {user}/>
        </div>
  )
}

export default App
