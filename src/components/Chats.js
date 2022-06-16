import React, { useState } from 'react'
import {ChatEngine} from 'react-chat-engine'
import { auth } from '../firebase'
import { useNavigate } from 'react-router'
import { useAuth } from '../contexts/AuthContexts'
import {useEffect } from 'react';
import axios from 'axios';

const Chats = () => {
  const [loading,setLoading] = useState(true);
  const navigate = useNavigate();
  const {user} = useAuth();
  const handleLogout = async()=>{
    await auth.signOut();
    navigate("/");
  }
  
  const getFile = async(url)=>{
const response = await fetch(url);
const img = await response.blob();
return new File([img],"userPhoto.jpg",{type:'image/jpeg'})
  }

useEffect(()=>{
  axios.get("https://api.chatengine.io/users/me/",
  {headers:{
      'project-id':process.env.REACT_APP_CHAT_ENGINE_ID,
      'user-name':user.email,
      'user-secret':user.uid
    }
  })
  .then(()=>{//if user profile exist
    setLoading(false);
  })
  .catch(()=>{//if user profile do not exist
let data = new FormData();
data.append('email',user.email);
data.append('username',user.email);
data.append('secret',user.uid);

getFile(user.photoURL)
.then((avatar)=>{
  data.append('avatar',avatar,avatar.name)
  axios.post(
  'https://api.chatengine.io/users/',
  data,
  {headers:{"private-key":process.env.REACT_APP_CHAT_ENGINE_KEY}}
  )
  .then(()=>setLoading(false))
  .catch((error)=>console.log(error.response))
})
  })
},[user,navigate])
if(!user || loading) return 'loading'
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">
          Chatbook
        </div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>
      <ChatEngine
      height="calc(100vh - 66px)"
      projectID ={process.env.REACT_APP_CHAT_ENGINE_ID}
      userName={user.email}
      userSecret={user.uid}
      />
    </div>
  )
}
export default Chats;