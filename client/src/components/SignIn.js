import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import {Link, useNavigate} from "react-router-dom"
//import TopNavigation from './TopNavigation';
function SignIn() {

     let emailInputRef=useRef();
     let passwordInputRef=useRef();
     let navigate=useNavigate();
     let dispatch=useDispatch();

     let validateLogin=async()=>{
             let dataTOSend=new FormData();
             dataTOSend.append("email",emailInputRef.current.value);
             dataTOSend.append("password",passwordInputRef.current.value);
             let reqOptions={
                method:"POST",
                body:dataTOSend,
             };
             
         let JSONData= await fetch("http://localhost:1405/login",reqOptions);
         let JSOData=await JSONData.json();
         if(JSOData.status=="Success"){
            
            dispatch({type:"login",data:JSOData.data});

            navigate("/home");
         }else{
            alert(JSOData.msg);
         }
         console.log(JSOData);
         
     }

  return (
    <div className="signInDiv">
        
        <form>
             {/* inline */}
             <h2 className="loginHeading"  style={{backgroundColor:"grey",color:"skyblue"}}>Login</h2>
            <div>
                <label>Email</label>
                <input ref={emailInputRef}></input>
            </div>
            <div>
                <label>Password</label>
                <input ref={passwordInputRef}></input>
            </div>
            <div>
                <button type="button" onClick={()=>{
                      validateLogin()   
                }}>Sign In</button>
            </div>
        </form>
        <br></br>
        <div>
           <Link to="/signup">Sign Up</Link>
            
        </div>
    </div>
  )
}

export default SignIn