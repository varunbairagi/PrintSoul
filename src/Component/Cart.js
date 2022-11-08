import React, { useContext } from "react";
import "./css/cart.css";
import { Link } from "react-router-dom";
import { contextApp } from "../ContextApi";
import CartItems from "./CartItems";
const Cart = () => {

  const {cartData,Amount,CartCount}=useContext(contextApp)
  return (
    <>
      <div id="cartMainContainer">
        <h1> Checkout </h1>
        <h3 id="totalItem">Total Items: {CartCount}</h3>
        
        <div id="cartContainer">
          <div id="boxContainer">
          {cartData&&(
            cartData.map((i)=>
              <CartItems val={i}/>
            )
          )

          }
            
          </div>
          <div id="totalContainer">
            <div id="total">
              <h2>Total Amount</h2>
              <h4>Rs {Amount}</h4>
              <div id="button">
              <Link to="/placeorder">
              <button>
              Place Order
              </button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
