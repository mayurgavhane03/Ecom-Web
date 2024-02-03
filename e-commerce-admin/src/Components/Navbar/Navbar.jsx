import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/nav-logo.svg'
import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='nav-logo' alt="" >Admin DashBoard</h1>
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
