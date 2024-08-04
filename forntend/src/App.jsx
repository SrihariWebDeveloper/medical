import React from 'react'
import '../src/App.css'
import Navbar from './components/navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Homeii from './pages/homeii/Homeii.jsx'
import Footer from './components/footer/Footer.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
    <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homeii/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
