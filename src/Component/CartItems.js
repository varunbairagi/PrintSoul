import React from "react";
import { addAmount } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { IncCount,DecCount } from "../store/cartSlice";
import "./css/cart.css";

const CartItems = ({ val,id }) => {
  const { img, price, title,count,size } = val;
  const dispatch=useDispatch();
  
  const Incremet=()=>{
    dispatch(IncCount(id))
    dispatch(addAmount(price))
  }
  const Decrement=()=>{
    if(count>1){
    dispatch(DecCount(id))
    dispatch(addAmount(-price))}
  }

  return (
    <>
      <div id="box">
        <img alt="img" src={img} />
        <h3>{title}</h3>
        <h4>Amount: Rs {price * count}</h4>
        <div>
        <i className="fas fa-minus ic"  onClick={Decrement}/>
        <span>{count}</span>
          <i className="fas fa-plus ic" onClick={Incremet} />
          <span style={{"padding":"10px"}}> Size</span>
          <select name="size" id="size" value={size}>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default CartItems;
