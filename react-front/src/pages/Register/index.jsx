import React from "react";
import "../Login/index.css";
import { useNavigate } from "react-router-dom";




const Register = () => {
    const navigate = useNavigate();
    
    
    
    
    
    
    
    
    return  ( 
        <>
          <div className="card">
          <div className="image">
            <div className="overlay">
            <h3>Personal Task Manager</h3>
            <p>let's organize your tasks</p>
          </div>
        </div>
            <div className="form">
              <h3>Signup</h3>
              <div className="input-field">
              <input type="text" placeholder="Enter your email"/>
            </div>
              <div className="input-field">
              <input type="text" placeholder="Enter your username"/>
            </div>
            <div className="input-field">
              <input type="password" placeholder="Enter your password"/>
            </div>
            <button>Signup</button>
            <p> have an account? <span className="sign-up" 
            onClick={() => {navigate("/")}} >Login</span> </p>
            </div>
            
      </div>
        
        
        </>
    
        )
}


export default Register;