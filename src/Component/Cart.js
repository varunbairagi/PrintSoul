import React, { useContext } from "react";
import "./css/cart.css";
import { useNavigate } from "react-router-dom";
import { contextApp } from "../ContextApi";
import CartItems from "./CartItems";
import { useState } from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const {   loginUser ,pins} = useContext(contextApp);
  const cartData=useSelector(state=>state.cartData.cartData)
  const Amount=useSelector(state=>state.cartData.amount)
  const navigate = useNavigate();
  const [Pin,setPin]=useState(null);
  const check = () => {
    if (loginUser != null) {
      navigate("/placeorder");
    } else {
      alert("please Login");
    }
  };
  const handleChange=(e)=>{
    
    setPin(e.target.value);
    console.log(Pin)
  }
  const checkpin=()=>{
    console.log(Pin,pins)
    if(pins.find(function(p){return parseInt(p)===parseInt(Pin)})){
      alert("Available at this pincode");
    }
    else{
      alert("Not Available at this pincode")
    }
  }
  // console.log(cartData)
  return (
    <>
      <div id="cartMainContainer">
        <h1> Checkout </h1>
        <h3 id="totalItem">Total Items: {cartData.length}</h3>

        <div id="cartContainer">
          <div id="boxContainer">
            {cartData && cartData.map((val,i) => <CartItems val={val} key={i} id={i}/>)}
          </div>
          <div id="totalContainer">
            <input
              style={{ padding: "5px" }}
              type="text"
              placeholder="Enter Pincode"
              onChange={handleChange}
            />{" "}
            <button id="pin" onClick={checkpin}>
              Check
            </button>
            <div id="total">
              <h2>Total Amount</h2>
              <h4>Rs {Amount}</h4>
              <div id="button">
                <button onClick={check}>Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
