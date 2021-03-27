// import "../../styles/styles.css";
import '../../styles/nav.css'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import wLogo from "../../Pics/white-logo.png";
import Navmodules from './Navmodules'
import { auth } from '../../index'
function Nav() {
  const [displayNone, setDisplay] = useState('none')
  const handleToggle = (e) => {
    if (displayNone === 'block') {
      setDisplay('none')
    } else {
      setDisplay('block')
    }
  }
  let user = auth.currentUser;
  let email;
  if (user != null) {
    email = user.email;
  }
  let manuUserSeting;
  if (email) {
    manuUserSeting = <span onClick={handleToggle} id='profile-items' className='profile-items-span'>{email} </span>
  } else {
    manuUserSeting = <span onClick={handleToggle} id='profile-items' className='profile-items-span' >My account</span>
  }

  return (
    <div className='page-navigation'>
      <div className='page-container'>
        <div className='navbar-mobile'></div>
        <div className='navbar-desktop'>
          <a className='navbar-desktop-a' href="/"><img alt='img' src={wLogo} /></a>
          <div className='navbar-menu'>
            <Link className='navbar-menu-a' to="/new">New</Link>
            <Link className='navbar-menu-a' to="/lips">Lips</Link>
            <Link className='navbar-menu-a' to="/face">Face</Link>
            <Link className='navbar-menu-a' to="/eyes">Eyes</Link>
            <Link className='navbar-menu-a' to="/brushes">Brushes</Link>
            <Link className='navbar-menu-a' to="/skin">Skin</Link>
            <Link className='navbar-menu-a' to="/bestSellers">BEST-SELLERS</Link>
            <Link className='navbar-menu-a' to="/brands">Brands</Link>
          </div>
          <div className='profile-items'>
            {manuUserSeting}
          </div>
        </div>
        <Navmodules changeProfileDisplay={displayNone} handleToggle={handleToggle} />
      </div>

    </div>

  )
}
export default Nav;
