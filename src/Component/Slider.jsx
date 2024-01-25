import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Image from "../assets/college.jpg"
import Book from "../assets/book.jpg"
import laptop from "../assets/laptop.jpg"
 export default function Slider() {
  return (
    <Carousel  autoPlay
    showArrows={false}
    showStatus={false}
    infiniteLoop
    stopOnHover={false}
    showThumbs={false}
    width={"100%"}>
      <div className=' justify-center'>
        <img  className=' rounded-xl max-h-80' src={Image} />
        </div>
    <div>
        <img   className=' rounded-xl max-h-80' src={Book} />
        
        
    </div>
    <div>
        <img  className=' rounded-xl max-h-80' src={laptop} />
       
    </div>
</Carousel>
  )
}
