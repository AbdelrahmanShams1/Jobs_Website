import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import 'react-toastify/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <ToastContainer />
    </>
   
    
  )
}

export default MainLayout