import React,{useContext, useEffect} from 'react'
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { contextApp } from '../ContextApi';

const LoginButton = () => {
    const {loginUser,setLoginUser,setCartCount,setCartData}=useContext(contextApp)
    const navigate=useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            setLoginUser(authUser);
            console.log(authUser)
            
          } else {
            setLoginUser(null);
          }
        });
      }, [setLoginUser]);
  return (
    <>
    {loginUser===null ? (
        <button
          style={{borderRadius: "20px"}}
          onClick={() => {
            auth
              .signInWithPopup(provider)
              .then(function (result) {
                setLoginUser(result.user);
              })
              .catch(function (err) {
                alert(err.message);
            });
        }}
      >
        Login
      </button>):(<>
        <button style={{borderRadius: "20px",paddingRight:"10px",fontSize:"15px"}} onClick={()=>auth.signOut().then(() => {
               navigate('/');
            setLoginUser(null); setCartCount(0); setCartData(null);
             })}>LogOut</button>
        </>)}
    </>
  )
}

export default LoginButton