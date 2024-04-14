import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";


const Login = ()=>{
  const navigate = useNavigate();











    return ( 
    <>
      <div className="card">
        <div className="form">
          <h3>Login</h3>
          <div className="input-field">
          <input type="text" placeholder="Enter your username"/>
        </div>
        <div className="input-field">
          <input type="password" placeholder="Enter your password"/>
        </div>
        <button>Login</button>
        <p>Don't have an account? <span className="sign-up" onClick={() => {navigate("/register")}}>Sign up</span> </p>
        </div>
        <div className="image">
        <div className="overlay">
        <h3>Personal Task Manager</h3>
        <p>let's organize your tasks</p>
      </div>
    </div>
  </div>
    
    </>

    )
}


export default Login;