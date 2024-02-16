import React from 'react';
import { FaAnchor } from 'react-icons/fa'; // Import the anchor icon from react-icons library

const WorkComponent = () => {
  return (
    <div className="work">
      <img src="C:\Users\1600\OneDrive\Desktop\download.jpeg" alt="" />
      <div className="layer">
        <h3>Online Shopping App</h3>
        <p>The app connects you to talented people around the world. Download it from the play store.</p>
        <a href="#"><FaAnchor /></a>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <div className="works">
        <WorkComponent />
        {/* Add more WorkComponent instances if needed */}
      </div>
      <a href="#" className="btn">See more</a>
    </div>
  );
};

export default App;
