import React from "react";
import './login.css'
const Register = () => {
    return(
        <div className ="main-container">
          <form action="">
            <h2 style={{textAlign:"center"}}>sign up</h2>
            <div className= "input-box">
                <input type="text" name="first name" placeholder="Enter Your FirstName" required/>
            </div>
            <div className= "input-box">
                <input type="text" name="lastname" placeholder="Enter Your LastName" required/>
            </div>
            <div className= "input-box">
                <input type="email" name="email"  placeholder="Enter Your Mail  &#128231;" required/>
            </div>
            <div className= "input-box">
                <input type="password" name="password"  placeholder="Enter Your Password " required/>
            </div>
            <div className= "input-box">
                <input type="text" name="number"  placeholder="Phone NUmber &#9742;" required/>
            </div>
          
           <button type="submit">Register</button>
           
          </form>
        </div>
    )
} 

export default Register