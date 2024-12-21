import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar/>
      <hr className='px-16'/>
      <div className='flex w-full'>
        <Sidebar/>
      </div>
    </div>
  )
}

export default App
