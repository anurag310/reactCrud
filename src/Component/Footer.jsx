import React from 'react'

function Footer() {
  return (
  <footer className=' relative text-white'>
    <div className=' absolute bottom-0 left-0 w-full overflow-hidden'>
    <svg
  data-name="Layer 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1200 120"
  preserveAspectRatio="none"
>
  <path
    d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
    className="relative block fill-white"
  ></path>
</svg>

    <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-20'>
        <div className=' flex flex-col gap-5'>
            <h2 className=' text-3xl text-pink-500  '>Footer</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et perferendis culpa modi nemo quo, odio nihil autem consequuntur libero dolorem temporibus laborum itaque nisi! Suscipit, aliquid. Totam itaque ab commodi?</p>
        </div>
    </div>
    </div>
  </footer>
  )
}

export default Footer