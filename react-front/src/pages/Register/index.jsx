import React from "react";
import "../Login/index.css";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import { sendRequest } from '../../core/remote/request'



const Register = () => {
    const navigate = useNavigate();
    
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    useEffect(()=>{
        handleRegister()
    },[]);
        

  const handleRegister =()=>{
    sendRequest("POST",'/register',{
        username:username,
        email:email,
        password:password,
    }).then((response)=>{
        navigate("/")
        console.log(response)
    }).catch((error)=>{
    console.log("signup unsuccessful", error)

  })}

    
    
    
    
    
    
    return  ( 
        <><form>
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
              <input type="text"  value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
              <div className="input-field">
              <input type="text" value={username} placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="input-field">
              <input type="password"  value={password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button onChange={handleRegister}>Signup</button>
            <p> have an account? <span className="sign-up" 
            onClick={() => {navigate("/")}} >Login</span> </p>
            </div>
            
      </div>
      </form>
        
        </>
    
        )
}


export default Register;