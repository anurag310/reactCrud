// src/components/HomePage.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">College Information Website</h1>
        </div>
      </header>

      <nav className="bg-blue-700 text-white p-4">
        <div className="container mx-auto flex justify-center">
          <a href="#" className="mx-2 hover:underline">Home</a>
          <a href="#" className="mx-2 hover:underline">Courses</a>
          <a href="#" className="mx-2 hover:underline">About Us</a>
          <a href="#" className="mx-2 hover:underline">Contact</a>
        </div>
      </nav>

      <main className="container mx-auto my-8">
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Our College Information Website</h2>
          <p className="text-gray-700">
            Explore our courses and find valuable information about our college.
          </p>
        </section>

        {/* Add more sections/content here */}

      </main>

      <footer className="bg-blue-500 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; 2024 College Information Website. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
