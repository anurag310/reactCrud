import React from 'react'

export default function Card({title,Image}) {
  return (
    <div className=' backdrop-blur-md  shadow-black shadow-lg rounded-xl hover: bg-slate-400  p-20 m-10 bg-opacity-30'>
        <img src={Image} alt=''/>
        {title}
             </div>
  )
}
