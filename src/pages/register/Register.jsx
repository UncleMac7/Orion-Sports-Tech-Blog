import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.scss'

function Register() {

  const[username,setUsername] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[error,setError] = useState(false)
  axios.defaults.baseURL = 'https://orionblog-api.onrender.com/api';

  const handleSubmit = async (e) => {
    setError(false);
      e.preventDefault();
      try {
        const res = await axios.post("/auth/register",{
          username,
          email,
          password,
        });
        res.data && window.location.replace("/login")
      } catch (error) {
        setError(true)
      }
   
  };

  return (
    <div className='register'>
        <span className="registerTitle">register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type='text'
             className='registerInput'
             placeholder='Enter username...'
             onChange={e=>setUsername(e.target.value)}
             />
            <label>Email</label>
            <input type='text'
             className='registerInput'
             placeholder='Enter your email...'
             onChange={e=>setEmail(e.target.value)}
             />
            <label>Password</label>
            <input type='password' 
             className='registerInput' 
             placeholder='Enter your password...'
             onChange={e=>setPassword(e.target.value)}
             />
            <button className="registerButton" type="submit">register</button>
        </form>
        <button className="registerLoginButton">
          <Link to="/login" className='Link'>
          LOGIN
          </Link>
          </button>
        {error && <span style={{color:"tomato", marginTop:"10px"}} >Something went wrong</span>}
    </div>
  )
}

export default Register;