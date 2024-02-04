import React from 'react'

import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

const Navbar = () => {
  return (
    <header className=' bg-purple-400 fixed top-0   w-full '>
      <nav className=' flex  flex-row items-center '>
        <div>
          <a
            href='/'
            className=' text-2xl font-semibold flex items-center space-x-3'
          >
            <img
              src={logo}
              alt=''
              className=' w-20 h-20 inline-block items-center rounded-full'
            />
            <span className=' text-purple-800 ms-5'>
              College Information Website
            </span>
          </a>
        </div>
        <div className=' flex flex-row items-center p-50 '>
          <Link to='/home'>
            <p className='ml-10  hover:text-slate-400 font-serif'>
              <b>Home</b>
            </p>
          </Link>
          <Link to='/about'>
            <p className='ml-10  hover:text-slate-400 font-serif'>
              <b>About</b>
            </p>
          </Link>
          <Link to='/chat'>
            <p className='ml-10  hover:text-slate-400 font-serif'>
              <b>Chat</b>
            </p>
          </Link>
          <Link to='/register'>
            <p className='ml-10  hover:text-slate-400 font-serif'>
              <b>Register</b>
            </p>
          </Link>
          <Link to='/login'>
            <p className=' ml-10  hover:text-slate-400 font-serif'>
              <b>Login</b>
            </p>
          </Link>

          <button
            id='dropdownDelayButton'
            data-dropdown-toggle='dropdownDelay'
            data-dropdown-delay='500'
            data-dropdown-trigger='hover'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ms-20'
            type='button'
          >
            List{' '}
            <svg
              className='w-2.5 h-2.5 ms-3 '
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 10 6'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='m1 1 4 4 4-4'
              />
            </svg>
          </button>

          <div
            id='dropdownDelay'
            className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
          >
            <ul
              className='py-2 text-sm text-gray-700 dark:text-gray-200'
              aria-labelledby='dropdownDelayButton'
            >
              <li>
                <a
                  href='http://localhost:5173/home'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='http://localhost:5173/about'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='http://localhost:5173/register'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Register
                </a>
              </li>
              <li>
                <a
                  href='http://localhost:5173/login'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Login
                </a>
              </li>
            </ul>
        
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Navbar
