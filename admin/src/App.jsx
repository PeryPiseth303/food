import React from 'react'
import "./index.css";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from "react-router-dom";
import Add from './Page/Add'
import List from './Page/List'
import Orders from './Page/Orders'

const App = () => {

  const url = "https://food-del-backend-dztx.onrender.com"

  return (
    <div >
      <Navbar />
      <hr />
      <div className='flex'>
        <Sidebar />
        <div className='flex-1'>
          <Routes>
            <Route path='/' element={<Add url={url}/>} />
            <Route path='/add' element={<Add url={url}/>} />
            <Route path='/list' element={<List url={url}/>} />
            <Route path='/orders' element={<Orders url={url}/>} />
          </Routes>
        </div>

      </div>
    </div>
  )
}

export default App
