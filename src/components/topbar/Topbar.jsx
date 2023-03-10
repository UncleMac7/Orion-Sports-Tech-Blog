import "./topbar.scss";
import React from 'react'
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../../context/Context";

function Topbar() {
  const {user,dispatch} = useContext(Context);
  const PF = "https://orionblog-api.onrender.com/images/"

  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
  };
  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link className="Link" to='/'>HOME</Link>
                </li>
                <li className="topListItem">
                  <Link className="Link" to='/about'>ABOUT</Link>
                </li>
                <li className="topListItem">
                <Link className="Link" to='/contact'>CONTACT</Link>
                </li>
                <li className="topListItem">
                <Link className="Link" to='/write'>WRITE</Link>
                </li>
                <li className="topListItem" onClick={handleLogout}>
                 {user && "LOGOUT"}
                </li>
              
            </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <Link to="/settings">
              <img className="topImg" src={PF + user.profilePic} alt=""
              />
              </Link>
            ) : (
              <ul className="topList">
                <li className="topListItem">
                <Link className="Link" to="/login">LOGIN</Link>
                </li>
                <li>
                <Link className="Link" to="/register">REGISTER</Link>
                </li>
              </ul>
            )
          }
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Topbar