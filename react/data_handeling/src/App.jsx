import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""


  });

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submited data ", formData);
    alert("form submited sussesfully ")

  };
  return (
    <div className='min-h-screen flex item-center justify-center bg-grey-200 p-6'>
      <form  onSubmit={handleSubmit} className='bg-white shadow-lg p-8 rounded-xl w-full max-w-wd space-y-4'>
        <h2 className='text-2xl font-bold text-center text-blue-300'> Contact form</h2>
        <input type="text"
          name='name'
          placeholder='enter your name'
          value={formData.name}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-grey-300 rounded focus:outline-none focus:ring-2 focus:ring'
          required
          />

        <input type="email"
          name='email'
          placeholder='enter your email'
          value={formData.email}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-grey-300 rounded focus:outline-none focus:ring-2 focus:ring'
          required />

        <input
          name='message'
          placeholder='enter your message'
          value={formData.message}
          onChange={handleChange}
          rows='4'
          className='w-full px-4 py-2 border border-grey-300 rounded focus:outline-none focus:ring-2 focus:ring'
          required />

        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800 transition"
        >
          Submit
        </button>   </form>
    </div>)
}

export default App
