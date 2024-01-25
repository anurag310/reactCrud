// src/components/HomePage.jsx
import React from 'react';
import Slider from '../Component/Slider';

const Home = () => {
  return (
    <>
    <div className=" flex justify-center flex-col">
    <div className="   max-h-[80vh] w-[80%] flex justify-center items-center">
       <Slider/>
    </div>
    <div className="h-50vh flex items-center bg-blue-700 w-full justify-center mt-4  text-3xl font-display">
        <h1 className=" text-center">
        “Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying ‘I will try again tomorrow’.”
        </h1>

    </div >
    </div>
  
  </>
  )
}

export default Home;
