import React from 'react'
import "./css/orderPlaced.css"
const OrderPlace = () => {
  return (
    <>
    <div id="orderContainer">
        <div id="check"><i className="fas fa-check-circle" aria-hidden="true"></i></div>
        
        <div id="aboutCheck">
            <h1> Order Placed Successfully! </h1>
            <p> We've sent you an email with the Order details. </p>
        </div>
    </div>
    </>
  )
}

export default OrderPlace;