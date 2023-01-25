import React from 'react'
import "./header.scss"

function Header() {
  return (
    <div className='header'>
    <div className="headerTitles">
        <span className="headerTitleSm">Sports & Tech</span>
        <span className="headerTitleLg">ORION</span>
    </div>
    <img className='headerImg' src='https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'alt=''/>


    </div>
  )
}

export default Header