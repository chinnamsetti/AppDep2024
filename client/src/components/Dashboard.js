import React from 'react'
import TopNavigation from './TopNavigation'
import { useSelector } from 'react-redux'

function Dashboard() {
  let storeObj=useSelector((store)=>{
    return store;
  });
  return (
    <div className="dashboardDiv">
        <TopNavigation></TopNavigation>
        <h1>Welcome User</h1>
        <h2>Welcome {storeObj.loginDetails.firstName}</h2>
        <img src={`http://localhost:1405/${storeObj.loginDetails.profilePic}`}></img>
    </div>
  )
}

export default Dashboard