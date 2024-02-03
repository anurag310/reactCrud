// src/components/HomePage.jsx

import Slider from '../Component/Slider';

const Home = () => {
  return (
    <>
    <div className=" flex justify-center flex-col mb-5">
    <div className="   max-h-[80vh] flex justify-center items-center mt-[50vh] w-full">
       <Slider className='width-full'/>
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
