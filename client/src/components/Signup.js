import React, { useRef,useState } from 'react'
import { Link, NavLink} from 'react-router-dom';

function Signup() {

 

 let firstNameInputRef=useRef();
 let lastNameInputRef=useRef();
 let ageInputRef=useRef();
 let emailInputRef=useRef();
 let passwordInputRef=useRef();
 let phoneNoInputRef=useRef();
 let profilePicInputRef=useRef();   

 let [profilePic,setProfilePic]=useState("./images/noimg.png")

 let onSignUp=async()=>{
    // let myHeader=new Headers();
    // myHeader.append("content-type","appplication/ multipart/form-data");

    let dataTOSend=new FormData();
    dataTOSend.append("firstName",firstNameInputRef.current.value);
    dataTOSend.append("lastName",lastNameInputRef.current.value);
    dataTOSend.append("age",ageInputRef.current.value);
    dataTOSend.append("email",emailInputRef.current.value);
    dataTOSend.append("password",passwordInputRef.current.value);
    dataTOSend.append("phoneNo",phoneNoInputRef.current.value);

    for(let i=0;i<profilePicInputRef.current.files.length;i++){
        dataTOSend.append("profilePic",profilePicInputRef.current.files[i])
    }

    let reqOptions={
        method:"POST",
        // headers:myHeader,//not required
        body:dataTOSend
    };
  let JSONData=await fetch("/signup",reqOptions);
  let JSOData=await JSONData.json();
  console.log(JSOData);
  alert(JSOData.msg)
 }
  return (
    <div>
        <form>
             <h2>Sign Up</h2>
            <div>
            <label>FirstName</label>
            <input ref={firstNameInputRef}></input>
            </div>

            <div>
            <label>LastName</label>
            <input ref={lastNameInputRef}></input>
            </div>

            <div>
            <label>Age</label>
            <input ref={ageInputRef}></input>
            </div>

            <div>
            <label>Email</label>
            <input ref={emailInputRef}></input>
            </div>

            <div>
            <label>Password</label>
            <input ref={passwordInputRef}></input>
            </div>

            <div>
            <label>PhoneNo</label>
            <input ref={phoneNoInputRef}></input>
            </div>

            <div>
            <label>ProfilePic</label>
            <input ref={profilePicInputRef} type="file"
            onChange={(eo)=>{
                //console.log(eo);
                  let selectedImgPath=URL.createObjectURL(eo.target.files[0]);
                  setProfilePic(selectedImgPath);
            }} ></input>
            <br></br>
            <br></br>
            <img src={profilePic} className='picPreview'></img>
            </div>
            <div>
            <button type="button" onClick={()=>{
                onSignUp();
            }}>SignUp</button>
            </div>
            <div>
            <Link className='dummyLink' to="/">Login</Link>
            </div>
        </form> 
    </div>
  )
}

export default Signup