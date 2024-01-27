import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "../assets/college.jpg";
import Book from "../assets/book.jpg";
import Laptop from "../assets/laptop.jpg";
import scholor from "../assets/scholor.jpg"

export default function Slider() {
  const containerStyle = {
    padding: '20px', // Add padding around the carousel
    margin: '20px auto', // Center the container horizontally and add margin top and bottom
    maxWidth: '800px', // Example max-width, adjust as needed
  };

  return (
    <div style={containerStyle}>
      <Carousel
        autoPlay
        showArrows={false}
        showStatus={false}
        infiniteLoop
        stopOnHover={false}
        showThumbs={false}
        width={"100%"}
      >
        <div className='justify-center'>
          <img className='rounded-xl max-h-80' src={Image} alt="College" />
        </div>
        <div>
          <img className='rounded-xl max-h-80' src={Book} alt="Book" />
        </div>
        <div>
          <img className='rounded-xl max-h-80' src={Laptop} alt="Laptop" />
        </div>
        <div>
          <img className='rounded-xl max-h-80' src={scholor} alt="Laptop" />
        </div>
      </Carousel>
 </div>
);
}