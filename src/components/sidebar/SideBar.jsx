import React from 'react'
import './sideBar.scss'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';

function SideBar() {

  const PF = "http://localhost:3001/images/"
  const {user} = useContext(Context)
  const[cat,setCat] = useState([]);
  axios.defaults.baseURL = 'http://localhost:3001/api';

  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get("/category")
      setCat(res.data);
    };
    getCat()

  },[]);
  
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className='sidebarImg' src={PF + user?.profilePic} alt="Profile Pic"/>
            <p>
                Lorem, ipsum dolor sit amet consectetur 
                llum cum quaerat esseis maxime iure exercitationem.
                Odit quam porro aliquam quae? Ab.
            </p>

        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            {cat.map((c) =>(
              <Link to={`/?cat=${c.name}`} className="Link">
               <li className="sidebarListItem">{c.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          </div>
        </div>
    </div>
  )
}

export default SideBar