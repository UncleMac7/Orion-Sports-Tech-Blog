import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../../context/Context';
import "./singlepost.scss"

function SinglePost() {
    axios.defaults.baseURL = 'https://orionblog-api.onrender.com/api';
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const[post,setPost] = useState({});
    const PF = "https://orionblog-api.onrender.com/images/";
    const {user} = useContext(Context);

    useEffect(() =>{
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
        };
        getPost()
    },[path]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`,{ data: {username:user.username},
        });
            window.location.replace("/")
        } catch (error) {
            
        }
    }

  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            {post.photo && (
             <img className='singlePostImg' 
             src={PF+ post.photo} 
             alt='' 
             />
            )}
           
            <h1 className="singlePostTitle">
                {post.title}
                {post.username === user?.username && (
                 <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}></i>
                 </div>

                )}
               
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor" >
                    
                    Author:
                    <Link to={`/?user=${post.username}`} className='Link'>
                    <b>{post.username}</b>
                    </Link>
                </span>
                     
                <span className="singlePostDate" >{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className='singlePostDesc'>
               {post.desc}
            </p>
        </div>
    </div>
  )
}

export default SinglePost;