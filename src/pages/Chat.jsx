import React, { useEffect, useState } from 'react' 
import { io } from 'socket.io-client'


export default function Chat() {
const [message,setMessage] = useState()
const [room,setRoom] = useState()
const [messages,setMessages] = useState([]) // getter messages (spread operator...)
const [isJoined,setIsJoined] =useState(false)
const socket = io("http://localhost:3000",{transports:["websocket"]}) // transports is a array
useEffect(()=>{ // run hota h jb ye page rander hoga pehle isme koi dependencies hoga
    socket.on("joined",()=>{
        setIsJoined(true)
    })
    socket.on("message",(msg)=>{
        setMessages((prev)=>[...prev,msg])
    })
}, [room])
  

function send (){
    socket.emit("message",message,room)
}
function join (){
    socket.emit("join",room)
}

  return (


    <div>
        {
        !isJoined? <div>
            <input  className =' text-fuchsia-950' value={room} type="text" placeholder='Enter Room Id' onChange={(e)=> setRoom(e.target.value)}/>
            <button className= ' text-fuchsia-950' onClick={join}>Join</button>
        </div>
          :
          
        <div> 
            {
                messages.map((mess,index)=>{
                    return(
                        <p className=' text-fuchsia-950' key={index}>
                            {mess}
                        </p>
                    )
                })
            }
        <input  className =' text-fuchsia-950' value={message} type="text" placeholder='Enter message' onChange={(e)=> setMessage(e.target.value)}/>
        <button className=' text-fuchsia-950' onClick={send}>Send</button>
        </div>
}
    </div>


    
  )
}
