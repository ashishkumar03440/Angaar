import React, { useState } from 'react'
import './App.css'

function App() {
  const [Counter,setCounter] =useState(0);
  const Increase =()=>setCounter(Counter + 1);
    const Decrease =()=>setCounter(Counter - 1);
      const Reset =()=>setCounter(0);


  return (
    <div >
        <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-6'>
  <div className='bg-white shadow-lg rounded-xl p-8 text-center w-72'>
    <h1 className='text-3xl font-bold text-blue-700 mb-4'>Counter APP</h1>
    <p className='text-4xl font-mono mb-6'>{Counter}</p>
    <div className='flex justify-between'>
      <button onClick={Decrease} className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition'>
        Decrease
      </button>
      <button  onClick = {Reset}className='bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition'>
        Reset
      </button>
      <button onClick={Increase} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition'>
        Increase
      </button>
    </div>
  </div>
</div>

    </div>
  )
}

export default App
