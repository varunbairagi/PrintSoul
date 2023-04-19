import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [loginUser,setLoginUser] = useState(null);
    const [id,setId]=useState({"user":"","password":""});
    const handleChange=(e)=>{
        let val=e.target.value;
        let na=e.target.name;
        setId((prev)=>{return({...prev,[na]:val})}
        )
    }
  return (

    <>

<div class="wrapper login">
    <div class="container">
        <div class="col-left">
            {/* <div class="login-text">
                <h2>Welcome!</h2>
                <p>Create your account.<br/>For Free!</p>
                {loginUser===null ? (
                <button
                  style={{borderRadius: "20px"}}
                 
              >
                Signup
              </button>):(<></>)}
            </div> */}
        </div>

        <div class="col-right">
            <div class="login-form">
                <h2>Login</h2>
                <form action="">
                <p>
                        <label>Your Name</label>
                        <input type="text" name='password' placeholder="Enter your name" required onChange={handleChange
                        }/>
                    </p>
                    <p>
                        <label>Email address<span>*</span></label>
                        <input type="text" name='user'  placeholder="Enter Email" required onChange={handleChange
                        }/>
                    </p>
                    <p>
                        <label>Password<span>*</span></label>
                        <input type="password" name='password' placeholder="Enter Password" required onChange={handleChange
                        }/>
                    </p>
                    <p>
                        <input type="submit"  value="Register "/>
                    </p>
                    <p>
                {/* <Link to="/login">Forgot password?</Link> */}

                    </p>

                </form>
            </div>
        </div>

    </div>
</div>
    </>
  )
}

export default SignUp