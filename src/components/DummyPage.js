import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function DummyPage() {
  
  const navigate = useNavigate();
  const logoutHandler=(e)=>{
    e.preventDefault();
    localStorage.clear();
    
    navigate("/")
  }

  
  return (
    <div>
      <h1 style={{marginTop: "200px"}}>You Are Logged In.</h1>
      <button style={{marginTop: "30px", marginRight: "35px"}} onClick={logoutHandler}>Logout</button>
    </div>
  )
}
