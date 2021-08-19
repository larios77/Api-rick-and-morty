import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './style.css'

const Header = () => {
  return (
    <div>
      <div className="Header">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
  )
}
export default Header
