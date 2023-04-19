import React,{useState} from 'react'
import "./css/UserLogin.css"
import ExtraLogin from './ExtraLogin'
// import { useState } from "react"
const UserLogin = () => {
    const [check, setCheck] = useState(true)

    const handleclick=()=>{check===true
    ?setCheck(false):setCheck(true)}
  return (
    <>
        <div className="cont">
        <div className="hide">
            <button onClick={handleclick}>
        <i className="fa fa-user" aria-hidden="true" />
            </button>
       
        </div>
        
            {
                check&&(
            <ExtraLogin/>
                )
            }
            
        
      

        </div>
    </>
  )
}

export default UserLogin