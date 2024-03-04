import React from 'react'
import Navbar from  "../Components/Nabar/Navbar"
import Stories from '../Components/Stories/Stories'
import "../App.css"
import Feed from '../Components/Feed/Feed'
function HomePage() {

  
  return (
    <section>
    <Navbar/>
    <Stories/>
    <Feed/>
    </section>
  )
}

export default HomePage
