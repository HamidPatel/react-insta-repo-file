import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
const Layout = () => {
  return (
    <>
  <Outlet/>
  <Footer/>
   </>
  )
}

export default Layout
