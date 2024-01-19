import {Route,Routes} from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Navbar from './Component/Navbar'
import Register from './pages/Register'
import { useEffect, useState } from 'react'
import Dashboard from './pages/Dashboard'
import {NextUIProvider}
import { analytics } from './Utils';

import { logEvent } from 'firebase/analytics';
import layout



function App() {
const [loggedIn,setisLoggedIn] = useState(false)
  useEffect(()=>{
    const token = localStorage.getItem("userToken")
    console.log(token)
    if(token){
      setisLoggedIn(true)
    }
  },[]);
  export default function App ({})

  return (
    <>
      <div className=' text-white h-[100vh] flex justify-center items-center bg-cover'  >
      <Navbar/>
      <Routes>
      
          <Route path='/login' element={<Login/>}/>
          {loggedIn &&<Route path='/dashboard' element={<Dashboard/>}/>}
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
        </div>
       </>
  )
}

export default App
