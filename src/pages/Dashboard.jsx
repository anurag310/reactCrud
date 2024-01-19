import React from 'react'

export default function Dashboard() {
  function logout (){
    localStorage.removeItem("")
    window.location.reload()
  }
  return (

    <div>
      <button onClick={logout}>LogOut</button>
    </div>
  )
}
