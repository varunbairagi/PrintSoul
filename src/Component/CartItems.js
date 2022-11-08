import React from 'react'
import "./css/cart.css";

const CartItems = ({val}) => {
   
    const {img,price,title}=val;
  return (
   <>
   <div id="box">
              <img alt="img" src={img} />
              <h3>{title} x 1</h3>
              <h4>Amount: Rs {price}</h4>
            </div>
   </>
  )
}

export default CartItems