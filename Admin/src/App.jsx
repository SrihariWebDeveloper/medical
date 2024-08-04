import React from 'react'
import {Route, Routes} from "react-router-dom"
import Navbar from './Componets/navbar/Navbar.jsx'
import Sidebar from './Componets/sidebar/Sidebar.jsx'
import Add from './Componets/add/Add.jsx'
import List from './Componets/list/List.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url ='https://medical-backend-x262.onrender.com';
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <div className="app-conent">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add url={url} />}/>
          <Route path='/list' element={<List url={url} />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
