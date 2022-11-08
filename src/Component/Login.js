import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import "./css/login.css"

const Login = () => {
    const [id,setId]=useState({"user":"","password":""});
    const user="printsoul@gmail.com";
    const pass="printsoul";
    const navigate=useNavigate();

    const handleChange=(e)=>{
        let val=e.target.value;
        let na=e.target.name;
        setId((prev)=>{return({...prev,[na]:val})}
        )
    }
    const check=()=>{
        if((id.user===user)&&(id.password===pass)){
            navigate("/");
        }
    }
  return (
    <>
    <div class="wrapper login">
    <div class="container">
        <div class="col-left">
            <div class="login-text">
                <h2>Welcome!</h2>
                <p>Create your account.<br/>For Free!</p>
                <Link to="/login">Sign Up</Link>
            </div>
        </div>

        <div class="col-right">
            <div class="login-form">
                <h2>Login</h2>
                <form action="">
                    <p>
                        <label>Username/Email address<span>*</span></label>
                        <input type="text" name='user' onChange={handleChange} placeholder="Username or Email" required/>
                    </p>
                    <p>
                        <label>Password<span>*</span></label>
                        <input type="password" name='password' onChange={handleChange} placeholder="Password" required/>
                    </p>
                    <p>
                        <input type="submit" onClick={check} value="Sign In"/>
                    </p>
                    <p>
                <Link to="/login">Forgot password?</Link>

                    </p>

                </form>
            </div>
        </div>

    </div>
</div>
    </>
  )
}

export default Login