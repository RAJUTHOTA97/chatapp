  
import React, { useState } from "react"
 
import { useNavigate,Link} from "react-router-dom";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
 

 const Login=()=>{

  const [err, setErr] = useState(null);
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const email = e.target[0].value;
    const password = e.target[1].value;
    

    try {

    await  signInWithEmailAndPassword(auth, email, password)
       navigate("/")
    } catch (error) {
      setErr("Error registering user: " + error.message);
    }
  };





     return(
       
        <div className="formContainer"> 
        <div className="formWrapper">
        <span className="logo">Lets chat</span>
        <span className="title">Login</span>

      <form onSubmit={handleSubmit}>
 
<input type="email" placeholder="ganesh@gmail.com"/>
<input type="password" placeholder="ganesh123"/>
 

<button>Sign In</button>
{err && <span>Some thing went wrong</span>}

      </form  >
      <p>if you don't have account? <Link to="/registor">Register</Link></p>

    

        </div>
     
        
        </div>
         
       
     )
 }
 export default Login