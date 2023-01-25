import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import SideBar from '../../components/sidebar/SideBar';
import "./home.scss"
import axios from 'axios'
import { useLocation } from 'react-router-dom';
// import Footer from '../../components/footer/Footer';

function Home() {
  const[posts,setPosts] = useState([]);
  axios.defaults.baseURL = 'http://localhost:3001/api';

  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async ()=>{
     const res = await axios.get("/posts"+search);
      setPosts(res.data)
    }
    fetchPosts()
  },[search])
  return (
    <>
       <Header/>
      <div className='home'>
      <Posts posts={posts}/>
      <SideBar/>
     </div>
    </>
  
    
  )
}

export default Home