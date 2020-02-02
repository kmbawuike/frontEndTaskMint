import React, { Fragment } from 'react'
import { FaAlignJustify } from 'react-icons/fa'
import { IoIosSearch } from 'react-icons/io'
import { IoIosNotificationsOutline } from 'react-icons/io'
import Pix from '../asset/images/index.png'

const Header = () => {
  const Toggle = () => {
    let x = document.getElementById("nav-menuId");
    if (x.className === "nav-menu") {
      x.className += " appear";
    } else {
      x.className = "nav-menu";
    } 
  }
  return (
    <Fragment>
      <nav className="nav-container">
        <div className="nav-menu-container">
          <h1 className="logo-text">TransMonitor</h1>
          <FaAlignJustify className="menu" onClick={Toggle} />
        </div>
        <div className="nav-menu" id="nav-menuId">
          <div className="nav-search-container">
            <IoIosSearch className="nav-search-icon" />
            <input className="nav-search" placeholder="Search..." autoFocus />
          </div>
          <a href="#" className="items">Support</a>
          <a href="#" className="items">FAQ</a>
          <div className="menu-notification-container">
            <IoIosNotificationsOutline className="menu-notification items"/>
            <span>8</span>
          </div>
          <div className="user-profile items">
            <div className="user-profile-name">
              <p className="user-profile-greeting">Hello</p>
              <p>Oluwale Ojo</p>
            </div>
            <img src={Pix}/>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Header;