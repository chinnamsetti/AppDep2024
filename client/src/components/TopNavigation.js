import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

function TopNavigation() {


  let navigate=useNavigate();

  let store=useSelector((store)=>{
     return store;
  });
useEffect(()=>{
  if(store&&store.loginDetails&&store.loginDetails.email){

  }else{
    navigate("/")
  }
  
},[])
  
  return (
    <nav className="topNav">
        <NavLink to="/home">Dashboard</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
        <NavLink to="/leaves">Leaves</NavLink>
        <NavLink to="/su">Status Update</NavLink>
        <NavLink to="/">Logout </NavLink>
        
    </nav>
  )
}
export default TopNavigation

