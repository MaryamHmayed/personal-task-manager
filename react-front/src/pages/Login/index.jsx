import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { useEffect,useState } from "react";
// import { requestMethods } from "../../core/enums/reqMethods";
import { sendRequest } from '../../core/remote/request'

const Login = ()=>{
  const navigate = useNavigate();

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  useEffect(()=>{
      handleLogin()
  },[]);
      

  const handleLogin=()=>{
    sendRequest("POST",'/login',{
      username:username,
      password:password,
  }).then((response)=>{
      // navigate(")
      console.log(response)
  }).catch((error)=>{
  console.log("login unsuccessful", error)

})}
  

    return ( 
    <><form>
      <div className="card">
        <div className="form">
          <h3>Login</h3>
          <div className="input-field">
          <input type="text" value={username}  placeholder="Enter your username"  onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="input-field">
          <input type="password" value={password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button  onClick={handleLogin} >Login</button>
        <p>Don't have an account? <span className="sign-up" onClick={() => {navigate("/register")}}>Sign up</span> </p>
        </div>
        <div className="image">
        <div className="overlay">
        <h3>Welcome Back!</h3>
        <p>let's organize your tasks</p>
      </div>
    </div>
  </div>
  </form>
    
    </>

    )
}


export default Login;