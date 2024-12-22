import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import { useState } from 'react'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';

export const backend_url = import.meta.env.VITE_BACKEND_URL;   // importing backend url from env

const App = () => {

  const [token, setToken] = useState('');

  return (
    <div className='min-h-screen bg-gray-50'>
      <ToastContainer />
      { token === ""
        ? <Login setToken={setToken}/>
        : <>
        <Navbar/>
        <hr className='px-16'/>
        <div className='flex w-full'>
          <Sidebar/>
          <div className='w-[70%] my-8 ml-[max(5vw,25px)] text-gray-600 text-base'>
            <Routes>
              <Route path='/add' element={<Add/>}/>
              <Route path='/list' element={<List/>}/>
              <Route path='/orders' element={<Orders/>}/>
            </Routes>
          </div>
        </div>
        </>
      }
    </div>
  )
}

export default App
