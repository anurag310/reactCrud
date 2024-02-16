import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import Searchbar from './Searchbar';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className="bg-purple-400 fixed w-full"
      style={{
        top: 0,
        zIndex: 1000,
        boxShadow: isSticky ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <span className="text-purple-800 ml-3 text-lg font-semibold">College Information Website</span>
          </Link>
        </div>
        <div className="flex items-center space-x-3 md:space-x-5">
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/" className="hover:text-slate-400 font-semibold text-lg">
              Home
            </Link>
            <Link to="/about" className="hover:text-slate-400 font-semibold text-lg">
              About
            </Link>
            <Link to="/chat" className="hover:text-slate-400 font-semibold text-lg">
              Chat
            </Link>
            <form>
              <label htmlFor="courseSelect" className="hover:text-slate-400 font-semibold text-lg">
                Courses
              </label>
              <select id="courseSelect" name="course" className="text-black">
                <option value=""></option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Architecture">Architecture</option>
                <option value="BCA">BCA</option>
                <option value="Law">Law</option>
                <option value="HotelManagement">Hotel Management</option>
                <option value="BMC">BMC</option>
                <option value="FashionTechnology">Fashion Technology</option>
              </select>
            </form>
          </div>
          <div className="flex items-center space-x-3">
            <Link className="text-blue-500" to="/login">
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-base px-4 py-2"
              >
                LogIn
              </button>
            </Link>
            <Searchbar />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
