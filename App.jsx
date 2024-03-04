import React, { useEffect } from 'react'
import HomePage from './Pages/HomePage'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import { useNavigate } from 'react-router-dom'
import ProfilePage from './Pages/ProfilePage'
import Signup from './Components/login/Signup'
import Login from './Components/login/LogIn'
import { FirebaseProvider } from './Context/Firebase'
const App = () => {
 

  const router = createBrowserRouter (
   

    createRoutesFromElements(
     
      <Route path='' element={<Layout />}>
       
       <Route path="/Signup" element={<Signup />}/>
       <Route  path="/Home" element={<HomePage/>}/>
          <Route path="/Profile" element={<ProfilePage/>}/>
          <Route path="/Signup" element={<Signup />}/>
          <Route path="/" element={<Login />}/>
      </Route>
     
    )
  )
  return (

   <FirebaseProvider >
    <RouterProvider router={router} />

   </FirebaseProvider>
  )
}

export default App

