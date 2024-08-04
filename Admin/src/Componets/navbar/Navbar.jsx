import React from 'react'
import '../navbar/Navbar.css'
import User from '../../assets/user.png'
import Logo from '../../assets/medical-logo.png'

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <div className="nav-left">
        <img src={Logo} alt="" />
      </div>
      <div className="nav-right">
        <img src={User} alt="" />
      </div>
    </div>
  )
}

export default Navbar
