import React from 'react'
import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className=' bg-purple-400 fixed top-0   w-full hover: '>
      <nav className=' flex  flex-row items-center '>
        <div>
          <a href='/' className=' text-2xl font-semibold flex items-center space-x-3 ' >
            <img src={logo} alt=''   className=' w-20 h-20 inline-block items-center rounded-full'/>
            <span className=' text-purple-800 ms-5'>
              College Information Website
            </span>
          </a>
        </div>
        <div className=' flex flex-row items-center p-50 '>
          
         
           
            <Link to='/home'>
              <p className='ml-10'>Home</p>
            </Link>
            <Link to='/about'>
              <p className='ml-10'>About</p>
            </Link>
            <Link to='/chat'>
              <p className='ml-10'>Chat</p>
            </Link>
            <Link to='/register'>
            <p className='ml-10'>Register</p>
            </Link>
            <Link to='/login'>
            <p className=' ml-10 '>Login</p>
          </Link>
        </div>
      </nav>
    </header>
  )
}
export default Navbar
