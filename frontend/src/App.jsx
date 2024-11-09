import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  //* Removing and adding dark class from elements
  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  },[darkMode])

  return (
    <div className={`px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pt-3 bg-white dark:bg-[red] text-white dark:text-white`}>
      <ToastContainer />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/collection' element={<Collection/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
        <Route path='/place-order' element={<PlaceOrder/>}></Route>
        <Route path='/product/:productId' element={<Product/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
