import React from 'react'
import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className=' bg-purple-400 fixed top-0   w-full '>
      <nav className=' flex  flex-row items-center '>
        <div>
          <a href='/' className=' text-2xl font-semibold flex items-center space-x-3 ' >
            <img src={logo} alt=''   className=' w-14 h-10 inline-block items-center rounded-full'/>
            <span className=' text-purple-800 ms-5'>
              College Information Website
            </span>
          </a>
        </div>
        <div className=' flex flex-row items-center '>
          <Link to='/login'>
            <p className=' ml-50'>Login</p>
          </Link>
          <Link to='/register'>
            <p className='ml-60'>Register</p>
            </Link>
            <Link to='/dashboard'>
              <p className='ml-70'>Dashboard</p>
            </Link>
            <Link to='/chat'>
              <p className='ml-80'>Chat</p>
            </Link>
            <Link to='/home'>
              <p className='ml-80'>Home</p>
            </Link>
          
        </div>
      </nav>
    </header>
  )
}
export default Navbar
