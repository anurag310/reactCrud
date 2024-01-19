import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-gray-700 text-white fixed top-0 w-full">
      <nav className="container mx-auto flex justify-between items-center p-5 flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center">
          <img className="h-8 w-8 rounded-full" src="../src/assets/logo.png" alt="Website Logo" />
          <p className="ml-3 text-lg font-bold">Website</p>
        </div>
        <div className="mt-4 md:mt-0 md:flex items-center">
          <Link to="/login" className="ml-9">
            <p>Login</p>
          </Link>
          <Link to="/register" className="ml-9">
            <p>Register</p>
            <Link to="/dashboard" className='ml-9'>
              <p>Dashboard</p>
            </Link>
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
