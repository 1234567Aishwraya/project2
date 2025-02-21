import React from "react";
import './login.css'
import './register'
import { Link } from "react-router-dom";
const Login = () => {
    return(
        <div className ="main-container">
          <form action="">
            <h2 style={{textAlign:"center"}}>login</h2>
            <div className= "input-box">
                <input type="text" name="username" placeholder="Enter Your Name &#128100;" required/>
            </div>
            <div className= "input-box">
                <input type="email" name="email"  placeholder="Enter Your Mail &#128231;" required/>
            </div>
            <div className= "input-box">
                <input type="password" name="password"  placeholder="Enter Your Password &#128274;" required/>
            </div>
            <div className= "remember-box">
               <label><input type="checkbox" required/>remember me</label> 
             <Link  to="#"/> Forgot Password<Link/>
            </div>
           <button type="submit">login</button>
            <div className="register">
                <p>Don't have an account ? : <Link to="/register">register</Link></p>
            </div>
          </form>
        </div>
    )
} 

export default Login