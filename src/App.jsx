import { Route, Routes } from 'react-router-dom'
import './App.css'
import Searchbar from './Component/Searchbar'
import Login from './pages/Login'
import Navbar from './Component/Navbar'
import Register from './pages/Register'
import { useEffect, useState } from 'react'
import Dashboard from './pages/Dashboard'
import { analytics } from './Utils'
import { logEvent } from 'firebase/analytics'
import Chat from './pages/Chat'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './Footer/Footer'
import WorkComponent from './pages/WorkComponent'
import Card from './Component/Card'






function App () {
  if (analytics) {
    logEvent(analytics, 'user visited')
  }
  const [loggedIn, setisLoggedIn] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('userToken')
    console.log(token)
    if (token) {
      setisLoggedIn(true)
    }
  }, [])

  return (
    <>
      <div className=' text-white h-[100vh] flex flex-col justify-center items-center bg-cover'>
       
        <Navbar />
        
          <Card/>
        
        <Routes>
          <Route path='/' element={<Home />} />
         
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          {loggedIn && <Route path='/dashboard' element={<Dashboard />} />}
          <Route path='/register' element={<Register />} />
          <Route path='/chat' element={<Chat />} />
          
       
          <Route path='/workcomponent' element={<WorkComponent />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
     
        <Searchbar/>
     
        <Footer />
        
      </div>
    </>
  )
}

export default App
