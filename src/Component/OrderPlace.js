import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./css/orderPlaced.css"
const OrderPlace = () => {
  const navigate=useNavigate();
  const goHome=()=>{
    navigate("/")
  }

  return (
    <>
    <div id="orderContainer">
        <div id="check"><i className="fas fa-check-circle" aria-hidden="true"></i></div>
        
        <div id="aboutCheck">
            <h1 style={{padding:"0"}}> Order Placed Successfully! </h1>
            <p> We've sent you an email with the Order details. </p>
        </div>
        <button onClick={goHome}>Back to Home</button>
    </div>
    </>
  )
}

export default OrderPlace;