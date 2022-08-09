import React, { useEffect } from 'react'
import './nav.css'
import logo from "./logo.png"

const Nav = () => {
    

  return (
    <div className="nav">
        <img className='logo' src={logo} alt="twins-logo" />
    </div>
  )
}

export default Nav