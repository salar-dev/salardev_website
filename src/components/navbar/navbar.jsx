import React from 'react'
import './navbar.css';
import SalarDevLogo from '../../assets/images/salardev_logo.svg'

export const navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar_container">
      <div className="logo">
        <img src={SalarDevLogo} alt="" />
      </div>
      </div>
      
    </div>
  )
}

export default navbar;